import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_lifeTimeFormula, _init_extra_lifeTimeFormula, _init_activationOverLifetime, _init_extra_activationOverLifetime, _init_activationValue, _init_extra_activationValue, _init_playTime, _init_extra_playTime, _init_crossFadeDuration, _init_extra_crossFadeDuration, _init_crossFadeIntensity, _init_extra_crossFadeIntensity, _init_perInstanceOffset, _init_extra_perInstanceOffset, _init_attributeMultiplier, _init_extra_attributeMultiplier, _init_startsActive, _init_extra_startsActive, _init_restartPlayTimeWhenInactive, _init_extra_restartPlayTimeWhenInactive, _init_finalAttributeMultiplier, _init_extra_finalAttributeMultiplier, _init_active, _init_extra_active, _init_delayedActivation, _init_extra_delayedActivation;

/** EveSmartLightBaseAttributeModifier (eve/smartLights/attributeModifiers) - generated from schema shapeHash d70f7c45.... */
let _EveSmartLightBaseAtt;
new class extends _identity {
  static [class EveSmartLightBaseAttributeModifier extends CjsModel {
    static {
      ({
        e: [_init_lifeTimeFormula, _init_extra_lifeTimeFormula, _init_activationOverLifetime, _init_extra_activationOverLifetime, _init_activationValue, _init_extra_activationValue, _init_playTime, _init_extra_playTime, _init_crossFadeDuration, _init_extra_crossFadeDuration, _init_crossFadeIntensity, _init_extra_crossFadeIntensity, _init_perInstanceOffset, _init_extra_perInstanceOffset, _init_attributeMultiplier, _init_extra_attributeMultiplier, _init_startsActive, _init_extra_startsActive, _init_restartPlayTimeWhenInactive, _init_extra_restartPlayTimeWhenInactive, _init_finalAttributeMultiplier, _init_extra_finalAttributeMultiplier, _init_active, _init_extra_active, _init_delayedActivation, _init_extra_delayedActivation],
        c: [_EveSmartLightBaseAtt, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveSmartLightBaseAttributeModifier",
        family: "eve/smartLights/attributeModifiers"
      })], [[[io, io.persist, type, type.int32, void 0, schema.enum("LifeTimeFormulas")], 16, "lifeTimeFormula"], [[io, io.persist, void 0, type.model("Tr2CurveScalar")], 16, "activationOverLifetime"], [[io, io.read, type, type.float32], 16, "activationValue"], [[io, io.read, type, type.float32], 16, "playTime"], [[io, io.persist, type, type.float32], 16, "crossFadeDuration"], [[io, io.persist, type, type.float32], 16, "crossFadeIntensity"], [[io, io.persist, type, type.float32], 16, "perInstanceOffset"], [[io, io.persist, type, type.float32], 16, "attributeMultiplier"], [[io, io.persist, type, type.boolean], 16, "startsActive"], [[io, io.persist, type, type.boolean], 16, "restartPlayTimeWhenInactive"], [[io, io.read, type, type.float32], 16, "finalAttributeMultiplier"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "active"], [[io, io.persist, type, type.float32], 16, "delayedActivation"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_delayedActivation(this);
    }
    /** m_lifeTimeFormula (LifeTimeFormulas - enum LifeTimeFormulas) [READWRITE, PERSIST, ENUM] */
    lifeTimeFormula = _init_lifeTimeFormula(this, 0);

    /** m_activationOverLifetime (Tr2CurveScalarPtr) [READWRITE, PERSIST] */
    activationOverLifetime = (_init_extra_lifeTimeFormula(this), _init_activationOverLifetime(this, null));

    /** m_activationValue (float) [READ] */
    activationValue = (_init_extra_activationOverLifetime(this), _init_activationValue(this, 1));

    /** m_playTime (float) [READ] */
    playTime = (_init_extra_activationValue(this), _init_playTime(this, 0));

    /** m_crossFadeDuration (float) [READWRITE, PERSIST] */
    crossFadeDuration = (_init_extra_playTime(this), _init_crossFadeDuration(this, 1));

    /** m_crossFadeIntensity (float) [READWRITE, PERSIST] */
    crossFadeIntensity = (_init_extra_crossFadeDuration(this), _init_crossFadeIntensity(this, 1));

    /** m_perInstanceOffset (float) [READWRITE, PERSIST] */
    perInstanceOffset = (_init_extra_crossFadeIntensity(this), _init_perInstanceOffset(this, 0));

    /** m_activationStrength (float) [READWRITE, PERSIST] */
    attributeMultiplier = (_init_extra_perInstanceOffset(this), _init_attributeMultiplier(this, 1));

    /** m_startsActive (bool) [READWRITE, PERSIST] */
    startsActive = (_init_extra_attributeMultiplier(this), _init_startsActive(this, true));

    /** m_restartPlayTimeWhenInactive (bool) [READWRITE, PERSIST] */
    restartPlayTimeWhenInactive = (_init_extra_startsActive(this), _init_restartPlayTimeWhenInactive(this, true));

    /** m_finalActivationStrength (float) [READ] */
    finalAttributeMultiplier = (_init_extra_restartPlayTimeWhenInactive(this), _init_finalAttributeMultiplier(this, 1));

    /** m_active (bool) [READWRITE, PERSIST, NOTIFY] */
    active = (_init_extra_finalAttributeMultiplier(this), _init_active(this, true));

    /** m_delayedActivation (float) [READWRITE, PERSIST] */
    delayedActivation = (_init_extra_active(this), _init_delayedActivation(this, 0));
  }];
  LifeTimeFormulas = Object.freeze({
    PER_INSTANCE_LIFETIME: 0,
    PER_MODIFIER_PLAYTIME: 1,
    STATIC: 2
  });
  constructor() {
    super(_EveSmartLightBaseAtt), _initClass();
  }
}();

export { _EveSmartLightBaseAtt as EveSmartLightBaseAttributeModifier };
//# sourceMappingURL=EveSmartLightBaseAttributeModifier.js.map
