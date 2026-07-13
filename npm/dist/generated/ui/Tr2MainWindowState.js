import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_adapter, _init_extra_adapter, _init_presentInterval, _init_extra_presentInterval, _init_height, _init_extra_height, _init_width, _init_extra_width, _init_left, _init_extra_left, _init_showState, _init_extra_showState, _init_windowMode, _init_extra_windowMode, _init_top, _init_extra_top;

/** Tr2MainWindowState (ui) - generated from schema shapeHash 9541e86a.... */
let _Tr2MainWindowState;
class Tr2MainWindowState extends CjsModel {
  static {
    ({
      e: [_init_adapter, _init_extra_adapter, _init_presentInterval, _init_extra_presentInterval, _init_height, _init_extra_height, _init_width, _init_extra_width, _init_left, _init_extra_left, _init_showState, _init_extra_showState, _init_windowMode, _init_extra_windowMode, _init_top, _init_extra_top, _initProto],
      c: [_Tr2MainWindowState, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2MainWindowState",
      family: "ui"
    })], [[[io, io.persist, type, type.uint32], 16, "adapter"], [[io, io.persist, type, type.int32, void 0, schema.enum("PresentInterval")], 16, "presentInterval"], [[io, io.persist, type, type.uint32], 16, "height"], [[io, io.persist, type, type.uint32], 16, "width"], [[io, io.persist, type, type.int32], 16, "left"], [[io, io.persist, type, type.int32, void 0, schema.enum("Tr2WindowShowState")], 16, "showState"], [[io, io.persist, type, type.int32, void 0, schema.enum("Tr2WindowMode")], 16, "windowMode"], [[io, io.persist, type, type.int32], 16, "top"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__str__"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_top(this);
  }
  /** m_state.adapter (uint32_t) [READWRITE, PERSIST] */
  adapter = (_initProto(this), _init_adapter(this, 0));

  /** m_state.presentInterval (Tr2RenderContextEnum::PresentInterval - enum PresentInterval) [READWRITE, PERSIST] */
  presentInterval = (_init_extra_adapter(this), _init_presentInterval(this, 0));

  /** m_state.height (uint32_t) [READWRITE, PERSIST] */
  height = (_init_extra_presentInterval(this), _init_height(this, 0));

  /** m_state.width (uint32_t) [READWRITE, PERSIST] */
  width = (_init_extra_height(this), _init_width(this, 0));

  /** m_state.left (int32_t) [READWRITE, PERSIST] */
  left = (_init_extra_width(this), _init_left(this, 0));

  /** m_state.showState (Tr2WindowShowState::Type - enum Tr2WindowShowState) [READWRITE, PERSIST] */
  showState = (_init_extra_left(this), _init_showState(this, 0));

  /** m_state.windowMode (Tr2WindowMode::Type - enum Tr2WindowMode) [READWRITE, PERSIST] */
  windowMode = (_init_extra_showState(this), _init_windowMode(this, 0));

  /** m_state.top (int32_t) [READWRITE, PERSIST] */
  top = (_init_extra_windowMode(this), _init_top(this, 0));

  /** Carbon method __str__ -> ToString (MAP_METHOD_AND_WRAP). */
  __str__(...args) {
    throw CjsModel.notImplemented("Tr2MainWindowState", "__str__", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2MainWindowState as Tr2MainWindowState };
//# sourceMappingURL=Tr2MainWindowState.js.map
