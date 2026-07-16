import { applyDecs2311 as _applyDecs2311 } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_child, _init_extra_child, _init_name, _init_extra_name, _init_threshold, _init_extra_threshold;

/** EveProceduralMethodThresholdParameter (eve/child/procedural/selection) - generated from schema shapeHash e31926d9.... */
let _EveProceduralMethodT;
class EveProceduralMethodThresholdParameter extends CjsModel {
  static {
    ({
      e: [_init_child, _init_extra_child, _init_name, _init_extra_name, _init_threshold, _init_extra_threshold],
      c: [_EveProceduralMethodT, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProceduralMethodThresholdParameter",
      family: "eve/child/procedural/selection"
    })], [[[io, io.notify, io, io.persist, void 0, type.model("EveChild")], 16, "child"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.float32], 16, "threshold"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_threshold(this);
  }
  /** m_child (EveChildRefPtr) [READWRITE, PERSIST, NOTIFY] */
  child = _init_child(this, null);

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_child(this), _init_name(this, ""));

  /** m_threshold (float) [READWRITE, PERSIST, NOTIFY] */
  threshold = (_init_extra_name(this), _init_threshold(this, 1));
  static {
    _initClass();
  }
}

export { _EveProceduralMethodT as EveProceduralMethodThresholdParameter };
//# sourceMappingURL=EveProceduralMethodThresholdParameter.js.map
