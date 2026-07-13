import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_minBaseTimeBetweenTriggers, _init_extra_minBaseTimeBetweenTriggers, _init_maxBaseTimeBetweenTriggers, _init_extra_maxBaseTimeBetweenTriggers, _init_travelProgress, _init_extra_travelProgress, _init_destinationsReached, _init_extra_destinationsReached, _init_totalDestinations, _init_extra_totalDestinations, _init_distanceToTravelTimeMultiplier, _init_extra_distanceToTravelTimeMultiplier;

/** EveDistributionSpawnerTriggerSnake (eve/distribution/spawners) - generated from schema shapeHash e942dd2e.... */
let _EveDistributionSpawn;
class EveDistributionSpawnerTriggerSnake extends CjsModel {
  static {
    ({
      e: [_init_minBaseTimeBetweenTriggers, _init_extra_minBaseTimeBetweenTriggers, _init_maxBaseTimeBetweenTriggers, _init_extra_maxBaseTimeBetweenTriggers, _init_travelProgress, _init_extra_travelProgress, _init_destinationsReached, _init_extra_destinationsReached, _init_totalDestinations, _init_extra_totalDestinations, _init_distanceToTravelTimeMultiplier, _init_extra_distanceToTravelTimeMultiplier],
      c: [_EveDistributionSpawn, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveDistributionSpawnerTriggerSnake",
      family: "eve/distribution/spawners"
    })], [[[io, io.persist, type, type.float32], 16, "minBaseTimeBetweenTriggers"], [[io, io.persist, type, type.float32], 16, "maxBaseTimeBetweenTriggers"], [[io, io.read, type, type.float32], 16, "travelProgress"], [[io, io.read, type, type.int32], 16, "destinationsReached"], [[io, io.persist, type, type.int32], 16, "totalDestinations"], [[io, io.persist, type, type.float32], 16, "distanceToTravelTimeMultiplier"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_distanceToTravelTimeMultiplier(this);
  }
  /** m_minTimeBetweenTriggers (float) [READWRITE, PERSIST] */
  minBaseTimeBetweenTriggers = _init_minBaseTimeBetweenTriggers(this, 1);

  /** m_maxTimeBetweenTriggers (float) [READWRITE, PERSIST] */
  maxBaseTimeBetweenTriggers = (_init_extra_minBaseTimeBetweenTriggers(this), _init_maxBaseTimeBetweenTriggers(this, 1));

  /** m_travelProgress (float) [READ] */
  travelProgress = (_init_extra_maxBaseTimeBetweenTriggers(this), _init_travelProgress(this, 1));

  /** m_numDestinationsReached (int32_t) [READ] */
  destinationsReached = (_init_extra_travelProgress(this), _init_destinationsReached(this, 0));

  /** m_totalDestinations (int32_t) [READWRITE, PERSIST] */
  totalDestinations = (_init_extra_destinationsReached(this), _init_totalDestinations(this, 5));

  /** m_distanceToTravelTimeMultiplier (float) [READWRITE, PERSIST] */
  distanceToTravelTimeMultiplier = (_init_extra_totalDestinations(this), _init_distanceToTravelTimeMultiplier(this, 0));
  static {
    _initClass();
  }
}

export { _EveDistributionSpawn as EveDistributionSpawnerTriggerSnake };
//# sourceMappingURL=EveDistributionSpawnerTriggerSnake.js.map
