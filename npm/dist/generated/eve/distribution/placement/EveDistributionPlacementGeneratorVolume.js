import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_numGenerated, _init_extra_numGenerated, _init_hollowVolume, _init_extra_hollowVolume, _init_falloffFactor, _init_extra_falloffFactor, _init_volume, _init_extra_volume;

/** EveDistributionPlacementGeneratorVolume (eve/distribution/placement) - generated from schema shapeHash d6e2cbac.... */
let _EveDistributionPlace;
class EveDistributionPlacementGeneratorVolume extends CjsModel {
  static {
    ({
      e: [_init_numGenerated, _init_extra_numGenerated, _init_hollowVolume, _init_extra_hollowVolume, _init_falloffFactor, _init_extra_falloffFactor, _init_volume, _init_extra_volume],
      c: [_EveDistributionPlace, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionPlacementGeneratorVolume",
      family: "eve/distribution/placement"
    })], [[[io, io.notify, io, io.persist, type, type.uint32], 16, "numGenerated"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "hollowVolume"], [[io, io.notify, io, io.persist, type, type.float32], 16, "falloffFactor"], [[io, io.persistOnly, void 0, type.model("IEveVolume")], 16, "volume"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_volume(this);
  }
  /** m_numGenerated (uint32_t) [READWRITE, PERSIST, NOTIFY] */
  numGenerated = _init_numGenerated(this, 10);

  /** m_hollowVolume (bool) [READWRITE, PERSIST, NOTIFY] */
  hollowVolume = (_init_extra_numGenerated(this), _init_hollowVolume(this, false));

  /** m_falloffFactor (float) [READWRITE, PERSIST, NOTIFY] */
  falloffFactor = (_init_extra_hollowVolume(this), _init_falloffFactor(this, 1.5));

  /** m_volume (IEveVolumePtr) [PERSISTONLY] */
  volume = (_init_extra_falloffFactor(this), _init_volume(this, null));
  static {
    _initClass();
  }
}

export { _EveDistributionPlace as EveDistributionPlacementGeneratorVolume };
//# sourceMappingURL=EveDistributionPlacementGeneratorVolume.js.map
