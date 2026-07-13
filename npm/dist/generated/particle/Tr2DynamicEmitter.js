import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

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
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.boolean], 16, "isValid"], [[io, io.persist, void 0, type.list("ITr2AttributeGenerator")], 16, "generators"], [[io, io.persist, type, type.int32], 16, "maxParticles"], [[io, io.persist, type, type.float32], 16, "rate"], [[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2ParticleSystem")], 16, "particleSystem"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Rebind"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UpdateSimulation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_particleSystem(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_initProto(this), _init_name(this, ""));

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
  Rebind(...args) {
    throw CjsModel.notImplemented("Tr2DynamicEmitter", "Rebind", args);
  }

  /** Carbon method UpdateSimulation (MAP_METHOD_AND_WRAP). */
  UpdateSimulation(...args) {
    throw CjsModel.notImplemented("Tr2DynamicEmitter", "UpdateSimulation", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2DynamicEmitter as Tr2DynamicEmitter };
//# sourceMappingURL=Tr2DynamicEmitter.js.map
