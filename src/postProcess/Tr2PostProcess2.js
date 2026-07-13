// Source: E:\carbonengine\trinity\trinity\PostProcess\Tr2PostProcess2.h
// Source: E:\carbonengine\trinity\trinity\PostProcess\Tr2PostProcess2.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { Tr2PPDepthOfFieldEffect } from "./Tr2PPDepthOfFieldEffect.js";


@type.define({ className: "Tr2PostProcess2", family: "postProcess" })
export class Tr2PostProcess2 extends CjsModel
{

  // Carbon exposes this as a registered engine setting. Keeping it static makes
  // the graph deterministic while allowing a concrete backend to configure it.

  @io.persist
  @type.objectRef("Tr2PPSignalLossEffect")
  signalLoss = null;

  @io.persist
  @type.objectRef("Tr2PPGodRaysEffect")
  godRays = null;

  @io.persist
  @type.objectRef("Tr2PPBloomEffect")
  bloom = null;

  @io.persist
  @type.objectRef("Tr2PPDynamicExposureEffect")
  dynamicExposure = null;

  @io.persist
  @type.objectRef("Tr2PPFilmGrainEffect")
  filmGrain = null;

  @io.persist
  @type.objectRef("Tr2PPDesaturateEffect")
  desaturate = null;

  @io.persist
  @type.objectRef("Tr2PPFadeEffect")
  fade = null;

  @io.persist
  @type.list("Tr2PPLutEffect")
  luts = [];

  @io.persist
  @type.objectRef("Tr2PPLutEffect")
  lut = null;

  @io.persist
  @type.objectRef("Tr2PPVignetteEffect")
  vignette = null;

  @io.persist
  @type.objectRef("Tr2PPFogEffect")
  fog = null;

  @io.persist
  @type.objectRef("Tr2PPDepthOfFieldEffect")
  depthOfField = null;

  @io.readwrite
  @type.objectRef("Tr2PPTaaEffect")
  taa = null;

  @io.persist
  @type.objectRef("Tr2PPTonemappingEffect")
  tonemapping = null;

  @io.persist
  @type.objectRef("Tr2PPColorCorrectionEffect")
  colorCorrection = null;

  @io.persist
  @type.objectRef("Tr2PPGenericEffect")
  genericEffect = null;

  exposureAdjustment = 0;

  @carbon.method
  @impl.implemented
  GetMipLodBias()
  {
    return Tr2PostProcess2.IsEffectActive(this.taa) ? -1 : 0;
  }

  @carbon.method
  @impl.implemented
  GetAvilableSortedLuts(container = [], qualitySetting = Tr2PostProcess2.HIGH)
  {
    if (qualitySetting < Tr2PostProcess2.LOW) return container;
    container.length = 0;
    if (Tr2PostProcess2.IsEffectActive(this.lut, effect => Number(effect.influence) > 0)) container.push(this.lut);
    for (const lut of this.luts)
    {
      if (Tr2PostProcess2.IsEffectActive(lut, effect => Number(effect.influence) > 0)) container.push(lut);
    }
    container.sort((a, b) => Number(a.influence) - Number(b.influence));
    return container;
  }

  @carbon.method
  @impl.implemented
  AddLut(effect)
  {
    this.luts.push(effect ?? null);
  }

  @carbon.method
  @impl.implemented
  ClearLuts()
  {
    this.luts.length = 0;
  }

  GetSignalLossIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.signalLoss, quality, Tr2PostProcess2.LOW, effect => Number(effect.strength) > 0);
  }

  GetGodRaysIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.godRays, quality, Tr2PostProcess2.HIGH, effect => Number(effect.intensity) > 0);
  }

  GetBloomIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.bloom, quality, Tr2PostProcess2.MEDIUM);
  }

  GetDynamicExposureIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.dynamicExposure, quality, Tr2PostProcess2.DynamicExposureQualityRequirement);
  }

  GetFilmGrainIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.filmGrain, quality, Tr2PostProcess2.HIGH, effect => Number(effect.intensity) > 0);
  }

  GetDesaturateIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.desaturate, quality, Tr2PostProcess2.MEDIUM);
  }

  GetFadeIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.fade, quality, Tr2PostProcess2.LOW, effect => Number(effect.intensity) > 0);
  }

  GetVignetteIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.vignette, quality, Tr2PostProcess2.MEDIUM, effect => Number(effect.intensity) > 0 && Number(effect.opacity) > 0);
  }

  GetFogIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.fog, quality, Tr2PostProcess2.HIGH, effect => Number(effect.intensity) > 0);
  }

  GetTaaIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.taa, quality, Tr2PostProcess2.LOW);
  }

  GetDepthOfFieldIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.depthOfField, quality, Tr2PostProcess2.HIGH, effect => Tr2PostProcess2.PostProcessDofEnabled && Number(effect.scale) > 0);
  }

  GetTonemappingIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.tonemapping, quality, Tr2PostProcess2.LOW);
  }

  GetColorCorrectionIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.colorCorrection, quality, Tr2PostProcess2.LOW);
  }

  GetGenericEffectIfAvailable(quality = Tr2PostProcess2.HIGH)
  {
    return Tr2PostProcess2.GetIfAvailable(this.genericEffect, quality, Number(this.genericEffect?.quality ?? Tr2PostProcess2.MEDIUM));
  }

  SetSignalLoss(effect)
  {
    this.signalLoss = effect ?? null;
  }

  SetGodRays(effect)
  {
    this.godRays = effect ?? null;
  }

  SetBloom(effect)
  {
    this.bloom = effect ?? null;
  }

  SetDynamicExposure(effect)
  {
    this.dynamicExposure = effect ?? null;
  }

  SetFilmGrain(effect)
  {
    this.filmGrain = effect ?? null;
  }

  SetDesaturate(effect)
  {
    this.desaturate = effect ?? null;
  }

  SetFade(effect)
  {
    this.fade = effect ?? null;
  }

  SetVignette(effect)
  {
    this.vignette = effect ?? null;
  }

  SetFog(effect)
  {
    this.fog = effect ?? null;
  }

  SetTaa(effect)
  {
    this.taa = effect ?? null;
  }

  SetDepthOfField(effect)
  {
    this.depthOfField = effect ?? null;
  }

  SetTonemapping(effect)
  {
    this.tonemapping = effect ?? null;
  }

  SetColorCorrection(effect)
  {
    this.colorCorrection = effect ?? null;
  }

  SetGenericEffect(effect)
  {
    this.genericEffect = effect ?? null;
  }

  static Quality = Object.freeze({
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    COUNT: 3
  });

  static LOW = 0;

  static MEDIUM = 1;

  static HIGH = 2;

  static COUNT = 3;

  static DynamicExposureQualityRequirement = Tr2PostProcess2.MEDIUM;

  static get PostProcessDofEnabled()
  {
    return Tr2PPDepthOfFieldEffect.PostProcessDofEnabled;
  }

  static set PostProcessDofEnabled(value)
  {
    Tr2PPDepthOfFieldEffect.PostProcessDofEnabled = !!value;
  }

  static IsEffectActive(effect, predicate = null)
  {
    if (!effect) return false;
    if (typeof effect.IsActive === "function") return !!effect.IsActive();
    if (effect.display === false) return false;
    return predicate ? !!predicate(effect) : true;
  }

  static GetIfAvailable(effect, qualitySetting, minimumQuality, predicate = null)
  {
    return Tr2PostProcess2.IsEffectActive(effect, predicate) && qualitySetting >= minimumQuality ? effect : null;
  }
}
