import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../EveEntity.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initProto, _initClass, _init_effectChildren, _init_extra_effectChildren, _init_estimatedSize, _init_extra_estimatedSize, _init_lodLevel, _init_extra_lodLevel, _init_mute, _init_extra_mute, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_dynamicLOD, _init_extra_dynamicLOD, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_duration, _init_extra_duration, _init_secondaryLightingEmissiveColor, _init_extra_secondaryLightingEmissiveColor, _init_curveSets, _init_extra_curveSets, _init_lights, _init_extra_lights, _init_externalParameters, _init_extra_externalParameters, _init_controllers, _init_extra_controllers, _init_observers, _init_extra_observers, _init_rotationCurve, _init_extra_rotationCurve, _init_secondaryLightingSphereRadius, _init_extra_secondaryLightingSphereRadius, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_modelTranslationCurve, _init_extra_modelTranslationCurve, _init_modelRotationCurve, _init_extra_modelRotationCurve, _init_translationCurve, _init_extra_translationCurve;

/** EveEffectRoot2 (eve/spaceObject) - generated from schema shapeHash 7907ef1f.... */
let _EveEffectRoot;
class EveEffectRoot2 extends _EveEntity {
  static {
    ({
      e: [_init_effectChildren, _init_extra_effectChildren, _init_estimatedSize, _init_extra_estimatedSize, _init_lodLevel, _init_extra_lodLevel, _init_mute, _init_extra_mute, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_dynamicLOD, _init_extra_dynamicLOD, _init_scaling, _init_extra_scaling, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_duration, _init_extra_duration, _init_secondaryLightingEmissiveColor, _init_extra_secondaryLightingEmissiveColor, _init_curveSets, _init_extra_curveSets, _init_lights, _init_extra_lights, _init_externalParameters, _init_extra_externalParameters, _init_controllers, _init_extra_controllers, _init_observers, _init_extra_observers, _init_rotationCurve, _init_extra_rotationCurve, _init_secondaryLightingSphereRadius, _init_extra_secondaryLightingSphereRadius, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_modelTranslationCurve, _init_extra_modelTranslationCurve, _init_modelRotationCurve, _init_extra_modelRotationCurve, _init_translationCurve, _init_extra_translationCurve, _initProto],
      c: [_EveEffectRoot, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveEffectRoot2",
      family: "eve/spaceObject"
    })], [[[io, io.persist, void 0, type.list("IEveSpaceObjectChild")], 16, "effectChildren"], [[io, io.read, type, type.float32], 16, "estimatedSize"], [[io, io.read, type, type.int32, void 0, schema.enum("Tr2Lod")], 16, "lodLevel"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "mute"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "dynamicLOD"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.float32], 16, "duration"], [[io, io.persist, type, type.color], 16, "secondaryLightingEmissiveColor"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.persist, void 0, type.list("Tr2Light")], 16, "lights"], [[io, io.persist, void 0, type.list("Tr2ExternalParameter")], 16, "externalParameters"], [[io, io.persist, void 0, type.list("ITr2Controller")], 16, "controllers"], [[io, io.persist, void 0, type.list("TriObserverLocal")], 16, "observers"], [[io, io.persist, void 0, type.objectRef("ITriQuaternionFunction")], 16, "rotationCurve"], [[io, io.persist, type, type.float32], 16, "secondaryLightingSphereRadius"], [[io, io.persist, type, type.vec4], 16, "boundingSphereRadius"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "modelTranslationCurve"], [[io, io.persist, void 0, type.objectRef("ITriQuaternionFunction")], 16, "modelRotationCurve"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "translationCurve"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "FreezeHighDetailMesh"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Start"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBoundingSphereRadius"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetProceduralContainerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartControllers"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Stop"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_translationCurve(this);
  }
  /** m_effectChildren (PIEveSpaceObjectChildVector) [READ, PERSIST] */
  effectChildren = (_initProto(this), _init_effectChildren(this, []));

  /** m_estimatedSize (float) [READ] */
  estimatedSize = (_init_extra_effectChildren(this), _init_estimatedSize(this, 0));

  /** m_lodLevel (Tr2Lod - enum Tr2Lod) [READ] */
  lodLevel = (_init_extra_estimatedSize(this), _init_lodLevel(this, 2));

