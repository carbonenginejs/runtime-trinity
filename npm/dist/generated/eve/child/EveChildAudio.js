import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_mute, _init_extra_mute, _init_audioEmitter, _init_extra_audioEmitter;

/** EveChildAudio (eve/child) - generated from schema shapeHash ce545c18.... */
let _EveChildAudio;
class EveChildAudio extends _EveChildTransform {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_mute, _init_extra_mute, _init_audioEmitter, _init_extra_audioEmitter, _initProto],
      c: [_EveChildAudio, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildAudio",
      family: "eve/child"
    })], [[[io, io.notify, io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "mute"], [[io, io.persist, void 0, type.objectRef("ITr2AudEmitter")], 16, "audioEmitter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetEmitterName"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_audioEmitter(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST, NOTIFY] */
  name = (_initProto(this), _init_name(this, "EveChildAudio"));

  /** m_mute (bool) [READWRITE, NOTIFY] */
  mute = (_init_extra_name(this), _init_mute(this, false));

  /** m_audioEmitter (ITr2AudEmitterPtr) [READ, PERSIST] */
  audioEmitter = (_init_extra_mute(this), _init_audioEmitter(this, null));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP). */
  __init__(...args) {
    throw _EveChildTransform.notImplemented("EveChildAudio", "__init__", args);
  }

  /** Carbon method SetEmitterName (MAP_METHOD_AND_WRAP). */
  SetEmitterName(...args) {
    throw _EveChildTransform.notImplemented("EveChildAudio", "SetEmitterName", args);
  }
  static {
    _initClass();
  }
}

export { _EveChildAudio as EveChildAudio };
//# sourceMappingURL=EveChildAudio.js.map
