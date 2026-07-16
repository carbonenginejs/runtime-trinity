import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initProto, _initClass, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_parameters, _init_extra_parameters, _init_resPath, _init_extra_resPath, _init_plug, _init_extra_plug;

/** EveChildSocket (eve/child) - generated from schema shapeHash e7aa83e3.... */
let _EveChildSocket;
class EveChildSocket extends _EveChildTransform {
  static {
    ({
      e: [_init_display, _init_extra_display, _init_name, _init_extra_name, _init_parameters, _init_extra_parameters, _init_resPath, _init_extra_resPath, _init_plug, _init_extra_plug, _initProto],
      c: [_EveChildSocket, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildSocket",
      family: "eve/child"
    })], [[[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, void 0, type.list("IEveSocketParameter")], 16, "parameters"], [[io, io.notify, io, io.persist, type, type.string], 16, "resPath"], [[io, io.read, void 0, type.objectRef("EveChildPlug")], 16, "plug"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Rebind"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Reload"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartControllers"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_plug(this);
  }
  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  display = (_initProto(this), _init_display(this, true));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_display(this), _init_name(this, ""));

  /** m_parameters (PIEveSocketParameterVector) [READ, PERSIST, NOTIFY] */
  parameters = (_init_extra_name(this), _init_parameters(this, []));

  /** m_plugResPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  resPath = (_init_extra_parameters(this), _init_resPath(this, ""));

  /** m_plug (EveChildPlugPtr) [READ] */
  plug = (_init_extra_resPath(this), _init_plug(this, null));

  /** Carbon method HandleControllerEvent (MAP_METHOD_AND_WRAP). */
  HandleControllerEvent(...args) {
    throw new Error("EveChildSocket.HandleControllerEvent is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Rebind -> BindParameters (MAP_METHOD_AND_WRAP). */
  Rebind(...args) {
    throw new Error("EveChildSocket.Rebind is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Reload (MAP_METHOD_AND_WRAP). */
  Reload(...args) {
    throw new Error("EveChildSocket.Reload is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetControllerVariable (MAP_METHOD_AND_WRAP). */
  SetControllerVariable(...args) {
    throw new Error("EveChildSocket.SetControllerVariable is not implemented in CarbonEngineJS.");
  }

  /** Carbon method StartControllers (MAP_METHOD_AND_WRAP). */
  StartControllers(...args) {
    throw new Error("EveChildSocket.StartControllers is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveChildSocket as EveChildSocket };
//# sourceMappingURL=EveChildSocket.js.map
