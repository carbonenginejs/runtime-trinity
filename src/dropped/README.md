# Dropped classes — deliberately not ported, never exported

The files in this folder are Carbon Blue classes or scanner-emitted native C++
shapes that CarbonEngineJS has DECIDED NOT TO PORT as runtime models. They are
kept here, outside `src/generated/`, so the
generator skips them permanently and no one spends another pass trying to
"finish" their stubs. Nothing in this folder is exported from any package
index, imported by any runtime code, or registered in the schema registry
(the `@type.define` decorators only run on import, and nothing imports these
files).

## Why these classes are dropped

Every quarantined file has an explicit disposition:

| File | Why it is not a runtime model | Replacement |
|---|---|---|
| `ITriColor.js` | Pure interface for the retired Blue/Python color wrapper; it has no independent graph state. | `@carbonenginejs/core-math/vec4` and schema `color` fields. |
| `ITriDevice.js` | Pure device interface; the emitted `adapter` member was nested creation data, not interface state. | Maintained device-free `TriDevice` graph plus injected engine realization. |
| `ITriEffectTextureParameter.js` | Pure interface; the emitted `UV_SET_MAX_COUNT` is a static constant, not instance state. | Concrete maintained texture-parameter graph classes. |
| `ITriMatrix.js` | Pure interface for the Blue/Python matrix wrapper; it has no independent graph state. | `@carbonenginejs/core-math/mat4`; the concrete `TriMatrix` quarantine is owned by runtime-character. |
| `ITriQuaternion.js` | Pure interface for the retired Blue/Python quaternion wrapper. | `@carbonenginejs/core-math/quat` and schema `quat` fields. |
| `ITriVector.js` | Pure interface for the retired Blue/Python vector wrapper. | `@carbonenginejs/core-math/vec3` and schema vector fields. |
| `Point.js` | Native integer helper record, not a persisted Blue object. | Plain `{ x, y }` records at adapter boundaries. |
| `Tr2CurveBase.js` | Generic C++ template whose emitted `KeyValue`/`Key` fields are unresolved template parameters. | Maintained concrete curve classes own concrete storage and behavior. |
| `Tr2CurveRasterizeDestination.js` | Native method destination record, not a Blue graph class. | Plain destination records consumed by `Tr2CurveScalar.Rasterize`. |
| `Tr2CurveScalarDefinition.js` | Native method definition record, not a Blue graph class. | Plain definition records consumed by `Tr2CurveScalar.GetDefinition`/`SetDefinition`. |
| `Tr2DebugColor.js` | Native debug-renderer value struct, not persisted graph state. | Plain engine/debug-adapter record when a renderer needs it. |
| `Tr2DebugObjectReference.js` | Native debug-renderer reference struct, not persisted graph state. | Plain engine/debug-adapter record when a renderer needs it. |
| `Tr2Key.js` | Generic C++ key template with unresolved value type `T`. | Concrete maintained key classes such as `Tr2CurveScalarKey`. |
| `Tr2Rect.js` | Native integer rectangle record, not a persisted Blue object. | Plain `{ left, top, right, bottom }` records at adapter boundaries. |
| `TriColor.js` | Blue/Python scripting wrapper around native color math. | `@carbonenginejs/core-math/vec4`. |
| `TriPerlinNoise.js` | Real native seeded-noise utility, but not a Blue/persisted model; the scanner emitted only private constants and omitted its gradient state and behavior. | Source-backed deterministic `createPerlinNoise1D` and `carbonPerlin1D` in `@carbonenginejs/core-math/noise`; legacy ccpwgl `perlin1`/`perlin1D` remain separate. |
| `TriQuaternion.js` | Blue/Python scripting wrapper around native quaternion math. | `@carbonenginejs/core-math/quat`. |
| `TriVector.js` | Blue/Python scripting wrapper around native vector math. | `@carbonenginejs/core-math/vec3`. |

