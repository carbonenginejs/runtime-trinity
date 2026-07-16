import { applyDecs2311 as _applyDecs2311 } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_parameters, _init_extra_parameters, _init_debugVolumes, _init_extra_debugVolumes, _init_startTimeOffset, _init_extra_startTimeOffset, _init_randomizeOrder, _init_extra_randomizeOrder, _init_selectedChild, _init_extra_selectedChild;

/** EveProceduralMethodCycling (eve/child/procedural/selection) - generated from schema shapeHash 2014815d.... */
let _EveProceduralMethodC;
class EveProceduralMethodCycling extends CjsModel {
  static {
    ({
      e: [_init_parameters, _init_extra_parameters, _init_debugVolumes, _init_extra_debugVolumes, _init_startTimeOffset, _init_extra_startTimeOffset, _init_randomizeOrder, _init_extra_randomizeOrder, _init_selectedChild, _init_extra_selectedChild, _initProto],
      c: [_EveProceduralMethodC, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProceduralMethodCycling",
      family: "eve/child/procedural/selection"
    })], [[[io, io.persist, void 0, type.list("EveProceduralMethodCyclingParameter")], 16, "parameters"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "debugVolumes"], [[io, io.persist, type, type.float32], 16, "startTimeOffset"], [[io, io.persist, type, type.boolean], 16, "randomizeOrder"], [[io, io.read, type, type.int32], 16, "selectedChild"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "restart"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_selectedChild(this);
  }
  /** m_parameters (PEveProceduralMethodCyclingParameterVector) [READ, PERSIST] */
  parameters = (_initProto(this), _init_parameters(this, []));

  /** m_debugVolumes (PIEveVolumeVector) [READ, PERSIST] */
  debugVolumes = (_init_extra_parameters(this), _init_debugVolumes(this, []));

  /** m_startTimeOffset (float) [READWRITE, PERSIST] */
  startTimeOffset = (_init_extra_debugVolumes(this), _init_startTimeOffset(this, 0));

  /** m_randomizeOrder (bool) [READWRITE, PERSIST] */
  randomizeOrder = (_init_extra_startTimeOffset(this), _init_randomizeOrder(this, false));

  /** m_selectedChildIndex (int) [READ] */
  selectedChild = (_init_extra_randomizeOrder(this), _init_selectedChild(this, -1));

  /** Carbon method restart -> SelectParameter (MAP_METHOD_AND_WRAP). */
  restart(...args) {
    throw new Error("EveProceduralMethodCycling.restart is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveProceduralMethodC as EveProceduralMethodCycling };
//# sourceMappingURL=EveProceduralMethodCycling.js.map
