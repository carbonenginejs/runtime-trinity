import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initClass, _init_alignBottom, _init_extra_alignBottom, _init_alignRight, _init_extra_alignRight, _init_displayX, _init_extra_displayX, _init_displayY, _init_extra_displayY;

/** TriStepRenderFps (renderJob) - generated from schema shapeHash 940d8899.... */
let _TriStepRenderFps;
class TriStepRenderFps extends _TriRenderStep {
  static {
    ({
      e: [_init_alignBottom, _init_extra_alignBottom, _init_alignRight, _init_extra_alignRight, _init_displayX, _init_extra_displayX, _init_displayY, _init_extra_displayY],
      c: [_TriStepRenderFps, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepRenderFps",
      family: "renderJob"
    })], [[[io, io.readwrite, type, type.boolean], 16, "alignBottom"], [[io, io.readwrite, type, type.boolean], 16, "alignRight"], [[io, io.readwrite, type, type.int32], 16, "displayX"], [[io, io.readwrite, type, type.int32], 16, "displayY"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_displayY(this);
  }
  /** m_alignBottom (bool) [READWRITE] */
  alignBottom = _init_alignBottom(this, true);

  /** m_alignRight (bool) [READWRITE] */
  alignRight = (_init_extra_alignBottom(this), _init_alignRight(this, true));

  /** m_displayX (int) [READWRITE] */
  displayX = (_init_extra_alignRight(this), _init_displayX(this, 0));

  /** m_displayY (int) [READWRITE] */
  displayY = (_init_extra_displayX(this), _init_displayY(this, 0));
  static {
    _initClass();
  }
}

export { _TriStepRenderFps as TriStepRenderFps };
//# sourceMappingURL=TriStepRenderFps.js.map
