import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_renderingMode, _init_extra_renderingMode, _init_effect, _init_extra_effect, _init_viewport, _init_extra_viewport, _init_inputNodes, _init_extra_inputNodes;

/** Tr2RenderNodeEffect (trinityCore) - generated from schema shapeHash 8434c088.... */
let _Tr2RenderNodeEffect;
class Tr2RenderNodeEffect extends CjsModel {
  static {
    ({
      e: [_init_renderingMode, _init_extra_renderingMode, _init_effect, _init_extra_effect, _init_viewport, _init_extra_viewport, _init_inputNodes, _init_extra_inputNodes, _initProto],
      c: [_Tr2RenderNodeEffect, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2RenderNodeEffect",
      family: "trinityCore"
    })], [[[io, io.readwrite, type, type.int32, void 0, schema.enum("RenderingMode")], 16, "renderingMode"], [[io, io.readwrite, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.readwrite, void 0, type.objectRef("TriViewport")], 16, "viewport"], [[io, io.persist, void 0, type.list("ITr2RenderNode")], 16, "inputNodes"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddSource"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_inputNodes(this);
  }
  /** m_renderingMode (Tr2EffectStateManager::RenderingMode - enum RenderingMode) [READWRITE, ENUM] */
  renderingMode = (_initProto(this), _init_renderingMode(this, 8));

  /** m_effect (Tr2EffectPtr) [READWRITE] */
  effect = (_init_extra_renderingMode(this), _init_effect(this, null));

  /** m_viewport (TriViewportPtr) [READWRITE] */
  viewport = (_init_extra_effect(this), _init_viewport(this, null));

  /** m_inputNodes (PITr2RenderNodeVector) [READ, PERSIST] */
  inputNodes = (_init_extra_viewport(this), _init_inputNodes(this, []));

  /** Carbon method AddSource (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  AddSource(...args) {
    throw CjsModel.notImplemented("Tr2RenderNodeEffect", "AddSource", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2RenderNodeEffect as Tr2RenderNodeEffect };
//# sourceMappingURL=Tr2RenderNodeEffect.js.map
