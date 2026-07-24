import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_morphTargetVertexDataOffset, _init_extra_morphTargetVertexDataOffset, _init_morphTargetAnimationDataOffset, _init_extra_morphTargetAnimationDataOffset, _init_activeMorphTargetsCount, _init_extra_activeMorphTargetsCount, _init_bakedMorphTargetVertexDataOffset, _init_extra_bakedMorphTargetVertexDataOffset, _init_vertexDataOffset, _init_extra_vertexDataOffset, _init_vertexDataStride, _init_extra_vertexDataStride, _init_vertexDataPositionOffset, _init_extra_vertexDataPositionOffset, _init_vertexDataTangentOffset, _init_extra_vertexDataTangentOffset, _init_vertexCount, _init_extra_vertexCount, _init_padding, _init_extra_padding, _init_padding2, _init_extra_padding2, _init_padding3, _init_extra_padding3;

/** MergeMorphsConstantBuffer (eve/perObjectData) - generated from schema shapeHash d2be9c7e.... */
let _MergeMorphsConstantB;
class MergeMorphsConstantBuffer extends CjsModel {
  static {
    ({
      e: [_init_morphTargetVertexDataOffset, _init_extra_morphTargetVertexDataOffset, _init_morphTargetAnimationDataOffset, _init_extra_morphTargetAnimationDataOffset, _init_activeMorphTargetsCount, _init_extra_activeMorphTargetsCount, _init_bakedMorphTargetVertexDataOffset, _init_extra_bakedMorphTargetVertexDataOffset, _init_vertexDataOffset, _init_extra_vertexDataOffset, _init_vertexDataStride, _init_extra_vertexDataStride, _init_vertexDataPositionOffset, _init_extra_vertexDataPositionOffset, _init_vertexDataTangentOffset, _init_extra_vertexDataTangentOffset, _init_vertexCount, _init_extra_vertexCount, _init_padding, _init_extra_padding, _init_padding2, _init_extra_padding2, _init_padding3, _init_extra_padding3],
      c: [_MergeMorphsConstantB, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "MergeMorphsConstantBuffer",
      family: "eve/perObjectData"
    })], [[[type, type.uint32], 16, "morphTargetVertexDataOffset"], [[type, type.uint32], 16, "morphTargetAnimationDataOffset"], [[type, type.uint32], 16, "activeMorphTargetsCount"], [[type, type.uint32], 16, "bakedMorphTargetVertexDataOffset"], [[type, type.uint32], 16, "vertexDataOffset"], [[type, type.uint32], 16, "vertexDataStride"], [[type, type.uint32], 16, "vertexDataPositionOffset"], [[type, type.uint32], 16, "vertexDataTangentOffset"], [[type, type.uint32], 16, "vertexCount"], [[type, type.uint32], 16, "padding1"], [[type, type.uint32], 16, "padding2"], [[type, type.uint32], 16, "padding3"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_padding3(this);
  }
  /** morphTargetVertexDataOffset (uint32_t) */
  morphTargetVertexDataOffset = _init_morphTargetVertexDataOffset(this, 0);

  /** morphTargetAnimationDataOffset (uint32_t) */
  morphTargetAnimationDataOffset = (_init_extra_morphTargetVertexDataOffset(this), _init_morphTargetAnimationDataOffset(this, 0));

  /** activeMorphTargetsCount (uint32_t) */
  activeMorphTargetsCount = (_init_extra_morphTargetAnimationDataOffset(this), _init_activeMorphTargetsCount(this, 0));

  /** bakedMorphTargetVertexDataOffset (uint32_t) */
  bakedMorphTargetVertexDataOffset = (_init_extra_activeMorphTargetsCount(this), _init_bakedMorphTargetVertexDataOffset(this, 0));

  /** vertexDataOffset (uint32_t) */
  vertexDataOffset = (_init_extra_bakedMorphTargetVertexDataOffset(this), _init_vertexDataOffset(this, 0));

  /** vertexDataStride (uint32_t) */
  vertexDataStride = (_init_extra_vertexDataOffset(this), _init_vertexDataStride(this, 0));

  /** vertexDataPositionOffset (uint32_t) */
  vertexDataPositionOffset = (_init_extra_vertexDataStride(this), _init_vertexDataPositionOffset(this, 0));

  /** vertexDataTangentOffset (uint32_t) */
  vertexDataTangentOffset = (_init_extra_vertexDataPositionOffset(this), _init_vertexDataTangentOffset(this, 0));

  /** vertexCount (uint32_t) */
  vertexCount = (_init_extra_vertexDataTangentOffset(this), _init_vertexCount(this, 0));

  /** padding1 (uint32_t) */
  padding1 = (_init_extra_vertexCount(this), _init_padding(this, 0));

  /** padding2 (uint32_t) */
  padding2 = (_init_extra_padding(this), _init_padding2(this, 0));

  /** padding3 (uint32_t) */
  padding3 = (_init_extra_padding2(this), _init_padding3(this, 0));
  static {
    _initClass();
  }
}

export { _MergeMorphsConstantB as MergeMorphsConstantBuffer };
//# sourceMappingURL=MergeMorphsConstantBuffer.js.map
