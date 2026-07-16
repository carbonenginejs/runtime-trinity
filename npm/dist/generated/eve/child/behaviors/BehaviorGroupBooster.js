import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initProto, _initClass, _init_display, _init_extra_display, _init_boosterOffset, _init_extra_boosterOffset, _init_atlasIndex, _init_extra_atlasIndex, _init_atlasIndex2, _init_extra_atlasIndex2, _init_boosterEffect, _init_extra_boosterEffect, _init_flareCount, _init_extra_flareCount, _init_displayAmbientFlare, _init_extra_displayAmbientFlare, _init_displayBoosters, _init_extra_displayBoosters, _init_displayHazeFlare, _init_extra_displayHazeFlare, _init_ambientFlareBrightness, _init_extra_ambientFlareBrightness, _init_haloFlareBrightness, _init_extra_haloFlareBrightness, _init_ambientFlareColor, _init_extra_ambientFlareColor, _init_haloFlareColor, _init_extra_haloFlareColor, _init_lightColor, _init_extra_lightColor, _init_ambientFlareEffect, _init_extra_ambientFlareEffect, _init_haloFlareEffect, _init_extra_haloFlareEffect, _init_ambientFlareNoiseAmplitude, _init_extra_ambientFlareNoiseAmplitude, _init_haloFlareNoiseAmplitude, _init_extra_haloFlareNoiseAmplitude, _init_ambientFlareNoiseOctaves, _init_extra_ambientFlareNoiseOctaves, _init_haloFlareNoiseOctaves, _init_extra_haloFlareNoiseOctaves, _init_ambientFlareNoiseSpeed, _init_extra_ambientFlareNoiseSpeed, _init_haloFlareNoiseSpeed, _init_extra_haloFlareNoiseSpeed, _init_ambientFlareOffset, _init_extra_ambientFlareOffset, _init_haloFlareOffset, _init_extra_haloFlareOffset, _init_lightRadius, _init_extra_lightRadius, _init_ambientFlareScale, _init_extra_ambientFlareScale, _init_haloFlareScale, _init_extra_haloFlareScale;

