import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";


const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const npmRoot = path.join(root, "npm");

test("published package resolves root, family, and deep generated exports", () =>
{
  const source = `
    const packageRoot = await import("@carbonenginejs/runtime-trinity");
    const eve = await import("@carbonenginejs/runtime-trinity/generated/eve");
    const child = await import("@carbonenginejs/runtime-trinity/generated/eve/child/EveChildLineSet.js");
    const renderStep = await import("@carbonenginejs/runtime-trinity/generated/renderJob/TriStepFilterVisibilityResults.js");

    if (!packageRoot.Tr2Effect || !eve.EveChildRef || !child.EveChildLineSet || !renderStep.TriStepFilterVisibilityResults)
    {
      throw new Error("Published package exports did not expose the expected classes");
    }
  `;

  const result = spawnSync(process.execPath, [
    "--input-type=module",
    "--eval",
    source
  ], {
    cwd: npmRoot,
    encoding: "utf8"
  });

  assert.equal(result.status, 0, [
    result.stdout,
    result.stderr
  ].filter(Boolean).join("\n"));
});
