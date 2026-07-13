import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_type, _init_extra_type, _init_name, _init_extra_name;

/** Tr2ParticleElementDeclarationName (particle) - generated from schema shapeHash 115c80e5.... */
let _Tr2ParticleElementDe;
class Tr2ParticleElementDeclarationName extends CjsModel {
  static {
    ({
      e: [_init_type, _init_extra_type, _init_name, _init_extra_name],
      c: [_Tr2ParticleElementDe, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ParticleElementDeclarationName",
      family: "particle"
    })], [[[type, type.int32, void 0, schema.enum("Type")], 16, "type"], [[type, type.string], 16, "name"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_type (Type - enum Type) */
  type = _init_type(this, 0);

  /** m_name (std::string) */
  name = (_init_extra_type(this), _init_name(this, ""));
  static {
    _initClass();
  }
}

export { _Tr2ParticleElementDe as Tr2ParticleElementDeclarationName };
//# sourceMappingURL=Tr2ParticleElementDeclarationName.js.map
