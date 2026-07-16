import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_autoClear, _init_extra_autoClear;

/** TriStepRenderDebug (renderJob) - generated from schema shapeHash 9e53e794.... */
let _TriStepRenderDebug;
class TriStepRenderDebug extends _TriRenderStep {
  static {
    ({
      e: [_init_autoClear, _init_extra_autoClear, _initProto],
      c: [_TriStepRenderDebug, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepRenderDebug",
      family: "renderJob"
    })], [[[io, io.readwrite, type, type.boolean], 16, "autoClear"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Clear"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DrawBox"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DrawCapsule"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DrawCone"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DrawCylinder"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DrawLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "DrawSphere"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Print3D"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Print2D"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Print2Df"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_autoClear(this);
  }
  /** m_autoClear (bool) [READWRITE] */
  autoClear = (_initProto(this), _init_autoClear(this, true));

  /** Carbon method Clear (MAP_METHOD_AND_WRAP). */
  Clear(...args) {
    throw new Error("TriStepRenderDebug.Clear is not implemented in CarbonEngineJS.");
  }

  /** Carbon method DrawBox (MAP_METHOD_AND_WRAP). */
  DrawBox(...args) {
    throw new Error("TriStepRenderDebug.DrawBox is not implemented in CarbonEngineJS.");
  }

  /** Carbon method DrawCapsule (MAP_METHOD_AND_WRAP). */
  DrawCapsule(...args) {
    throw new Error("TriStepRenderDebug.DrawCapsule is not implemented in CarbonEngineJS.");
  }

  /** Carbon method DrawCone (MAP_METHOD_AND_WRAP). */
  DrawCone(...args) {
    throw new Error("TriStepRenderDebug.DrawCone is not implemented in CarbonEngineJS.");
  }

  /** Carbon method DrawCylinder (MAP_METHOD_AND_WRAP). */
  DrawCylinder(...args) {
    throw new Error("TriStepRenderDebug.DrawCylinder is not implemented in CarbonEngineJS.");
  }

  /** Carbon method DrawLine -> PyDrawLine (MAP_METHOD_AND_WRAP). */
  DrawLine(...args) {
    throw new Error("TriStepRenderDebug.DrawLine is not implemented in CarbonEngineJS.");
  }

  /** Carbon method DrawSphere (MAP_METHOD_AND_WRAP). */
  DrawSphere(...args) {
    throw new Error("TriStepRenderDebug.DrawSphere is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Print3D (MAP_METHOD_AND_WRAP). */
  Print3D(...args) {
    throw new Error("TriStepRenderDebug.Print3D is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Print2D (MAP_METHOD_AND_WRAP). */
  Print2D(...args) {
    throw new Error("TriStepRenderDebug.Print2D is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Print2Df (MAP_METHOD_AND_WRAP). */
  Print2Df(...args) {
    throw new Error("TriStepRenderDebug.Print2Df is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriStepRenderDebug as TriStepRenderDebug };
//# sourceMappingURL=TriStepRenderDebug.js.map
