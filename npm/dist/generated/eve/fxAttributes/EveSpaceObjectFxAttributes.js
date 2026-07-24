import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { quat } from '@carbonenginejs/runtime-utils/quat';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';

let _initClass, _init_name, _init_extra_name, _init_activationStrength, _init_extra_activationStrength, _init_activeTurretCount, _init_extra_activeTurretCount, _init_childParent, _init_extra_childParent, _init_generatedShapeEllipsoidCenter, _init_extra_generatedShapeEllipsoidCenter, _init_generatedShapeEllipsoidRadius, _init_extra_generatedShapeEllipsoidRadius, _init_killCount, _init_extra_killCount, _init_ship, _init_extra_ship, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_parentWorldRotation, _init_extra_parentWorldRotation, _init_parentWorldTranslation, _init_extra_parentWorldTranslation;

/** EveSpaceObjectFxAttributes (eve/fxAttributes) - generated from schema shapeHash 8b776d96.... */
let _EveSpaceObjectFxAttr;
class EveSpaceObjectFxAttributes extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_activationStrength, _init_extra_activationStrength, _init_activeTurretCount, _init_extra_activeTurretCount, _init_childParent, _init_extra_childParent, _init_generatedShapeEllipsoidCenter, _init_extra_generatedShapeEllipsoidCenter, _init_generatedShapeEllipsoidRadius, _init_extra_generatedShapeEllipsoidRadius, _init_killCount, _init_extra_killCount, _init_ship, _init_extra_ship, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_parentWorldRotation, _init_extra_parentWorldRotation, _init_parentWorldTranslation, _init_extra_parentWorldTranslation],
      c: [_EveSpaceObjectFxAttr, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpaceObjectFxAttributes",
      family: "eve/fxAttributes"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.read, type, type.float32], 16, "activationStrength"], [[io, io.read, type, type.float32], 16, "activeTurretCount"], [[io, io.read, type, type.float32], 16, "childParent"], [[io, io.read, type, type.vec3], 16, "generatedShapeEllipsoidCenter"], [[io, io.read, type, type.vec3], 16, "generatedShapeEllipsoidRadius"], [[io, io.read, type, type.float32], 16, "killCount"], [[io, io.read, type, type.float32], 16, "ship"], [[io, io.read, type, type.float32], 16, "boundingSphereRadius"], [[io, io.read, type, type.quat], 16, "parentWorldRotation"], [[io, io.read, type, type.vec3], 16, "parentWorldTranslation"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_parentWorldTranslation(this);
  }
  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_activationStrength (float) [READ] */
  activationStrength = (_init_extra_name(this), _init_activationStrength(this, 1));

  /** m_activeTurretCount (float) [READ] */
  activeTurretCount = (_init_extra_activationStrength(this), _init_activeTurretCount(this, 0));

  /** m_distanceToChildParent (float) [READ] */
  childParent = (_init_extra_activeTurretCount(this), _init_childParent(this, 0));

  /** m_generatedShapeEllipsoidCenter (Vector3) [READ] */
  generatedShapeEllipsoidCenter = (_init_extra_childParent(this), _init_generatedShapeEllipsoidCenter(this, vec3.create()));

  /** m_generatedShapeEllipsoidRadius (Vector3) [READ] */
  generatedShapeEllipsoidRadius = (_init_extra_generatedShapeEllipsoidCenter(this), _init_generatedShapeEllipsoidRadius(this, vec3.create()));

  /** m_killCount (float) [READ] */
  killCount = (_init_extra_generatedShapeEllipsoidRadius(this), _init_killCount(this, 0));

  /** m_distanceToShip (float) [READ] */
  ship = (_init_extra_killCount(this), _init_ship(this, 0));

  /** m_boundingSphereRadius (float) [READ] */
  boundingSphereRadius = (_init_extra_ship(this), _init_boundingSphereRadius(this, 0));

  /** m_parentWorldRotation (Quaternion) [READ] */
  parentWorldRotation = (_init_extra_boundingSphereRadius(this), _init_parentWorldRotation(this, quat.fromValues(0, 0, 0, 0)));

  /** m_parentWorldTranslation (Vector3) [READ] */
  parentWorldTranslation = (_init_extra_parentWorldRotation(this), _init_parentWorldTranslation(this, vec3.create()));
  static {
    _initClass();
  }
}

export { _EveSpaceObjectFxAttr as EveSpaceObjectFxAttributes };
//# sourceMappingURL=EveSpaceObjectFxAttributes.js.map
