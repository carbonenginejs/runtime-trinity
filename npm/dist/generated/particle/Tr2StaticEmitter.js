import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, io, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_hasSpawnedParticles, _init_extra_hasSpawnedParticles, _init_name, _init_extra_name, _init_geometryResource, _init_extra_geometryResource, _init_meshIndex, _init_extra_meshIndex, _init_particleSystem, _init_extra_particleSystem, _init_geometryResourcePath, _init_extra_geometryResourcePath;

/** Tr2StaticEmitter (particle) - generated from schema shapeHash b0631f1f.... */
let _Tr2StaticEmitter;
class Tr2StaticEmitter extends CjsModel {
  static {
    ({
      e: [_init_hasSpawnedParticles, _init_extra_hasSpawnedParticles, _init_name, _init_extra_name, _init_geometryResource, _init_extra_geometryResource, _init_meshIndex, _init_extra_meshIndex, _init_particleSystem, _init_extra_particleSystem, _init_geometryResourcePath, _init_extra_geometryResourcePath, _initProto],
      c: [_Tr2StaticEmitter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2StaticEmitter",
      family: "particle"
    })], [[[type, type.boolean], 16, "hasSpawnedParticles"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.read, void 0, type.objectRef("TriGrannyRes")], 16, "geometryResource"], [[io, io.persist, type, type.uint32], 16, "meshIndex"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2ParticleSystem")], 16, "particleSystem"], [[io, io.notify, io, io.persist, type, type.string], 16, "geometryResourcePath"], [[carbon, carbon.method, impl, impl.implemented], 18, "Spawn"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Accepts decoded particle rows or a host geometry SpawnParticles adapter; native CMF/Granny vertex-buffer mapping remains resource-owned.")], 18, "ForceSpawn"], [[impl, impl.adapted], 18, "Update"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_geometryResourcePath(this);
  }
  /** Carbon's internal one-shot spawn state. */
  hasSpawnedParticles = (_initProto(this), _init_hasSpawnedParticles(this, false));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_hasSpawnedParticles(this), _init_name(this, ""));

  /** m_geometryResource (TriGrannyResPtr) [READ] */
  geometryResource = (_init_extra_name(this), _init_geometryResource(this, null));

  /** m_meshIndex (uint32_t) [READWRITE, PERSIST] */
  meshIndex = (_init_extra_geometryResource(this), _init_meshIndex(this, 0));

  /** m_particleSystem (Tr2ParticleSystemPtr) [READWRITE, PERSIST, NOTIFY] */
  particleSystem = (_init_extra_meshIndex(this), _init_particleSystem(this, null));

  /** m_geometryResourcePath (std::string) [READWRITE, NOTIFY, PERSIST] */
  geometryResourcePath = (_init_extra_particleSystem(this), _init_geometryResourcePath(this, ""));

  /** Carbon method Spawn (MAP_METHOD_AND_WRAP). */
  Spawn() {
    this.hasSpawnedParticles = false;
  }

  /** Carbon method ForceSpawn -> DoSpawn (MAP_METHOD_AND_WRAP). */
  ForceSpawn() {
    if (!this.particleSystem?.isValid || !this.geometryResource) {
      return false;
    }
    if (typeof this.geometryResource.SpawnParticles === "function") {
      this.particleSystem.ClearParticles();
      const result = this.geometryResource.SpawnParticles(this.particleSystem, this.meshIndex);
      this.hasSpawnedParticles = result !== false;
      return result;
    }
    const source = this.geometryResource.GetPayload?.() ?? this.geometryResource;
    const meshes = source?.meshes ?? source?.Meshes ?? [];
    const mesh = meshes[this.meshIndex] ?? null;
    const particles = mesh?.particles ?? mesh?.Particles ?? source?.particles ?? source?.Particles;
    if (!Array.isArray(particles)) {
      return false;
    }
    this.particleSystem.ClearParticles();
    let spawned = 0;
    for (const particle of particles) {
      if (this.particleSystem.SpawnParticle?.(particle) === null) {
        break;
      }
      spawned++;
    }
    this.hasSpawnedParticles = true;
    return spawned;
  }
  Update() {
    return this.hasSpawnedParticles ? false : this.ForceSpawn();
  }
  static {
    _initClass();
  }
}

export { _Tr2StaticEmitter as Tr2StaticEmitter };
//# sourceMappingURL=Tr2StaticEmitter.js.map
