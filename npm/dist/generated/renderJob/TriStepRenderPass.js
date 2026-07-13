import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { TriRenderStep as _TriRenderStep } from '../../renderJob/TriRenderStep.js';

let _initProto, _initClass, _init_passType, _init_extra_passType, _init_scene, _init_extra_scene;

/** TriStepRenderPass (renderJob) - generated from schema shapeHash 6990d43a.... */
let _TriStepRenderPass;
class TriStepRenderPass extends _TriRenderStep {
  static {
    ({
      e: [_init_passType, _init_extra_passType, _init_scene, _init_extra_scene, _initProto],
      c: [_TriStepRenderPass, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriStepRenderPass",
      family: "renderJob"
    })], [[[io, io.persist, type, type.int32, void 0, schema.enum("PassType")], 16, "passType"], [[io, io.persist, void 0, type.objectRef("ITr2MultiPassScene")], 16, "scene"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"]], 0, void 0, _TriRenderStep));
  }
  constructor(...args) {
    super(...args);
    _init_extra_scene(this);
  }
  /** m_pass (ITr2MultiPassScene::PassType - enum PassType) [READWRITE, PERSIST, ENUM] */
  passType = (_initProto(this), _init_passType(this, 0));

  /** m_scene (ITr2MultiPassScenePtr) [READWRITE, PERSIST] */
  scene = (_init_extra_passType(this), _init_scene(this, null));

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  __init__(...args) {
    throw _TriRenderStep.notImplemented("TriStepRenderPass", "__init__", args);
  }
  static {
    _initClass();
  }
}

export { _TriStepRenderPass as TriStepRenderPass };
//# sourceMappingURL=TriStepRenderPass.js.map
