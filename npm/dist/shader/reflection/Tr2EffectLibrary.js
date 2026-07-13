import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_payloadSize, _init_extra_payloadSize, _init_libraryHandle, _init_extra_libraryHandle, _init_rayGenName, _init_extra_rayGenName, _init_missName, _init_extra_missName, _init_closestHitName, _init_extra_closestHitName, _init_anyHitName, _init_extra_anyHitName, _init_intersectionName, _init_extra_intersectionName, _init_hitGroupName, _init_extra_hitGroupName, _init_globalInput, _init_extra_globalInput, _init_localInput, _init_extra_localInput, _init_globalResourceSetDesc, _init_extra_globalResourceSetDesc;

/** Tr2EffectLibrary (shader) - generated from schema shapeHash fc6addd6.... */
let _Tr2EffectLibrary;
class Tr2EffectLibrary extends CjsModel {
  static {
    ({
      e: [_init_payloadSize, _init_extra_payloadSize, _init_libraryHandle, _init_extra_libraryHandle, _init_rayGenName, _init_extra_rayGenName, _init_missName, _init_extra_missName, _init_closestHitName, _init_extra_closestHitName, _init_anyHitName, _init_extra_anyHitName, _init_intersectionName, _init_extra_intersectionName, _init_hitGroupName, _init_extra_hitGroupName, _init_globalInput, _init_extra_globalInput, _init_localInput, _init_extra_localInput, _init_globalResourceSetDesc, _init_extra_globalResourceSetDesc],
      c: [_Tr2EffectLibrary, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2EffectLibrary",
      family: "shader"
    })], [[[type, type.uint32], 16, "payloadSize"], [[type, type.uint32], 16, "libraryHandle"], [[type, type.string], 16, "rayGenName"], [[type, type.string], 16, "missName"], [[type, type.string], 16, "closestHitName"], [[type, type.string], 16, "anyHitName"], [[type, type.string], 16, "intersectionName"], [[type, type.string], 16, "hitGroupName"], [type.rawStruct("Tr2EffectStageInput"), 0, "globalInput"], [type.rawStruct("Tr2EffectStageInput"), 0, "localInput"], [type.rawStruct("Tr2ResourceSetDescriptionAL"), 0, "globalResourceSetDesc"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_globalResourceSetDesc(this);
  }
  /** payloadSize (uint32_t) */
  payloadSize = _init_payloadSize(this, 0);

  /** libraryHandle (uint32_t) */
  libraryHandle = (_init_extra_payloadSize(this), _init_libraryHandle(this, 0));

  /** rayGenName (BlueSharedStringW) */
  rayGenName = (_init_extra_libraryHandle(this), _init_rayGenName(this, ""));

  /** missName (BlueSharedStringW) */
  missName = (_init_extra_rayGenName(this), _init_missName(this, ""));

  /** closestHitName (BlueSharedStringW) */
  closestHitName = (_init_extra_missName(this), _init_closestHitName(this, ""));

  /** anyHitName (BlueSharedStringW) */
  anyHitName = (_init_extra_closestHitName(this), _init_anyHitName(this, ""));

  /** intersectionName (BlueSharedStringW) */
  intersectionName = (_init_extra_anyHitName(this), _init_intersectionName(this, ""));

  /** hitGroupName (BlueSharedStringW) */
  hitGroupName = (_init_extra_intersectionName(this), _init_hitGroupName(this, ""));

  /** globalInput (Tr2EffectStageInput) */
  globalInput = (_init_extra_hitGroupName(this), _init_globalInput(this, null));

  /** localInput (Tr2EffectStageInput) */
  localInput = (_init_extra_globalInput(this), _init_localInput(this, null));

  /** globalResourceSetDesc (Tr2ResourceSetDescriptionAL) */
  globalResourceSetDesc = (_init_extra_localInput(this), _init_globalResourceSetDesc(this, null));
  static {
    _initClass();
  }
}

export { _Tr2EffectLibrary as Tr2EffectLibrary };
//# sourceMappingURL=Tr2EffectLibrary.js.map
