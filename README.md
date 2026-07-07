# @carbonenginejs/runtime-trinity

Faithful CarbonEngine Trinity/Eve scene-graph model (the serializable Trinity
Graph) and visual resource classes. Ports Tr2*/Eve* 1:1 from CarbonEngine.
ccpwgl is optional reference material only. GPU-free.

Part of the CarbonEngineJS runtime/engine tier (Deno + TypeScript,
WebGPU-first). See carbonenginejs.md for the CarbonEngine source files this
package is a candidate to port.

## Status

Early implementation. The first Carbon-faithful curve primitives are available
under `src/curves`.

Baseline checks:

```sh
deno task fmt
deno task lint
deno task check
deno task test
```

## Provenance

CarbonEngine and Fenris Creations (CCP Games) are named for interoperability and
provenance context. This package's runtime code is CarbonEngineJS original work
that ports or adapts CarbonEngine class structure and behavior, verified against
the CarbonEngine C++ source. ccpwgl may be consulted as a behavioral reference
but is not model authority. Not affiliated with or endorsed by CCP Games.
