import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_screenMargin, _init_extra_screenMargin, _init_cameraDistance, _init_extra_cameraDistance, _init_projectedHeight, _init_extra_projectedHeight, _init_integerCoordinates, _init_extra_integerCoordinates, _init_maxProjectedHeight, _init_extra_maxProjectedHeight, _init_maxProjectedWidth, _init_extra_maxProjectedWidth, _init_minProjectedHeight, _init_extra_minProjectedHeight, _init_minProjectedWidth, _init_extra_minProjectedWidth, _init_name, _init_extra_name, _init_object, _init_extra_object, _init_parent, _init_extra_parent, _init_bracket, _init_extra_bracket, _init_projectedWidth, _init_extra_projectedWidth, _init_projectedX, _init_extra_projectedX, _init_projectedY, _init_extra_projectedY, _init_projectedZ, _init_extra_projectedZ;

/** Tr2ProjectBoundingBoxBracket (trinityCore) - generated from schema shapeHash e761a356.... */
let _Tr2ProjectBoundingBo;
class Tr2ProjectBoundingBoxBracket extends CjsModel {
  static {
    ({
      e: [_init_screenMargin, _init_extra_screenMargin, _init_cameraDistance, _init_extra_cameraDistance, _init_projectedHeight, _init_extra_projectedHeight, _init_integerCoordinates, _init_extra_integerCoordinates, _init_maxProjectedHeight, _init_extra_maxProjectedHeight, _init_maxProjectedWidth, _init_extra_maxProjectedWidth, _init_minProjectedHeight, _init_extra_minProjectedHeight, _init_minProjectedWidth, _init_extra_minProjectedWidth, _init_name, _init_extra_name, _init_object, _init_extra_object, _init_parent, _init_extra_parent, _init_bracket, _init_extra_bracket, _init_projectedWidth, _init_extra_projectedWidth, _init_projectedX, _init_extra_projectedX, _init_projectedY, _init_extra_projectedY, _init_projectedZ, _init_extra_projectedZ],
      c: [_Tr2ProjectBoundingBo, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2ProjectBoundingBoxBracket",
      family: "trinityCore"
    })], [[[io, io.readwrite, type, type.float32], 16, "screenMargin"], [[io, io.read, type, type.float32], 16, "cameraDistance"], [[io, io.read, type, type.float32], 16, "projectedHeight"], [[io, io.readwrite, type, type.boolean], 16, "integerCoordinates"], [[io, io.readwrite, type, type.float32], 16, "maxProjectedHeight"], [[io, io.readwrite, type, type.float32], 16, "maxProjectedWidth"], [[io, io.readwrite, type, type.float32], 16, "minProjectedHeight"], [[io, io.readwrite, type, type.float32], 16, "minProjectedWidth"], [[io, io.readwrite, type, type.string], 16, "name"], [[io, io.readwrite, void 0, type.objectRef("ITr2BoundingBox")], 16, "object"], [[io, io.readwrite, void 0, type.objectRef("Tr2Sprite2dContainer")], 16, "parent"], [[io, io.readwrite, void 0, type.objectRef("Tr2Sprite2dContainer")], 16, "bracket"], [[io, io.read, type, type.float32], 16, "projectedWidth"], [[io, io.read, type, type.float32], 16, "projectedX"], [[io, io.read, type, type.float32], 16, "projectedY"], [[io, io.read, type, type.float32], 16, "projectedZ"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_projectedZ(this);
  }
  /** m_screenMargin (float) [READWRITE] */
  screenMargin = _init_screenMargin(this, 32);

  /** m_cameraDistance (float) [READ] */
  cameraDistance = (_init_extra_screenMargin(this), _init_cameraDistance(this, 0));

  /** m_projectedHeight (float) [READ] */
  projectedHeight = (_init_extra_cameraDistance(this), _init_projectedHeight(this, 0));

  /** m_integerCoordinates (bool) [READWRITE] */
  integerCoordinates = (_init_extra_projectedHeight(this), _init_integerCoordinates(this, true));

  /** m_maxProjectedHeight (float) [READWRITE] */
  maxProjectedHeight = (_init_extra_integerCoordinates(this), _init_maxProjectedHeight(this, 0));

  /** m_maxProjectedWidth (float) [READWRITE] */
  maxProjectedWidth = (_init_extra_maxProjectedHeight(this), _init_maxProjectedWidth(this, 0));

  /** m_minProjectedHeight (float) [READWRITE] */
  minProjectedHeight = (_init_extra_maxProjectedWidth(this), _init_minProjectedHeight(this, 0));

  /** m_minProjectedWidth (float) [READWRITE] */
  minProjectedWidth = (_init_extra_minProjectedHeight(this), _init_minProjectedWidth(this, 0));

  /** m_name (std::wstring) [READWRITE] */
  name = (_init_extra_minProjectedWidth(this), _init_name(this, ""));

  /** m_object (ITr2BoundingBoxPtr) [READWRITE] */
  object = (_init_extra_name(this), _init_object(this, null));

  /** m_parent (Tr2Sprite2dContainerPtr) [READWRITE] */
  parent = (_init_extra_object(this), _init_parent(this, null));

  /** m_bracket (Tr2Sprite2dContainerPtr) [READWRITE] */
  bracket = (_init_extra_parent(this), _init_bracket(this, null));

  /** m_projectedWidth (float) [READ] */
  projectedWidth = (_init_extra_bracket(this), _init_projectedWidth(this, 0));

  /** m_projectedX (float) [READ] */
  projectedX = (_init_extra_projectedWidth(this), _init_projectedX(this, 0));

  /** m_projectedY (float) [READ] */
  projectedY = (_init_extra_projectedX(this), _init_projectedY(this, 0));

  /** m_projectedZ (float) [READ] */
  projectedZ = (_init_extra_projectedY(this), _init_projectedZ(this, 0));
  static {
    _initClass();
  }
}

export { _Tr2ProjectBoundingBo as Tr2ProjectBoundingBoxBracket };
//# sourceMappingURL=Tr2ProjectBoundingBoxBracket.js.map