The 2026-07-19 generated-source placement audit added four groups that the
scanner had incorrectly promoted to constructible `CjsModel` classes:

- Pure interfaces `ITriDevice` and `ITriEffectTextureParameter`. Their emitted
  fields came from a nested declaration or a static constant, not interface
  instance state.
- Generic C++ templates `Tr2CurveBase` and `Tr2Key`. Runtime curve classes own
  their concrete storage and behavior; these template shells are not Blue
  graph objects.
- Native method records `Tr2CurveScalarDefinition` and
  `Tr2CurveRasterizeDestination`. `Tr2CurveScalar` consumes their shapes as
  ordinary JavaScript records rather than registered constructors.
- Native utility/debug records `Point`, `Tr2Rect`, `Tr2DebugColor`,
  `Tr2DebugObjectReference`, and `TriPerlinNoise`. They are not persisted Blue
  model classes and their generated static/member shapes are misleading.

`ITr2InteriorLight` is deliberately not in this list: its type-only Carbon
interface contract is owned by `runtime-character/src/trinity/interior`.

The browser platform/input classes are also deliberately not dropped.
`Tr2DisplayMode`, `Tr2PlatformInfo`, `Tr2VideoAdapter`, `Tr2VideoAdapters`, and
`Tr2VideoDriver` are maintained by `runtime-core`, which reports the
capabilities and privacy-filtered adapter/display information actually exposed
by a browser. `Tr2MainWindow`, `Tr2MainWindowState`, `Tr2MouseCursor`, and
`UIScancode` are maintained by `runtime-input`, where native handles and
message pumps are adapted to DOM input, CSS cursors, Pointer Lock, Fullscreen,
and injected browser host objects.

`TriVector`, `TriQuaternion`, `TriColor` (and their Blue interfaces
`ITriVector`, `ITriMatrix`, `ITriQuaternion`, `ITriColor`) were
investigated on 2026-07-17 during the trinity CPU-completion pass:

- They are Blue/Python SCRIPTING WRAPPERS (`IPythonMethods`, `Py*` thunks)
  around Carbon's native math, fully redundant with `@carbonenginejs/core-math`
  (gl-matrix based), which every runtime class already uses.
- Carbon's `Matrix` is row-major while core-math/gl-matrix is column-major;
  delegating these wrappers to core-math would silently transpose. The
  engine-wide rule is: the CPU graph stores matrices column-major and the
  transpose happens ONLY at shader-upload/pack time in the engine adapter
  (reference: ccpwgl `Tr2PerObjectData.PackMatrix`).
- The concrete `TriMatrix` wrapper is referenced only by runtime-character's
  interior/skinned-object schemas. Its quarantine and full disposition moved
  to `runtime-character/src/dropped`; only the unused `ITriMatrix` interface
  artifact remains here.
- The full TQ 3430261 `data.black` corpus (2,551 hulls) builds and hydrates
  with zero reports without any of these classes registered.

## Mechanics

- The regenerate script (`scripts/regenerate_generated.js`) treats any
  non-`Cjs` class basename found under `src/` outside `src/generated/` as a
  hand symbol and skips emitting it. Files in this folder therefore keep the
  generator from recreating the stubs. `src/generated/summary.json` lists
  them under `skipped` with reason "hand-maintained source exists" — for
  these files read that as "deliberately quarantined here".
- The files are kept verbatim as the generator last emitted them (provenance
  headers, Blue method mapping breadcrumbs, throwing `@impl.notImplemented`
  stubs) so that IF a future decision revives one, it starts from the exact
  generated surface: delete the file here, remove it from this README, and
  rerun `npm run generate`.

## Do not

- Do not export anything from this folder or add an `index.js`.
- Do not implement the stubs here. If you think one of these classes is
  needed, that is a scope decision for the requester first; the rationale
  above (from the 2026-07-17 trinity CPU-completion investigation) is the
  standing record of why they were dropped.
