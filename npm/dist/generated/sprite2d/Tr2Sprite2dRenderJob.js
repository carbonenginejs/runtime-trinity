import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { Tr2SpriteObjectBase as _Tr2SpriteObjectBase } from './Tr2SpriteObjectBase.js';

let _initClass, _init_renderJob, _init_extra_renderJob;

/** Tr2Sprite2dRenderJob (sprite2d) - generated from schema shapeHash 63d1c19f.... */
let _Tr2Sprite2dRenderJob;
class Tr2Sprite2dRenderJob extends _Tr2SpriteObjectBase {
  static {
    ({
      e: [_init_renderJob, _init_extra_renderJob],
      c: [_Tr2Sprite2dRenderJob, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Sprite2dRenderJob",
      family: "sprite2d"
    })], [[[io, io.readwrite, void 0, type.objectRef("TriRenderJob")], 16, "renderJob"]], 0, void 0, _Tr2SpriteObjectBase));
  }
  constructor(...args) {
    super(...args);
    _init_extra_renderJob(this);
  }
  /** m_renderJob (TriRenderJobPtr) [READWRITE] */
  renderJob = _init_renderJob(this, null);
  static {
    _initClass();
  }
}

export { _Tr2Sprite2dRenderJob as Tr2Sprite2dRenderJob };
//# sourceMappingURL=Tr2Sprite2dRenderJob.js.map