/** BehaviorGroupBooster (eve/child/behaviors) - generated from schema shapeHash a25b1c8b.... */
let _BehaviorGroupBooster;
class BehaviorGroupBooster extends CjsModel {
  static {
    ({
      e: [_init_display, _init_extra_display, _init_boosterOffset, _init_extra_boosterOffset, _init_atlasIndex, _init_extra_atlasIndex, _init_atlasIndex2, _init_extra_atlasIndex2, _init_boosterEffect, _init_extra_boosterEffect, _init_flareCount, _init_extra_flareCount, _init_displayAmbientFlare, _init_extra_displayAmbientFlare, _init_displayBoosters, _init_extra_displayBoosters, _init_displayHazeFlare, _init_extra_displayHazeFlare, _init_ambientFlareBrightness, _init_extra_ambientFlareBrightness, _init_haloFlareBrightness, _init_extra_haloFlareBrightness, _init_ambientFlareColor, _init_extra_ambientFlareColor, _init_haloFlareColor, _init_extra_haloFlareColor, _init_lightColor, _init_extra_lightColor, _init_ambientFlareEffect, _init_extra_ambientFlareEffect, _init_haloFlareEffect, _init_extra_haloFlareEffect, _init_ambientFlareNoiseAmplitude, _init_extra_ambientFlareNoiseAmplitude, _init_haloFlareNoiseAmplitude, _init_extra_haloFlareNoiseAmplitude, _init_ambientFlareNoiseOctaves, _init_extra_ambientFlareNoiseOctaves, _init_haloFlareNoiseOctaves, _init_extra_haloFlareNoiseOctaves, _init_ambientFlareNoiseSpeed, _init_extra_ambientFlareNoiseSpeed, _init_haloFlareNoiseSpeed, _init_extra_haloFlareNoiseSpeed, _init_ambientFlareOffset, _init_extra_ambientFlareOffset, _init_haloFlareOffset, _init_extra_haloFlareOffset, _init_lightRadius, _init_extra_lightRadius, _init_ambientFlareScale, _init_extra_ambientFlareScale, _init_haloFlareScale, _init_extra_haloFlareScale, _initProto],
      c: [_BehaviorGroupBooster, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "BehaviorGroupBooster",
      family: "eve/child/behaviors"
    })], [[[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.vec3], 16, "boosterOffset"], [[io, io.persist, type, type.uint32], 16, "atlasIndex0"], [[io, io.persist, type, type.uint32], 16, "atlasIndex1"], [[io, io.persist, void 0, type.model("Tr2Effect")], 16, "boosterEffect"], [[io, io.read, type, type.uint32], 16, "flareCount"], [[io, io.readwrite, type, type.boolean], 16, "displayAmbientFlare"], [[io, io.readwrite, type, type.boolean], 16, "displayBoosters"], [[io, io.readwrite, type, type.boolean], 16, "displayHazeFlare"], [[io, io.notify, io, io.persist, type, type.float32], 16, "ambientFlareBrightness"], [[io, io.notify, io, io.persist, type, type.float32], 16, "haloFlareBrightness"], [[io, io.notify, io, io.persist, type, type.color], 16, "ambientFlareColor"], [[io, io.notify, io, io.persist, type, type.color], 16, "haloFlareColor"], [[io, io.persist, type, type.color], 16, "lightColor"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Effect")], 16, "ambientFlareEffect"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Effect")], 16, "haloFlareEffect"], [[io, io.persist, type, type.float32], 16, "ambientFlareNoiseAmplitude"], [[io, io.persist, type, type.float32], 16, "haloFlareNoiseAmplitude"], [[io, io.persist, type, type.uint32], 16, "ambientFlareNoiseOctaves"], [[io, io.persist, type, type.uint32], 16, "haloFlareNoiseOctaves"], [[io, io.persist, type, type.float32], 16, "ambientFlareNoiseSpeed"], [[io, io.persist, type, type.float32], 16, "haloFlareNoiseSpeed"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "ambientFlareOffset"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "haloFlareOffset"], [[io, io.persist, type, type.float32], 16, "lightRadius"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "ambientFlareScale"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "haloFlareScale"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "InitializeEffects"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_haloFlareScale(this);
  }
  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_initProto(this), _init_display(this, true));

  /** m_boosterOffset (Vector3) [READWRITE, PERSIST] */
  boosterOffset = (_init_extra_display(this), _init_boosterOffset(this, vec3.create()));

  /** m_atlasIndex0 (uint32_t) [READWRITE, PERSIST] */
  atlasIndex0 = (_init_extra_boosterOffset(this), _init_atlasIndex(this, 0));

  /** m_atlasIndex1 (uint32_t) [READWRITE, PERSIST] */
  atlasIndex1 = (_init_extra_atlasIndex(this), _init_atlasIndex2(this, 0));

  /** m_boosterEffect (Tr2EffectPtr) [READWRITE, PERSIST] */
  boosterEffect = (_init_extra_atlasIndex2(this), _init_boosterEffect(this, null));

  /** m_flareCount (unsigned int) [READ] */
  flareCount = (_init_extra_boosterEffect(this), _init_flareCount(this, 0));

  /** m_displayAmbientFlare (bool) [READWRITE] */
  displayAmbientFlare = (_init_extra_flareCount(this), _init_displayAmbientFlare(this, true));

  /** m_displayBoosters (bool) [READWRITE] */
  displayBoosters = (_init_extra_displayAmbientFlare(this), _init_displayBoosters(this, true));

  /** m_displayHazeFlare (bool) [READWRITE] */
  displayHazeFlare = (_init_extra_displayBoosters(this), _init_displayHazeFlare(this, true));

  /** m_ambientFlareBrightness (float) [READWRITE, PERSIST, NOTIFY] */
  ambientFlareBrightness = (_init_extra_displayHazeFlare(this), _init_ambientFlareBrightness(this, 0));

  /** m_haloFlareBrightness (float) [READWRITE, PERSIST, NOTIFY] */
  haloFlareBrightness = (_init_extra_ambientFlareBrightness(this), _init_haloFlareBrightness(this, 0));

  /** m_ambientFlareColor (Color) [READWRITE, PERSIST, NOTIFY] */
  ambientFlareColor = (_init_extra_haloFlareBrightness(this), _init_ambientFlareColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_haloFlareColor (Color) [READWRITE, PERSIST, NOTIFY] */
  haloFlareColor = (_init_extra_ambientFlareColor(this), _init_haloFlareColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_lightColor (Color) [READWRITE, PERSIST] */
  lightColor = (_init_extra_haloFlareColor(this), _init_lightColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_ambientFlareEffect (Tr2EffectPtr) [READWRITE, PERSIST, NOTIFY] */
  ambientFlareEffect = (_init_extra_lightColor(this), _init_ambientFlareEffect(this, null));

  /** m_haloFlareEffect (Tr2EffectPtr) [READWRITE, PERSIST, NOTIFY] */
  haloFlareEffect = (_init_extra_ambientFlareEffect(this), _init_haloFlareEffect(this, null));

  /** m_ambientFlareNoiseAmplitude (float) [READWRITE, PERSIST] */
  ambientFlareNoiseAmplitude = (_init_extra_haloFlareEffect(this), _init_ambientFlareNoiseAmplitude(this, 0.2));

  /** m_haloFlareNoiseAmplitude (float) [READWRITE, PERSIST] */
  haloFlareNoiseAmplitude = (_init_extra_ambientFlareNoiseAmplitude(this), _init_haloFlareNoiseAmplitude(this, 0.2));

  /** m_ambientFlareNoiseOctaves (uint32_t) [READWRITE, PERSIST] */
  ambientFlareNoiseOctaves = (_init_extra_haloFlareNoiseAmplitude(this), _init_ambientFlareNoiseOctaves(this, 1));

  /** m_haloFlareNoiseOctaves (uint32_t) [READWRITE, PERSIST] */
  haloFlareNoiseOctaves = (_init_extra_ambientFlareNoiseOctaves(this), _init_haloFlareNoiseOctaves(this, 1));

  /** m_ambientFlareNoiseSpeed (float) [READWRITE, PERSIST] */
  ambientFlareNoiseSpeed = (_init_extra_haloFlareNoiseOctaves(this), _init_ambientFlareNoiseSpeed(this, 1));

  /** m_haloFlareNoiseSpeed (float) [READWRITE, PERSIST] */
  haloFlareNoiseSpeed = (_init_extra_ambientFlareNoiseSpeed(this), _init_haloFlareNoiseSpeed(this, 1));

  /** m_ambientFlareOffset (Vector3) [READWRITE, PERSIST, NOTIFY] */
  ambientFlareOffset = (_init_extra_haloFlareNoiseSpeed(this), _init_ambientFlareOffset(this, vec3.create()));

  /** m_haloFlareOffset (Vector3) [READWRITE, PERSIST, NOTIFY] */
  haloFlareOffset = (_init_extra_ambientFlareOffset(this), _init_haloFlareOffset(this, vec3.create()));

  /** m_lightRadius (float) [READWRITE, PERSIST] */
  lightRadius = (_init_extra_haloFlareOffset(this), _init_lightRadius(this, 3.5));

  /** m_ambientFlareScale (Vector3) [READWRITE, PERSIST, NOTIFY] */
  ambientFlareScale = (_init_extra_lightRadius(this), _init_ambientFlareScale(this, vec3.fromValues(1, 1, 1)));

  /** m_haloFlareScale (Vector3) [READWRITE, PERSIST, NOTIFY] */
  haloFlareScale = (_init_extra_ambientFlareScale(this), _init_haloFlareScale(this, vec3.fromValues(1, 1, 1)));

  /** Carbon method InitializeEffects (MAP_METHOD_AND_WRAP). */
  InitializeEffects(...args) {
    throw new Error("BehaviorGroupBooster.InitializeEffects is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _BehaviorGroupBooster as BehaviorGroupBooster };
//# sourceMappingURL=BehaviorGroupBooster.js.map
