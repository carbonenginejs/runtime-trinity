import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_name, _init_extra_name, _init_geometryResource, _init_extra_geometryResource, _init_meshIndex, _init_extra_meshIndex, _init_particleSystem, _init_extra_particleSystem, _init_geometryResourcePath, _init_extra_geometryResourcePath;

/** Tr2StaticEmitter (particle) - generated from schema shapeHash b0631f1f.... */
let _Tr2StaticEmitter;
class Tr2StaticEmitter extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_geometryResource, _init_extra_geometryResource, _init_meshIndex, _init_extra_meshIndex, _init_particleSystem, _init_extra_particleSystem, _init_geometryResourcePath, _init_extra_geometryResourcePath, _initProto],
      c: [_Tr2StaticEmitter, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2StaticEmitter",
      family: "particle"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.read, void 0, type.objectRef("TriGrannyRes")], 16, "geometryResource"], [[io, io.persist, type, type.uint32], 16, "meshIndex"], [[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2ParticleSystem")], 16, "particleSystem"], [[io, io.notify, io, io.persist, type, type.string], 16, "geometryResourcePath"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Spawn"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ForceSpawn"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_geometryResourcePath(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_initProto(this), _init_name(this, ""));

  /** m_geometryResource (TriGrannyResPtr) [READ] */
  geometryResource = (_init_extra_name(this), _init_geometryResource(this, null));

  /** m_meshIndex (uint32_t) [READWRITE, PERSIST] */
  meshIndex = (_init_extra_geometryResource(this), _init_meshIndex(this, 0));

  /** m_particleSystem (Tr2ParticleSystemPtr) [READWRITE, PERSIST, NOTIFY] */
  particleSystem = (_init_extra_meshIndex(this), _init_particleSystem(this, null));

  /** m_geometryResourcePath (std::string) [READWRITE, NOTIFY, PERSIST] */
  geometryResourcePath = (_init_extra_particleSystem(this), _init_geometryResourcePath(this, ""));

  /** Carbon method Spawn (MAP_METHOD_AND_WRAP). */
  Spawn(...args) {
    throw CjsModel.notImplemented("Tr2StaticEmitter", "Spawn", args);
  }

  /** Carbon method ForceSpawn -> DoSpawn (MAP_METHOD_AND_WRAP). */
  ForceSpawn(...args) {
    throw CjsModel.notImplemented("Tr2StaticEmitter", "ForceSpawn", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2StaticEmitter as Tr2StaticEmitter };
//# sourceMappingURL=Tr2StaticEmitter.js.map
