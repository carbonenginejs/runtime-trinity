import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_fps, _init_extra_fps, _init_frame, _init_extra_frame, _init_time, _init_extra_time, _init_paused, _init_extra_paused, _init_updateOnlyWhenRendered, _init_extra_updateOnlyWhenRendered, _init_resPath, _init_extra_resPath, _init_looped, _init_extra_looped;

/** Tr2TextureAnimation (trinityCore) - generated from schema shapeHash 4d49367f.... */
let _Tr2TextureAnimation;
class Tr2TextureAnimation extends CjsModel {
  static {
    ({
      e: [_init_fps, _init_extra_fps, _init_frame, _init_extra_frame, _init_time, _init_extra_time, _init_paused, _init_extra_paused, _init_updateOnlyWhenRendered, _init_extra_updateOnlyWhenRendered, _init_resPath, _init_extra_resPath, _init_looped, _init_extra_looped, _initProto],
      c: [_Tr2TextureAnimation, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2TextureAnimation",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.float32], 16, "fps"], [[io, io.read, type, type.uint32], 16, "frame"], [[io, io.read, type, type.float32], 16, "time"], [[io, io.persist, type, type.boolean], 16, "paused"], [[io, io.persist, type, type.boolean], 16, "updateOnlyWhenRendered"], [[io, io.notify, io, io.persist, type, type.string], 16, "resPath"], [[io, io.persist, type, type.boolean], 16, "looped"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetChannelNames"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RestartAnimation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_looped(this);
  }
  /** m_fps (float) [READWRITE, PERSIST] */
  fps = (_initProto(this), _init_fps(this, 1));

  /** m_frame (uint32_t) [READ] */
  frame = (_init_extra_fps(this), _init_frame(this, 0));

  /** m_time (float) [READ] */
  time = (_init_extra_frame(this), _init_time(this, 0));

  /** m_paused (bool) [READWRITE, PERSIST] */
  paused = (_init_extra_time(this), _init_paused(this, false));

  /** m_updateOnlyWhenRendered (bool) [READWRITE, PERSIST] */
  updateOnlyWhenRendered = (_init_extra_paused(this), _init_updateOnlyWhenRendered(this, true));

  /** m_filename (std::wstring) [READWRITE, PERSIST, NOTIFY] */
  resPath = (_init_extra_updateOnlyWhenRendered(this), _init_resPath(this, ""));

  /** m_looped (bool) [READWRITE, PERSIST] */
  looped = (_init_extra_resPath(this), _init_looped(this, true));

  /** Carbon method GetChannelNames (MAP_METHOD_AND_WRAP). */
  GetChannelNames(...args) {
    throw CjsModel.notImplemented("Tr2TextureAnimation", "GetChannelNames", args);
  }

  /** Carbon method RestartAnimation (MAP_METHOD_AND_WRAP). */
  RestartAnimation(...args) {
    throw CjsModel.notImplemented("Tr2TextureAnimation", "RestartAnimation", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2TextureAnimation as Tr2TextureAnimation };
//# sourceMappingURL=Tr2TextureAnimation.js.map
