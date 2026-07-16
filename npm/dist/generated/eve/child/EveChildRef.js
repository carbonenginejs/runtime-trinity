import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initProto, _initClass, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_loadChildAutomatically, _init_extra_loadChildAutomatically, _init_resPath, _init_extra_resPath, _init_child, _init_extra_child;

/** EveChildRef (eve/child) - generated from schema shapeHash 25162571.... */
let _EveChildRef;
class EveChildRef extends _EveChildTransform {
  static {
    ({
      e: [_init_display, _init_extra_display, _init_name, _init_extra_name, _init_loadChildAutomatically, _init_extra_loadChildAutomatically, _init_resPath, _init_extra_resPath, _init_child, _init_extra_child, _initProto],
      c: [_EveChildRef, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildRef",
      family: "eve/child"
    })], [[[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "loadChildAutomatically"], [[io, io.notify, io, io.persist, type, type.string], 16, "resPath"], [[io, io.read, void 0, type.objectRef("IEveSpaceObjectChild")], 16, "child"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Reload"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartControllers"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_child(this);
  }
  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  display = (_initProto(this), _init_display(this, true));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_display(this), _init_name(this, ""));

  /** m_loadChildAutomatically (bool) [READWRITE, PERSIST] */
  loadChildAutomatically = (_init_extra_name(this), _init_loadChildAutomatically(this, true));

  /** m_resPath (std::string) [READWRITE, PERSIST, NOTIFY] */
  resPath = (_init_extra_loadChildAutomatically(this), _init_resPath(this, ""));

  /** m_child (IEveSpaceObjectChildPtr) [READ] */
  child = (_init_extra_resPath(this), _init_child(this, null));

  /** Carbon method Reload (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  Reload(...args) {
    throw new Error("EveChildRef.Reload is not implemented in CarbonEngineJS.");
  }

  /** Carbon method HandleControllerEvent (MAP_METHOD_AND_WRAP). */
  HandleControllerEvent(...args) {
    throw new Error("EveChildRef.HandleControllerEvent is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetControllerVariable (MAP_METHOD_AND_WRAP). */
  SetControllerVariable(...args) {
    throw new Error("EveChildRef.SetControllerVariable is not implemented in CarbonEngineJS.");
  }

  /** Carbon method StartControllers (MAP_METHOD_AND_WRAP). */
  StartControllers(...args) {
    throw new Error("EveChildRef.StartControllers is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveChildRef as EveChildRef };
//# sourceMappingURL=EveChildRef.js.map
