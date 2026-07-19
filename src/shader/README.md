# Shader Graph Notes

This folder owns the runtime-trinity shader graph and reflection model. It is
intentionally GPU-free.

CarbonEngine's shader classes mix several responsibilities that we keep split in
CarbonEngineJS:

- shader graph data, reflection records, parameter lists, options, resources, and
  annotations
- resource lookup and lifetime wiring
- renderer/device binding for constants, textures, UAVs, buffers, samplers, and
  shader programs

For now this package only implements the first category. The classes can read,
hold, query, populate, prune, and update graph state, but they must not bind
anything to WebGL, WebGPU, or a Carbon-style render context.

## Naming

If a class is not actually a Carbon class, it should use a `Cjs` prefix. Shared
helpers that are not classes should live in utility modules with lower-camel
names, for example `utils/shaderParameters.js`.

`CjsVariableStore` follows this rule as the shader-local helper store. Since
2026-07-19 a maintained Carbon port of `Tr2VariableStore` (with a minimal
`TriVariable`) also exists in `src/trinityCore/`, implementing the reflected
Blue class and its global-rooted store graph. The two are not yet unified:
shader parameters still consume `CjsVariableStore`, and moving
`TriVariableParameter` onto the Carbon store's `GlobalStore()` (per the kb §8
cleanup gate) is an open owner decision.

## Ownership Rationale

The shader graph belongs in runtime-trinity because Trinity objects cannot be
structurally complete without it. Effects, material parameters, texture slots,
constant data, per-object data, shader options, annotations, technique/pass
reflection, and "used by current effect" bookkeeping are part of the Trinity
scene/object graph.

runtime-resource should own loaded resource payloads and resource lifetime:
`Tr2EffectRes`, `TriTextureRes`, `TriGeometryRes`, image/texture/geometry/effect
payloads, async loading, cache state, path resolution, and notify-target
integration.

Engine packages should own backend realization and binding: WebGL/WebGPU shader
modules, pipelines, bind groups/resource sets, texture and buffer realization,
constant-buffer uploads, sampler binding, draw calls, and dispatch calls.

The confusing names come from Carbon's mixed responsibility model. In this
package, `Tr2EffectResource` is a shader reflection record and stays with the
Trinity graph; `Tr2EffectRes` is a loadable resource and should stay with
runtime-resource.

## Variable Store

Carbon uses `Tr2VariableStorePtr` as the shared shader-variable store. Effects,
interior objects, particles, scenes, and render steps can point at the same
store, and `TriVariableParameter` resolves its `variableName` to a `TriVariable`
inside that store. Those variables are deliberately global/shared shader
parameters: environment maps, scene maps, projection values, and other values
that many effects may read without each effect owning a duplicate parameter.

ccpwgl implemented this as the process-level `tw2` singleton. Effects call
`tw2.HasVariable`, `tw2.GetVariable`, and `tw2.CreateVariable`; a
`Tw2VariableParameter` also resolves through `tw2.GetVariable(variableName)`.
That is ergonomic, but it makes the global store ambient module state. It also
mixes graph ownership, resource convenience, and render binding habits in one
global service.

runtime-trinity keeps the global/shared behavior but makes the store explicit.
`CjsVariableStore.GetGlobalStore()` provides the default shared store, and
`Tr2Effect.variableStore` points at that store unless a caller assigns another
one. `TriVariableParameter` resolves through its effect's `variableStore`, not an
imported singleton. This keeps the Carbon pointer shape (`Tr2VariableStorePtr`)
while avoiding ccpwgl's hard global dependency. Engines and higher runtime
contexts can replace the active store for a scene/session, but shader graph code
still sees a simple shared variable lookup.

`CjsVariableStore` is graph-only. It stores named variable objects or wraps plain
values in `CjsStoredVariable`; it does not bind constants, textures, UAVs, or
buffers to a backend.

