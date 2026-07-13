import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_sourcePosition, _init_extra_sourcePosition, _init_destinationPosition, _init_extra_destinationPosition, _init_source, _init_extra_source, _init_dest, _init_extra_dest, _init_name, _init_extra_name, _init_moveProgression, _init_extra_moveProgression, _init_stretchAudio, _init_extra_stretchAudio, _init_controllers, _init_extra_controllers, _init_curveSets, _init_extra_curveSets, _init_length, _init_extra_length, _init_dynamicBindings, _init_extra_dynamicBindings, _init_display, _init_extra_display, _init_update, _init_extra_update, _init_destObject, _init_extra_destObject, _init_sourceObject, _init_extra_sourceObject, _init_stretchObject, _init_extra_stretchObject, _init_startTime, _init_extra_startTime, _init_audio, _init_extra_audio, _init_moveObject, _init_extra_moveObject;

/** EveStretch3 (eve/renderable/stretch) - generated from schema shapeHash 81e2be86.... */
let _EveStretch;
class EveStretch3 extends _EveEntity {
  static {
    ({
      e: [_init_sourcePosition, _init_extra_sourcePosition, _init_destinationPosition, _init_extra_destinationPosition, _init_source, _init_extra_source, _init_dest, _init_extra_dest, _init_name, _init_extra_name, _init_moveProgression, _init_extra_moveProgression, _init_stretchAudio, _init_extra_stretchAudio, _init_controllers, _init_extra_controllers, _init_curveSets, _init_extra_curveSets, _init_length, _init_extra_length, _init_dynamicBindings, _init_extra_dynamicBindings, _init_display, _init_extra_display, _init_update, _init_extra_update, _init_destObject, _init_extra_destObject, _init_sourceObject, _init_extra_sourceObject, _init_stretchObject, _init_extra_stretchObject, _init_startTime, _init_extra_startTime, _init_audio, _init_extra_audio, _init_moveObject, _init_extra_moveObject, _initProto],
      c: [_EveStretch, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveStretch3",
      family: "eve/renderable/stretch"
    })], [[[io, io.read, type, type.vec3], 16, "sourcePosition"], [[io, io.read, type, type.vec3], 16, "destinationPosition"], [[io, io.notify, io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "source"], [[io, io.notify, io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "dest"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("TriFloat")], 16, "moveProgression"], [[io, io.persist, void 0, type.objectRef("IStretchAudio")], 16, "stretchAudio"], [[io, io.persist, void 0, type.list("ITr2Controller")], 16, "controllers"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.persist, void 0, type.objectRef("TriFloat")], 16, "length"], [[io, io.persist, void 0, type.list("Tr2DynamicBinding")], 16, "dynamicBindings"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "update"], [[io, io.persistOnly, void 0, type.objectRef("IEveSpaceObjectChild")], 16, "destObject"], [[io, io.persistOnly, void 0, type.objectRef("IEveSpaceObjectChild")], 16, "sourceObject"], [[io, io.persistOnly, void 0, type.objectRef("IEveSpaceObjectChild")], 16, "stretchObject"], [[io, io.read, type, type.float64], 16, "startTime"], [[io, io.persist, void 0, type.objectRef("ITr2Audio")], 16, "audio"], [[io, io.persistOnly, void 0, type.objectRef("IEveSpaceObjectChild")], 16, "moveObject"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StartFiring"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StopFiring"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_moveObject(this);
  }
  /** m_sourcePosition (Vector3) [READ] */
  sourcePosition = (_initProto(this), _init_sourcePosition(this, vec3.create()));

  /** m_destinationPosition (Vector3) [READ] */
  destinationPosition = (_init_extra_sourcePosition(this), _init_destinationPosition(this, vec3.create()));

  /** m_source (ITriVectorFunctionPtr) [READWRITE, PERSIST, NOTIFY] */
  source = (_init_extra_destinationPosition(this), _init_source(this, null));

  /** m_dest (ITriVectorFunctionPtr) [READWRITE, PERSIST, NOTIFY] */
  dest = (_init_extra_source(this), _init_dest(this, null));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_dest(this), _init_name(this, ""));

  /** m_moveProgression (TriFloatPtr) [READWRITE, PERSIST] */
  moveProgression = (_init_extra_name(this), _init_moveProgression(this, null));

  /** m_stretchAudio (IStretchAudioPtr) [READWRITE, PERSIST] */
  stretchAudio = (_init_extra_moveProgression(this), _init_stretchAudio(this, null));

  /** m_controllers (PITr2ControllerVector) [READ, PERSIST] */
  controllers = (_init_extra_stretchAudio(this), _init_controllers(this, []));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_controllers(this), _init_curveSets(this, []));

  /** m_length (TriFloatPtr) [READ, PERSIST] */
  length = (_init_extra_curveSets(this), _init_length(this, null));

  /** m_dynamicBindings (PTr2DynamicBindingVector) [READ, PERSIST] */
  dynamicBindings = (_init_extra_length(this), _init_dynamicBindings(this, []));

  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  display = (_init_extra_dynamicBindings(this), _init_display(this, true));

  /** m_update (bool) [READWRITE, PERSIST] */
  update = (_init_extra_display(this), _init_update(this, true));

  /** m_destObject (IEveSpaceObjectChildPtr) [PERSISTONLY] */
  destObject = (_init_extra_update(this), _init_destObject(this, null));

  /** m_sourceObject (IEveSpaceObjectChildPtr) [PERSISTONLY] */
  sourceObject = (_init_extra_destObject(this), _init_sourceObject(this, null));

  /** m_stretchObject (IEveSpaceObjectChildPtr) [PERSISTONLY] */
  stretchObject = (_init_extra_sourceObject(this), _init_stretchObject(this, null));

  /** m_startTime (Be::Time) [READ] */
  startTime = (_init_extra_stretchObject(this), _init_startTime(this, 0));

  /** m_audio (ITr2AudioPtr) [READWRITE, PERSIST] */
  audio = (_init_extra_startTime(this), _init_audio(this, null));

  /** m_moveObject (IEveSpaceObjectChildPtr) [PERSISTONLY] */
  moveObject = (_init_extra_audio(this), _init_moveObject(this, null));

  /** Carbon method SetControllerVariable (MAP_METHOD_AND_WRAP). */
  SetControllerVariable(...args) {
    throw _EveEntity.notImplemented("EveStretch3", "SetControllerVariable", args);
  }

  /** Carbon method StartFiring (MAP_METHOD_AND_WRAP). */
  StartFiring(...args) {
    throw _EveEntity.notImplemented("EveStretch3", "StartFiring", args);
  }

  /** Carbon method StopFiring (MAP_METHOD_AND_WRAP). */
  StopFiring(...args) {
    throw _EveEntity.notImplemented("EveStretch3", "StopFiring", args);
  }
  static {
    _initClass();
  }
}

export { _EveStretch as EveStretch3 };
//# sourceMappingURL=EveStretch3.js.map