  /** m_mute (bool) [READWRITE, NOTIFY] */
  mute = (_init_extra_lodLevel(this), _init_mute(this, false));

  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  display = (_init_extra_mute(this), _init_display(this, true));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_display(this), _init_name(this, ""));

  /** m_dynamicLODSelection (bool) [READWRITE, PERSIST] */
  dynamicLOD = (_init_extra_name(this), _init_dynamicLOD(this, false));

  /** m_scaling (Vector3) [READWRITE, PERSIST] */
  scaling = (_init_extra_dynamicLOD(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** m_rotation (Quaternion) [READWRITE, PERSIST] */
  rotation = (_init_extra_scaling(this), _init_rotation(this, quat.create()));

  /** m_translation (Vector3) [READWRITE, PERSIST] */
  translation = (_init_extra_rotation(this), _init_translation(this, vec3.create()));

  /** m_effectDuration (float) [READWRITE, PERSIST] */
  duration = (_init_extra_translation(this), _init_duration(this, -1));

  /** m_secondaryLightingEmissiveColor (Color) [READWRITE, PERSIST] */
  secondaryLightingEmissiveColor = (_init_extra_duration(this), _init_secondaryLightingEmissiveColor(this, vec4.create()));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_secondaryLightingEmissiveColor(this), _init_curveSets(this, []));

  /** m_lights (PTr2LightVector) [READ, PERSIST] */
  lights = (_init_extra_curveSets(this), _init_lights(this, []));

  /** m_externalParameters (PTr2ExternalParameterVector) [READ, PERSIST] */
  externalParameters = (_init_extra_lights(this), _init_externalParameters(this, []));

  /** m_controllers (PITr2ControllerVector) [READ, PERSIST] */
  controllers = (_init_extra_externalParameters(this), _init_controllers(this, []));

  /** m_observers (PTriObserverLocalVector) [READ, PERSIST] */
  observers = (_init_extra_controllers(this), _init_observers(this, []));

  /** m_ballRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  rotationCurve = (_init_extra_observers(this), _init_rotationCurve(this, null));

  /** m_secondaryLightingSphereRadiusLocal (float) [READWRITE, PERSIST] */
  secondaryLightingSphereRadius = (_init_extra_rotationCurve(this), _init_secondaryLightingSphereRadius(this, 0.5));

  /** m_boundingSphere.w (Vector4) [READWRITE, PERSIST] */
  boundingSphereRadius = (_init_extra_secondaryLightingSphereRadius(this), _init_boundingSphereRadius(this, vec4.create()));

  /** m_modelTranslation (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  modelTranslationCurve = (_init_extra_boundingSphereRadius(this), _init_modelTranslationCurve(this, null));

  /** m_modelRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  modelRotationCurve = (_init_extra_modelTranslationCurve(this), _init_modelRotationCurve(this, null));

  /** m_ballPosition (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  translationCurve = (_init_extra_modelRotationCurve(this), _init_translationCurve(this, null));

  /** Carbon method FreezeHighDetailMesh (MAP_METHOD_AND_WRAP). */
  FreezeHighDetailMesh(...args) {
    throw _EveEntity.notImplemented("EveEffectRoot2", "FreezeHighDetailMesh", args);
  }

  /** Carbon method HandleControllerEvent (MAP_METHOD_AND_WRAP). */
  HandleControllerEvent(...args) {
    throw _EveEntity.notImplemented("EveEffectRoot2", "HandleControllerEvent", args);
  }

  /** Carbon method Start (MAP_METHOD_AND_WRAP). */
  Start(...args) {
    throw _EveEntity.notImplemented("EveEffectRoot2", "Start", args);
  }

  /** Carbon method GetBoundingSphereRadius (MAP_METHOD_AND_WRAP). */
  GetBoundingSphereRadius(...args) {
    throw _EveEntity.notImplemented("EveEffectRoot2", "GetBoundingSphereRadius", args);
  }

  /** Carbon method SetControllerVariable (MAP_METHOD_AND_WRAP). */
  SetControllerVariable(...args) {
    throw _EveEntity.notImplemented("EveEffectRoot2", "SetControllerVariable", args);
  }

  /** Carbon method SetProceduralContainerVariable (MAP_METHOD_AND_WRAP). */
  SetProceduralContainerVariable(...args) {
    throw _EveEntity.notImplemented("EveEffectRoot2", "SetProceduralContainerVariable", args);
  }

  /** Carbon method StartControllers (MAP_METHOD_AND_WRAP). */
  StartControllers(...args) {
    throw _EveEntity.notImplemented("EveEffectRoot2", "StartControllers", args);
  }

  /** Carbon method Stop (MAP_METHOD_AND_WRAP). */
  Stop(...args) {
    throw _EveEntity.notImplemented("EveEffectRoot2", "Stop", args);
  }
  static {
    _initClass();
  }
}

export { _EveEffectRoot as EveEffectRoot2 };
//# sourceMappingURL=EveEffectRoot2.js.map
