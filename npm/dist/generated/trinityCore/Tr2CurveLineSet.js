import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_additive, _init_extra_additive, _init_translation, _init_extra_translation, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_lineWidthFactor, _init_extra_lineWidthFactor, _init_depthOffset, _init_extra_depthOffset, _init_lineEffect, _init_extra_lineEffect, _init_pickEffect, _init_extra_pickEffect;

/** Tr2CurveLineSet (trinityCore) - generated from schema shapeHash 4dcb0178.... */
let _Tr2CurveLineSet;
class Tr2CurveLineSet extends CjsModel {
  static {
    ({
      e: [_init_additive, _init_extra_additive, _init_translation, _init_extra_translation, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_lineWidthFactor, _init_extra_lineWidthFactor, _init_depthOffset, _init_extra_depthOffset, _init_lineEffect, _init_extra_lineEffect, _init_pickEffect, _init_extra_pickEffect, _initProto],
      c: [_Tr2CurveLineSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2CurveLineSet",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.boolean], 16, "additive"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.float32], 16, "lineWidthFactor"], [[io, io.persist, type, type.float32], 16, "depthOffset"], [[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2Material")], 16, "lineEffect"], [[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2Material")], 16, "pickEffect"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddCurvedLineCrt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddCurvedLineSph"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddSpheredLineCrt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddSpheredLineSph"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddStraightLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineIntermediateSph"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineIntermediateCrt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLinePositionSph"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLinePositionCrt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineMultiColor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineSegmentation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineColor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineWidth"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearLines"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RemoveLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SubmitChanges"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_pickEffect(this);
  }
  /** m_additive (bool) [READWRITE, PERSIST] */
  additive = (_initProto(this), _init_additive(this, false));

  /** m_translation (Vector3) [READWRITE, PERSIST] */
  translation = (_init_extra_additive(this), _init_translation(this, vec3.create()));

  /** m_rotation (Quaternion) [READWRITE, PERSIST] */
  rotation = (_init_extra_translation(this), _init_rotation(this, quat.create()));

  /** m_scaling (Vector3) [READWRITE, PERSIST] */
  scaling = (_init_extra_rotation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_scaling(this), _init_display(this, true));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_display(this), _init_name(this, ""));

  /** m_lineWidthFactor (float) [READWRITE, NOTIFY, PERSIST] */
  lineWidthFactor = (_init_extra_name(this), _init_lineWidthFactor(this, 1));

  /** m_depthOffset (float) [READWRITE, PERSIST] */
  depthOffset = (_init_extra_lineWidthFactor(this), _init_depthOffset(this, 0));

  /** m_lineEffect (Tr2MaterialPtr) [READWRITE, NOTIFY, PERSIST] */
  lineEffect = (_init_extra_depthOffset(this), _init_lineEffect(this, null));

  /** m_pickEffect (Tr2MaterialPtr) [READWRITE, NOTIFY, PERSIST] */
  pickEffect = (_init_extra_lineEffect(this), _init_pickEffect(this, null));

  /** Carbon method AddCurvedLineCrt (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  AddCurvedLineCrt(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "AddCurvedLineCrt", args);
  }

  /** Carbon method AddCurvedLineSph (MAP_METHOD_AND_WRAP). */
  AddCurvedLineSph(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "AddCurvedLineSph", args);
  }

  /** Carbon method AddSpheredLineCrt (MAP_METHOD_AND_WRAP). */
  AddSpheredLineCrt(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "AddSpheredLineCrt", args);
  }

  /** Carbon method AddSpheredLineSph (MAP_METHOD_AND_WRAP). */
  AddSpheredLineSph(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "AddSpheredLineSph", args);
  }

  /** Carbon method AddStraightLine (MAP_METHOD_AND_WRAP). */
  AddStraightLine(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "AddStraightLine", args);
  }

  /** Carbon method ChangeLineIntermediateSph (MAP_METHOD_AND_WRAP). */
  ChangeLineIntermediateSph(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLineIntermediateSph", args);
  }

  /** Carbon method ChangeLineIntermediateCrt (MAP_METHOD_AND_WRAP). */
  ChangeLineIntermediateCrt(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLineIntermediateCrt", args);
  }

  /** Carbon method ChangeLinePositionSph (MAP_METHOD_AND_WRAP). */
  ChangeLinePositionSph(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLinePositionSph", args);
  }

  /** Carbon method ChangeLinePositionCrt (MAP_METHOD_AND_WRAP). */
  ChangeLinePositionCrt(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLinePositionCrt", args);
  }

  /** Carbon method ChangeLineAnimation (MAP_METHOD_AND_WRAP). */
  ChangeLineAnimation(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLineAnimation", args);
  }

  /** Carbon method ChangeLineMultiColor (MAP_METHOD_AND_WRAP). */
  ChangeLineMultiColor(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLineMultiColor", args);
  }

  /** Carbon method ChangeLineSegmentation (MAP_METHOD_AND_WRAP). */
  ChangeLineSegmentation(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLineSegmentation", args);
  }

  /** Carbon method ChangeLineColor (MAP_METHOD_AND_WRAP). */
  ChangeLineColor(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLineColor", args);
  }

  /** Carbon method ChangeLineWidth (MAP_METHOD_AND_WRAP). */
  ChangeLineWidth(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ChangeLineWidth", args);
  }

  /** Carbon method ClearLines (MAP_METHOD_AND_WRAP). */
  ClearLines(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "ClearLines", args);
  }

  /** Carbon method RemoveLine (MAP_METHOD_AND_WRAP). */
  RemoveLine(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "RemoveLine", args);
  }

  /** Carbon method SubmitChanges (MAP_METHOD_AND_WRAP). */
  SubmitChanges(...args) {
    throw CjsModel.notImplemented("Tr2CurveLineSet", "SubmitChanges", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2CurveLineSet as Tr2CurveLineSet };
//# sourceMappingURL=Tr2CurveLineSet.js.map
