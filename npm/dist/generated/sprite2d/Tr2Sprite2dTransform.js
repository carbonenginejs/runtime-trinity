import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2Sprite2dContainerBase as _Tr2Sprite2dContainer } from './Tr2Sprite2dContainerBase.js';
import { vec2 } from '@carbonenginejs/core-math/vec2';

let _initProto, _initClass, _init_rotationCenter, _init_extra_rotationCenter, _init_scalingCenter, _init_extra_scalingCenter, _init_rotation, _init_extra_rotation, _init_scale, _init_extra_scale, _init_scalingRotation, _init_extra_scalingRotation;

/** Tr2Sprite2dTransform (sprite2d) - generated from schema shapeHash 4f4944e4.... */
let _Tr2Sprite2dTransform;
class Tr2Sprite2dTransform extends _Tr2Sprite2dContainer {
  static {
    ({
      e: [_init_rotationCenter, _init_extra_rotationCenter, _init_scalingCenter, _init_extra_scalingCenter, _init_rotation, _init_extra_rotation, _init_scale, _init_extra_scale, _init_scalingRotation, _init_extra_scalingRotation, _initProto],
      c: [_Tr2Sprite2dTransform, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Sprite2dTransform",
      family: "sprite2d"
    })], [[[io, io.notify, io, io.readwrite, type, type.vec2], 16, "rotationCenter"], [[io, io.notify, io, io.readwrite, type, type.vec2], 16, "scalingCenter"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "rotation"], [[io, io.notify, io, io.readwrite, type, type.vec2], 16, "scale"], [[io, io.notify, io, io.readwrite, type, type.float32], 16, "scalingRotation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "TransformPoint"]], 0, void 0, _Tr2Sprite2dContainer));
  }
  constructor(...args) {
    super(...args);
    _init_extra_scalingRotation(this);
  }
  /** m_rotationCenter (Vector2) [READWRITE, NOTIFY] */
  rotationCenter = (_initProto(this), _init_rotationCenter(this, vec2.create()));

  /** m_scalingCenter (Vector2) [READWRITE, NOTIFY] */
  scalingCenter = (_init_extra_rotationCenter(this), _init_scalingCenter(this, vec2.create()));

  /** m_rotation (float) [READWRITE, NOTIFY] */
  rotation = (_init_extra_scalingCenter(this), _init_rotation(this, 0));

  /** m_scale (Vector2) [READWRITE, NOTIFY] */
  scale = (_init_extra_rotation(this), _init_scale(this, vec2.fromValues(1, 1)));

  /** m_scalingRotation (float) [READWRITE, NOTIFY] */
  scalingRotation = (_init_extra_scale(this), _init_scalingRotation(this, 0));

  /** Carbon method TransformPoint (MAP_METHOD_AND_WRAP). */
  TransformPoint(...args) {
    throw new Error("Tr2Sprite2dTransform.TransformPoint is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2Sprite2dTransform as Tr2Sprite2dTransform };
//# sourceMappingURL=Tr2Sprite2dTransform.js.map
