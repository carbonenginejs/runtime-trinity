import { applyDecs2311 as _applyDecs2311 } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_child, _init_extra_child, _init_name, _init_extra_name, _init_weighting, _init_extra_weighting;

/** EveProceduralMethodRandomParameter (eve/child/procedural/selection) - generated from schema shapeHash 8b32e583.... */
let _EveProceduralMethodR;
class EveProceduralMethodRandomParameter extends CjsModel {
  static {
    ({
      e: [_init_child, _init_extra_child, _init_name, _init_extra_name, _init_weighting, _init_extra_weighting],
      c: [_EveProceduralMethodR, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProceduralMethodRandomParameter",
      family: "eve/child/procedural/selection"
    })], [[[io, io.notify, io, io.persist, void 0, type.objectRef("EveChild")], 16, "child"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.int32], 16, "weighting"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_weighting(this);
  }
  /** m_child (EveChildRefPtr) [READWRITE, PERSIST, NOTIFY] */
  child = _init_child(this, null);

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_child(this), _init_name(this, ""));

  /** m_weighting (int) [READWRITE, PERSIST, NOTIFY] */
  weighting = (_init_extra_name(this), _init_weighting(this, 1));
  static {
    _initClass();
  }
}

export { _EveProceduralMethodR as EveProceduralMethodRandomParameter };
//# sourceMappingURL=EveProceduralMethodRandomParameter.js.map
