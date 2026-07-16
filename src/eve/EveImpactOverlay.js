// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\EveImpactOverlay.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\EveImpactOverlay.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Attachments\EveImpactOverlay_Blue.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { Tr2ScalarFader } from "../curves/Tr2ScalarFader.js";
import { ImpactConfiguration } from "../generated/include/enums.js";


@type.define({ className: "EveImpactOverlay", family: "eve/overlays/impact" })
export class EveImpactOverlay extends CjsModel
{
  @io.persist
  @type.string
  name = "";

  @io.read
  @type.uint32
  seed = 0;

  @io.readwrite
  @type.boolean
  display = true;

  @io.read
  @type.int32
  @schema.enum("ImpactConfiguration")
  configuration = 0;

  @io.read
  @type.int32
  impactDataNextIdx = 1;

  @io.read
  @type.uint64
  armorImpactGoalCount = 0;

  @io.read
  @type.float32
  armorImpactParentSize = 0;

  @io.readwrite
  @type.float32
  shieldImpactColorFade = 0;

  @io.read
  @type.float32
  shieldImpactParentSize = 0;

  @io.readwrite
  @type.boolean
  shieldIsEllipsoid = true;

  @io.readwrite
  @type.boolean
  debugForceSpawnDebris = false;

  @io.read
  @type.float32
  renderPriority = 0;

  @io.persist
  @type.objectRef("Tr2MeshBase")
  mesh = null;

  @io.read
  @type.int32
  dataTextureBlockID = -1;

  @io.read
  @type.uint32
  maxShieldImpacts = 8;

  @io.readwrite
  @type.float32
  overallShieldImpact = -1;

  @io.readwrite
  @type.objectRef("Tr2ScalarFader")
  shieldHardening = new Tr2ScalarFader();

  @io.readwrite
  @type.objectRef("Tr2ScalarFader")
  shieldBoosting = new Tr2ScalarFader();

  @io.persist
  @type.objectRef("Tr2Effect")
  armorDamageShader = null;

  @io.persist
  @type.objectRef("Tr2GpuUniqueEmitter")
  armorImpactEmitter = null;

  @io.readwrite
  @type.objectRef("Tr2ScalarFader")
  armorRepairing = new Tr2ScalarFader();

  @io.readwrite
  @type.objectRef("Tr2ScalarFader")
  armorHardening = new Tr2ScalarFader();

  @io.readwrite
  @type.objectRef("Tr2ScalarFader")
  hullRepairing = new Tr2ScalarFader();

  @io.persist
  @type.objectRef("TriPerlinCurve")
  hullDamageFlickerCurve = null;

  @io.readwrite
  @type.float32
  hullDamageFactor = 0;

  @io.persist
  @type.objectRef("Tr2GpuUniqueEmitter")
  hullImpactEmitter = null;

  #armorImpactLifeTime = 10;

  #damageLocatorCount = 0;

  #dataTextureOffset = -1;

  #lastDamageState = vec3.fromValues(1, 1, 1);

  @carbon.method
  @impl.implemented
  Initialize()
  {
    return true;
  }

  @carbon.method
  @impl.adapted
  Set(hullDamageFlickerCurve, armorDamageEmitter, hullImpactEmitter, armorDamageShader, shieldImpactMesh, shieldIsEllipsoid)
  {
    this.shieldIsEllipsoid = !!shieldIsEllipsoid;
    this.hullDamageFlickerCurve = hullDamageFlickerCurve ?? null;
    this.armorImpactEmitter = armorDamageEmitter ?? null;
    this.hullImpactEmitter = hullImpactEmitter ?? null;
    this.armorDamageShader = armorDamageShader ?? null;
    this.mesh = shieldImpactMesh ?? null;
    return true;
  }

  @carbon.method
  @impl.adapted
  SetSeed(seed)
  {
    this.seed = Number(seed) >>> 0;
    return true;
  }

  @carbon.method
  @impl.adapted
  SetDamageLocatorCount(count)
  {
    this.#damageLocatorCount = Number(count) >>> 0;
    return true;
  }

  @carbon.method
  @impl.adapted
  GetDamageLocatorCount()
  {
    return this.#damageLocatorCount;
  }

  @carbon.method
  @impl.implemented
  GetArmorImpactLifeTime()
  {
    return this.#armorImpactLifeTime;
  }

  @carbon.method
  @impl.adapted
  GetLastDamageState(out = vec3.create())
  {
    return vec3.copy(out, this.#lastDamageState);
  }

  @carbon.method
  @impl.adapted
  GetDataTextureOffset()
  {
    return this.#dataTextureOffset;
  }

  @carbon.method
  @impl.adapted
  GetImpactConfiguration()
  {
    return this.configuration;
  }

  @carbon.method
  @impl.adapted
  HasShieldEllipsoid()
  {
    return this.shieldIsEllipsoid;
  }

  @carbon.method
  @impl.adapted
  ToggleEffect(name, on, duration)
  {
    const fader = EveImpactOverlay.#effectFader(this, name);
    if (!fader) return false;
    fader.StartFade(!!on, Number(duration) / 4);
    return true;
  }

  static #effectFader(overlay, name)
  {
    switch (name)
    {
      case "shieldboost": return overlay.shieldBoosting;
      case "shieldhardening": return overlay.shieldHardening;
      case "armorhardening": return overlay.armorHardening;
      case "armorrepair": return overlay.armorRepairing;
      case "hullrepair": return overlay.hullRepairing;
      default: return null;
    }
  }

  static ImpactConfiguration = ImpactConfiguration;

}
