import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../../eve/child/EveChildTransform.js';

let _initProto, _initClass, _init_transformModifiers, _init_extra_transformModifiers, _init_selectedObject, _init_extra_selectedObject, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_selectionMethod, _init_extra_selectionMethod;

/** EveChildProceduralContainer (eve/child/procedural) - generated from schema shapeHash 91d6cbc5.... */
let _EveChildProceduralCo;
class EveChildProceduralContainer extends _EveChildTransform {
  static {
    ({
      e: [_init_transformModifiers, _init_extra_transformModifiers, _init_selectedObject, _init_extra_selectedObject, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_selectionMethod, _init_extra_selectionMethod, _initProto],
      c: [_EveChildProceduralCo, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildProceduralContainer",
      family: "eve/child/procedural"
    })], [[[io, io.persist, void 0, type.list("IEveChildTransformModifier")], 16, "transformModifiers"], [[io, io.read, void 0, type.objectRef("IEveSpaceObjectChild")], 16, "selectedObject"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, void 0, type.model("IEveProceduralSelectionMethod")], 16, "selectionMethod"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetMethodVariableName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetProceduralContainerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartControllers"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_selectionMethod(this);
  }
  /** m_transformModifiers (PIEveChildTransformModifierVector) [READ, PERSIST] */
  transformModifiers = (_initProto(this), _init_transformModifiers(this, []));

  /** m_selectedObject (IEveSpaceObjectChildPtr) [READ] */
  selectedObject = (_init_extra_transformModifiers(this), _init_selectedObject(this, null));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_selectedObject(this), _init_name(this, ""));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_name(this), _init_display(this, true));

  /** m_selectionMethod (IEveProceduralSelectionMethodPtr) [READWRITE, PERSIST] */
  selectionMethod = (_init_extra_display(this), _init_selectionMethod(this, null));

  /** Carbon method GetMethodVariableName (MAP_METHOD_AND_WRAP). */
  GetMethodVariableName(...args) {
    throw new Error("EveChildProceduralContainer.GetMethodVariableName is not implemented in CarbonEngineJS.");
  }

  /** Carbon method HandleControllerEvent (MAP_METHOD_AND_WRAP). */
  HandleControllerEvent(...args) {
    throw new Error("EveChildProceduralContainer.HandleControllerEvent is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetControllerVariable (MAP_METHOD_AND_WRAP). */
  SetControllerVariable(...args) {
    throw new Error("EveChildProceduralContainer.SetControllerVariable is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetProceduralContainerVariable (MAP_METHOD_AND_WRAP). */
  SetProceduralContainerVariable(...args) {
    throw new Error("EveChildProceduralContainer.SetProceduralContainerVariable is not implemented in CarbonEngineJS.");
  }

  /** Carbon method StartControllers (MAP_METHOD_AND_WRAP). */
  StartControllers(...args) {
    throw new Error("EveChildProceduralContainer.StartControllers is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveChildProceduralCo as EveChildProceduralContainer };
//# sourceMappingURL=EveChildProceduralContainer.js.map
