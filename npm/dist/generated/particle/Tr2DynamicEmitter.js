import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { hasUnboundParticleElements } from '../../particle/particleElementBinding.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_isValid, _init_extra_isValid, _init_generators, _init_extra_generators, _init_maxParticles, _init_extra_maxParticles, _init_rate, _init_extra_rate, _init_particleSystem, _init_extra_particleSystem;

/** Tr2DynamicEmitter (particle) - generated from schema shapeHash 7cb2183d.... */
let _Tr2DynamicEmitter;
class Tr2DynamicEmitter extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_isValid, _init_extra_isValid, _init_generators, _init_extra_generators, _init_maxParticles, _init_extra_maxParticles, _init_rate, _init_extra_rate, _init_particleSystem, _init_extra_particleSystem, _initProto],
      c: [_Tr2DynamicEmitter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2DynamicEmitter",
      family: "particle"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.boolean], 16, "isValid"], [[io, io.persist, void 0, type.list("ITr2AttributeGenerator")], 16, "generators"], [[io, io.persist, type, type.int32], 16, "maxParticles"], [[io, io.persist, type, type.float32], 16, "rate"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2ParticleSystem")], 16, "particleSystem"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Browser attribute generators bind directly to the CPU particle-system adapter rather than native declaration pointers.")], 18, "Rebind"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateSimulation"], [[impl, impl.implemented], 18, "Initialize"], [[impl, impl.adapted], 18, "SpawnParticles"], [[impl, impl.implemented], 18, "GetEmittedParticleCount"], [[impl, impl.implemented], 18, "ResetEmittedParticleCount"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_particleSystem(this);
  }
  #accumulatedRate = (_initProto(this), 0);
  #declarationHash = 0;
  #emittedParticles = 0;

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_isValid (bool) [READ] */
  isValid = (_init_extra_name(this), _init_isValid(this, false));

  /** m_generators (PITr2AttributeGeneratorVector) [READ, PERSIST] */
  generators = (_init_extra_isValid(this), _init_generators(this, []));

  /** m_maxParticles (int32_t) [READWRITE, PERSIST] */
  maxParticles = (_init_extra_generators(this), _init_maxParticles(this, -1));

  /** m_rate (float) [READWRITE, PERSIST] */
  rate = (_init_extra_maxParticles(this), _init_rate(this, 0));

  /** m_particleSystem (Tr2ParticleSystemPtr) [READWRITE, PERSIST, NOTIFY] */
  particleSystem = (_init_extra_rate(this), _init_particleSystem(this, null));

  /** Carbon method Rebind (MAP_METHOD_AND_WRAP). */
  Rebind() {
    this.#emittedParticles = 0;
    this.#accumulatedRate = 0;
    this.isValid = false;
    if (!this.particleSystem?.isValid) {
      return false;
    }
    const boundElements = new Set();
    for (const generator of this.generators) {
      if (typeof generator?.Bind !== "function") {
        throw new TypeError("Particle generators must implement Carbon's Bind contract.");
      }
      if (generator.Bind(this.particleSystem, boundElements) === false) {
        return false;
      }
    }
    if (hasUnboundParticleElements(this.particleSystem, boundElements)) {
      return false;
    }
    this.#declarationHash = this.particleSystem.GetElementDeclarationHash();
    this.isValid = true;
    return true;
  }

  /** Carbon method UpdateSimulation (MAP_METHOD_AND_WRAP). */
  UpdateSimulation(dt) {
    return this.SpawnParticles(null, null, Math.max(0, Number(dt) || 0));
  }
  Initialize() {
    return this.Rebind();
  }
  SpawnParticles(position, velocity, rateModifier = 1) {
    if (!this.isValid || !this.particleSystem) {
      return 0;
    }
    if ((this.particleSystem.GetElementDeclarationHash?.() ?? 0) !== this.#declarationHash) {
      this.isValid = false;
      return 0;
    }
    if (this.rate <= 0) {
      return 0;
    }
    this.#accumulatedRate += this.rate * Math.max(0, Number(rateModifier) || 0);
    let count = Math.floor(this.#accumulatedRate);
    this.#accumulatedRate -= count;
    if (this.maxParticles >= 0) {
      count = Math.max(0, Math.min(count, this.maxParticles - this.#emittedParticles));
    }
    let spawned = 0;
    for (let index = 0; index < count; index++) {
      const particleIndex = this.particleSystem.BeginSpawnParticle?.();
      if (particleIndex === null || particleIndex === undefined) {
        break;
      }
      for (const generator of this.generators) {
        generator?.Generate?.(position, velocity, particleIndex);
      }
      this.particleSystem.EndSpawnParticle?.();
      spawned++;
    }
    this.#emittedParticles += spawned;
    return spawned;
  }
  GetEmittedParticleCount() {
    return this.#emittedParticles;
  }
  ResetEmittedParticleCount() {
    this.#emittedParticles = 0;
  }
  static {
    _initClass();
  }
}

export { _Tr2DynamicEmitter as Tr2DynamicEmitter };
//# sourceMappingURL=Tr2DynamicEmitter.js.map
