import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_source, _init_extra_source, _init_dest, _init_extra_dest, _init_stretchAudio, _init_extra_stretchAudio, _init_lodLevel, _init_extra_lodLevel, _init_progressCurve, _init_extra_progressCurve, _init_moveCompletion, _init_extra_moveCompletion, _init_curveSets, _init_extra_curveSets, _init_length, _init_extra_length, _init_moving, _init_extra_moving, _init_moveCompleted, _init_extra_moveCompleted, _init_display, _init_extra_display, _init_update, _init_extra_update, _init_destLights, _init_extra_destLights, _init_sourceLights, _init_extra_sourceLights, _init_destObject, _init_extra_destObject, _init_sourceObject, _init_extra_sourceObject, _init_stretchObject, _init_extra_stretchObject, _init_useCurveLod, _init_extra_useCurveLod, _init_startTime, _init_extra_startTime, _init_audio, _init_extra_audio, _init_moveObject, _init_extra_moveObject;

/** EveStretch (eve/renderable/stretch) - generated from schema shapeHash 4ae2631b.... */
let _EveStretch;
class EveStretch extends _EveEntity {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_source, _init_extra_source, _init_dest, _init_extra_dest, _init_stretchAudio, _init_extra_stretchAudio, _init_lodLevel, _init_extra_lodLevel, _init_progressCurve, _init_extra_progressCurve, _init_moveCompletion, _init_extra_moveCompletion, _init_curveSets, _init_extra_curveSets, _init_length, _init_extra_length, _init_moving, _init_extra_moving, _init_moveCompleted, _init_extra_moveCompleted, _init_display, _init_extra_display, _init_update, _init_extra_update, _init_destLights, _init_extra_destLights, _init_sourceLights, _init_extra_sourceLights, _init_destObject, _init_extra_destObject, _init_sourceObject, _init_extra_sourceObject, _init_stretchObject, _init_extra_stretchObject, _init_useCurveLod, _init_extra_useCurveLod, _init_startTime, _init_extra_startTime, _init_audio, _init_extra_audio, _init_moveObject, _init_extra_moveObject, _initProto],
      c: [_EveStretch, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveStretch",
      family: "eve/renderable/stretch"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "source"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "dest"], [[io, io.persist, void 0, type.objectRef("IStretchAudio")], 16, "stretchAudio"], [[io, io.read, type, type.int32, void 0, schema.enum("Tr2Lod")], 16, "lodLevel"], [[io, io.persist, void 0, type.objectRef("ITriScalarFunction")], 16, "progressCurve"], [[io, io.persist, void 0, type.objectRef("TriCurveSet")], 16, "moveCompletion"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.persist, void 0, type.objectRef("TriFloat")], 16, "length"], [[io, io.readwrite, type, type.boolean], 16, "moving"], [[io, io.readwrite, type, type.boolean], 16, "moveCompleted"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "update"], [[io, io.persist, void 0, type.list("Tr2Light")], 16, "destLights"], [[io, io.persist, void 0, type.list("Tr2Light")], 16, "sourceLights"], [[io, io.persist, void 0, type.objectRef("EveTransform")], 16, "destObject"], [[io, io.persist, void 0, type.objectRef("EveTransform")], 16, "sourceObject"], [[io, io.persist, void 0, type.objectRef("EveTransform")], 16, "stretchObject"], [[io, io.persist, type, type.boolean], 16, "useCurveLod"], [[io, io.read, type, type.float64], 16, "startTime"], [[io, io.persist, void 0, type.objectRef("ITr2Audio")], 16, "audio"], [[io, io.persist, void 0, type.objectRef("EveTransform")], 16, "moveObject"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Start"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_moveObject(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_initProto(this), _init_name(this, ""));

  /** m_source (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  source = (_init_extra_name(this), _init_source(this, null));

  /** m_dest (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  dest = (_init_extra_source(this), _init_dest(this, null));

  /** m_stretchAudio (IStretchAudioPtr) [READWRITE, PERSIST] */
  stretchAudio = (_init_extra_dest(this), _init_stretchAudio(this, null));

  /** m_lodLevel (Tr2Lod - enum Tr2Lod) [READ] */
  lodLevel = (_init_extra_stretchAudio(this), _init_lodLevel(this, 0));

  /** m_progressCurve (ITriScalarFunctionPtr) [READWRITE, PERSIST] */
  progressCurve = (_init_extra_lodLevel(this), _init_progressCurve(this, null));

  /** m_moveCompletion (TriCurveSetPtr) [READWRITE, PERSIST] */
  moveCompletion = (_init_extra_progressCurve(this), _init_moveCompletion(this, null));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_moveCompletion(this), _init_curveSets(this, []));

  /** m_length (TriFloatPtr) [READ, PERSIST] */
  length = (_init_extra_curveSets(this), _init_length(this, null));

  /** m_moving (bool) [READWRITE] */
  moving = (_init_extra_length(this), _init_moving(this, false));

  /** m_moveCompleted (bool) [READWRITE] */
  moveCompleted = (_init_extra_moving(this), _init_moveCompleted(this, false));

  /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
  display = (_init_extra_moveCompleted(this), _init_display(this, true));

  /** m_update (bool) [READWRITE, PERSIST] */
  update = (_init_extra_display(this), _init_update(this, true));

  /** m_destLights (PTr2LightVector) [READ, PERSIST] */
  destLights = (_init_extra_update(this), _init_destLights(this, []));

  /** m_sourceLights (PTr2LightVector) [READ, PERSIST] */
  sourceLights = (_init_extra_destLights(this), _init_sourceLights(this, []));

  /** m_destObject (EveTransformPtr) [READWRITE, PERSIST] */
  destObject = (_init_extra_sourceLights(this), _init_destObject(this, null));

  /** m_sourceObject (EveTransformPtr) [READWRITE, PERSIST] */
  sourceObject = (_init_extra_destObject(this), _init_sourceObject(this, null));

  /** m_stretchObject (EveTransformPtr) [READWRITE, PERSIST] */
  stretchObject = (_init_extra_sourceObject(this), _init_stretchObject(this, null));

  /** m_useCurveLod (bool) [READWRITE, PERSIST] */
  useCurveLod = (_init_extra_stretchObject(this), _init_useCurveLod(this, true));

  /** m_startTime (Be::Time) [READ] */
  startTime = (_init_extra_useCurveLod(this), _init_startTime(this, -1));

  /** m_audio (ITr2AudioPtr) [READWRITE, PERSIST] */
  audio = (_init_extra_startTime(this), _init_audio(this, null));

  /** m_moveObject (EveTransformPtr) [READWRITE, PERSIST] */
  moveObject = (_init_extra_audio(this), _init_moveObject(this, null));

  /** Carbon method Start (MAP_METHOD_AND_WRAP). */
  Start(...args) {
    throw _EveEntity.notImplemented("EveStretch", "Start", args);
  }
  static {
    _initClass();
  }
}

export { _EveStretch as EveStretch };
//# sourceMappingURL=EveStretch.js.map
