import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2ManipulationTool as _Tr2ManipulationTool } from './Tr2ManipulationTool.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_scale, _init_extra_scale;

/** Tr2ScalingTool (trinityCore) - generated from schema shapeHash 2fe4088f.... */
let _Tr2ScalingTool;
class Tr2ScalingTool extends _Tr2ManipulationTool {
  static {
    ({
      e: [_init_scale, _init_extra_scale, _initProto],
      c: [_Tr2ScalingTool, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ScalingTool",
      family: "trinityCore"
    })], [[[io, io.read, type, type.vec3], 16, "scale"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ResetPrimitives"]], 0, void 0, _Tr2ManipulationTool));
  }
  constructor(...args) {
    super(...args);
    _init_extra_scale(this);
  }
  /** m_scale (Vector3) [READ] */
  scale = (_initProto(this), _init_scale(this, vec3.fromValues(1, 1, 1)));

  /** Carbon method ResetPrimitives (MAP_METHOD_AND_WRAP). */
  ResetPrimitives(...args) {
    throw new Error("Tr2ScalingTool.ResetPrimitives is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2ScalingTool as Tr2ScalingTool };
//# sourceMappingURL=Tr2ScalingTool.js.map
