import { applyDecs2311 as _applyDecs2311 } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_child, _init_extra_child, _init_name, _init_extra_name;

/** EveProceduralMethodAttributeMapParameter (eve/child/procedural/selection) - generated from schema shapeHash 5880f54c.... */
let _EveProceduralMethodA;
class EveProceduralMethodAttributeMapParameter extends CjsModel {
  static {
    ({
      e: [_init_child, _init_extra_child, _init_name, _init_extra_name],
      c: [_EveProceduralMethodA, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProceduralMethodAttributeMapParameter",
      family: "eve/child/procedural/selection"
    })], [[[io, io.notify, io, io.persist, void 0, type.model("EveChild")], 16, "child"], [[io, io.persist, type, type.string], 16, "name"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_child (EveChildRefPtr) [READWRITE, PERSIST, NOTIFY] */
  child = _init_child(this, null);

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_child(this), _init_name(this, ""));
  static {
    _initClass();
  }
}

export { _EveProceduralMethodA as EveProceduralMethodAttributeMapParameter };
//# sourceMappingURL=EveProceduralMethodAttributeMapParameter.js.map
