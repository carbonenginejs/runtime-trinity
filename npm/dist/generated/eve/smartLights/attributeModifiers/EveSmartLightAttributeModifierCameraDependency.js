import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveSmartLightAttributeModifierBucket as _EveSmartLightAttribu$1 } from './EveSmartLightAttributeModifierBucket.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_minimumDistance, _init_extra_minimumDistance, _init_maximumDistance, _init_extra_maximumDistance, _init_lookAtVisionCone, _init_extra_lookAtVisionCone, _init_useCameraDistance, _init_extra_useCameraDistance, _init_inverselookAtFormula, _init_extra_inverselookAtFormula, _init_useCameraLookAt, _init_extra_useCameraLookAt, _init_inverseDistanceFormula, _init_extra_inverseDistanceFormula, _init_useCameraPlacement, _init_extra_useCameraPlacement, _init_inversePlacementFormula, _init_extra_inversePlacementFormula, _init_angleOverwrite, _init_extra_angleOverwrite, _init_positionOverwrite, _init_extra_positionOverwrite, _init_lookAtIntensity, _init_extra_lookAtIntensity, _init_placementIntensity, _init_extra_placementIntensity, _init_overwriteObjectDirection, _init_extra_overwriteObjectDirection, _init_overwritePosition, _init_extra_overwritePosition, _init_maximumActivation, _init_extra_maximumActivation, _init_minimumActivation, _init_extra_minimumActivation;

