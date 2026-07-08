import {
  Tr2FloatParameter,
  Tr2Matrix4Parameter,
  Tr2RuntimeTextureParameter,
  Tr2Vector2Parameter,
  Tr2Vector3Parameter,
  Tr2Vector4Parameter,
  TriFloatArrayParameter,
  TriTextureParameter,
  TriVector4,
} from "../src/index.ts";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import type { Mat4, Vec2, Vec4 } from "@carbonenginejs/core-math/types";
import { vec2 } from "@carbonenginejs/core-math/vec2";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsSchema } from "@carbonenginejs/core-types/schema";

function assert(
  condition: unknown,
  message = "assertion failed",
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function assertEquals<T>(actual: T, expected: T, message?: string): void {
  if (actual !== expected) {
    throw new Error(
      message || `expected ${String(expected)}, got ${String(actual)}`,
    );
  }
}

function assertAlmostEquals(
  actual: number,
  expected: number,
  epsilon = 1e-6,
): void {
  if (Math.abs(actual - expected) > epsilon) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

type ShaderConstructor = (new () => object) & { readonly name: string };
type ImplStatus = "adapted" | "implemented" | "noop";

Deno.test("promoted shader parameters expose source-backed Carbon metadata", () => {
  const constructors: ShaderConstructor[] = [
    Tr2FloatParameter,
    Tr2Vector2Parameter,
    Tr2Vector3Parameter,
    Tr2Vector4Parameter,
    Tr2Matrix4Parameter,
    Tr2RuntimeTextureParameter,
    TriTextureParameter,
    TriVector4,
    TriFloatArrayParameter,
  ];

  for (const ctor of constructors) {
    new ctor();
  }

  assertEquals(CjsSchema.getClass("Tr2FloatParameter"), Tr2FloatParameter);
  assertEquals(
    CjsSchema.getClass("Tr2RuntimeTextureParameter"),
    Tr2RuntimeTextureParameter,
  );
  assertEquals(CjsSchema.getClass("TriTextureParameter"), TriTextureParameter);
  assertEquals(CjsSchema.getClass("TriVector4"), TriVector4);
  assertEquals(
    CjsSchema.getClass("TriFloatArrayParameter"),
    TriFloatArrayParameter,
  );
  assertEquals(CjsSchema.getClass("CjsShaderParameter"), null);

  assertEquals(
    CjsSchema.getField(Tr2FloatParameter, "value")?.type.kind,
    "float32",
  );
  assertEquals(
    CjsSchema.getField(Tr2Vector4Parameter, "value")?.type.kind,
    "vec4",
  );
  assertEquals(
    CjsSchema.getField(Tr2Matrix4Parameter, "value")?.type.kind,
    "mat4",
  );
  assertEquals(
    CjsSchema.getField(TriTextureParameter, "resourcePath")?.type.kind,
    "path",
  );
  assertEquals(
    CjsSchema.getField(Tr2RuntimeTextureParameter, "texture")?.type.className,
    "ITr2TextureProvider",
  );
  assertEquals(CjsSchema.getField(TriVector4, "data")?.type.kind, "vec4");
  assertEquals(
    CjsSchema.getField(TriFloatArrayParameter, "value")?.type.kind,
    "list",
  );

  const sourceBackedMethods: Array<[ShaderConstructor, string, ImplStatus]> = [
    [Tr2FloatParameter, "GetParameterName", "implemented"],
    [Tr2FloatParameter, "GetValue", "implemented"],
    [Tr2FloatParameter, "SetValue", "implemented"],
    [Tr2FloatParameter, "IsRerouted", "implemented"],
    [Tr2FloatParameter, "SetDestination", "adapted"],
    [Tr2FloatParameter, "GetDestination", "adapted"],
    [Tr2FloatParameter, "RegisterBinding", "adapted"],
    [Tr2FloatParameter, "UnregisterBinding", "adapted"],
    [Tr2FloatParameter, "RebuildEffectHandles", "adapted"],
    [Tr2FloatParameter, "Initialize", "implemented"],
    [Tr2FloatParameter, "CopyValueToEffect", "adapted"],
    [Tr2Vector2Parameter, "GetValue", "implemented"],
    [Tr2Vector3Parameter, "GetValue", "implemented"],
    [Tr2Vector4Parameter, "RebuildEffectHandles", "adapted"],
    [Tr2Matrix4Parameter, "SetDestination", "adapted"],
    [Tr2RuntimeTextureParameter, "__init__", "adapted"],
    [Tr2RuntimeTextureParameter, "Create", "implemented"],
    [Tr2RuntimeTextureParameter, "GetParameterName", "implemented"],
    [Tr2RuntimeTextureParameter, "OnModified", "adapted"],
    [Tr2RuntimeTextureParameter, "RebuildEffectHandles", "adapted"],
    [Tr2RuntimeTextureParameter, "SetTextureProvider", "implemented"],
    [Tr2RuntimeTextureParameter, "GetTextureProvider", "implemented"],
    [Tr2RuntimeTextureParameter, "SetUavMipLevel", "implemented"],
    [TriTextureParameter, "GetResourcePath", "adapted"],
    [TriTextureParameter, "SetResource", "adapted"],
    [TriTextureParameter, "SupportsDirtyNotification", "implemented"],
    [TriTextureParameter, "UsedWithScreenSize", "adapted"],
    [TriTextureParameter, "OnTextureChanged", "adapted"],
    [TriFloatArrayParameter, "GetParameterName", "implemented"],
    [TriFloatArrayParameter, "Initialize", "implemented"],
    [TriFloatArrayParameter, "OnModified", "adapted"],
    [TriFloatArrayParameter, "RebuildEffectHandles", "adapted"],
    [TriFloatArrayParameter, "CopyValueToEffect", "adapted"],
  ];

  for (const [ctor, methodName, status] of sourceBackedMethods) {
    assertCarbonMethod(ctor, methodName, status);
  }
});

Deno.test("shader TriFloatArrayParameter copies vector4 rows as graph data", () => {
  const parameter = new TriFloatArrayParameter();
  parameter.name = "LightProbe";
  parameter.value = [
    Object.assign(new TriVector4(), {
      data: vec4.fromValues(1, 2, 3, 4),
    }),
    Object.assign(new TriVector4(), {
      data: vec4.fromValues(5, 6, 7, 8),
    }),
  ];

  assertEquals(parameter.GetParameterName(), "LightProbe");
  assert(parameter.Initialize());

  const fullCopy = new Float32Array(8);
  parameter.CopyValueToEffect(null, fullCopy, 32);
  assertAlmostEquals(fullCopy[0], 1);
  assertAlmostEquals(fullCopy[3], 4);
  assertAlmostEquals(fullCopy[4], 5);
  assertAlmostEquals(fullCopy[7], 8);

  const shortCopy = new Float32Array(5);
  parameter.CopyValueToEffect(null, shortCopy, 20);
  assertAlmostEquals(shortCopy[0], 1);
  assertAlmostEquals(shortCopy[4], 5);

  parameter.RebuildEffectHandles({
    GetConstant(name: string): object | null {
      return name === "LightProbe" ? {} : null;
    },
  });
  assert(parameter.usedByCurrentEffect);
  assert(parameter.usedByCurrentTechnique);

  parameter.name = "Missing";
  parameter.OnModified();
  assert(!parameter.usedByCurrentEffect);
});

Deno.test("promoted shader classes are skipped by generated shader barrels", async () => {
  const classNames = [
    "Tr2FloatParameter",
    "Tr2Matrix4Parameter",
    "Tr2RuntimeTextureParameter",
    "Tr2Vector2Parameter",
    "Tr2Vector3Parameter",
    "Tr2Vector4Parameter",
    "TriFloatArrayParameter",
    "TriTextureParameter",
    "TriVector4",
  ];

  const summary = JSON.parse(
    await Deno.readTextFile("src/generated/summary.json"),
  ) as { skipped?: Array<{ family: string; className: string }> };
  const skipped = new Set(
    (summary.skipped || []).map((item) => `${item.family}/${item.className}`),
  );
  const generatedShaderBarrel = await Deno.readTextFile(
    "src/generated/shader/index.ts",
  );

  for (const className of classNames) {
    assert(
      skipped.has(`shader/${className}`),
      `${className} should be skipped by generated output`,
    );
    assert(
      !generatedShaderBarrel.includes(`./${className}.ts`),
      `${className} should not be exported from generated shader barrel`,
    );
  }
});

Deno.test("shader Tr2RuntimeTextureParameter stays graph-only", () => {
  const parameter = new Tr2RuntimeTextureParameter();
  const texture = { label: "reflection" };
  parameter.__init__("ReflectionProbe", texture, 3);

  assertEquals(parameter.name, "ReflectionProbe");
  assertEquals(parameter.GetParameterName(), "ReflectionProbe");
  assertEquals(parameter.GetTextureProvider(), texture);
  assertEquals(parameter.uavMipLevel, 3);

  const invalidations: string[] = [];
  const material = {
    InvalidateResourceSets(): void {
      invalidations.push("invalidate");
    },
  };
  parameter.OnAddedToMaterial(material);
  parameter.SetTextureProvider({ label: "replacement" });
  parameter.OnModified();
  assertEquals(invalidations.join(","), "invalidate,invalidate");

  parameter.OnRemovedFromMaterial(material);
  parameter.SetTextureProvider(texture);
  assertEquals(invalidations.length, 2);

  parameter.SetUavMipLevel(7);
  assertEquals(parameter.uavMipLevel, 7);
  parameter.RebuildEffectHandles({
    GetResource(): object {
      throw new Error("runtime graph shell should not bind resources");
    },
  });
});

Deno.test("Tr2FloatParameter reroutes values and rebuilds effect usage", () => {
  const parameter = new Tr2FloatParameter();
  parameter.name = "Glow";
  parameter.SetValue(2.5);

  const destination = new Float32Array(1);
  const reroutes: unknown[] = [];
  parameter.RegisterBinding({
    RerouteDestination(destination): void {
      reroutes.push(destination);
    },
  });

  parameter.SetDestination(destination, 4);
  assert(parameter.IsRerouted());
  assertAlmostEquals(destination[0], 2.5);
  assertEquals(reroutes.length, 1);

  destination[0] = 9;
  assertAlmostEquals(parameter.GetValue(), 9);
  parameter.SetValue(4);
  assertAlmostEquals(destination[0], 4);

  const copy = new Float32Array(1);
  parameter.CopyValueToEffect(null, copy);
  assertAlmostEquals(copy[0], 4);

  parameter.RebuildEffectHandles({
    GetConstant(name: string): object | null {
      return name === "Glow" ? {} : null;
    },
  });
  assert(parameter.usedByCurrentEffect);

  parameter.RebuildEffectHandles(null);
  assert(!parameter.IsRerouted());
  assert(!parameter.usedByCurrentEffect);
});

Deno.test("vector and matrix shader parameters mirror rerouted destinations", () => {
  const vector2 = new Tr2Vector2Parameter();
  vector2.SetValue(vec2.fromValues(3, 4));
  const destination2 = new Float32Array(2);
  vector2.SetDestination(destination2, 8);
  assertAlmostEquals(destination2[0], 3);
  destination2[1] = 8;
  const out2: Vec2 = vec2.create();
  vector2.GetValue(out2);
  assertAlmostEquals(out2[1], 8);

  const vector3 = new Tr2Vector3Parameter();
  vector3.SetValue(vec3.fromValues(1, 2, 3));
  const destination3 = new Float32Array(3);
  vector3.SetDestination(destination3, 12);
  vector3.SetValue(vec3.fromValues(4, 5, 6));
  assertAlmostEquals(destination3[2], 6);
  vector3.Initialize();
  assertAlmostEquals(destination3[0], 4);

  const matrix = new Tr2Matrix4Parameter();
  const value: Mat4 = mat4.create();
  value[12] = 7;
  value[13] = 8;
  matrix.SetValue(value);
  const destinationMatrix = new Float32Array(16);
  matrix.SetDestination(destinationMatrix, 64);
  assertAlmostEquals(destinationMatrix[12], 7);
  destinationMatrix[13] = 11;
  const outMatrix: Mat4 = mat4.create();
  matrix.GetValue(outMatrix);
  assertAlmostEquals(outMatrix[13], 11);

  matrix.RebuildEffectHandles({
    getConstant(name: string): object | null {
      return name === "World" ? {} : null;
    },
  });
  assert(!matrix.usedByCurrentEffect);
  matrix.name = "World";
  matrix.RebuildEffectHandles({
    getConstant(name: string): object | null {
      return name === "World" ? {} : null;
    },
  });
  assert(matrix.usedByCurrentEffect);
  assert(matrix.usedByCurrentTechnique);
});

Deno.test("Tr2Vector4Parameter handles Carbon sRGB reroute rules", () => {
  const parameter = new Tr2Vector4Parameter();
  parameter.name = "Tint";
  parameter.SetValue(vec4.fromValues(0.5, 0.25, 0.75, 0.8));

  const destination = new Float32Array(4);
  parameter.SetDestination(destination, 16);
  assert(parameter.IsRerouted());

  parameter.RebuildEffectHandles({
    GetConstant(name: string): object | null {
      return name === "Tint" ? { isSRGB: true } : null;
    },
  });
  assert(parameter.isSrgb);
  assert(!parameter.IsRerouted());
  assert(parameter.usedByCurrentEffect);

  const copied: Vec4 = vec4.create();
  parameter.CopyValueToEffect(null, copied);
  assert(copied[0] < parameter.value[0]);
  assert(copied[1] < parameter.value[1]);
  assert(copied[2] < parameter.value[2]);
  assertAlmostEquals(copied[3], 0.8);
});

Deno.test("TriTextureParameter stays graph-owned and backend-free", () => {
  const parameter = new TriTextureParameter();
  parameter.name = "DiffuseMap";
  parameter.SetResourcePath("res:/texture/diffuse.dds");
  assertEquals(parameter.resourcePath, "res:/texture/diffuse.dds");
  assertEquals(parameter.GetResourcePath(), "res:/texture/diffuse.dds");
  assert(parameter.SupportsDirtyNotification());

  const resourceLods: number[] = [];
  parameter.SetResource({
    path: "res:/runtime.dds",
    RequestResolution(lod: number): void {
      resourceLods.push(lod);
    },
    GetOriginalResolutionAsFloat(): number {
      return 1024;
    },
  });
  assertEquals(parameter.GetResourcePath(), "res:/runtime.dds");

  parameter.EnableTextureLoding([2, 4, 0, 0, 0]);
  const lod = parameter.UsedWithScreenSize(512, 64, [2]);
  assertEquals(lod, 4);
  assertEquals(resourceLods[0], 4);

  const materialEvents: string[] = [];
  const material = {
    ResourceChanged(): void {
      materialEvents.push("resource");
    },
    MarkConstantBuffersDirty(): void {
      materialEvents.push("dirty");
    },
  };
  parameter.OnAddedToMaterial(material);
  parameter.OnTextureChanged();
  assertEquals(materialEvents.join(","), "resource,dirty");
  parameter.OnRemovedFromMaterial(material);

  parameter.RebuildEffectHandles({
    GetResource(name: string): object | null {
      return name === "DiffuseMap" ? {} : null;
    },
  });
  assert(parameter.usedByCurrentEffect);
  assert(parameter.usedByCurrentTechnique);
});

Deno.test("promoted shader graph files do not import backend APIs", async () => {
  const files = [
    "src/shader/CjsShaderParameter.ts",
    "src/shader/Tr2FloatParameter.ts",
    "src/shader/Tr2Vector2Parameter.ts",
    "src/shader/Tr2Vector3Parameter.ts",
    "src/shader/Tr2Vector4Parameter.ts",
    "src/shader/Tr2Matrix4Parameter.ts",
    "src/shader/Tr2RuntimeTextureParameter.ts",
    "src/shader/TriFloatArrayParameter.ts",
    "src/shader/TriTextureParameter.ts",
    "src/shader/TriVector4.ts",
  ];

  for (const file of files) {
    const source = await Deno.readTextFile(file);
    assert(
      !/(WebGPU|WebGL|GPUDevice|GPUTexture|GPUBuffer|navigator\.gpu)/.test(
        source,
      ),
      `${file} should remain runtime graph code, not engine backend code`,
    );
  }
});

function assertCarbonMethod(
  ctor: ShaderConstructor,
  methodName: string,
  status: ImplStatus,
): void {
  const method = CjsSchema.getMethod(ctor, methodName);
  assertEquals(
    method?.carbon?.method,
    true,
    `${ctor.name}.${methodName} should be decorated as a Carbon method`,
  );
  assertEquals(
    method?.impl?.status,
    status,
    `${ctor.name}.${methodName} should be marked ${status}`,
  );
}
