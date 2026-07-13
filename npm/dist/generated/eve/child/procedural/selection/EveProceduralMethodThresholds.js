import { applyDecs2311 as _applyDecs2311 } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_parameters, _init_extra_parameters, _init_debugVolumes, _init_extra_debugVolumes, _init_name, _init_extra_name, _init_thresholdAttribute, _init_extra_thresholdAttribute, _init_selectedChild, _init_extra_selectedChild, _init_seed_temp, _init_extra_seed_temp;

/** EveProceduralMethodThresholds (eve/child/procedural/selection) - generated from schema shapeHash 794abb42.... */
let _EveProceduralMethodT;
class EveProceduralMethodThresholds extends CjsModel {
  static {
    ({
      e: [_init_parameters, _init_extra_parameters, _init_debugVolumes, _init_extra_debugVolumes, _init_name, _init_extra_name, _init_thresholdAttribute, _init_extra_thresholdAttribute, _init_selectedChild, _init_extra_selectedChild, _init_seed_temp, _init_extra_seed_temp],
      c: [_EveProceduralMethodT, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProceduralMethodThresholds",
      family: "eve/child/procedural/selection"
    })], [[[io, io.persist, void 0, type.list("EveProceduralMethodThresholdParameter")], 16, "parameters"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "debugVolumes"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.string], 16, "thresholdAttribute"], [[io, io.read, type, type.int32], 16, "selectedChild"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "seed_temp"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_seed_temp(this);
  }
  /** m_parameters (PEveProceduralMethodThresholdParameterVector) [READ, PERSIST] */
  parameters = _init_parameters(this, []);

  /** m_debugVolumes (PIEveVolumeVector) [READ, PERSIST] */
  debugVolumes = (_init_extra_parameters(this), _init_debugVolumes(this, []));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_debugVolumes(this), _init_name(this, ""));

  /** m_thresholdAttribute (BlueSharedString) [READWRITE, PERSIST] */
  thresholdAttribute = (_init_extra_name(this), _init_thresholdAttribute(this, ""));

  /** m_selectedChildIndex (int) [READ] */
  selectedChild = (_init_extra_thresholdAttribute(this), _init_selectedChild(this, -1));

  /** m_seed (float) [READWRITE, NOTIFY] */
  seed_temp = (_init_extra_selectedChild(this), _init_seed_temp(this, -1));
  static {
    _initClass();
  }
}

export { _EveProceduralMethodT as EveProceduralMethodThresholds };
//# sourceMappingURL=EveProceduralMethodThresholds.js.map
