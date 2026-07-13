import { applyDecs2311 as _applyDecs2311 } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_parameters, _init_extra_parameters, _init_debugVolumes, _init_extra_debugVolumes, _init_thresholdAttribute, _init_extra_thresholdAttribute, _init_selectedChild, _init_extra_selectedChild, _init_seed_temp, _init_extra_seed_temp;

/** EveProceduralMethodAttributeMap (eve/child/procedural/selection) - generated from schema shapeHash 691cb5f9.... */
let _EveProceduralMethodA;
class EveProceduralMethodAttributeMap extends CjsModel {
  static {
    ({
      e: [_init_parameters, _init_extra_parameters, _init_debugVolumes, _init_extra_debugVolumes, _init_thresholdAttribute, _init_extra_thresholdAttribute, _init_selectedChild, _init_extra_selectedChild, _init_seed_temp, _init_extra_seed_temp],
      c: [_EveProceduralMethodA, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProceduralMethodAttributeMap",
      family: "eve/child/procedural/selection"
    })], [[[io, io.persist, void 0, type.list("EveProceduralMethodAttributeMapParameter")], 16, "parameters"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "debugVolumes"], [[io, io.persist, type, type.string], 16, "thresholdAttribute"], [[io, io.read, type, type.int32], 16, "selectedChild"], [[io, io.notify, io, io.readwrite, type, type.string], 16, "seed_temp"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_seed_temp(this);
  }
  /** m_parameters (PEveProceduralMethodAttributeMapParameterVector) [READ, PERSIST] */
  parameters = _init_parameters(this, []);

  /** m_debugVolumes (PIEveVolumeVector) [READ, PERSIST] */
  debugVolumes = (_init_extra_parameters(this), _init_debugVolumes(this, []));

  /** m_mappedAttribute (BlueSharedString) [READWRITE, PERSIST] */
  thresholdAttribute = (_init_extra_debugVolumes(this), _init_thresholdAttribute(this, ""));

  /** m_selectedChildIndex (int) [READ] */
  selectedChild = (_init_extra_thresholdAttribute(this), _init_selectedChild(this, -1));

  /** m_seed (BlueSharedString) [READWRITE, NOTIFY] */
  seed_temp = (_init_extra_selectedChild(this), _init_seed_temp(this, ""));
  static {
    _initClass();
  }
}

export { _EveProceduralMethodA as EveProceduralMethodAttributeMap };
//# sourceMappingURL=EveProceduralMethodAttributeMap.js.map
