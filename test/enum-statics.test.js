// Enum drift check: every @schema.enum("X") field must resolve its member map
// through the owning class's PascalCase static `Constructor.X` (own or
// inherited). Known deferred gaps are allowlisted below; growing that list is
// a regression, shrinking it should update the list.
import test from "node:test";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import * as trinity from "../npm/dist/index.js";

// Deferred: source-only enums not yet stamped (device/window/GPU tail and two
// format-carbon scoped-enum projection quirks). See the 2026-07-16 enum brief.
const KNOWN_GAPS = new Set([
  "EveChildFogVolume.priority -> FroxelFogSettings",
  "EveChildLightingOverride.priority -> OverrideInfo",
  "EveTurretSet.impactBehaviour -> ImpactBehaviour",
  "EveTurretTarget.behaviour -> ImpactBehaviour",
  "Tr2CurveScalarDefinition.extrapolationBefore -> Tr2CurveExtrapolation",
  "Tr2CurveScalarDefinition.extrapolationAfter -> Tr2CurveExtrapolation",
  "Tr2DepthStencil.format -> DepthStencilFormat",
  "Tr2EffectResource.type -> Type",
  "Tr2EffectStateManager.renderingMode -> Tr2EffectStateManager",
  "Tr2GpuBuffer.format -> PixelFormat",
  "Tr2MainWindow.imeState_MacOS -> Tr2ImeState_MacOS",
  "Tr2MainWindowState.presentInterval -> PresentInterval",
  "Tr2MainWindowState.showState -> Tr2WindowShowState",
  "Tr2MainWindowState.windowMode -> Tr2WindowMode",
  "Tr2RenderTarget.format -> PixelFormat",
  "Tr2RenderTarget.type -> TextureType",
  "Tr2TextureArray.cpuUsage -> Tr2CpuUsage",
  "Tr2TextureArray.gpuUsage -> Tr2GpuUsage",
  "TriColorSequencer.operator -> TRIOPERATOR",
  "TriDevice.presentationInterval -> PresentInterval",
  "TriDevice.swapEffect -> SwapEffect",
  "TriDevice.upscalingSetting -> UpscalingSetting",
  "TriDevice.upscalingTechnique -> UpscalingTechnique",
  "TriStepSetRenderState.state -> RenderState",
  "TriTransformParameter.transformBase -> TRITRANSFORMBASE",
  "TriVectorSequencer.operator -> TRIOPERATOR"
]);

test("every @schema.enum field resolves a class-static member map or is a known gap", () =>
{
  const seen = new Set();
  const gaps = [];
  let enumFields = 0;
  for (const name of Object.keys(trinity))
  {
    const Ctor = trinity[name];
    if (typeof Ctor !== "function" || !Ctor.prototype || seen.has(Ctor)) continue;
    seen.add(Ctor);
    let instance = null;
    try
    {
      instance = new Ctor();
    }
    catch
    {
      continue;
    }
    void instance;
    const schema = CjsSchema.getSchema(Ctor);
    for (const field of schema?.fields ?? [])
    {
      const enumType = field?.enum?.enumType;
      if (!enumType) continue;
      enumFields++;
      const members = Ctor[enumType];
      if (!members || typeof members !== "object")
      {
        gaps.push(`${name}.${field.name} -> ${enumType}`);
      }
    }
  }

  const unexpected = gaps.filter(gap => !KNOWN_GAPS.has(gap));
  const resolvedFromAllowlist = [...KNOWN_GAPS].filter(gap => !gaps.includes(gap));
  if (unexpected.length)
  {
    throw new Error(`new enum static gaps:\n${unexpected.join("\n")}`);
  }
  if (resolvedFromAllowlist.length)
  {
    throw new Error(`allowlisted gaps now resolve; remove them:\n${resolvedFromAllowlist.join("\n")}`);
  }
  if (enumFields < 200)
  {
    throw new Error(`enum field sweep looks broken: only ${enumFields} enum fields seen`);
  }
});
