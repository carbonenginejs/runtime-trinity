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
    })], [[[io, io.persist, type, type.boolean], 16, "additive"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.float32], 16, "lineWidthFactor"], [[io, io.persist, type, type.float32], 16, "depthOffset"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Material")], 16, "lineEffect"], [[io, io.notify, io, io.persist, void 0, type.model("Tr2Material")], 16, "pickEffect"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddCurvedLineCrt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddCurvedLineSph"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddSpheredLineCrt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddSpheredLineSph"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddStraightLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineIntermediateSph"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineIntermediateCrt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLinePositionSph"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLinePositionCrt"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineAnimation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineMultiColor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineSegmentation"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineColor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineWidth"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearLines"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RemoveLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SubmitChanges"]], 0, void 0, CjsModel));
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
    throw new Error("Tr2CurveLineSet.AddCurvedLineCrt is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddCurvedLineSph (MAP_METHOD_AND_WRAP). */
  AddCurvedLineSph(...args) {
    throw new Error("Tr2CurveLineSet.AddCurvedLineSph is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddSpheredLineCrt (MAP_METHOD_AND_WRAP). */
  AddSpheredLineCrt(...args) {
    throw new Error("Tr2CurveLineSet.AddSpheredLineCrt is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddSpheredLineSph (MAP_METHOD_AND_WRAP). */
  AddSpheredLineSph(...args) {
    throw new Error("Tr2CurveLineSet.AddSpheredLineSph is not implemented in CarbonEngineJS.");
  }

  /** Carbon method AddStraightLine (MAP_METHOD_AND_WRAP). */
  AddStraightLine(...args) {
    throw new Error("Tr2CurveLineSet.AddStraightLine is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLineIntermediateSph (MAP_METHOD_AND_WRAP). */
  ChangeLineIntermediateSph(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLineIntermediateSph is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLineIntermediateCrt (MAP_METHOD_AND_WRAP). */
  ChangeLineIntermediateCrt(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLineIntermediateCrt is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLinePositionSph (MAP_METHOD_AND_WRAP). */
  ChangeLinePositionSph(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLinePositionSph is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLinePositionCrt (MAP_METHOD_AND_WRAP). */
  ChangeLinePositionCrt(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLinePositionCrt is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLineAnimation (MAP_METHOD_AND_WRAP). */
  ChangeLineAnimation(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLineAnimation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLineMultiColor (MAP_METHOD_AND_WRAP). */
  ChangeLineMultiColor(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLineMultiColor is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLineSegmentation (MAP_METHOD_AND_WRAP). */
  ChangeLineSegmentation(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLineSegmentation is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLineColor (MAP_METHOD_AND_WRAP). */
  ChangeLineColor(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLineColor is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ChangeLineWidth (MAP_METHOD_AND_WRAP). */
  ChangeLineWidth(...args) {
    throw new Error("Tr2CurveLineSet.ChangeLineWidth is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ClearLines (MAP_METHOD_AND_WRAP). */
  ClearLines(...args) {
    throw new Error("Tr2CurveLineSet.ClearLines is not implemented in CarbonEngineJS.");
  }

  /** Carbon method RemoveLine (MAP_METHOD_AND_WRAP). */
  RemoveLine(...args) {
    throw new Error("Tr2CurveLineSet.RemoveLine is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SubmitChanges (MAP_METHOD_AND_WRAP). */
  SubmitChanges(...args) {
    throw new Error("Tr2CurveLineSet.SubmitChanges is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2CurveLineSet as Tr2CurveLineSet };
//# sourceMappingURL=Tr2CurveLineSet.js.map