```text
CarbonEngine
============

                 Tr2Effect
                    |
        +-----------+------------+
        |                        |
   shader graph              resource loading
 parameters/options          Tr2EffectRes
 passes/techniques              |
 reflection data                |
        |                       v
        +----------------> compiled shader
        |                       |
        v                       v
   Tr2Material ---------> renderer/resource sets
        |                 constants/textures/UAVs
        v                 samplers/shader programs
   draw / dispatch


CarbonEngineJS
==============

 runtime-trinity
 ---------------
        |
        v
   Trinity scene/object graph
        |
        +--> Tr2Effect / Tr2Material / Tr2Shader
        |       |
        |       +--> parameters/options/resources
        |       +--> techniques/passes/reflection
        |       +--> annotations/usage/dirty flags
        |
        `--> graph only: no GPU binding


 runtime-resource
 ----------------
        |
        +--> Tr2EffectRes
        +--> TriTextureRes
        +--> TriGeometryRes
        +--> resource cache / async loading / paths


 engine-webgpu / engine-webgl
 ----------------------------
        |
        +--> shader modules / pipelines
        +--> bind groups / resource sets
        +--> texture + buffer realization
        +--> constant uploads / samplers
        +--> draw / dispatch
```

## Intentional Divergences

`Tr2Effect`

Carbon loads `Tr2EffectRes`, gets a platform shader from the resource, maps pass
parameters into resource sets, builds sampler overrides, and drives draw-time
render callbacks.

runtime-trinity only tracks the effect path, options, parameter/resource lists,
constant parameters, sampler override records, and shader reflection links. It can
populate/prune parameters from an already-supplied `Tr2Shader`, but resource
loading and shader realization must be supplied by a later runtime-resource or
engine integration.

`Tr2Material`

Carbon owns resource-set descriptions, constant buffers, bindless texture sets,
and pass application against a render context.

runtime-trinity keeps dirty flags and graph-side pass/library containers only.
`InvalidateResourceSets`, `ResourceChanged`, and `MarkConstantBuffersDirty` mark
state so higher layers can observe it later; they do not create, clear, or bind
backend resource sets.

`Tr2Shader`

Carbon wraps compiled shader state and applies shader programs/render states via
`Tr2EffectStateManager`.

runtime-trinity treats `Tr2Shader` as reflection data: techniques, passes, stage
inputs, constants, resources, UAVs, annotations, pass counts, shader type masks,
and sort-value calculation. Program application remains an engine concern.

`Tr2GeometryBufferParameter`, `Tr2TextureAnimationParameter`, `TriVariableParameter`

Carbon can copy these into resource-set descriptions through `SetSrv`/`SetUav`
or delegate to `TriVariable`.

runtime-trinity records providers and usage, but `CopyToResourceSet` and
`ApplyUav` return `false`. They are explicit graph-only stubs until an engine
adapter owns resource binding.

`Tr2ShaderBuffer`

Carbon stores a byte buffer and applies it to a render context constant buffer.

runtime-trinity stores a copied byte buffer and size. `ApplyBuffer` returns
`false`; uploading/binding the data belongs in the engine layer.

`TriTransformParameter`

Carbon computes the transform and uses renderer camera/object state for non-fixed
transform bases.

runtime-trinity computes the local transform and transposes it for shader-style
constant layout. Camera/object-base behavior needs a later engine-facing context
that can provide inverse view/object transforms without importing a renderer.

## Later Work

- Revisit only the loaded-resource edge after runtime-resource is cleaned up;
  keep graph/reflection classes in runtime-trinity unless they become resource
  payload implementations.
- Define an engine adapter contract for shader binding:
  constants, textures, UAVs, buffers, samplers, resource sets, and shader programs.
- Keep runtime-trinity as the graph/reflection owner even if backend adapters live
  elsewhere.
- Replace first-pass local helpers with class statics where they are specific to
  `Tr2Effect` or `Tr2Shader`.
- Prefer async functions at future loading boundaries. Current graph/reflection
  traversal is synchronous because it only walks already-loaded data.
- Preserve the test boundary: `src/shader/**/*.js` must not call backend binding
  APIs such as `SetSrv`, `SetUav`, `SetShaderBuffer`, `SetConstants`,
  `ApplyShaderProgram`, or `SetResourceSet`.
