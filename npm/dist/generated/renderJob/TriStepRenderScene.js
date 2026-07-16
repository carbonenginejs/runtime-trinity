import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_scene, _init_extra_scene;

/** TriStepRenderScene (renderJob) - generated from schema shapeHash 2d05c664.... */
let _TriStepRenderScene;
class TriStepRenderScene extends _TriRenderStep {
  static {
    ({
      e: [_init_scene, _init_extra_scene, _initProto],
      c: [_TriStepRenderScene, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepRenderScene",
      family: "renderJob"
    })], [[[io, io.persist, void 0, type.model("ITr2Scene")], 16, "scene"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_scene(this);
  }
  /** m_scene (ITr2ScenePtr) [READWRITE, PERSIST] */
  scene = (_initProto(this), _init_scene(this, null));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw new Error("TriStepRenderScene.__init__ is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _TriStepRenderScene as TriStepRenderScene };
//# sourceMappingURL=TriStepRenderScene.js.map
