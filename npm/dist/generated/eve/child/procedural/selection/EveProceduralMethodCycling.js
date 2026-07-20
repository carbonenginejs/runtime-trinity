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
    })], [[[io, io.persist, void 0, type.list("EveProceduralMethodCyclingParameter")], 16, "parameters"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "debugVolumes"], [[io, io.persist, type, type.float32], 16, "startTimeOffset"], [[io, io.persist, type, type.boolean], 16, "randomizeOrder"], [[io, io.read, type, type.int32], 16, "selectedChild"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("An optional timestamp provides Carbon's current-frame clock deterministically in browser tests.")], 18, "restart"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_selectedChild(this);
  }
  #selectedChildModified = (_initProto(this), false);
  #startTime = 0;

  /** m_parameters (PEveProceduralMethodCyclingParameterVector) [READ, PERSIST] */
  parameters = _init_parameters(this, []);

  /** m_debugVolumes (PIEveVolumeVector) [READ, PERSIST] */
  debugVolumes = (_init_extra_parameters(this), _init_debugVolumes(this, []));

  /** m_startTimeOffset (float) [READWRITE, PERSIST] */
  startTimeOffset = (_init_extra_debugVolumes(this), _init_startTimeOffset(this, 0));

  /** m_randomizeOrder (bool) [READWRITE, PERSIST] */
  randomizeOrder = (_init_extra_startTimeOffset(this), _init_randomizeOrder(this, false));

  /** m_selectedChildIndex (int) [READ] */
  selectedChild = (_init_extra_randomizeOrder(this), _init_selectedChild(this, -1));

  /** Carbon method restart -> SelectParameter (MAP_METHOD_AND_WRAP). */
  restart(timestamp = Date.now() / 1000) {
    const count = this.parameters.length;
    if (count === 0) {
      return false;
    }
    if (this.randomizeOrder && count > 2) {
      const previous = this.selectedChild;
      this.selectedChild = Math.floor(Math.random() * (count - 1));
      if (this.selectedChild >= previous) {
        this.selectedChild++;
      }
    } else {
      this.selectedChild = (this.selectedChild + 1) % count;
    }
    this.#startTime = timestamp - this.startTimeOffset;
    this.#selectedChildModified = true;
    return true;
  }
  static {
    _initClass();
  }
}

export { _EveProceduralMethodC as EveProceduralMethodCycling };
//# sourceMappingURL=EveProceduralMethodCycling.js.map
