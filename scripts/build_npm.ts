// Build an npm-consumable package (ESM .js + .d.ts) from the Deno TS source.
//
// We author runtime-trinity in Deno (build-free decorators + TS), but publish a
// compiled package so Node, bundlers, and Deno (via npm:) can all consume it.
// Run: deno run -A scripts/build_npm.ts
//
// Deno's `deno check` task is the type-check authority for the source; dnt only
// emits here. typeCheck/npm-install are skipped so the build runs before the
// @carbonenginejs/* dependencies are published to npm.
import { build, emptyDir } from "jsr:@deno/dnt@^0.42.1";

await emptyDir("./npm");

// core-math is a real published npm dependency (subpath exports), not bundled.
// Map each resolved local path the import map points at back to the npm subpath.
const coreMath = (subPath: string) => ({
  name: "@carbonenginejs/core-math",
  version: "^0.1.1",
  subPath,
});

await build({
  entryPoints: ["./src/index.ts"],
  outDir: "./npm",
  shims: {},
  test: false,
  typeCheck: false,
  skipNpmInstall: true,
  scriptModule: false,
  declaration: "separate",
  mappings: {
    "../core-math/src/num.js": coreMath("num"),
    "../core-math/src/quat.js": coreMath("quat"),
    "../core-math/src/vec2.js": coreMath("vec2"),
    "../core-math/src/vec3.js": coreMath("vec3"),
    "../core-math/src/vec4.js": coreMath("vec4"),
    "../core-types/src/schema/index.js": {
      name: "@carbonenginejs/core-types",
      version: "^0.4.1",
      subPath: "schema",
    },
  },
  importMap: "./deno.json",
  compilerOptions: {
    target: "ES2022",
    lib: ["ES2022"],
  },
  package: {
    name: "@carbonenginejs/runtime-trinity",
    version: "0.1.0",
    description:
      "CarbonEngineJS Trinity render-layer classes (curves, and the Tr2* port).",
    license: "MIT",
    type: "module",
    sideEffects: false,
    engines: { node: ">=18" },
    dependencies: {
      "@carbonenginejs/core-math": "^0.1.1",
      "@carbonenginejs/core-types": "^0.4.1",
    },
    repository: {
      type: "git",
      url: "git+https://github.com/carbonenginejs/runtime-trinity.git",
    },
    publishConfig: { access: "public" },
  },
  async postBuild() {
    try {
      await Deno.copyFile("README.md", "npm/README.md");
    } catch { /* optional */ }
    try {
      await Deno.copyFile("NOTICE", "npm/NOTICE");
    } catch { /* optional */ }
  },
});

console.log("dnt build complete -> ./npm");
