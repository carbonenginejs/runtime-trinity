import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_useViewSpace, _init_extra_useViewSpace, _init_clientBall, _init_extra_clientBall, _init_offsetPosition, _init_extra_offsetPosition, _init_scaleModifier, _init_extra_scaleModifier, _init_useSystemCoordinates, _init_extra_useSystemCoordinates;

/** Tr2VectorFunctionModifier (trinityCore) - generated from schema shapeHash 7fb83656.... */
let _Tr2VectorFunctionMod;
class Tr2VectorFunctionModifier extends CjsModel {
  static {
    ({
      e: [_init_useViewSpace, _init_extra_useViewSpace, _init_clientBall, _init_extra_clientBall, _init_offsetPosition, _init_extra_offsetPosition, _init_scaleModifier, _init_extra_scaleModifier, _init_useSystemCoordinates, _init_extra_useSystemCoordinates],
      c: [_Tr2VectorFunctionMod, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2VectorFunctionModifier",
      family: "trinityCore"
    })], [[[io, io.readwrite, type, type.boolean], 16, "useViewSpace"], [[io, io.readwrite, void 0, type.objectRef("ITriVectorFunction")], 16, "clientBall"], [[io, io.readwrite, type, type.vec3], 16, "offsetPosition"], [[io, io.readwrite, type, type.float32], 16, "scaleModifier"], [[io, io.readwrite, type, type.boolean], 16, "useSystemCoordinates"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_useSystemCoordinates(this);
  }
  /** m_useViewSpace (bool) [READWRITE] */
  useViewSpace = _init_useViewSpace(this, false);

  /** m_clientBall (ITriVectorFunctionPtr) [READWRITE] */
  clientBall = (_init_extra_useViewSpace(this), _init_clientBall(this, null));

  /** m_offsetPosition (Vector3) [READWRITE] */
  offsetPosition = (_init_extra_clientBall(this), _init_offsetPosition(this, vec3.create()));

  /** m_scaleModifier (float) [READWRITE] */
  scaleModifier = (_init_extra_offsetPosition(this), _init_scaleModifier(this, 1));

  /** m_useSystemCoordinates (bool) [READWRITE] */
  useSystemCoordinates = (_init_extra_scaleModifier(this), _init_useSystemCoordinates(this, false));
  static {
    _initClass();
  }
}

export { _Tr2VectorFunctionMod as Tr2VectorFunctionModifier };
//# sourceMappingURL=Tr2VectorFunctionModifier.js.map
