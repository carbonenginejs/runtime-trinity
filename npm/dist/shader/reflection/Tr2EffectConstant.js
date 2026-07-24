import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_name, _init_extra_name, _init_offset, _init_extra_offset, _init_size, _init_extra_size, _init_type, _init_extra_type, _init_dimension, _init_extra_dimension, _init_elements, _init_extra_elements, _init_isSRGB, _init_extra_isSRGB, _init_isAutoregister, _init_extra_isAutoregister;

/** Tr2EffectConstant (shader) - generated from schema shapeHash a2b58449.... */
let _Tr2EffectConstant;
new class extends _identity {
  static [class Tr2EffectConstant extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_offset, _init_extra_offset, _init_size, _init_extra_size, _init_type, _init_extra_type, _init_dimension, _init_extra_dimension, _init_elements, _init_extra_elements, _init_isSRGB, _init_extra_isSRGB, _init_isAutoregister, _init_extra_isAutoregister],
        c: [_Tr2EffectConstant, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2EffectConstant",
        family: "shader"
      })], [[[type, type.string], 16, "name"], [[type, type.uint32], 16, "offset"], [[type, type.uint32], 16, "size"], [[type, type.int32, void 0, schema.enum("Type")], 16, "type"], [[type, type.uint32], 16, "dimension"], [[type, type.uint32], 16, "elements"], [[type, type.boolean], 16, "isSRGB"], [[type, type.boolean], 16, "isAutoregister"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_isAutoregister(this);
    }
    /** name (BlueSharedString) */
    name = _init_name(this, "");

    /** offset (unsigned) */
    offset = (_init_extra_name(this), _init_offset(this, 0));

    /** size (unsigned) */
    size = (_init_extra_offset(this), _init_size(this, 0));

    /** type (Type - enum Type) */
    type = (_init_extra_size(this), _init_type(this, 0));

    /** dimension (unsigned) */
    dimension = (_init_extra_type(this), _init_dimension(this, 0));

    /** elements (unsigned) */
    elements = (_init_extra_dimension(this), _init_elements(this, 0));

    /** isSRGB (bool) */
    isSRGB = (_init_extra_elements(this), _init_isSRGB(this, false));

    /** isAutoregister (bool) */
    isAutoregister = (_init_extra_isSRGB(this), _init_isAutoregister(this, false));
  }];
  Type = Object.freeze({
    FLOAT: 0,
    INT: 1,
    UINT: 2,
    BOOL: 3,
    OTHER: 4
  });
  constructor() {
    super(_Tr2EffectConstant), _initClass();
  }
}();

export { _Tr2EffectConstant as Tr2EffectConstant };
//# sourceMappingURL=Tr2EffectConstant.js.map
