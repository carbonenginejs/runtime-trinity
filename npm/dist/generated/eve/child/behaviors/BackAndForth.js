import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_behaviorPriority, _init_extra_behaviorPriority, _init_enabled, _init_extra_enabled, _init_locatorType, _init_extra_locatorType, _init_locatorSet, _init_extra_locatorSet, _init_arrivedRadius, _init_extra_arrivedRadius, _init_distFromOrigin, _init_extra_distFromOrigin, _init_slowDownRadius, _init_extra_slowDownRadius, _init_backAndForthWeight, _init_extra_backAndForthWeight, _init_fxBehavior, _init_extra_fxBehavior, _init_target, _init_extra_target, _init_parent, _init_extra_parent, _init_secondsToTurn, _init_extra_secondsToTurn, _init_locatorSetName, _init_extra_locatorSetName;

/** BackAndForth (eve/child/behaviors) - generated from schema shapeHash 65fc70a3.... */
let _BackAndForth;
new class extends _identity {
  static [class BackAndForth extends CjsModel {
    static {
      ({
        e: [_init_behaviorPriority, _init_extra_behaviorPriority, _init_enabled, _init_extra_enabled, _init_locatorType, _init_extra_locatorType, _init_locatorSet, _init_extra_locatorSet, _init_arrivedRadius, _init_extra_arrivedRadius, _init_distFromOrigin, _init_extra_distFromOrigin, _init_slowDownRadius, _init_extra_slowDownRadius, _init_backAndForthWeight, _init_extra_backAndForthWeight, _init_fxBehavior, _init_extra_fxBehavior, _init_target, _init_extra_target, _init_parent, _init_extra_parent, _init_secondsToTurn, _init_extra_secondsToTurn, _init_locatorSetName, _init_extra_locatorSetName, _initProto],
        c: [_BackAndForth, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "BackAndForth",
        family: "eve/child/behaviors"
      })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "behaviorPriority"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "enabled"], [[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("LocatorType")], 16, "locatorType"], [[io, io.persist, void 0, type.list("EveLocatorSets")], 16, "locatorSet"], [[io, io.persist, type, type.float32], 16, "arrivedRadius"], [[io, io.persist, type, type.float32], 16, "distFromOrigin"], [[io, io.persist, type, type.float32], 16, "slowDownRadius"], [[io, io.persist, type, type.float32], 16, "backAndForthWeight"], [[io, io.persist, void 0, type.model("IBehavior")], 16, "fxBehavior"], [[io, io.persist, void 0, type.model("EveSpaceObject2")], 16, "target"], [[io, io.persist, void 0, type.model("EveSpaceObject2")], 16, "parent"], [[io, io.readwrite, type, type.float32], 16, "secondsToTurn"], [[io, io.persist, type, type.string], 16, "locatorSetName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddLocatorSet"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_locatorSetName(this);
    }
    /** m_priority (int32_t) [READWRITE, PERSIST, NOTIFY, ENUM] */
    behaviorPriority = (_initProto(this), _init_behaviorPriority(this, 0));

    /** m_enabled (bool) [READWRITE, PERSIST, NOTIFY, ENUM] */
    enabled = (_init_extra_behaviorPriority(this), _init_enabled(this, true));

    /** m_locatorType (LocatorType - enum LocatorType) [READWRITE, PERSIST, ENUM, NOTIFY] */
    locatorType = (_init_extra_enabled(this), _init_locatorType(this, 0));

    /** m_locatorSets (PEveLocatorSetsVector) [READ, PERSIST] */
    locatorSet = (_init_extra_locatorType(this), _init_locatorSet(this, []));

    /** m_arrivedRadius (float) [READWRITE, PERSIST] */
    arrivedRadius = (_init_extra_locatorSet(this), _init_arrivedRadius(this, 50));

    /** m_distFromOrigin (float) [READWRITE, PERSIST] */
    distFromOrigin = (_init_extra_arrivedRadius(this), _init_distFromOrigin(this, 20));

    /** m_slowDownRadius (float) [READWRITE, PERSIST] */
    slowDownRadius = (_init_extra_distFromOrigin(this), _init_slowDownRadius(this, 200));

    /** m_backAndForthWeight (float) [READWRITE, PERSIST] */
    backAndForthWeight = (_init_extra_slowDownRadius(this), _init_backAndForthWeight(this, 100));

    /** m_fxBehavior (IBehavior*) [READWRITE, PERSIST] */
    fxBehavior = (_init_extra_backAndForthWeight(this), _init_fxBehavior(this, null));

    /** m_target (EveSpaceObject2*) [READWRITE, PERSIST] */
    target = (_init_extra_fxBehavior(this), _init_target(this, null));

    /** m_parent (EveSpaceObject2*) [READWRITE, PERSIST] */
    parent = (_init_extra_target(this), _init_parent(this, null));

    /** m_seconds (float) [READWRITE] */
    secondsToTurn = (_init_extra_parent(this), _init_secondsToTurn(this, 0.25));

    /** m_locatorSetName (BlueSharedString) [READWRITE, PERSIST] */
    locatorSetName = (_init_extra_secondsToTurn(this), _init_locatorSetName(this, "damage"));

    /** Carbon method AddLocatorSet (MAP_METHOD_AND_WRAP). */
    AddLocatorSet(...args) {
      throw new Error("BackAndForth.AddLocatorSet is not implemented in CarbonEngineJS.");
    }
  }];
  LocatorType = Object.freeze({
    LOCAL_LOCATORS: 0,
    PARENT_LOCATORS: 1,
    TARGET_LOCATORS: 2
  });
  constructor() {
    super(_BackAndForth), _initClass();
  }
}();

export { _BackAndForth as BackAndForth };
//# sourceMappingURL=BackAndForth.js.map
