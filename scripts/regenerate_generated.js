import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import { deriveExpectedFields, loadSchemaDoc, renderClassFile, renderEnums, schemaBaseClassForDoc } from "../../format-carbon/src/core/classTool.js";


const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workspaceRoot = path.resolve(root, "..");
const schemaRoot = path.join(workspaceRoot, "format-carbon", "src", "schema");
const runtimeSrc = path.join(root, "src");
const outRoot = path.join(runtimeSrc, "generated");
const RESOURCE_OWNED_CLASSES = new Set(["TriTextureRes", "TriGeometryRes", "Tr2EffectRes", "TriEffectRes", "Tr2ImageRes"]);
const RUNTIME_FAMILY_OVERRIDES = new Map([
  ["lights", "eve/lights"]
]);
const RUNTIME_CANONICAL_CLASS_FAMILIES = new Map([
  ["ITr2InstanceData", "trinityCore"],
  ["TriColor", "trinityCore"],
  ["TriMatrix", "trinityCore"],
  ["TriQuaternion", "trinityCore"],
  ["TriVector", "trinityCore"]
]);
const RUNTIME_FIELD_DEFAULT_OVERRIDES = new Map([
  ["ITr2GenericEmitter.emitCountFactor", 1]
]);
const AUDITED_INHERITED_METHOD_FALLBACKS = new Set([
  "EveChildEffectPropagator.RebuildLocalTransform",
  "EveChildExplosion.RebuildLocalTransform",
  "EveChildParticleSystem.RebuildLocalTransform",
  "EveChildProceduralContainer.RebuildLocalTransform",
  "EveChildQuad.RebuildLocalTransform",
  "EveChildRef.RebuildLocalTransform",
  "EveChildSocket.RebuildLocalTransform"
]);
const EVE_ATTACHMENT_FAMILIES = new Map([
  ["DecalMeshCache", "eve/attachment/decal"],
  ["EveSpaceObjectDecal", "eve/attachment/decal"],
  ["IEveSpaceObjectDecalOwner", "eve/attachment/decal"],
  ["EveBoosterSet2", "eve/attachment/boosters"],
  ["EveBoosterSet2Renderable", "eve/attachment/boosters"],
  ["EveTrailsSet", "eve/attachment/boosters"],
  ["EveBannerItem", "eve/attachment/banners"],
  ["EveBannerLight", "eve/attachment/banners"],
  ["EveBannerSet", "eve/attachment/banners"],
  ["EveHazeSet", "eve/attachment/haze"],
  ["EveHazeSetItem", "eve/attachment/haze"],
  ["EveHazeSetLight", "eve/attachment/haze"],
  ["EvePlaneLight", "eve/attachment/planes"],
  ["EvePlaneSet", "eve/attachment/planes"],
  ["EvePlaneSetItem", "eve/attachment/planes"],
  ["EveSpotlightLight", "eve/attachment/spotlights"],
  ["EveSpotlightSet", "eve/attachment/spotlights"],
  ["EveSpotlightSetItem", "eve/attachment/spotlights"],
  ["EveSpriteLight", "eve/attachment/sprites"],
  ["EveSpriteLineSet", "eve/attachment/sprites"],
  ["EveSpriteLineSetItem", "eve/attachment/sprites"],
  ["EveSpriteSet", "eve/attachment/sprites"],
  ["EveSpriteSetItem", "eve/attachment/sprites"]
]);
const EVE_OVERLAY_FAMILIES = new Map([
  ["EveImpactOverlay", "eve/overlays/impact"],
  ["EveMeshOverlayEffect", "eve/overlays"]
]);
const EVE_LIGHT_FAMILIES = new Map([
  ["EveChildLightingOverride", "eve/child"],
  ["IEveLightingOverride", "eve/child"]
]);
const EVE_SOURCE_FAMILY_OVERRIDES = new Map([
  ["SpaceObject", "eve/spaceObject"],
  ["SpaceObject/Attachments", "eve/attachment"],
  ["SpaceObject/Attachments/Sets", "eve/attachment"],
  ["SpaceObject/Children", "eve/child"],
  ["SpaceObject/Children/Behaviors", "eve/child/behaviors"],
  ["SpaceObject/Children/LineSetPaths", "eve/child/lineSetPaths"],
  ["SpaceObject/Children/ProceduralContainer", "eve/child/procedural"],
  ["SpaceObject/Children/ProceduralContainer/SelectionMethods", "eve/child/procedural/selection"],
  ["SpaceObject/Children/SmartLightSets", "eve/smartLights"],
  ["SpaceObject/Children/SmartLightSets/attributeModifiers", "eve/smartLights/attributeModifiers"],
  ["SpaceObject/Children/SocketParameters", "eve/socket"],
  ["SpaceObject/Children/TransformModifiers", "eve/child/modifiers"],
  ["SpaceObject/Utils", "eve/utils"],
  ["SpaceObject/Utils/EveDistributionMethods", "eve/distribution"],
  ["SpaceObject/Utils/EveDistributionMethods/DistributionAttributeModifiers", "eve/distribution/attributeModifiers"],
  ["SpaceObject/Utils/EveDistributionMethods/DistributionPlacementGenerators", "eve/distribution/placement"],
  ["SpaceObject/Utils/EveDistributionMethods/DistributionSpawnModifiers", "eve/distribution/spawnModifiers"],
  ["SpaceObject/Utils/EveDistributionMethods/DistributionSpawners", "eve/distribution/spawners"],
  ["SpaceObject/Utils/fxAttributes", "eve/fxAttributes"],
  ["Renderable", "eve/renderable"],
  ["Renderable/Stretch", "eve/renderable/stretch"],
  ["Turret", "eve/attachment/turrets"],
  ["UI", "eve/ui"],
  ["VirtualCamera", "eve/virtualCamera"],
  ["Volume", "eve/volume"]
]);

