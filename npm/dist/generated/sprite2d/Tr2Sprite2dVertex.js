import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { carbon, impl, type } from '@carbonenginejs/core-types/schema';
import { Tr2Sprite2dVertexBase as _Tr2Sprite2dVertexBas } from './Tr2Sprite2dVertexBase.js';

let _initProto, _initClass;

/** Tr2Sprite2dVertex (sprite2d) - generated from schema shapeHash 58a5365f.... */
let _Tr2Sprite2dVertex;
class Tr2Sprite2dVertex extends _Tr2Sprite2dVertexBas {
  static {
    ({
      e: [_initProto],
      c: [_Tr2Sprite2dVertex, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2Sprite2dVertex",
      family: "sprite2d"
    })], [[[carbon, carbon.method, impl, impl.notImplemented], 18, "GetTexCoord"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetTexCoord"]], 0, void 0, _Tr2Sprite2dVertexBas));
  }
  constructor(...args) {
    super(...args);
    _initProto(this);
  }
  /** Carbon method GetTexCoord (MAP_METHOD_AND_WRAP). */
  GetTexCoord(...args) {
    throw _Tr2Sprite2dVertexBas.notImplemented("Tr2Sprite2dVertex", "GetTexCoord", args);
  }

  /** Carbon method SetTexCoord (MAP_METHOD_AND_WRAP). */
  SetTexCoord(...args) {
    throw _Tr2Sprite2dVertexBas.notImplemented("Tr2Sprite2dVertex", "SetTexCoord", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2Sprite2dVertex as Tr2Sprite2dVertex };
//# sourceMappingURL=Tr2Sprite2dVertex.js.map
