import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_tunnelGroupType, _init_extra_tunnelGroupType, _init_splineTunnels, _init_extra_splineTunnels, _init_smoothPullFactor, _init_extra_smoothPullFactor, _init_behaviorWeight, _init_extra_behaviorWeight, _init_enabled, _init_extra_enabled, _init_cornerSmoothener, _init_extra_cornerSmoothener;

/** FollowASpline (eve/child/behaviors) - generated from schema shapeHash b9e40b05.... */
let _FollowASpline;
class FollowASpline extends CjsModel {
  static {
    ({
      e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_tunnelGroupType, _init_extra_tunnelGroupType, _init_splineTunnels, _init_extra_splineTunnels, _init_smoothPullFactor, _init_extra_smoothPullFactor, _init_behaviorWeight, _init_extra_behaviorWeight, _init_enabled, _init_extra_enabled, _init_cornerSmoothener, _init_extra_cornerSmoothener, _initProto],
      c: [_FollowASpline, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "FollowASpline",
      family: "eve/child/behaviors"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.persist, type, type.int32, void 0, schema.enum("TunnelGroupType")], 16, "tunnelGroupType"], [[io, io.persist, void 0, type.list("SplineTunnelGroup")], 16, "splineTunnels"], [[io, io.persist, type, type.float32], 16, "smoothPullFactor"], [[io, io.persist, type, type.float32], 16, "behaviorWeight"], [[io, io.persist, type, type.boolean], 16, "enabled"], [[io, io.persist, type, type.float32], 16, "cornerSmoothener"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "remapTunnels"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_cornerSmoothener(this);
  }
  /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
  behaviorPriority = (_initProto(this), _init_behaviorPriority(this, 0));

  /** m_tunnelGroupType (TunnelGroupType - enum TunnelGroupType) [READWRITE, PERSIST, ENUM] */
  tunnelGroupType = (_init_extra_behaviorPriority(this), _init_tunnelGroupType(this, 2));

  /** m_splineTunnels (PSplineTunnelGroupVector) [READ, PERSIST] */
  splineTunnels = (_init_extra_tunnelGroupType(this), _init_splineTunnels(this, []));

  /** m_smoothPullFactor (float) [READWRITE, PERSIST] */
  smoothPullFactor = (_init_extra_splineTunnels(this), _init_smoothPullFactor(this, 0.8));

  /** m_behaviorWeight (float) [READWRITE, PERSIST] */
  behaviorWeight = (_init_extra_smoothPullFactor(this), _init_behaviorWeight(this, 600));

  /** m_enabled (bool) [READWRITE, PERSIST] */
  enabled = (_init_extra_behaviorWeight(this), _init_enabled(this, true));

  /** m_cornerSmoothener (float) [READWRITE, PERSIST] */
  cornerSmoothener = (_init_extra_enabled(this), _init_cornerSmoothener(this, 0.8));

  /** Carbon method remapTunnels -> UpdateTunnelRegistry (MAP_METHOD_AND_WRAP). */
  remapTunnels(...args) {
    throw CjsModel.notImplemented("FollowASpline", "remapTunnels", args);
  }
  static {
    _initClass();
  }
}

export { _FollowASpline as FollowASpline };
//# sourceMappingURL=FollowASpline.js.map
