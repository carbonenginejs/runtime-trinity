import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { TriOperator } from '@carbonenginejs/runtime-const/graphics';

let _initClass, _init_operator, _init_extra_operator, _init_value, _init_extra_value, _init_start, _init_extra_start, _init_functions, _init_extra_functions, _init_name, _init_extra_name;

/** TriVectorSequencer (trinityCore) - generated from schema shapeHash 06302e18.... */
let _TriVectorSequencer;
new class extends _identity {
  static [class TriVectorSequencer extends CjsModel {
    static {
      ({
        e: [_init_operator, _init_extra_operator, _init_value, _init_extra_value, _init_start, _init_extra_start, _init_functions, _init_extra_functions, _init_name, _init_extra_name],
        c: [_TriVectorSequencer, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriVectorSequencer",
        family: "trinityCore"
      })], [[[io, io.persist, type, type.int32, void 0, schema.enum("TRIOPERATOR")], 16, "operator"], [[io, io.persist, type, type.vec3], 16, "value"], [[io, io.persist, type, type.float64], 16, "start"], [[io, io.persist, void 0, type.list("ITriVectorFunction")], 16, "functions"], [[io, io.persist, type, type.string], 16, "name"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_name(this);
    }
    /** mOperator (TRIOPERATOR - enum TRIOPERATOR) [READWRITE, PERSIST, ENUM] */
    operator = _init_operator(this, 0);

    /** mValue (Vector3) [READWRITE, PERSIST] */
    value = (_init_extra_operator(this), _init_value(this, vec3.create()));

    /** mStart (Be::Time) [READWRITE, PERSIST] */
    start = (_init_extra_value(this), _init_start(this, 0));

    /** mFunctions (PITriVectorFunctionVector) [READ, PERSIST] */
    functions = (_init_extra_start(this), _init_functions(this, []));

    /** mName (std::wstring) [READWRITE, PERSIST] */
    name = (_init_extra_functions(this), _init_name(this, ""));
  }];
  TRIOPERATOR = TriOperator;
  constructor() {
    super(_TriVectorSequencer), _initClass();
  }
}();

export { _TriVectorSequencer as TriVectorSequencer };
//# sourceMappingURL=TriVectorSequencer.js.map
