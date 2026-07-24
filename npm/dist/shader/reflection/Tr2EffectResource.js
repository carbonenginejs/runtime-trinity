import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, schema } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_isSRGB, _init_extra_isSRGB, _init_isAutoregister, _init_extra_isAutoregister, _init_name, _init_extra_name, _init_type, _init_extra_type, _init_arrayElements, _init_extra_arrayElements;

/** Tr2EffectResource (shader) - generated from schema shapeHash 0b6608fc.... */
let _Tr2EffectResource;
new class extends _identity {
  static [class Tr2EffectResource extends CjsModel {
    static {
      ({
        e: [_init_isSRGB, _init_extra_isSRGB, _init_isAutoregister, _init_extra_isAutoregister, _init_name, _init_extra_name, _init_type, _init_extra_type, _init_arrayElements, _init_extra_arrayElements],
        c: [_Tr2EffectResource, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2EffectResource",
        family: "shader"
      })], [[[type, type.boolean], 16, "isSRGB"], [[type, type.boolean], 16, "isAutoregister"], [[type, type.string], 16, "name"], [[type, type.int32, void 0, schema.enum("Type")], 16, "type"], [[type, type.uint32], 16, "arrayElements"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_arrayElements(this);
    }
    /** isSRGB (bool) */
    isSRGB = _init_isSRGB(this, false);

    /** isAutoregister (bool) */
    isAutoregister = (_init_extra_isSRGB(this), _init_isAutoregister(this, false));

    /** name (const char*) */
    name = (_init_extra_isAutoregister(this), _init_name(this, ""));

    /** type (Type - enum Type) */
    type = (_init_extra_name(this), _init_type(this, 0));

    /** arrayElements (uint32_t) */
    arrayElements = (_init_extra_type(this), _init_arrayElements(this, 0));
  }];
  BINDLESS_SAMPLER = 100;
  Type = Object.freeze({
    TEXTURE_1D: 1,
    TEXTURE_2D: 2,
    TEXTURE_3D: 3,
    TEXTURE_CUBE: 4,
    TEXTURE_TYPELESS: 5,
    BUFFER: 6,
    STRUCTURED_BUFFER: 7,
    TBUFFER: 8,
    BYTEADDRESS_BUFFER: 9,
    UAV_RWTYPED: 10,
    UAV_RWSTRUCTURED: 11,
    UAV_RWBYTEADDRESS: 12,
    UAV_APPEND_STRUCTURED: 13,
    UAV_CONSUME_STRUCTURED: 14,
    UAV_RWSTRUCTURED_WITH_COUNTER: 15
  });
  constructor() {
    super(_Tr2EffectResource), _initClass();
  }
}();

export { _Tr2EffectResource as Tr2EffectResource };
//# sourceMappingURL=Tr2EffectResource.js.map
