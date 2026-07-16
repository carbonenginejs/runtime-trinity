import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_targetObjects, _init_extra_targetObjects, _init_objectCount, _init_extra_objectCount, _init_clipSphere, _init_extra_clipSphere, _init_sourceRadius, _init_extra_sourceRadius, _init_sourceObject, _init_extra_sourceObject, _init_multiplier, _init_extra_multiplier, _init_speed, _init_extra_speed, _init_sourceLocatorSet, _init_extra_sourceLocatorSet, _init_name, _init_extra_name, _init_range, _init_extra_range, _init_display, _init_extra_display, _init_effect, _init_extra_effect;

/** EveChildBulletStorm (eve/child) - generated from schema shapeHash 31dfe6d2.... */
let _EveChildBulletStorm;
class EveChildBulletStorm extends CjsModel {
  static {
    ({
      e: [_init_targetObjects, _init_extra_targetObjects, _init_objectCount, _init_extra_objectCount, _init_clipSphere, _init_extra_clipSphere, _init_sourceRadius, _init_extra_sourceRadius, _init_sourceObject, _init_extra_sourceObject, _init_multiplier, _init_extra_multiplier, _init_speed, _init_extra_speed, _init_sourceLocatorSet, _init_extra_sourceLocatorSet, _init_name, _init_extra_name, _init_range, _init_extra_range, _init_display, _init_extra_display, _init_effect, _init_extra_effect, _initProto],
      c: [_EveChildBulletStorm, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildBulletStorm",
      family: "eve/child"
    })], [[[io, io.notify, io, io.read, void 0, type.list("IEveSpaceObject2")], 16, "targetObjects"], [[io, io.read, type, type.uint32], 16, "objectCount"], [[io, io.read, type, type.float32], 16, "clipSphere"], [[io, io.read, type, type.float32], 16, "sourceRadius"], [[io, io.notify, io, io.readwrite, void 0, type.objectRef("EveSpaceObject2")], 16, "sourceObject"], [[io, io.notify, io, io.persist, type, type.uint32], 16, "multiplier"], [[io, io.notify, io, io.persist, type, type.float32], 16, "speed"], [[io, io.notify, io, io.persist, type, type.string], 16, "sourceLocatorSet"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.float32], 16, "range"], [[io, io.readwrite, type, type.boolean], 16, "display"], [[io, io.persist, void 0, type.model("Tr2Effect")], 16, "effect"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "CanChangeState"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartEffect"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StopEffect"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_effect(this);
  }
  /** m_targetObjects (PIEveSpaceObject2Vector) [READ, NOTIFY] */
  targetObjects = (_initProto(this), _init_targetObjects(this, []));

  /** m_objectCount (unsigned int) [READ] */
  objectCount = (_init_extra_targetObjects(this), _init_objectCount(this, 0));

  /** m_clipSphere (float) [READ] */
  clipSphere = (_init_extra_objectCount(this), _init_clipSphere(this, 1));

  /** m_sourceRadius (float) [READ] */
  sourceRadius = (_init_extra_clipSphere(this), _init_sourceRadius(this, 0));

  /** m_sourceObject (EveSpaceObject2Ptr) [READWRITE, NOTIFY] */
  sourceObject = (_init_extra_sourceRadius(this), _init_sourceObject(this, null));

  /** m_multiplier (uint32_t) [READWRITE, PERSIST, NOTIFY] */
  multiplier = (_init_extra_sourceObject(this), _init_multiplier(this, 1));

  /** m_speed (float) [READWRITE, PERSIST, NOTIFY] */
  speed = (_init_extra_multiplier(this), _init_speed(this, 1000));

  /** m_sourceLocatorSet (std::string) [READWRITE, PERSIST, NOTIFY] */
  sourceLocatorSet = (_init_extra_speed(this), _init_sourceLocatorSet(this, ""));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_sourceLocatorSet(this), _init_name(this, ""));

  /** m_range (float) [READWRITE, PERSIST] */
  range = (_init_extra_name(this), _init_range(this, 1000));

  /** m_display (bool) [READWRITE] */
  display = (_init_extra_range(this), _init_display(this, true));

  /** m_effect (Tr2EffectPtr) [READWRITE, PERSIST] */
  effect = (_init_extra_display(this), _init_effect(this, null));

  /** Carbon method CanChangeState (MAP_METHOD_AND_WRAP). */
  CanChangeState(...args) {
    throw new Error("EveChildBulletStorm.CanChangeState is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Rebuild (MAP_METHOD_AND_WRAP). */
  Rebuild(...args) {
    throw new Error("EveChildBulletStorm.Rebuild is not implemented in CarbonEngineJS.");
  }

  /** Carbon method StartEffect (MAP_METHOD_AND_WRAP). */
  StartEffect(...args) {
    throw new Error("EveChildBulletStorm.StartEffect is not implemented in CarbonEngineJS.");
  }

  /** Carbon method StopEffect (MAP_METHOD_AND_WRAP). */
  StopEffect(...args) {
    throw new Error("EveChildBulletStorm.StopEffect is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveChildBulletStorm as EveChildBulletStorm };
//# sourceMappingURL=EveChildBulletStorm.js.map
