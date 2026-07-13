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
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "Clear", args);
  }

  /** Carbon method DrawBox (MAP_METHOD_AND_WRAP). */
  DrawBox(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "DrawBox", args);
  }

  /** Carbon method DrawCapsule (MAP_METHOD_AND_WRAP). */
  DrawCapsule(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "DrawCapsule", args);
  }

  /** Carbon method DrawCone (MAP_METHOD_AND_WRAP). */
  DrawCone(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "DrawCone", args);
  }

  /** Carbon method DrawCylinder (MAP_METHOD_AND_WRAP). */
  DrawCylinder(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "DrawCylinder", args);
  }

  /** Carbon method DrawLine -> PyDrawLine (MAP_METHOD_AND_WRAP). */
  DrawLine(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "DrawLine", args);
  }

  /** Carbon method DrawSphere (MAP_METHOD_AND_WRAP). */
  DrawSphere(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "DrawSphere", args);
  }

  /** Carbon method Print3D (MAP_METHOD_AND_WRAP). */
  Print3D(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "Print3D", args);
  }

  /** Carbon method Print2D (MAP_METHOD_AND_WRAP). */
  Print2D(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "Print2D", args);
  }

  /** Carbon method Print2Df (MAP_METHOD_AND_WRAP). */
  Print2Df(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderDebug", "Print2Df", args);
  }
  static {
    _initClass();
  }
}

export { _TriStepRenderDebug as TriStepRenderDebug };
//# sourceMappingURL=TriStepRenderDebug.js.map
