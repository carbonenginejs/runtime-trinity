import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec2 } from '@carbonenginejs/core-math/vec2';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_marginLeft, _init_extra_marginLeft, _init_marginRight, _init_extra_marginRight, _init_marginTop, _init_extra_marginTop, _init_marginBottom, _init_extra_marginBottom, _init_ballTrackingScaling, _init_extra_ballTrackingScaling, _init_bracketUpdateCallback, _init_extra_bracketUpdateCallback, _init_displayChangeCallback, _init_extra_displayChangeCallback, _init_minDispRange, _init_extra_minDispRange, _init_maxDispRange, _init_extra_maxDispRange, _init_trackBall, _init_extra_trackBall, _init_cameraDistance, _init_extra_cameraDistance, _init_trackPosition, _init_extra_trackPosition, _init_isInFront, _init_extra_isInFront, _init_offsetX, _init_extra_offsetX, _init_integerCoordinates, _init_extra_integerCoordinates, _init_name, _init_extra_name, _init_parent, _init_extra_parent, _init_dock, _init_extra_dock, _init_projectedPosition, _init_extra_projectedPosition, _init_rawProjectedPosition, _init_extra_rawProjectedPosition, _init_trackTransform, _init_extra_trackTransform, _init_bracket, _init_extra_bracket, _init_bracketIcon, _init_extra_bracketIcon, _init_offsetY, _init_extra_offsetY, _init_isVisible, _init_extra_isVisible;

