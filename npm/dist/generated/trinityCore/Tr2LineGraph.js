import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initProto, _initClass, _init_name, _init_extra_name, _init_color, _init_extra_color;

/** Tr2LineGraph (trinityCore) - generated from schema shapeHash 909f29c4.... */
let _Tr2LineGraph;
class Tr2LineGraph extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_color, _init_extra_color, _initProto],
      c: [_Tr2LineGraph, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2LineGraph",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.color], 16, "color"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddMarker"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetStatsHistory"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetSize"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_color(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_initProto(this), _init_name(this, ""));

  /** m_color (Color) [READWRITE, PERSIST] */
  color = (_init_extra_name(this), _init_color(this, vec4.fromValues(1, 1, 1, 1)));

  /** Carbon method AddMarker (MAP_METHOD_AND_WRAP). */
  AddMarker(...args) {
    throw CjsModel.notImplemented("Tr2LineGraph", "AddMarker", args);
  }

  /** Carbon method GetStatsHistory (MAP_METHOD_AND_WRAP). */
  GetStatsHistory(...args) {
    throw CjsModel.notImplemented("Tr2LineGraph", "GetStatsHistory", args);
  }

  /** Carbon method SetSize (MAP_METHOD_AND_WRAP). */
  SetSize(...args) {
    throw CjsModel.notImplemented("Tr2LineGraph", "SetSize", args);
  }
  static {
    _initClass();
  }
}

export { _Tr2LineGraph as Tr2LineGraph };
//# sourceMappingURL=Tr2LineGraph.js.map
