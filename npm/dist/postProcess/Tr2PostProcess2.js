import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { Tr2PPDepthOfFieldEffect as _Tr2PPDepthOfFieldEff } from './Tr2PPDepthOfFieldEffect.js';

let _initProto, _initClass, _init_signalLoss, _init_extra_signalLoss, _init_godRays, _init_extra_godRays, _init_bloom, _init_extra_bloom, _init_dynamicExposure, _init_extra_dynamicExposure, _init_filmGrain, _init_extra_filmGrain, _init_desaturate, _init_extra_desaturate, _init_fade, _init_extra_fade, _init_luts, _init_extra_luts, _init_lut, _init_extra_lut, _init_vignette, _init_extra_vignette, _init_fog, _init_extra_fog, _init_depthOfField, _init_extra_depthOfField, _init_taa, _init_extra_taa, _init_tonemapping, _init_extra_tonemapping, _init_colorCorrection, _init_extra_colorCorrection, _init_genericEffect, _init_extra_genericEffect;
let _Tr2PostProcess;
new class extends _identity {
  static [class Tr2PostProcess2 extends CjsModel {
    static {
      ({
        e: [_init_signalLoss, _init_extra_signalLoss, _init_godRays, _init_extra_godRays, _init_bloom, _init_extra_bloom, _init_dynamicExposure, _init_extra_dynamicExposure, _init_filmGrain, _init_extra_filmGrain, _init_desaturate, _init_extra_desaturate, _init_fade, _init_extra_fade, _init_luts, _init_extra_luts, _init_lut, _init_extra_lut, _init_vignette, _init_extra_vignette, _init_fog, _init_extra_fog, _init_depthOfField, _init_extra_depthOfField, _init_taa, _init_extra_taa, _init_tonemapping, _init_extra_tonemapping, _init_colorCorrection, _init_extra_colorCorrection, _init_genericEffect, _init_extra_genericEffect, _initProto],
        c: [_Tr2PostProcess, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2PostProcess2",
        family: "postProcess"
      })], [[[io, io.persist, void 0, type.objectRef("Tr2PPSignalLossEffect")], 16, "signalLoss"], [[io, io.persist, void 0, type.objectRef("Tr2PPGodRaysEffect")], 16, "godRays"], [[io, io.persist, void 0, type.objectRef("Tr2PPBloomEffect")], 16, "bloom"], [[io, io.persist, void 0, type.objectRef("Tr2PPDynamicExposureEffect")], 16, "dynamicExposure"], [[io, io.persist, void 0, type.objectRef("Tr2PPFilmGrainEffect")], 16, "filmGrain"], [[io, io.persist, void 0, type.objectRef("Tr2PPDesaturateEffect")], 16, "desaturate"], [[io, io.persist, void 0, type.objectRef("Tr2PPFadeEffect")], 16, "fade"], [[io, io.persist, void 0, type.list("Tr2PPLutEffect")], 16, "luts"], [[io, io.persist, void 0, type.objectRef("Tr2PPLutEffect")], 16, "lut"], [[io, io.persist, void 0, type.objectRef("Tr2PPVignetteEffect")], 16, "vignette"], [[io, io.persist, void 0, type.objectRef("Tr2PPFogEffect")], 16, "fog"], [[io, io.persist, void 0, type.objectRef("Tr2PPDepthOfFieldEffect")], 16, "depthOfField"], [[io, io.readwrite, void 0, type.objectRef("Tr2PPTaaEffect")], 16, "taa"], [[io, io.persist, void 0, type.objectRef("Tr2PPTonemappingEffect")], 16, "tonemapping"], [[io, io.persist, void 0, type.objectRef("Tr2PPColorCorrectionEffect")], 16, "colorCorrection"], [[io, io.persist, void 0, type.objectRef("Tr2PPGenericEffect")], 16, "genericEffect"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetMipLodBias"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetAvilableSortedLuts"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddLut"], [[carbon, carbon.method, impl, impl.implemented], 18, "ClearLuts"]], 0, void 0, CjsModel));
    }
    // Carbon exposes this as a registered engine setting. Keeping it static makes
    // the graph deterministic while allowing a concrete backend to configure it.

    signalLoss = (_initProto(this), _init_signalLoss(this, null));
    godRays = (_init_extra_signalLoss(this), _init_godRays(this, null));
    bloom = (_init_extra_godRays(this), _init_bloom(this, null));
    dynamicExposure = (_init_extra_bloom(this), _init_dynamicExposure(this, null));
    filmGrain = (_init_extra_dynamicExposure(this), _init_filmGrain(this, null));
    desaturate = (_init_extra_filmGrain(this), _init_desaturate(this, null));
    fade = (_init_extra_desaturate(this), _init_fade(this, null));
    luts = (_init_extra_fade(this), _init_luts(this, []));
    lut = (_init_extra_luts(this), _init_lut(this, null));
    vignette = (_init_extra_lut(this), _init_vignette(this, null));
    fog = (_init_extra_vignette(this), _init_fog(this, null));
    depthOfField = (_init_extra_fog(this), _init_depthOfField(this, null));
    taa = (_init_extra_depthOfField(this), _init_taa(this, null));
    tonemapping = (_init_extra_taa(this), _init_tonemapping(this, null));
    colorCorrection = (_init_extra_tonemapping(this), _init_colorCorrection(this, null));
    genericEffect = (_init_extra_colorCorrection(this), _init_genericEffect(this, null));
    exposureAdjustment = (_init_extra_genericEffect(this), 0);
    GetMipLodBias() {
      return _Tr2PostProcess.IsEffectActive(this.taa) ? -1 : 0;
    }
    GetAvilableSortedLuts(container = [], qualitySetting = _Tr2PostProcess.HIGH) {
      if (qualitySetting < _Tr2PostProcess.LOW) return container;
      container.length = 0;
      if (_Tr2PostProcess.IsEffectActive(this.lut, effect => Number(effect.influence) > 0)) container.push(this.lut);
      for (const lut of this.luts) {
        if (_Tr2PostProcess.IsEffectActive(lut, effect => Number(effect.influence) > 0)) container.push(lut);
      }
      container.sort((a, b) => Number(a.influence) - Number(b.influence));
      return container;
    }
    AddLut(effect) {
      this.luts.push(effect ?? null);
    }
    ClearLuts() {
      this.luts.length = 0;
    }
    GetSignalLossIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.signalLoss, quality, _Tr2PostProcess.LOW, effect => Number(effect.strength) > 0);
    }
    GetGodRaysIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.godRays, quality, _Tr2PostProcess.HIGH, effect => Number(effect.intensity) > 0);
    }
    GetBloomIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.bloom, quality, _Tr2PostProcess.MEDIUM);
    }
    GetDynamicExposureIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.dynamicExposure, quality, _Tr2PostProcess.DynamicExposureQualityRequirement);
    }
    GetFilmGrainIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.filmGrain, quality, _Tr2PostProcess.HIGH, effect => Number(effect.intensity) > 0);
    }
    GetDesaturateIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.desaturate, quality, _Tr2PostProcess.MEDIUM);
    }
    GetFadeIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.fade, quality, _Tr2PostProcess.LOW, effect => Number(effect.intensity) > 0);
    }
    GetVignetteIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.vignette, quality, _Tr2PostProcess.MEDIUM, effect => Number(effect.intensity) > 0 && Number(effect.opacity) > 0);
    }
    GetFogIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.fog, quality, _Tr2PostProcess.HIGH, effect => Number(effect.intensity) > 0);
    }
    GetTaaIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.taa, quality, _Tr2PostProcess.LOW);
    }
    GetDepthOfFieldIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.depthOfField, quality, _Tr2PostProcess.HIGH, effect => _Tr2PostProcess.PostProcessDofEnabled && Number(effect.scale) > 0);
    }
    GetTonemappingIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.tonemapping, quality, _Tr2PostProcess.LOW);
    }
    GetColorCorrectionIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.colorCorrection, quality, _Tr2PostProcess.LOW);
    }
    GetGenericEffectIfAvailable(quality = _Tr2PostProcess.HIGH) {
      return _Tr2PostProcess.GetIfAvailable(this.genericEffect, quality, Number(this.genericEffect?.quality ?? _Tr2PostProcess.MEDIUM));
    }
    SetSignalLoss(effect) {
      this.signalLoss = effect ?? null;
    }
    SetGodRays(effect) {
      this.godRays = effect ?? null;
    }
    SetBloom(effect) {
      this.bloom = effect ?? null;
    }
    SetDynamicExposure(effect) {
      this.dynamicExposure = effect ?? null;
    }
    SetFilmGrain(effect) {
      this.filmGrain = effect ?? null;
    }
    SetDesaturate(effect) {
      this.desaturate = effect ?? null;
    }
    SetFade(effect) {
      this.fade = effect ?? null;
    }
    SetVignette(effect) {
      this.vignette = effect ?? null;
    }
    SetFog(effect) {
      this.fog = effect ?? null;
    }
    SetTaa(effect) {
      this.taa = effect ?? null;
    }
    SetDepthOfField(effect) {
      this.depthOfField = effect ?? null;
    }
    SetTonemapping(effect) {
      this.tonemapping = effect ?? null;
    }
    SetColorCorrection(effect) {
      this.colorCorrection = effect ?? null;
    }
    SetGenericEffect(effect) {
      this.genericEffect = effect ?? null;
    }
    static get PostProcessDofEnabled() {
      return _Tr2PPDepthOfFieldEff.PostProcessDofEnabled;
    }
    static set PostProcessDofEnabled(value) {
      _Tr2PPDepthOfFieldEff.PostProcessDofEnabled = !!value;
    }
    static IsEffectActive(effect, predicate = null) {
      if (!effect) return false;
      if (typeof effect.IsActive === "function") return !!effect.IsActive();
      if (effect.display === false) return false;
      return predicate ? !!predicate(effect) : true;
    }
    static GetIfAvailable(effect, qualitySetting, minimumQuality, predicate = null) {
      return _Tr2PostProcess.IsEffectActive(effect, predicate) && qualitySetting >= minimumQuality ? effect : null;
    }
  }];
  Quality = Object.freeze({
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    COUNT: 3
  });
  LOW = 0;
  MEDIUM = 1;
  HIGH = 2;
  COUNT = 3;
  DynamicExposureQualityRequirement = _Tr2PostProcess.MEDIUM;
  constructor() {
    super(_Tr2PostProcess), _initClass();
  }
}();

export { _Tr2PostProcess as Tr2PostProcess2 };
//# sourceMappingURL=Tr2PostProcess2.js.map
