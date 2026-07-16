import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveSpaceObject2 as _EveSpaceObject } from '../../../eve/spaceObject/EveSpaceObject2.js';

let _initProto, _initClass, _init_usePerspectiveScale, _init_extra_usePerspectiveScale;

/** EveUiObject (eve/ui) - generated from schema shapeHash ea8f8922.... */
let _EveUiObject;
class EveUiObject extends _EveSpaceObject {
  static {
    ({
      e: [_init_usePerspectiveScale, _init_extra_usePerspectiveScale, _initProto],
      c: [_EveUiObject, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveUiObject",
      family: "eve/ui"
    })], [[[io, io.readwrite, type, type.boolean], 16, "usePerspectiveScale"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetVisibilityForArea"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetNameForPickingAreaID"]], 0, void 0, _EveSpaceObject));
  }
  constructor(...args) {
    super(...args);
    _init_extra_usePerspectiveScale(this);
  }
  /** m_usePerspectiveScale (bool) [READWRITE] */
  usePerspectiveScale = (_initProto(this), _init_usePerspectiveScale(this, true));

  /** Carbon method SetVisibilityForArea (MAP_METHOD_AND_WRAP). */
  SetVisibilityForArea(...args) {
    throw new Error("EveUiObject.SetVisibilityForArea is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetNameForPickingAreaID (MAP_METHOD_AND_WRAP). */
  GetNameForPickingAreaID(...args) {
    throw new Error("EveUiObject.GetNameForPickingAreaID is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveUiObject as EveUiObject };
//# sourceMappingURL=EveUiObject.js.map