/** EveProjectBracket (eve/ui) - generated from schema shapeHash 4a8e83c2.... */
let _EveProjectBracket;
class EveProjectBracket extends CjsModel {
  static {
    ({
      e: [_init_marginLeft, _init_extra_marginLeft, _init_marginRight, _init_extra_marginRight, _init_marginTop, _init_extra_marginTop, _init_marginBottom, _init_extra_marginBottom, _init_ballTrackingScaling, _init_extra_ballTrackingScaling, _init_bracketUpdateCallback, _init_extra_bracketUpdateCallback, _init_displayChangeCallback, _init_extra_displayChangeCallback, _init_minDispRange, _init_extra_minDispRange, _init_maxDispRange, _init_extra_maxDispRange, _init_trackBall, _init_extra_trackBall, _init_cameraDistance, _init_extra_cameraDistance, _init_trackPosition, _init_extra_trackPosition, _init_isInFront, _init_extra_isInFront, _init_offsetX, _init_extra_offsetX, _init_integerCoordinates, _init_extra_integerCoordinates, _init_name, _init_extra_name, _init_parent, _init_extra_parent, _init_dock, _init_extra_dock, _init_projectedPosition, _init_extra_projectedPosition, _init_rawProjectedPosition, _init_extra_rawProjectedPosition, _init_trackTransform, _init_extra_trackTransform, _init_bracket, _init_extra_bracket, _init_bracketIcon, _init_extra_bracketIcon, _init_offsetY, _init_extra_offsetY, _init_isVisible, _init_extra_isVisible],
      c: [_EveProjectBracket, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveProjectBracket",
      family: "eve/ui"
    })], [[[io, io.readwrite, type, type.float32], 16, "marginLeft"], [[io, io.readwrite, type, type.float32], 16, "marginRight"], [[io, io.readwrite, type, type.float32], 16, "marginTop"], [[io, io.readwrite, type, type.float32], 16, "marginBottom"], [[io, io.readwrite, type, type.float32], 16, "ballTrackingScaling"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "bracketUpdateCallback"], [[io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "displayChangeCallback"], [[io, io.readwrite, type, type.float32], 16, "minDispRange"], [[io, io.readwrite, type, type.float32], 16, "maxDispRange"], [[io, io.readwrite, void 0, type.objectRef("ITriVectorFunction")], 16, "trackBall"], [[io, io.read, type, type.float32], 16, "cameraDistance"], [[io, io.readwrite, type, type.vec3], 16, "trackPosition"], [[io, io.read, type, type.boolean], 16, "isInFront"], [[io, io.readwrite, type, type.float32], 16, "offsetX"], [[io, io.readwrite, type, type.boolean], 16, "integerCoordinates"], [[io, io.readwrite, type, type.string], 16, "name"], [[io, io.readwrite, void 0, type.objectRef("Tr2Sprite2dContainer")], 16, "parent"], [[io, io.readwrite, type, type.boolean], 16, "dock"], [[io, io.read, type, type.vec2], 16, "projectedPosition"], [[io, io.read, type, type.vec2], 16, "rawProjectedPosition"], [[io, io.readwrite, void 0, type.objectRef("IWorldPosition")], 16, "trackTransform"], [[io, io.readwrite, void 0, type.objectRef("Tr2Sprite2dContainer")], 16, "bracket"], [[io, io.readwrite, void 0, type.objectRef("EveSprite2dBracket")], 16, "bracketIcon"], [[io, io.readwrite, type, type.float32], 16, "offsetY"], [[io, io.read, type, type.boolean], 16, "isVisible"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isVisible(this);
  }
  /** m_marginLeft (float) [READWRITE] */
  marginLeft = _init_marginLeft(this, 0);

  /** m_marginRight (float) [READWRITE] */
  marginRight = (_init_extra_marginLeft(this), _init_marginRight(this, 0));

  /** m_marginTop (float) [READWRITE] */
  marginTop = (_init_extra_marginRight(this), _init_marginTop(this, 0));

  /** m_marginBottom (float) [READWRITE] */
  marginBottom = (_init_extra_marginTop(this), _init_marginBottom(this, 0));

  /** m_ballTrackingScaling (float) [READWRITE] */
  ballTrackingScaling = (_init_extra_marginBottom(this), _init_ballTrackingScaling(this, 1));

  /** m_bracketUpdateCallback (BlueScriptCallback) [READWRITE] */
  bracketUpdateCallback = (_init_extra_ballTrackingScaling(this), _init_bracketUpdateCallback(this, null));

  /** m_displayChangeCallback (BlueScriptCallback) [READWRITE] */
  displayChangeCallback = (_init_extra_bracketUpdateCallback(this), _init_displayChangeCallback(this, null));

  /** m_minDispRange (float) [READWRITE] */
  minDispRange = (_init_extra_displayChangeCallback(this), _init_minDispRange(this, 0));

  /** m_maxDispRange (float) [READWRITE] */
  maxDispRange = (_init_extra_minDispRange(this), _init_maxDispRange(this, 0));

  /** m_trackBall (ITriVectorFunctionPtr) [READWRITE] */
  trackBall = (_init_extra_maxDispRange(this), _init_trackBall(this, null));

  /** m_cameraDistance (float) [READ] */
  cameraDistance = (_init_extra_trackBall(this), _init_cameraDistance(this, 0));

  /** m_trackPosition (Vector3) [READWRITE] */
  trackPosition = (_init_extra_cameraDistance(this), _init_trackPosition(this, vec3.create()));

  /** m_isInFront (bool) [READ] */
  isInFront = (_init_extra_trackPosition(this), _init_isInFront(this, true));

  /** m_offsetX (float) [READWRITE] */
  offsetX = (_init_extra_isInFront(this), _init_offsetX(this, 0));

  /** m_integerCoordinates (bool) [READWRITE] */
  integerCoordinates = (_init_extra_offsetX(this), _init_integerCoordinates(this, true));

  /** m_name (std::wstring) [READWRITE] */
  name = (_init_extra_integerCoordinates(this), _init_name(this, ""));

  /** m_parent (Tr2Sprite2dContainerPtr) [READWRITE] */
  parent = (_init_extra_name(this), _init_parent(this, null));

  /** m_dock (bool) [READWRITE] */
  dock = (_init_extra_parent(this), _init_dock(this, false));

  /** m_projectedPosition (Vector2) [READ] */
  projectedPosition = (_init_extra_dock(this), _init_projectedPosition(this, vec2.create()));

  /** m_rawProjectedPosition (Vector2) [READ] */
  rawProjectedPosition = (_init_extra_projectedPosition(this), _init_rawProjectedPosition(this, vec2.create()));

  /** m_trackTransform (IWorldPositionPtr) [READWRITE] */
  trackTransform = (_init_extra_rawProjectedPosition(this), _init_trackTransform(this, null));

  /** m_bracket (Tr2Sprite2dContainerPtr) [READWRITE] */
  bracket = (_init_extra_trackTransform(this), _init_bracket(this, null));

  /** m_bracketIcon (EveSprite2dBracketPtr) [READWRITE] */
  bracketIcon = (_init_extra_bracket(this), _init_bracketIcon(this, null));

  /** m_offsetY (float) [READWRITE] */
  offsetY = (_init_extra_bracketIcon(this), _init_offsetY(this, 0));

  /** m_isVisible (bool) [READ] */
  isVisible = (_init_extra_offsetY(this), _init_isVisible(this, true));
  static {
    _initClass();
  }
}

export { _EveProjectBracket as EveProjectBracket };
//# sourceMappingURL=EveProjectBracket.js.map
