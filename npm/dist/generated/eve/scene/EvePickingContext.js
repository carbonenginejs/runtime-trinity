import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_readbacks, _init_extra_readbacks, _init_lastPickedX, _init_extra_lastPickedX, _init_lastPickedY, _init_extra_lastPickedY, _init_lastPickedObject, _init_extra_lastPickedObject, _init_lastPickedArea, _init_extra_lastPickedArea;

/** EvePickingContext (eve/scene) - generated from schema shapeHash 8b26b7b7.... */
let _EvePickingContext;
class EvePickingContext extends CjsModel {
  static {
    ({
      e: [_init_readbacks, _init_extra_readbacks, _init_lastPickedX, _init_extra_lastPickedX, _init_lastPickedY, _init_extra_lastPickedY, _init_lastPickedObject, _init_extra_lastPickedObject, _init_lastPickedArea, _init_extra_lastPickedArea],
      c: [_EvePickingContext, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EvePickingContext",
      family: "eve/scene"
    })], [[type.list("EvePendingPickingReadback"), 0, "readbacks"], [[type, type.uint32], 16, "lastPickedX"], [[type, type.uint32], 16, "lastPickedY"], [type.objectRef("IRoot"), 0, "lastPickedObject"], [[type, type.uint32], 16, "lastPickedArea"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_lastPickedArea(this);
  }
  /** m_readbacks (std::vector<std::unique_ptr<EvePendingPickingReadback>>) */
  readbacks = _init_readbacks(this, []);

  /** m_lastPickedX (uint32_t) */
  lastPickedX = (_init_extra_readbacks(this), _init_lastPickedX(this, 0));

  /** m_lastPickedY (uint32_t) */
  lastPickedY = (_init_extra_lastPickedX(this), _init_lastPickedY(this, 0));

  /** m_lastPickedObject (IRootPtr) */
  lastPickedObject = (_init_extra_lastPickedY(this), _init_lastPickedObject(this, null));

  /** m_lastPickedArea (uint32_t) */
  lastPickedArea = (_init_extra_lastPickedObject(this), _init_lastPickedArea(this, 0));
  static {
    _initClass();
  }
}

export { _EvePickingContext as EvePickingContext };
//# sourceMappingURL=EvePickingContext.js.map
