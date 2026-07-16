import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_onSwapChainChange, _init_extra_onSwapChainChange, _init_onBeforeSwapChainChange, _init_extra_onBeforeSwapChainChange, _init_onWindowsMessage, _init_extra_onWindowsMessage, _init_onKeyDown, _init_extra_onKeyDown, _init_onKeyUp, _init_extra_onKeyUp, _init_onChar, _init_extra_onChar, _init_onMouseUp, _init_extra_onMouseUp, _init_onMouseDown, _init_extra_onMouseDown, _init_onMouseMove, _init_extra_onMouseMove, _init_onMouseWheel, _init_extra_onMouseWheel, _init_onClose, _init_extra_onClose, _init_onFocusChange, _init_extra_onFocusChange, _init_onWindowStateChange, _init_extra_onWindowStateChange, _init_imeState_MacOS, _init_extra_imeState_MacOS, _init_onKeyboardLayoutChange_MacOS, _init_extra_onKeyboardLayoutChange_MacOS, _init_onInsertTextIME_MacOS, _init_extra_onInsertTextIME_MacOS, _init_onSetMarkedTextIME_MacOS, _init_extra_onSetMarkedTextIME_MacOS;

/** Tr2MainWindow (ui) - generated from schema shapeHash bf12e3e6.... */
let _Tr2MainWindow;
class Tr2MainWindow extends CjsModel {
  static {
    ({
      e: [_init_onSwapChainChange, _init_extra_onSwapChainChange, _init_onBeforeSwapChainChange, _init_extra_onBeforeSwapChainChange, _init_onWindowsMessage, _init_extra_onWindowsMessage, _init_onKeyDown, _init_extra_onKeyDown, _init_onKeyUp, _init_extra_onKeyUp, _init_onChar, _init_extra_onChar, _init_onMouseUp, _init_extra_onMouseUp, _init_onMouseDown, _init_extra_onMouseDown, _init_onMouseMove, _init_extra_onMouseMove, _init_onMouseWheel, _init_extra_onMouseWheel, _init_onClose, _init_extra_onClose, _init_onFocusChange, _init_extra_onFocusChange, _init_onWindowStateChange, _init_extra_onWindowStateChange, _init_imeState_MacOS, _init_extra_imeState_MacOS, _init_onKeyboardLayoutChange_MacOS, _init_extra_onKeyboardLayoutChange_MacOS, _init_onInsertTextIME_MacOS, _init_extra_onInsertTextIME_MacOS, _init_onSetMarkedTextIME_MacOS, _init_extra_onSetMarkedTextIME_MacOS, _initProto],
      c: [_Tr2MainWindow, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2MainWindow",
      family: "ui"
    })], [[[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onSwapChainChange"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onBeforeSwapChainChange"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onWindowsMessage"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onKeyDown"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onKeyUp"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onChar"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onMouseUp"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onMouseDown"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onMouseMove"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onMouseWheel"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onClose"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onFocusChange"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onWindowStateChange"], [[io, io.readwrite, type, type.int32, void 0, schema.enum("Tr2ImeState_MacOS")], 16, "imeState_MacOS"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onKeyboardLayoutChange_MacOS"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onInsertTextIME_MacOS"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "onSetMarkedTextIME_MacOS"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsActive"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetMinimumSize"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetWindowState"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetWindowsMessageFilter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClipCursor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "UnclipCursor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ProcessMessages"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetWindowState"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetWindowSizeOptions"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetCursorPos"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetWindowTitle"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetBackBufferFormat"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetHwndAsLong"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetWindowsMessageFilter"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDefaultState"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetKeyNameText"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Key"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsKeyToggled"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "IsHidden"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "HasFocus"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SanitizeState"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetCursorPos"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetWindowTitle"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "StoreStateSettings"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_onSetMarkedTextIME_MacOS(this);
  }
  /** m_onSwapChainChange (BlueScriptCallback) [READWRITE] */
  onSwapChainChange = (_initProto(this), _init_onSwapChainChange(this, null));

  /** m_onBeforeSwapChainChange (BlueScriptCallback) [READWRITE] */
  onBeforeSwapChainChange = (_init_extra_onSwapChainChange(this), _init_onBeforeSwapChainChange(this, null));

  /** m_onWindowsMessage (BlueScriptCallback) [READWRITE] */
  onWindowsMessage = (_init_extra_onBeforeSwapChainChange(this), _init_onWindowsMessage(this, null));

  /** m_onKeyDown (BlueScriptCallback) [READWRITE] */
  onKeyDown = (_init_extra_onWindowsMessage(this), _init_onKeyDown(this, null));

  /** m_onKeyUp (BlueScriptCallback) [READWRITE] */
  onKeyUp = (_init_extra_onKeyDown(this), _init_onKeyUp(this, null));

  /** m_onChar (BlueScriptCallback) [READWRITE] */
  onChar = (_init_extra_onKeyUp(this), _init_onChar(this, null));

  /** m_onMouseUp (BlueScriptCallback) [READWRITE] */
  onMouseUp = (_init_extra_onChar(this), _init_onMouseUp(this, null));

  /** m_onMouseDown (BlueScriptCallback) [READWRITE] */
  onMouseDown = (_init_extra_onMouseUp(this), _init_onMouseDown(this, null));

  /** m_onMouseMove (BlueScriptCallback) [READWRITE] */
  onMouseMove = (_init_extra_onMouseDown(this), _init_onMouseMove(this, null));

  /** m_onMouseWheel (BlueScriptCallback) [READWRITE] */
  onMouseWheel = (_init_extra_onMouseMove(this), _init_onMouseWheel(this, null));

  /** m_onClose (BlueScriptCallback) [READWRITE] */
  onClose = (_init_extra_onMouseWheel(this), _init_onClose(this, null));

  /** m_onFocusChange (BlueScriptCallback) [READWRITE] */
  onFocusChange = (_init_extra_onClose(this), _init_onFocusChange(this, null));

  /** m_onWindowStateChange (BlueScriptCallback) [READWRITE] */
  onWindowStateChange = (_init_extra_onFocusChange(this), _init_onWindowStateChange(this, null));

  /** m_imeState_MacOS (Tr2ImeState_MacOS::Type - enum Tr2ImeState_MacOS) [READWRITE] */
  imeState_MacOS = (_init_extra_onWindowStateChange(this), _init_imeState_MacOS(this, 0));

  /** m_onKeyboardLayoutChange_MacOS (BlueScriptCallback) [READWRITE] */
  onKeyboardLayoutChange_MacOS = (_init_extra_imeState_MacOS(this), _init_onKeyboardLayoutChange_MacOS(this, null));

  /** m_onInsertTextIME_MacOS (BlueScriptCallback) [READWRITE] */
  onInsertTextIME_MacOS = (_init_extra_onKeyboardLayoutChange_MacOS(this), _init_onInsertTextIME_MacOS(this, null));

  /** m_onSetMarkedTextIME_MacOS (BlueScriptCallback) [READWRITE] */
  onSetMarkedTextIME_MacOS = (_init_extra_onInsertTextIME_MacOS(this), _init_onSetMarkedTextIME_MacOS(this, null));

  /** Carbon method IsActive -> HasFocus (MAP_METHOD_AND_WRAP). */
  IsActive(...args) {
    throw new Error("Tr2MainWindow.IsActive is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetMinimumSize (MAP_METHOD_AND_WRAP). */
  SetMinimumSize(...args) {
    throw new Error("Tr2MainWindow.SetMinimumSize is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetWindowState -> SetStateScript (MAP_METHOD_AND_WRAP). */
  SetWindowState(...args) {
    throw new Error("Tr2MainWindow.SetWindowState is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetWindowsMessageFilter (MAP_METHOD_AND_WRAP). */
  SetWindowsMessageFilter(...args) {
    throw new Error("Tr2MainWindow.SetWindowsMessageFilter is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ClipCursor (MAP_METHOD_AND_WRAP). */
  ClipCursor(...args) {
    throw new Error("Tr2MainWindow.ClipCursor is not implemented in CarbonEngineJS.");
  }

  /** Carbon method UnclipCursor (MAP_METHOD_AND_WRAP). */
  UnclipCursor(...args) {
    throw new Error("Tr2MainWindow.UnclipCursor is not implemented in CarbonEngineJS.");
  }

  /** Carbon method ProcessMessages (MAP_METHOD_AND_WRAP). */
  ProcessMessages(...args) {
    throw new Error("Tr2MainWindow.ProcessMessages is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetWindowState -> GetStateScript (MAP_METHOD_AND_WRAP). */
  GetWindowState(...args) {
    throw new Error("Tr2MainWindow.GetWindowState is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetWindowSizeOptions (MAP_METHOD_AND_WRAP). */
  GetWindowSizeOptions(...args) {
    throw new Error("Tr2MainWindow.GetWindowSizeOptions is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetCursorPos (MAP_METHOD_AND_WRAP). */
  GetCursorPos(...args) {
    throw new Error("Tr2MainWindow.GetCursorPos is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetWindowTitle (MAP_METHOD_AND_WRAP). */
  GetWindowTitle(...args) {
    throw new Error("Tr2MainWindow.GetWindowTitle is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetBackBufferFormat (MAP_METHOD_AND_WRAP). */
  GetBackBufferFormat(...args) {
    throw new Error("Tr2MainWindow.GetBackBufferFormat is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetHwndAsLong -> GetHwnd (MAP_METHOD_AND_WRAP). */
  GetHwndAsLong(...args) {
    throw new Error("Tr2MainWindow.GetHwndAsLong is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetWindowsMessageFilter (MAP_METHOD_AND_WRAP). */
  GetWindowsMessageFilter(...args) {
    throw new Error("Tr2MainWindow.GetWindowsMessageFilter is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetDefaultState (MAP_METHOD_AND_WRAP). */
  GetDefaultState(...args) {
    throw new Error("Tr2MainWindow.GetDefaultState is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetKeyNameText -> GetKeyName (MAP_METHOD_AND_WRAP). */
  GetKeyNameText(...args) {
    throw new Error("Tr2MainWindow.GetKeyNameText is not implemented in CarbonEngineJS.");
  }

  /** Carbon method Key -> IsKeyPressed (MAP_METHOD_AND_WRAP). */
  Key(...args) {
    throw new Error("Tr2MainWindow.Key is not implemented in CarbonEngineJS.");
  }

  /** Carbon method IsKeyToggled (MAP_METHOD_AND_WRAP). */
  IsKeyToggled(...args) {
    throw new Error("Tr2MainWindow.IsKeyToggled is not implemented in CarbonEngineJS.");
  }

  /** Carbon method IsHidden -> IsMinimized (MAP_METHOD_AND_WRAP). */
  IsHidden(...args) {
    throw new Error("Tr2MainWindow.IsHidden is not implemented in CarbonEngineJS.");
  }

  /** Carbon method HasFocus (MAP_METHOD_AND_WRAP). */
  HasFocus(...args) {
    throw new Error("Tr2MainWindow.HasFocus is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SanitizeState -> SanitizeStateScript (MAP_METHOD_AND_WRAP). */
  SanitizeState(...args) {
    throw new Error("Tr2MainWindow.SanitizeState is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetCursorPos (MAP_METHOD_AND_WRAP). */
  SetCursorPos(...args) {
    throw new Error("Tr2MainWindow.SetCursorPos is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetWindowTitle (MAP_METHOD_AND_WRAP). */
  SetWindowTitle(...args) {
    throw new Error("Tr2MainWindow.SetWindowTitle is not implemented in CarbonEngineJS.");
  }

  /** Carbon method StoreStateSettings (MAP_METHOD_AND_WRAP). */
  StoreStateSettings(...args) {
    throw new Error("Tr2MainWindow.StoreStateSettings is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2MainWindow as Tr2MainWindow };
//# sourceMappingURL=Tr2MainWindow.js.map
