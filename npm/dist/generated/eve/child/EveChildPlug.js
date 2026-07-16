import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initProto, _initClass, _init_objects, _init_extra_objects, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_externalParameters, _init_extra_externalParameters, _init_controllers, _init_extra_controllers;

/** EveChildPlug (eve/child) - generated from schema shapeHash 58d32f08.... */
let _EveChildPlug;
class EveChildPlug extends _EveChildTransform {
  static {
    ({
      e: [_init_objects, _init_extra_objects, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_externalParameters, _init_extra_externalParameters, _init_controllers, _init_extra_controllers, _initProto],
      c: [_EveChildPlug, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildPlug",
      family: "eve/child"
    })], [[[io, io.persist, void 0, type.list("IEveSpaceObjectChild")], 16, "objects"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.list("Tr2ExternalParameter")], 16, "externalParameters"], [[io, io.persist, void 0, type.list("ITr2Controller")], 16, "controllers"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartControllers"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_controllers(this);
  }
  /** m_objects (PIEveSpaceObjectChildVector) [READ, PERSIST] */
  objects = (_initProto(this), _init_objects(this, []));

  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  display = (_init_extra_objects(this), _init_display(this, true));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_display(this), _init_name(this, ""));

  /** m_externalParameters (PTr2ExternalParameterVector) [READ, PERSIST] */
  externalParameters = (_init_extra_name(this), _init_externalParameters(this, []));

  /** m_controllers (PITr2ControllerVector) [READ, PERSIST] */
  controllers = (_init_extra_externalParameters(this), _init_controllers(this, []));

  /** Carbon method HandleControllerEvent (MAP_METHOD_AND_WRAP). */
  HandleControllerEvent(...args) {
    throw new Error("EveChildPlug.HandleControllerEvent is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetControllerVariable (MAP_METHOD_AND_WRAP). */
  SetControllerVariable(...args) {
    throw new Error("EveChildPlug.SetControllerVariable is not implemented in CarbonEngineJS.");
  }

  /** Carbon method StartControllers (MAP_METHOD_AND_WRAP). */
  StartControllers(...args) {
    throw new Error("EveChildPlug.StartControllers is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveChildPlug as EveChildPlug };
//# sourceMappingURL=EveChildPlug.js.map
