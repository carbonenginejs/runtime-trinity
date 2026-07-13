import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_center, _init_extra_center, _init_planeNormal, _init_extra_planeNormal, _init_rotationDegrees, _init_extra_rotationDegrees, _init_semiMajor, _init_extra_semiMajor, _init_semiMinor, _init_extra_semiMinor;

/** EveEllipseDefinition (eve/ui) - generated from schema shapeHash a85f377f.... */
let _EveEllipseDefinition;
class EveEllipseDefinition extends CjsModel {
  static {
    ({
      e: [_init_center, _init_extra_center, _init_planeNormal, _init_extra_planeNormal, _init_rotationDegrees, _init_extra_rotationDegrees, _init_semiMajor, _init_extra_semiMajor, _init_semiMinor, _init_extra_semiMinor],
      c: [_EveEllipseDefinition, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveEllipseDefinition",
      family: "eve/ui"
    })], [[[io, io.notify, io, io.persist, type, type.unknown], 16, "center"], [[io, io.notify, io, io.persist, type, type.unknown], 16, "planeNormal"], [[io, io.notify, io, io.persist, type, type.float32], 16, "rotationDegrees"], [[io, io.notify, io, io.persist, type, type.float32], 16, "semiMajor"], [[io, io.notify, io, io.persist, type, type.float32], 16, "semiMinor"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_semiMinor(this);
  }
  /** m_center (unknown) [READWRITE, NOTIFY, PERSIST] */
  center = _init_center(this, null);

  /** m_planeNormal (unknown) [READWRITE, NOTIFY, PERSIST] */
  planeNormal = (_init_extra_center(this), _init_planeNormal(this, null));

  /** m_rotationDegrees (float) [READWRITE, NOTIFY, PERSIST] */
  rotationDegrees = (_init_extra_planeNormal(this), _init_rotationDegrees(this, 0));

  /** m_semiMajor (float) [READWRITE, NOTIFY, PERSIST] */
  semiMajor = (_init_extra_rotationDegrees(this), _init_semiMajor(this, 1));

  /** m_semiMinor (float) [READWRITE, NOTIFY, PERSIST] */
  semiMinor = (_init_extra_semiMajor(this), _init_semiMinor(this, 1));
  static {
    _initClass();
  }
}

export { _EveEllipseDefinition as EveEllipseDefinition };
//# sourceMappingURL=EveEllipseDefinition.js.map
