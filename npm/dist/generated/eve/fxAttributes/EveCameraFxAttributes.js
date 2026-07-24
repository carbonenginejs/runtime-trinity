import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';

let _initClass, _init_name, _init_extra_name, _init_lookAngleToObject, _init_extra_lookAngleToObject, _init_objectRotation, _init_extra_objectRotation, _init_rotationWithChildTransform, _init_extra_rotationWithChildTransform, _init_cameraRotation, _init_extra_cameraRotation, _init_distanceToCamera, _init_extra_distanceToCamera;

/** EveCameraFxAttributes (eve/fxAttributes) - generated from schema shapeHash f012bff4.... */
let _EveCameraFxAttribute;
class EveCameraFxAttributes extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_lookAngleToObject, _init_extra_lookAngleToObject, _init_objectRotation, _init_extra_objectRotation, _init_rotationWithChildTransform, _init_extra_rotationWithChildTransform, _init_cameraRotation, _init_extra_cameraRotation, _init_distanceToCamera, _init_extra_distanceToCamera],
      c: [_EveCameraFxAttribute, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveCameraFxAttributes",
      family: "eve/fxAttributes"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.float32], 16, "lookAngleToObject"], [[io, io.read, type, type.vec3], 16, "objectRotation"], [[io, io.read, type, type.vec3], 16, "rotationWithChildTransform"], [[io, io.read, type, type.vec3], 16, "cameraRotation"], [[io, io.read, type, type.float32], 16, "distanceToCamera"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_distanceToCamera(this);
  }
  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_lookAngleToObject (float) [READ] */
  lookAngleToObject = (_init_extra_name(this), _init_lookAngleToObject(this, 0));

  /** m_objectRotation (Vector3) [READ] */
  objectRotation = (_init_extra_lookAngleToObject(this), _init_objectRotation(this, vec3.create()));

  /** m_rotationWithChildTransform (Vector3) [READ] */
  rotationWithChildTransform = (_init_extra_objectRotation(this), _init_rotationWithChildTransform(this, vec3.create()));

  /** m_cameraRotation (Vector3) [READ] */
  cameraRotation = (_init_extra_rotationWithChildTransform(this), _init_cameraRotation(this, vec3.create()));

  /** m_distanceToCamera (float) [READ] */
  distanceToCamera = (_init_extra_cameraRotation(this), _init_distanceToCamera(this, 0));
  static {
    _initClass();
  }
}

export { _EveCameraFxAttribute as EveCameraFxAttributes };
//# sourceMappingURL=EveCameraFxAttributes.js.map