function assertInside(parent, child)
{
  const relative = path.relative(parent, child);
  if (relative.startsWith("..") || path.isAbsolute(relative))
  {
    throw new Error(`Refusing to operate outside ${parent}: ${child}`);
  }
}
function walk(dir, files = [])
{
  for (const entry of fs.readdirSync(dir,
  {
    withFileTypes: true
  }))
  {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory())
    {
      walk(absolute, files);
    }
    else if (entry.isFile())
    {
      files.push(absolute);
    }
  }
  return files;
}
function walkJson(dir)
{
  return walk(dir).filter(file => file.endsWith(".json") && path.basename(file) !== "index.json");
}
function relativePosix(from, to)
{
  return path.relative(from, to).replaceAll("\\", "/");
}
function isTrinityDoc(doc)
{
  return Object.values(doc.sourceRefs || {}).some(ref => String(ref).startsWith("trinity/trinity/"));
}
function isSofOwnedDoc(doc)
{
  return Object.values(doc.sourceRefs || {}).some(ref => String(ref).includes("/SpaceObjectFactory/"));
}
function isSofOwnedEnum(entry)
{
  return String(entry?.source || "").includes("/SpaceObjectFactory/");
}
function isResourceOwnedClass(className)
{
  return RESOURCE_OWNED_CLASSES.has(className);
}
function isResourceOwnedDoc(doc, schemaFamily)
{
  return schemaFamily === "resources" || RESOURCE_OWNED_CLASSES.has(classNameFor(doc, ""));
}
function resolveSourceRef(doc, value)
{
  const sourceRefs = doc.sourceRefs || {};
  const key = String(value || "");
  return sourceRefs[key] || key;
}
function preferredDocSource(doc)
{
  const source = doc.source || {};
  const headers = Array.isArray(source.header) ? source.header : [];
  const refs = [...headers.map(ref => resolveSourceRef(doc, ref)), ...Object.values(doc.sourceRefs || {})];
  return refs.map(ref => String(ref)).find(ref => ref.endsWith(".h")) || refs.map(ref => String(ref))[0] || null;
}
function sourceDirectoryUnderEve(source)
{
  const match = String(source || "").match(/^trinity\/trinity\/Eve(?:\/(.+))?\/[^/]+$/);
  return match ? match[1] || "" : null;
}
function toFamilySegment(value)
{
  const text = String(value || "").replace(/[^A-Za-z0-9]+/g, " ").trim();
  if (!text)
  {
    return "";
  }
  return text
    .split(/\s+/)
    .map((part, index) => index === 0 ? part.charAt(0).toLowerCase() + part.slice(1) : part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
function fallbackEveFamily(directory)
{
  const segments = String(directory || "")
    .split("/")
    .map(toFamilySegment)
    .filter(Boolean);
  return segments.length ? `eve/${segments.join("/")}` : "eve";
}
function familyForEveSource(family, source)
{
  if (RUNTIME_FAMILY_OVERRIDES.has(family))
  {
    return RUNTIME_FAMILY_OVERRIDES.get(family);
  }
  if (family !== "eve")
  {
    return family;
  }
  const directory = sourceDirectoryUnderEve(source);
  if (directory === null)
  {
    return family;
  }
  return EVE_SOURCE_FAMILY_OVERRIDES.get(directory) || fallbackEveFamily(directory);
}
function runtimeFamilyForDoc(doc, schemaFamily)
{
  const family = familyForEveSource(schemaFamily, preferredDocSource(doc));
  const className = classNameFor(doc, "");
  if (className === "Tr2Key")
  {
    return "curves";
  }
  if (family.startsWith("eve") && (className.endsWith("PerObjectData") || className === "MergeMorphsConstantBuffer"))
  {
    return "eve/perObjectData";
  }
  if (className === "IEveSpaceObject2")
  {
    return "eve/spaceObject";
  }
  if (className === "EveCustomMask")
  {
    return "eve/spaceObject";
  }
  if (isEveSceneClass(className))
  {
    return "eve/scene";
  }
  if (EVE_ATTACHMENT_FAMILIES.has(className))
  {
    return EVE_ATTACHMENT_FAMILIES.get(className);
  }
  if (EVE_OVERLAY_FAMILIES.has(className))
  {
    return EVE_OVERLAY_FAMILIES.get(className);
  }
  if (EVE_LIGHT_FAMILIES.has(className))
  {
    return EVE_LIGHT_FAMILIES.get(className);
  }
  if (family === "eve" && isEveSpaceObjectRoot(className))
  {
    return "eve/spaceObject";
  }
  if (family === "eve" && isEveEffectClass(className))
  {
    return "eve/effect";
  }
  if (family === "eve/virtualCamera" && className.startsWith("EveVirtualCameraBehaviour"))
  {
    return "eve/virtualCamera/behaviour";
  }
  if (family === "eve/virtualCamera" && className.startsWith("EveVirtualCameraTransition"))
  {
    return "eve/virtualCamera/transition";
  }
  if (family === "eve/spaceObject" && (className.startsWith("EveSwarm") || className.startsWith("Swarm")))
  {
    return "eve/spaceObject/swarm";
  }
  return family;
}
function isEveSpaceObjectRoot(className)
{
  return new Set(["EveEffectRoot2", "EvePlanet", "EveRootTransform", "EveTransform"]).has(className);
}
function isEveEffectClass(className)
{
  return new Set(["EveLensflare", "EveMultiEffect", "EveMultiEffectParameter", "EveOccluder", "EveStarfield"]).has(className);
}
function isEveSceneClass(className)
{
  if (className.startsWith("EveScene") || className.startsWith("EveSpaceScene") || className.startsWith("EveComponent") || className.startsWith("TriShadow"))
  {
    return true;
  }
  return new Set([
    "EveInstancedMeshManager",
    "EvePickingContext",
    "EvePendingPickingReadback",
    "EveOcclusionBuffer",
    "IEveShadowCaster",
    "IEveShadowFrustum",
    "IEveComponentCollection",
    "ShadowBuffer",
    "Tr2OcclusionBuffer"
  ]).has(className) || className.endsWith("ShadowBuffer");
}
function runtimeFamilyForEnum(entry)
{
  return familyForEveSource(entry.family, entry.source);
}
function classNameFor(doc, file)
{
  return doc.blueClass || doc.cppClass || doc.black?.className || path.basename(file, ".json");
}
function applyRuntimeFieldOverrides(expected)
{
  for (const field of expected.fields)
  {
    const key = `${expected.meta.className}.${field.name}`;
    if (RUNTIME_FIELD_DEFAULT_OVERRIDES.has(key))
    {
      field.default = {
        determinate: true,
        value: RUNTIME_FIELD_DEFAULT_OVERRIDES.get(key),
        source: "runtime-trinity Carbon source override"
      };
    }
  }
}
function jsImportPath(fromDir, toFile)
{
  const relative = relativePosix(fromDir, toFile);
  return relative.startsWith(".") ? relative : `./${relative}`;
}
function runtimeBaseImportForDoc(doc, loadedRoot, loadedFamily, currentFamily)
{
  const baseClass = schemaBaseClassForDoc(doc, {
    schemaRoot: loadedRoot,
    family: loadedFamily
  });
  if (baseClass === "CjsModel")
  {
    return null;
  }
  const parent = (doc.parents || []).find(item => item?.cppClass === baseClass && item.jsonFile);
  if (!parent)
  {
    return null;
  }
  if (handSymbols.has(baseClass))
  {
    const handSource = handSourceFiles.get(baseClass);
    return handSource
      ? jsImportPath(path.join(outRoot, currentFamily), handSource)
      : null;
  }
  const parentFile = path.join(loadedRoot, loadedFamily, parent.jsonFile);
  if (!fs.existsSync(parentFile))
  {
    return null;
  }
  const parentDoc = JSON.parse(fs.readFileSync(parentFile, "utf8"));
  if (isSofOwnedDoc(parentDoc) || isResourceOwnedClass(baseClass))
  {
    return null;
  }
  const parentFamily = runtimeFamilyForDoc(parentDoc, parentDoc.family || loadedFamily);
  return jsImportPath(path.join(outRoot, currentFamily), path.join(outRoot, parentFamily, `${baseClass}.js`));
}
function readExistingHandSymbols()
{
  const names = new Set();
  for (const file of walk(runtimeSrc))
  {
    if (!/\.[jt]s$/.test(file))
    {
      continue;
    }
    if (file.startsWith(outRoot + path.sep))
    {
      continue;
    }
    const base = path.basename(file).replace(/\.[jt]s$/, "");
    if (base !== "index" && !base.startsWith("Cjs"))
    {
      names.add(base);
    }
    const text = fs.readFileSync(file, "utf8");
    const exportPattern = /\bexport\s+(?:abstract\s+)?(?:class|interface|type|const|enum|function)\s+([A-Za-z_$][\w$]*)/g;
    for (const match of text.matchAll(exportPattern))
    {
      names.add(match[1]);
    }
  }
  return names;
}
function readExistingHandSourceFiles()
{
  const files = new Map();
  for (const file of walk(runtimeSrc))
  {
    if (!/\.js$/.test(file) || file.startsWith(outRoot + path.sep))
    {
      continue;
    }
    const className = path.basename(file, ".js");
    if (className === "index" || className.startsWith("Cjs"))
    {
      continue;
    }
    if (files.has(className))
    {
      files.set(className, null);
      continue;
    }
    files.set(className, file);
  }
  return files;
}
function isNotImplementedMethod(method)
{
  return (method.decorators || []).some(decorator =>
    decorator.expression?.type === "MemberExpression" &&
    decorator.expression.object?.name === "impl" &&
    decorator.expression.property?.name === "notImplemented");
}
function readHandClassContracts()
{
  const contracts = new Map();
  for (const file of walk(runtimeSrc))
  {
    if (!file.endsWith(".js") || file.startsWith(outRoot + path.sep))
    {
      continue;
    }
    const source = fs.readFileSync(file, "utf8");
    const ast = parse(source, {
      sourceType: "module",
      plugins: [
        "classProperties",
        "classStaticBlock",
        "decoratorAutoAccessors",
        "decorators",
        "importAttributes"
      ]
    });
    for (const statement of ast.program.body)
    {
      const declaration = statement.type === "ExportNamedDeclaration"
        ? statement.declaration
        : statement;
      if (declaration?.type !== "ClassDeclaration" || !declaration.id?.name)
      {
        continue;
      }
      const methods = new Set();
      for (const member of declaration.body.body)
      {
        if (member.type !== "ClassMethod" || member.static || member.kind !== "method" ||
          member.computed || member.key?.type !== "Identifier" || isNotImplementedMethod(member))
        {
          continue;
        }
        methods.add(member.key.name);
      }
      contracts.set(declaration.id.name, {
        baseClass: declaration.superClass?.type === "Identifier"
          ? declaration.superClass.name
          : null,
        methods
      });
    }
  }
  return contracts;
}
function handBaseImplements(className, methodName, seen = new Set())
{
  if (!className || seen.has(className))
  {
    return false;
  }
  seen.add(className);
  const contract = handClassContracts.get(className);
  if (!contract)
  {
    return false;
  }
  return contract.methods.has(methodName) ||
    handBaseImplements(contract.baseClass, methodName, seen);
}
function handBaseChainIncludes(className, ownerName, seen = new Set())
{
  if (!className || seen.has(className))
  {
    return false;
  }
  if (className === ownerName)
  {
    return true;
  }
  seen.add(className);
  return handBaseChainIncludes(
    handClassContracts.get(className)?.baseClass,
    ownerName,
    seen
  );
}
function shouldSuppressImplementedBaseMethod(expected, method)
{
  const baseClass = expected.meta.sourceBaseClass;
  if (!handBaseImplements(baseClass, method.name))
  {
    return false;
  }
  if (method.declaredOn)
  {
    return method.declaredOn !== expected.meta.className &&
      handBaseChainIncludes(baseClass, method.declaredOn);
  }
  return AUDITED_INHERITED_METHOD_FALLBACKS.has(
    `${expected.meta.className}.${method.name}`
  );
}
function suppressImplementedBaseMethods(expected)
{
  const baseClass = expected.meta.sourceBaseClass;
  if (!handClassContracts.has(baseClass))
  {
    return [];
  }
  const suppressed = expected.methods
    .filter(method => shouldSuppressImplementedBaseMethod(expected, method))
    .map(method => method.name);
  if (suppressed.length)
  {
    expected.methods = expected.methods
      .filter(method => !suppressed.includes(method.name));
  }
  return suppressed;
}
function verifyInheritedMethodSuppressionPolicy()
{
  const inherited = {
    meta: {
      className: "FixtureChild",
      sourceBaseClass: "EveChildContainer"
    },
    methods: [
      {
        name: "RebuildLocalTransform",
        declaredOn: "EveChildTransform"
      }
    ]
  };
  const owned = {
    meta: {
      className: "FixtureChild",
      sourceBaseClass: "EveChildContainer"
    },
    methods: [
      {
        name: "RebuildLocalTransform",
        declaredOn: "FixtureChild"
      }
    ]
  };
  const unavailableBase = {
    meta: {
      className: "FixtureChild",
      sourceBaseClass: "MissingRuntimeBase"
    },
    methods: [
      {
        name: "RebuildLocalTransform",
        declaredOn: "FixtureBase"
      }
    ]
  };
  const auditedLegacy = {
    meta: {
      className: "EveChildRef",
      sourceBaseClass: "EveChildTransform"
    },
    methods: [
      {
        name: "RebuildLocalTransform",
        declaredOn: null
      }
    ]
  };
  const unauditedLegacy = {
    meta: {
      className: "FixtureChild",
      sourceBaseClass: "EveChildTransform"
    },
    methods: [
      {
        name: "RebuildLocalTransform",
        declaredOn: null
      }
    ]
  };
  if (suppressImplementedBaseMethods(inherited).length !== 1 ||
    suppressImplementedBaseMethods(owned).length !== 0 ||
    owned.methods.length !== 1 ||
    suppressImplementedBaseMethods(unavailableBase).length !== 0 ||
    unavailableBase.methods.length !== 1 ||
    suppressImplementedBaseMethods(auditedLegacy).length !== 1 ||
    suppressImplementedBaseMethods(unauditedLegacy).length !== 0 ||
    unauditedLegacy.methods.length !== 1)
  {
    throw new Error("Inherited mapped-method suppression policy failed its self-check");
  }
}
function exportedEnumNames(entry)
{
  return [entry.name, `${entry.name}Enum`, `${entry.name}Value`];
}
function writeFile(file, text)
{
  fs.mkdirSync(path.dirname(file), {
    recursive: true
  });
  fs.writeFileSync(file, text, "utf8");
}
assertInside(workspaceRoot, root);
assertInside(root, outRoot);
fs.rmSync(outRoot, {
  recursive: true,
  force: true
});
fs.mkdirSync(outRoot, {
  recursive: true
});
const docs = walkJson(schemaRoot);
const handSymbols = readExistingHandSymbols();
const handSourceFiles = readExistingHandSourceFiles();
const handClassContracts = readHandClassContracts();
verifyInheritedMethodSuppressionPolicy();
const generatedClasses = [];
const generatedClassNames = new Set();
const generatedFamilyClasses = new Map();
const generationSummary = {
  schemaRoot: "../format-carbon/src/schema",
  outRoot: "src/generated",
  scannedDocs: docs.length,
  relevantDocs: 0,
  generated: 0,
  fallback: 0,
  skippedSof: 0,
  errors: 0,
  nonAsciiOutputs: 0,
  byFamily: {},
  fallbacks: [],
  skipped: [],
  errorsList: [],
  suppressedInheritedMethods: []
};
for (const file of docs)
{
  let rawDoc;
  try
  {
    rawDoc = JSON.parse(fs.readFileSync(file, "utf8"));
  }
  catch (error)
  {
    generationSummary.errors++;
    generationSummary.errorsList.push({
      file,
      error: error.message
    });
    continue;
  }
  if (!isTrinityDoc(rawDoc))
  {
    continue;
  }
  generationSummary.relevantDocs++;
  const className = classNameFor(rawDoc, file);
  const schemaFamily = rawDoc.family || path.basename(path.dirname(file));
  const family = runtimeFamilyForDoc(rawDoc, schemaFamily);
  generationSummary.byFamily[family] ??= {
    docs: 0,
    generated: 0,
    fallback: 0,
    skippedSof: 0,
    errors: 0
  };
  generationSummary.byFamily[family].docs++;
  const canonicalFamily = RUNTIME_CANONICAL_CLASS_FAMILIES.get(className);
  if (canonicalFamily && family !== canonicalFamily)
  {
    generationSummary.skipped.push({
      family,
      className,
      schema: relativePosix(schemaRoot, file),
      reason: `canonical runtime family is ${canonicalFamily}`
    });
    continue;
  }
  if (isSofOwnedDoc(rawDoc) || isResourceOwnedDoc(rawDoc, schemaFamily))
  {
    if (isSofOwnedDoc(rawDoc))
    {
      generationSummary.skippedSof++;
      generationSummary.byFamily[family].skippedSof++;
    }
    generationSummary.skipped.push({
      family,
      className,
      schema: relativePosix(schemaRoot, file),
      reason: isSofOwnedDoc(rawDoc) ? "owned by runtime-sof" : "owned by runtime-resource"
    });
    continue;
  }
  try
  {
    const {
      doc,
      schemaRoot: loadedRoot,
      family: loadedFamily
    } = loadSchemaDoc({
      schema: file
    });
    const expected = deriveExpectedFields(doc, {
      schemaRoot: loadedRoot,
      family: loadedFamily
    });
    applyRuntimeFieldOverrides(expected);
    expected.meta.family = family;
    const baseImport = runtimeBaseImportForDoc(doc, loadedRoot, loadedFamily, family);
    const suppressedMethods = baseImport && !handSymbols.has(className)
      ? suppressImplementedBaseMethods(expected)
      : [];
    for (const method of suppressedMethods)
    {
      generationSummary.suppressedInheritedMethods.push({
        family,
        className,
        method,
        baseClass: expected.meta.sourceBaseClass
      });
    }
    if (!baseImport)
    {
      expected.meta.baseClass = "CjsModel";
    }
    if (expected.fallback)
    {
      generationSummary.fallback++;
      generationSummary.byFamily[family].fallback++;
      generationSummary.fallbacks.push({
        family,
        className,
        schema: relativePosix(schemaRoot, file),
        reason: expected.fallback.reason
      });
      continue;
    }
    const text = renderClassFile(expected, {
      doc: {
        ...doc,
        family
      },
      js: true,
      ...(baseImport ? {
        extendsClass: expected.meta.sourceBaseClass,
        extendsImport: baseImport
      } : {})
    });
    if (/[^\x00-\x7F]/.test(text))
    {
      generationSummary.nonAsciiOutputs++;
    }
    generatedClasses.push({
      family,
      className,
      text
    });
    generatedClassNames.add(className);
    if (!generatedFamilyClasses.has(family))
    {
      generatedFamilyClasses.set(family, new Set());
    }
    generatedFamilyClasses.get(family).add(className);
    generationSummary.generated++;
    generationSummary.byFamily[family].generated++;
  }
  catch (error)
  {
    generationSummary.errors++;
    generationSummary.byFamily[family].errors++;
    generationSummary.errorsList.push({
      family,
      className,
      schema: relativePosix(schemaRoot, file),
      error: error.message
    });
  }
}
const publishedSymbols = new Set([...handSymbols, ...generatedClassNames]);
const installedFamilies = new Map();
const installSummary = {
  outRoot: "src/generated",
  classes: {
    written: 0,
    skipped: 0
  },
  enums: {
    written: 0,
    skippedEntries: 0
  },
  skipped: [],
  enumSkipped: [],
  families: {},
  generation: generationSummary
};
function addFamilyExport(family, exportPath)
{
  if (!installedFamilies.has(family))
  {
    installedFamilies.set(family, new Set());
  }
  installedFamilies.get(family).add(exportPath);
}
function addAncestorFamilyExports(family)
{
  const segments = family.split("/");
  for (let i = 1; i < segments.length; i++)
  {
    const parent = segments.slice(0, i).join("/");
    const child = segments[i];
    addFamilyExport(parent, `./${child}/index.js`);
  }
}
for (const item of generatedClasses)
{
  if (handSymbols.has(item.className))
  {
    installSummary.classes.skipped++;
    installSummary.skipped.push({
      family: item.family,
      className: item.className,
      reason: "hand-maintained source exists"
    });
    continue;
  }
  writeFile(path.join(outRoot, item.family, `${item.className}.js`), item.text);
  installSummary.classes.written++;
  addFamilyExport(item.family, `./${item.className}.js`);
}
const enumRaw = JSON.parse(fs.readFileSync(path.join(schemaRoot, "enums.json"), "utf8"));
const enumEntries = Array.isArray(enumRaw.enums) ? enumRaw.enums : Object.values(enumRaw.enums || enumRaw);
const enumByFamily = new Map();
for (const entry of enumEntries)
{
  if (!entry?.family || !entry.name || !Array.isArray(entry.values))
  {
    continue;
  }
  if (isSofOwnedEnum(entry))
  {
    continue;
  }
  const family = runtimeFamilyForEnum(entry);
  if (!generatedFamilyClasses.has(family))
  {
    continue;
  }
  if (!enumByFamily.has(family))
  {
    enumByFamily.set(family, []);
  }
  enumByFamily.get(family).push(entry);
}
for (const [family, entries] of enumByFamily)
{
  const filtered = [];
  for (const entry of entries)
  {
    const names = exportedEnumNames(entry);
    const collision = names.find(name => publishedSymbols.has(name));
    if (collision)
    {
      installSummary.enums.skippedEntries++;
      installSummary.enumSkipped.push({
        family,
        enum: entry.name,
        reason: `export collision: ${collision}`
      });
      continue;
    }
    filtered.push(entry);
    for (const name of names)
    {
      publishedSymbols.add(name);
    }
  }
  if (!filtered.length)
  {
    continue;
  }
  writeFile(path.join(outRoot, family, "enums.js"), renderEnums(filtered, {
    js: true
  }));
  installSummary.enums.written++;
  addFamilyExport(family, "./enums.js");
}
for (const family of [...installedFamilies.keys()])
{
  addAncestorFamilyExports(family);
}
for (const [family, exports] of [...installedFamilies.entries()].sort())
{
  const lines = [...exports].sort().map(item => `export * from "${item}";`);
  writeFile(path.join(outRoot, family, "index.js"), `${lines.join("\n")}\n`);
  installSummary.families[family] = {
    exports: exports.size,
    classes: [...exports].filter(item => item !== "./enums.js" && !item.endsWith("/index.js")).length,
    enumsFile: exports.has("./enums.js")
  };
}
const rootLines = [...installedFamilies.keys()].sort().map(family => `export * from "./${family}/index.js";`);
writeFile(path.join(outRoot, "index.js"), `${rootLines.join("\n")}\n`);
writeFile(path.join(outRoot, "summary.json"), `${JSON.stringify(installSummary, null, 2)}\n`);
console.log(JSON.stringify({
  writtenClasses: installSummary.classes.written,
  skippedHandClasses: installSummary.classes.skipped,
  skippedSofClasses: generationSummary.skippedSof,
  suppressedInheritedMethods: generationSummary.suppressedInheritedMethods.length,
  writtenEnumFiles: installSummary.enums.written,
  families: Object.keys(installSummary.families).length
}, null, 2));
