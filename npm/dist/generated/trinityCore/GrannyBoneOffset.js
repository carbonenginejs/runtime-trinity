import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_m, _init_extra_m, _init_transforms, _init_extra_transforms, _init_riggedTransforms, _init_extra_riggedTransforms;

/** GrannyBoneOffset (trinityCore) - generated from schema shapeHash dffd953b.... */
let _GrannyBoneOffset;
class GrannyBoneOffset extends CjsModel {
  static {
    ({
      e: [_init_m, _init_extra_m, _init_transforms, _init_extra_transforms, _init_riggedTransforms, _init_extra_riggedTransforms, _initProto],
      c: [_GrannyBoneOffset, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "GrannyBoneOffset",
      family: "trinityCore"
    })], [[[type, type.float32], 16, "m"], [type.map("unknown"), 0, "transforms"], [[type, type.unknown], 16, "riggedTransforms"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearTransforms"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetRotation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetOffset"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_riggedTransforms(this);
  }
  /** m (float) */
  m = (_initProto(this), _init_m(this, 0));

  /** m_transforms (TransformsMap) */
  transforms = (_init_extra_m(this), _init_transforms(this, new Map()));

  /** m_riggedTransforms (TrackableStdVector<const float*>) */
  riggedTransforms = (_init_extra_transforms(this), _init_riggedTransforms(this, null));

  /** Carbon method ClearTransforms (MAP_METHOD_AND_WRAP). */
  ClearTransforms(...args) {
    throw CjsModel.notImplemented("GrannyBoneOffset", "ClearTransforms", args);
  }

  /** Carbon method SetRotation (MAP_METHOD_AND_WRAP). */
  SetRotation(...args) {
    throw CjsModel.notImplemented("GrannyBoneOffset", "SetRotation", args);
  }

  /** Carbon method SetOffset (MAP_METHOD_AND_WRAP). */
  SetOffset(...args) {
    throw CjsModel.notImplemented("GrannyBoneOffset", "SetOffset", args);
  }
  static {
    _initClass();
  }
}

export { _GrannyBoneOffset as GrannyBoneOffset };
//# sourceMappingURL=GrannyBoneOffset.js.map