/** EveSmartLightAttributeModifierCameraDependency (eve/smartLights/attributeModifiers) - generated from schema shapeHash 5e9c1bd9.... */
let _EveSmartLightAttribu;
class EveSmartLightAttributeModifierCameraDependency extends _EveSmartLightAttribu$1 {
  static {
    ({
      e: [_init_minimumDistance, _init_extra_minimumDistance, _init_maximumDistance, _init_extra_maximumDistance, _init_lookAtVisionCone, _init_extra_lookAtVisionCone, _init_useCameraDistance, _init_extra_useCameraDistance, _init_inverselookAtFormula, _init_extra_inverselookAtFormula, _init_useCameraLookAt, _init_extra_useCameraLookAt, _init_inverseDistanceFormula, _init_extra_inverseDistanceFormula, _init_useCameraPlacement, _init_extra_useCameraPlacement, _init_inversePlacementFormula, _init_extra_inversePlacementFormula, _init_angleOverwrite, _init_extra_angleOverwrite, _init_positionOverwrite, _init_extra_positionOverwrite, _init_lookAtIntensity, _init_extra_lookAtIntensity, _init_placementIntensity, _init_extra_placementIntensity, _init_overwriteObjectDirection, _init_extra_overwriteObjectDirection, _init_overwritePosition, _init_extra_overwritePosition, _init_maximumActivation, _init_extra_maximumActivation, _init_minimumActivation, _init_extra_minimumActivation],
      c: [_EveSmartLightAttribu, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightAttributeModifierCameraDependency",
      family: "eve/smartLights/attributeModifiers"
    })], [[[io, io.persist, type, type.float32], 16, "minimumDistance"], [[io, io.persist, type, type.float32], 16, "maximumDistance"], [[io, io.persist, type, type.float32], 16, "lookAtVisionCone"], [[io, io.persist, type, type.boolean], 16, "useCameraDistance"], [[io, io.persist, type, type.boolean], 16, "inverselookAtFormula"], [[io, io.persist, type, type.boolean], 16, "useCameraLookAt"], [[io, io.persist, type, type.boolean], 16, "inverseDistanceFormula"], [[io, io.persist, type, type.boolean], 16, "useCameraPlacement"], [[io, io.persist, type, type.boolean], 16, "inversePlacementFormula"], [[io, io.persist, type, type.vec3], 16, "angleOverwrite"], [[io, io.persist, type, type.vec3], 16, "positionOverwrite"], [[io, io.persist, type, type.float32], 16, "lookAtIntensity"], [[io, io.persist, type, type.float32], 16, "placementIntensity"], [[io, io.persist, type, type.boolean], 16, "overwriteObjectDirection"], [[io, io.persist, type, type.boolean], 16, "overwritePosition"], [[io, io.persist, type, type.float32], 16, "maximumActivation"], [[io, io.persist, type, type.float32], 16, "minimumActivation"]], 0, void 0, _EveSmartLightAttribu$1));
  }
  constructor(...args) {
    super(...args);
    _init_extra_minimumActivation(this);
  }
  /** m_minimumDistance (float) [READWRITE, PERSIST] */
  minimumDistance = _init_minimumDistance(this, 1000);

  /** m_maximumDistance (float) [READWRITE, PERSIST] */
  maximumDistance = (_init_extra_minimumDistance(this), _init_maximumDistance(this, 10000));

  /** m_lookAtVisionCone (float) [READWRITE, PERSIST] */
  lookAtVisionCone = (_init_extra_maximumDistance(this), _init_lookAtVisionCone(this, 30));

  /** m_useCameraDistance (bool) [READWRITE, PERSIST] */
  useCameraDistance = (_init_extra_lookAtVisionCone(this), _init_useCameraDistance(this, false));

  /** m_inverselookAtFormula (bool) [READWRITE, PERSIST] */
  inverselookAtFormula = (_init_extra_useCameraDistance(this), _init_inverselookAtFormula(this, false));

  /** m_useCameraLookAt (bool) [READWRITE, PERSIST] */
  useCameraLookAt = (_init_extra_inverselookAtFormula(this), _init_useCameraLookAt(this, false));

  /** m_inverseDistanceFormula (bool) [READWRITE, PERSIST] */
  inverseDistanceFormula = (_init_extra_useCameraLookAt(this), _init_inverseDistanceFormula(this, false));

  /** m_useCameraPlacement (bool) [READWRITE, PERSIST] */
  useCameraPlacement = (_init_extra_inverseDistanceFormula(this), _init_useCameraPlacement(this, false));

  /** m_inversePlacementFormula (bool) [READWRITE, PERSIST] */
  inversePlacementFormula = (_init_extra_useCameraPlacement(this), _init_inversePlacementFormula(this, false));

  /** m_angleOverwrite (Vector3) [READWRITE, PERSIST] */
  angleOverwrite = (_init_extra_inversePlacementFormula(this), _init_angleOverwrite(this, vec3.create()));

  /** m_positionOverwrite (Vector3) [READWRITE, PERSIST] */
  positionOverwrite = (_init_extra_angleOverwrite(this), _init_positionOverwrite(this, vec3.create()));

  /** m_lookAtIntencity (float) [READWRITE, PERSIST] */
  lookAtIntensity = (_init_extra_positionOverwrite(this), _init_lookAtIntensity(this, 1));

  /** m_placementIntencity (float) [READWRITE, PERSIST] */
  placementIntensity = (_init_extra_lookAtIntensity(this), _init_placementIntensity(this, 1));

  /** m_overwriteDirection (bool) [READWRITE, PERSIST] */
  overwriteObjectDirection = (_init_extra_placementIntensity(this), _init_overwriteObjectDirection(this, false));

  /** m_overwritePosition (bool) [READWRITE, PERSIST] */
  overwritePosition = (_init_extra_overwriteObjectDirection(this), _init_overwritePosition(this, false));

  /** m_maximumActivation (float) [READWRITE, PERSIST] */
  maximumActivation = (_init_extra_overwritePosition(this), _init_maximumActivation(this, 1));

  /** m_minimumActivation (float) [READWRITE, PERSIST] */
  minimumActivation = (_init_extra_maximumActivation(this), _init_minimumActivation(this, 0));
  static {
    _initClass();
  }
}

export { _EveSmartLightAttribu as EveSmartLightAttributeModifierCameraDependency };
//# sourceMappingURL=EveSmartLightAttributeModifierCameraDependency.js.map
