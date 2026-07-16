import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_connectors, _init_extra_connectors, _init_name, _init_extra_name, _init_lineSet, _init_extra_lineSet, _init_display, _init_extra_display;

/** EveLineContainer (eve/ui) - generated from schema shapeHash dd1621c4.... */
let _EveLineContainer;
class EveLineContainer extends CjsModel {
  static {
    ({
      e: [_init_connectors, _init_extra_connectors, _init_name, _init_extra_name, _init_lineSet, _init_extra_lineSet, _init_display, _init_extra_display],
      c: [_EveLineContainer, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveLineContainer",
      family: "eve/ui"
    })], [[[io, io.persist, void 0, type.list("EveConnector")], 16, "connectors"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.model("EveCurveLineSet")], 16, "lineSet"], [[io, io.readwrite, type, type.boolean], 16, "display"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_display(this);
  }
  /** m_connectors (PEveConnectorVector) [READ, PERSIST] */
  connectors = _init_connectors(this, []);

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_connectors(this), _init_name(this, ""));

  /** m_lineSet (EveCurveLineSetPtr) [READWRITE, PERSIST] */
  lineSet = (_init_extra_name(this), _init_lineSet(this, null));

  /** m_display (bool) [READWRITE] */
  display = (_init_extra_lineSet(this), _init_display(this, true));
  static {
    _initClass();
  }
}

export { _EveLineContainer as EveLineContainer };
//# sourceMappingURL=EveLineContainer.js.map
