import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_lifetimeModifiers, _init_extra_lifetimeModifiers, _init_locationsCanReTrigger, _init_extra_locationsCanReTrigger, _init_timeOutOnTriggering, _init_extra_timeOutOnTriggering, _init_entitiesSpawned, _init_extra_entitiesSpawned, _init_freePlacements, _init_extra_freePlacements, _init_playtimeMultiplier, _init_extra_playtimeMultiplier, _init_placementGenerators, _init_extra_placementGenerators, _init_placementData, _init_extra_placementData, _init_spawnModifiers, _init_extra_spawnModifiers, _init_spawnTriggers, _init_extra_spawnTriggers;

/** EveBaseDistributionMethod (eve/distribution) - generated from schema shapeHash 498ea86d.... */
let _EveBaseDistributionM;
class EveBaseDistributionMethod extends CjsModel {
  static {
    ({
      e: [_init_lifetimeModifiers, _init_extra_lifetimeModifiers, _init_locationsCanReTrigger, _init_extra_locationsCanReTrigger, _init_timeOutOnTriggering, _init_extra_timeOutOnTriggering, _init_entitiesSpawned, _init_extra_entitiesSpawned, _init_freePlacements, _init_extra_freePlacements, _init_playtimeMultiplier, _init_extra_playtimeMultiplier, _init_placementGenerators, _init_extra_placementGenerators, _init_placementData, _init_extra_placementData, _init_spawnModifiers, _init_extra_spawnModifiers, _init_spawnTriggers, _init_extra_spawnTriggers, _initProto],
      c: [_EveBaseDistributionM, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveBaseDistributionMethod",
      family: "eve/distribution"
    })], [[[io, io.persist, void 0, type.list("IEveDistributionModifier")], 16, "lifetimeModifiers"], [[io, io.persist, type, type.boolean], 16, "locationsCanReTrigger"], [[io, io.persist, type, type.float32], 16, "timeOutOnTriggering"], [[io, io.read, type, type.uint32], 16, "entitiesSpawned"], [[io, io.read, type, type.uint32], 16, "freePlacements"], [[io, io.persist, type, type.float32], 16, "playtimeMultiplier"], [[io, io.persist, void 0, type.list("IEveDistributionPlacementGenerators")], 16, "placementGenerators"], [[io, io.read, void 0, type.list("PlacementDataWithIdentifier")], 16, "placementData"], [[io, io.persist, void 0, type.list("IEveDistributionSpawnModifier")], 16, "spawnModifiers"], [[io, io.persist, void 0, type.list("IEveDistributionSpawner")], 16, "spawnTriggers"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddEntity"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Restart"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_spawnTriggers(this);
  }
  /** m_distributionModifiers (PIEveDistributionModifierVector) [READ, PERSIST] */
  lifetimeModifiers = (_initProto(this), _init_lifetimeModifiers(this, []));

  /** m_locationsCanReTrigger (bool) [READWRITE, PERSIST] */
  locationsCanReTrigger = (_init_extra_lifetimeModifiers(this), _init_locationsCanReTrigger(this, true));

  /** m_timeOutOnTriggering (float) [READWRITE, PERSIST] */
  timeOutOnTriggering = (_init_extra_locationsCanReTrigger(this), _init_timeOutOnTriggering(this, 2));

  /** m_uniqueIDCounter (uint32_t) [READ] */
  entitiesSpawned = (_init_extra_timeOutOnTriggering(this), _init_entitiesSpawned(this, 0));

  /** m_numFreePlacements (uint32_t) [READ] */
  freePlacements = (_init_extra_entitiesSpawned(this), _init_freePlacements(this, 0));

  /** m_playtimeMultiplier (float) [READWRITE, PERSIST] */
  playtimeMultiplier = (_init_extra_freePlacements(this), _init_playtimeMultiplier(this, 1));

  /** m_placementGenerators (PIEveDistributionPlacementGeneratorsVector) [READ, PERSIST] */
  placementGenerators = (_init_extra_playtimeMultiplier(this), _init_placementGenerators(this, []));

  /** m_placementData (PPlacementDataWithIdentifierStructureList) [READ] */
  placementData = (_init_extra_placementGenerators(this), _init_placementData(this, []));

  /** m_distributionSpawnModifiers (PIEveDistributionSpawnModifierVector) [READ, PERSIST] */
  spawnModifiers = (_init_extra_placementData(this), _init_spawnModifiers(this, []));

  /** m_distributionSpawners (PIEveDistributionSpawnerVector) [READ, PERSIST] */
  spawnTriggers = (_init_extra_spawnModifiers(this), _init_spawnTriggers(this, []));

  /** Carbon method AddEntity -> AddEntities (MAP_METHOD_AND_WRAP). */
  AddEntity(...args) {
    throw new Error("EveBaseDistributionMethod.AddEntity is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Restart -> RestartDistribution (MAP_METHOD_AND_WRAP). */
  Restart(...args) {
    throw new Error("EveBaseDistributionMethod.Restart is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveBaseDistributionM as EveBaseDistributionMethod };
//# sourceMappingURL=EveBaseDistributionMethod.js.map
