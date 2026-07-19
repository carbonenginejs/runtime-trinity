# Dropped classes — deliberately not ported, never exported

The classes in this folder are Carbon Blue classes that CarbonEngineJS has
DECIDED NOT TO PORT. They are kept here, outside `src/generated/`, so the
generator skips them permanently and no one spends another pass trying to
"finish" their stubs. Nothing in this folder is exported from any package
index, imported by any runtime code, or registered in the schema registry
(the `@type.define` decorators only run on import, and nothing imports these
files).

## Why these classes are dropped

`TriVector`, `TriMatrix`, `TriQuaternion`, `TriColor` (and their Blue
interfaces `ITriVector`, `ITriMatrix`, `ITriQuaternion`, `ITriColor`) were
investigated on 2026-07-17 during the trinity CPU-completion pass:

- They are Blue/Python SCRIPTING WRAPPERS (`IPythonMethods`, `Py*` thunks)
  around Carbon's native math, fully redundant with `@carbonenginejs/core-math`
  (gl-matrix based), which every runtime class already uses.
- Carbon's `Matrix` is row-major while core-math/gl-matrix is column-major;
  delegating these wrappers to core-math would silently transpose. The
  engine-wide rule is: the CPU graph stores matrices column-major and the
  transpose happens ONLY at shader-upload/pack time in the engine adapter
  (reference: ccpwgl `Tr2PerObjectData.PackMatrix`).
- They are serialized almost nowhere. The only known persisted use is a
  `TriMatrix` field on the deferred interior `Tr2InteriorPlaceable`; that
  field belongs with the graphics-phase interior work and does not justify
  porting the wrapper class.
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
