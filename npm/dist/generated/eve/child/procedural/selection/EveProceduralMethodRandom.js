import { applyDecs2311 as _applyDecs2311 } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_parameters, _init_extra_parameters, _init_debugVolumes, _init_extra_debugVolumes, _init_name, _init_extra_name, _init_totalWeight, _init_extra_totalWeight, _init_seedName, _init_extra_seedName, _init_selectedChild, _init_extra_selectedChild, _init_seed_temp, _init_extra_seed_temp;

/** EveProceduralMethodRandom (eve/child/procedural/selection) - generated from schema shapeHash 9e2d2332.... */
let _EveProceduralMethodR;
class EveProceduralMethodRandom extends CjsModel {
  static {
    ({
      e: [_init_parameters, _init_extra_parameters, _init_debugVolumes, _init_extra_debugVolumes, _init_name, _init_extra_name, _init_totalWeight, _init_extra_totalWeight, _init_seedName, _init_extra_seedName, _init_selectedChild, _init_extra_selectedChild, _init_seed_temp, _init_extra_seed_temp],
      c: [_EveProceduralMethodR, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProceduralMethodRandom",
      family: "eve/child/procedural/selection"
    })], [[[io, io.persist, void 0, type.list("EveProceduralMethodRandomParameter")], 16, "parameters"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "debugVolumes"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.int32], 16, "totalWeight"], [[io, io.persist, type, type.string], 16, "seedName"], [[io, io.read, type, type.int32], 16, "selectedChild"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "seed_temp"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_seed_temp(this);
  }
  /** m_parameters (PEveProceduralMethodRandomParameterVector) [READ, PERSIST] */
  parameters = _init_parameters(this, []);

  /** m_debugVolumes (PIEveVolumeVector) [READ, PERSIST] */
  debugVolumes = (_init_extra_parameters(this), _init_debugVolumes(this, []));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_debugVolumes(this), _init_name(this, ""));

  /** m_totalWeight (int) [READ] */
  totalWeight = (_init_extra_name(this), _init_totalWeight(this, 0));

  /** m_seedName (BlueSharedString) [READWRITE, PERSIST] */
  seedName = (_init_extra_totalWeight(this), _init_seedName(this, ""));

  /** m_selectedChildIndex (int) [READ] */
  selectedChild = (_init_extra_seedName(this), _init_selectedChild(this, -1));

  /** m_seed (float) [READWRITE, NOTIFY] */
  seed_temp = (_init_extra_selectedChild(this), _init_seed_temp(this, -1));
  static {
    _initClass();
  }
}

export { _EveProceduralMethodR as EveProceduralMethodRandom };
//# sourceMappingURL=EveProceduralMethodRandom.js.map
