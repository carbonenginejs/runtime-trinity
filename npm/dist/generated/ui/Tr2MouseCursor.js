import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_cursor, _init_extra_cursor, _init_width, _init_extra_width, _init_height, _init_extra_height, _init_pixelData, _init_extra_pixelData;

/** Tr2MouseCursor (ui) - generated from schema shapeHash 5e3831d5.... */
let _Tr2MouseCursor;
class Tr2MouseCursor extends CjsModel {
  static {
    ({
      e: [_init_cursor, _init_extra_cursor, _init_width, _init_extra_width, _init_height, _init_extra_height, _init_pixelData, _init_extra_pixelData, _initProto],
      c: [_Tr2MouseCursor, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2MouseCursor",
      family: "ui"
    })], [[type.rawStruct("HCURSOR"), 0, "cursor"], [[type, type.uint32], 16, "width"], [[type, type.uint32], 16, "height"], [type.rawStruct("char[]"), 0, "pixelData"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Create"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsValid"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_pixelData(this);
  }
  /** m_cursor (HCURSOR) */
  cursor = (_initProto(this), _init_cursor(this, null));

  /** width (uint32_t) */
  width = (_init_extra_cursor(this), _init_width(this, 0));

  /** height (uint32_t) */
  height = (_init_extra_width(this), _init_height(this, 0));

  /** pixelData (std::unique_ptr<char[]>) */
  pixelData = (_init_extra_height(this), _init_pixelData(this, null));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw CjsModel.notImplemented("Tr2MouseCursor", "__init__", args);
  }

  /** Carbon method Create (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  Create(...args) {
    throw CjsModel.notImplemented("Tr2MouseCursor", "Create", args);
  }

  /** Carbon method IsValid (MAP_METHOD_AND_WRAP). */
  IsValid(...args) {
    throw CjsModel.notImplemented("Tr2MouseCursor", "IsValid", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2MouseCursor as Tr2MouseCursor };
//# sourceMappingURL=Tr2MouseCursor.js.map
