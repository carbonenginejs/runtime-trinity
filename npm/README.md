# @carbonenginejs/runtime-trinity

Faithful CarbonEngine Trinity/Eve scene-graph model (the serializable Trinity
Graph) and visual resource classes. Ports Tr2*/Eve* 1:1 from CarbonEngine.
GPU-free.

Part of the CarbonEngineJS runtime/engine tier. GPU-free JavaScript source,
decorated for CarbonEngineJS schema metadata.

## Status

Active Carbon-faithful ports cover generated schema classes plus handwritten
controller, curve, Eve, particle, shader-model, and utility behavior. Generated
files are refreshed from the installed `format-carbon` metadata with:

```sh
npm run generate
```

This runtime owns serializable CPU-side state and behavior. Geometry, texture,
and effect resources are supplied by resource runtimes; WebGPU/WebGL device,
upload, binding, and destruction lifecycles belong to renderer runtimes.

## WebGPU Main semantic extraction

Two GPU-free helpers expose the proven runtime values needed by the first
bounded Eve space-object Main binding profile:

- `extractTr2EffectConstantValues(effect, reflectedConstants)` reads only the
  requested reflected float constants across `parameters` and
  `constParameters`. Dynamic parameters use `CopyValueToEffect`, preserving
  rerouted values and sRGB-to-linear conversion. Missing, duplicate, malformed,
  array, resource-like, or unsupported values fail closed.
- `createEveSpaceObjectMainPerObjectValues({ object, shared, shipData,
  vsOverrides, psOverrides })` maps `EveSpaceObject2` transform aliases,
  trustworthy clip values, `EveSpacePerObjectData` fields/SH alias, and custom
  masks into frozen plain `perObjectVS`/`perObjectPS` values.

The per-object precedence is object-derived values, then explicitly supplied
shared data, then VS/PS overrides. `shipData` is always required because no
source-proven builder currently exists. Ellipsoid `w`, screen size, morph/bone
offsets, impact fields, and similar optional values are copied only when the
shared data or overrides supply them; they are never guessed.

There is deliberately no per-frame scene builder yet. Previous matrices,
shadow state, projection conventions, gamma/mip policy, frame/jitter values,
resolution, and other renderer-owned state are not completely represented by
the Trinity scene graph. The active renderer must provide the complete
`perFrameVS` and `perFramePS` semantic objects before an engine serializer is
called.

Baseline checks:

```sh
npm run generate
npm run build:npm
npm test
```

## Turrets and missiles

The maintained Eve combat-effect graph now includes Carbon's portable turret,
stretch, and MIRV missile behavior:

- `EveMobile` maps authored `locator_*` transforms (and optional animated bone
  transforms) into `EveTurretSet` instances. Turret sets own state changes,
  paired turret/damage-locator selection, looping-fire rechecks, tracking fades,
  muzzle transforms, target updates, firing effects, and ambient/controller
  forwarding.
- `EveSpaceObject2` supplies the targetable damage-locator, miss-position,
  radius, impact-material, and shield-ellipsoid collision surface consumed by
  both turrets and missiles.
- `EveTransform`, `EveMissile`, and `EveMissileWarhead` own CPU transforms,
  launch/eject/tracking states, Carbon fixed-seed Perlin path offsets, target
  switching, impacts, explosion callbacks, particles, visibility, and dynamic
  MIRV bounds. `EveMissileWarheadPerObjectData` publishes the portable matrix
  and missile-size record.

Native animation-pose realization, geometry/resource loading, quad submission,
draw batches, device buffers, and shader uploads remain renderer/runtime-engine
responsibilities. Trinity exposes duck-typed pose, emitter, renderable, and
constant-data seams without importing a browser graphics API.

## Graph ownership and GPU realization

Carbon class ownership follows graph fidelity, not graphics terminology.
`TriDevice`, `TriRenderJob`, render steps, render contexts, targets, buffers,
effects, shaders and presentation records remain canonical Trinity classes.
They describe Carbon object graphs and must be registerable, hydratable,
inspectable and serializable without a canvas or GPU backend.

Those classes do not own live GPU objects. WebGPU and WebGL engines separately
own resource realization, context/device loss, synchronization, presentation,
uploads, pipelines/programs, bindings, command execution and destruction.
Backend objects must stay outside persisted schema fields, normally in
engine-owned associations.

We deliberately do not insert a `runtime-device` package between Trinity and
the engines. WebGPU and WebGL have materially different lifecycles; a shared
device lifecycle would either leak backend concepts or become a misleading
lowest-common-denominator abstraction. Applications or `runtime-core` may
select and inject an engine directly. A separate shared contract should only be
introduced after two real engines demonstrate a stable common seam that is
larger than structural capability checks.

This keeps the package graph small and avoids constructor duplication,
cross-package enum ownership, import-order registration, partial inheritance
families, and generator exclusions for classes that are still graph data.

## Render-job execution contract

`TriRenderJob` and `Tr2RenderJobs` own Carbon's backend-neutral execution
semantics: ordered step snapshots, `RJ_IN_PROGRESS` cursor persistence, nested
job result mapping, recurring/once/chained scheduling, and target/depth stack
validation and unwind. `TriRenderJob` exposes its status vocabulary as class
statics; `TriRenderStep` does the same for step results.

`Run(realTime, simTime, executor)` accepts a duck-typed executor/context. Trinity
stores no generic RHI object and defines no `CjsRenderGraphExecutor` helper.
WebGL may execute a step immediately; WebGPU may plan pass boundaries and encode
commands, but both must preserve the observable order and yield boundary.
Nested jobs receive the same executor identity.

The default `Tr2RenderContext` is only a GPU-free intent stack and diagnostic
surface. Live contexts, targets, encoders, command buffers, handles,
presentation, and device-loss state remain engine-owned. JS execution
intentionally hardens Carbon's exception and leaked-stack paths with
deterministic `finally` cleanup and diagnostics.

Maintained target/depth, clear, viewport, view, projection, resolve, copy,
mipmap and presentation steps normalize Carbon arguments into this intent
surface. They do not import WebGL/WebGPU APIs or decide pass boundaries.

## Post-process graph contract

`Tr2PostProcess2` and `Tr2PostProcessAttributes` are device-free graph classes.
Trinity owns effect activation and quality gates, LUT ordering, priority/intensity
volume blending, and the rebuilding of authored effect records. The 56 Carbon
post-process attributes are exposed as their exact enabled/value pairs; macro
placeholders are not part of the JavaScript contract.

Live post-processing remains backend work. WebGL and WebGPU executors must
independently realize temporary and persistent textures, exposure buffers,
TAA/upscaler history, compute or fragment alternatives, fullscreen passes,
readback, and loss recovery. They must preserve Carbon's observable pass order,
but Trinity does not prescribe a shared RHI or serialize those internal passes
as `TriRenderStep` objects.

## Provenance

CarbonEngine and Fenris Creations (CCP Games) are named for interoperability and
provenance context. This package's runtime code is CarbonEngineJS original work
that ports or adapts CarbonEngine class structure and behavior, verified against
the CarbonEngine C++ source. Not affiliated with or endorsed by CCP Games.
