import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initProto, _initClass, _init_splineTunnels, _init_extra_splineTunnels, _init_behaviorGroups, _init_extra_behaviorGroups, _init_instanceCount, _init_extra_instanceCount, _init_display, _init_extra_display;

/** EveChildBehaviorSystem (eve/child) - generated from schema shapeHash f2944d57.... */
let _EveChildBehaviorSyst;
class EveChildBehaviorSystem extends _EveChildTransform {
  static {
    ({
      e: [_init_splineTunnels, _init_extra_splineTunnels, _init_behaviorGroups, _init_extra_behaviorGroups, _init_instanceCount, _init_extra_instanceCount, _init_display, _init_extra_display, _initProto],
      c: [_EveChildBehaviorSyst, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildBehaviorSystem",
      family: "eve/child"
    })], [[[io, io.notify, io, io.persist, void 0, type.list("SplineTunnelGroup")], 16, "splineTunnels"], [[io, io.persist, void 0, type.list("BehaviorGroup")], 16, "behaviorGroups"], [[io, io.read, type, type.uint32], 16, "instanceCount"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetVertexElementAddedThroughCode"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_display(this);
  }
  /** m_splineTunnels (PSplineTunnelGroupVector) [READ, PERSIST, NOTIFY] */
  splineTunnels = (_initProto(this), _init_splineTunnels(this, []));

  /** m_behaviorGroups (PBehaviorGroupVector) [READ, PERSIST] */
  behaviorGroups = (_init_extra_splineTunnels(this), _init_behaviorGroups(this, []));

  /** m_instanceCount (unsigned) [READ] */
  instanceCount = (_init_extra_behaviorGroups(this), _init_instanceCount(this, 1));

  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  display = (_init_extra_instanceCount(this), _init_display(this, true));

  /** Carbon method GetVertexElementAddedThroughCode (MAP_METHOD_AND_WRAP). */
  GetVertexElementAddedThroughCode(...args) {
    throw _EveChildTransform.notImplemented("EveChildBehaviorSystem", "GetVertexElementAddedThroughCode", args);
  }
  static {
    _initClass();
  }
}

export { _EveChildBehaviorSyst as EveChildBehaviorSystem };
//# sourceMappingURL=EveChildBehaviorSystem.js.map
