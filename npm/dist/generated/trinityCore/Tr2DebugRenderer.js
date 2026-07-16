import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_position, _init_extra_position, _init_normal, _init_extra_normal, _init_object, _init_extra_object, _init_line, _init_extra_line, _init_color, _init_extra_color, _init_zFailColor, _init_extra_zFailColor, _init_effect, _init_extra_effect, _init_pickingEffect, _init_extra_pickingEffect, _init_lines, _init_extra_lines, _init_triangles, _init_extra_triangles, _init_defaultOptions, _init_extra_defaultOptions, _init_selectedObjects, _init_extra_selectedObjects;

/** Tr2DebugRenderer (trinityCore) - generated from schema shapeHash f23b5345.... */
let _Tr2DebugRenderer;
class Tr2DebugRenderer extends CjsModel {
  static {
    ({
      e: [_init_position, _init_extra_position, _init_normal, _init_extra_normal, _init_object, _init_extra_object, _init_line, _init_extra_line, _init_color, _init_extra_color, _init_zFailColor, _init_extra_zFailColor, _init_effect, _init_extra_effect, _init_pickingEffect, _init_extra_pickingEffect, _init_lines, _init_extra_lines, _init_triangles, _init_extra_triangles, _init_defaultOptions, _init_extra_defaultOptions, _init_selectedObjects, _init_extra_selectedObjects, _initProto],
      c: [_Tr2DebugRenderer, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2DebugRenderer",
      family: "trinityCore"
    })], [[[type, type.vec3], 16, "position"], [[type, type.vec3], 16, "normal"], [[type, type.float32], 16, "object"], [[type, type.float32], 16, "line"], [[type, type.uint32], 16, "color"], [[type, type.uint32], 16, "zFailColor"], [type.objectRef("Tr2Effect"), 0, "effect"], [type.objectRef("Tr2Effect"), 0, "pickingEffect"], [type.list("Vertex"), 0, "lines"], [type.list("Vertex"), 0, "triangles"], [type.rawStruct("Tr2DebugRendererOptions"), 0, "defaultOptions"], [type.set("Tr2DebugObjectReference"), 0, "selectedObjects"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetDefaultOptions"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetSelectedObjects"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetOptions"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetColorForOption"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetOptions"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetDefaultOptions"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SetColorForOption"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_selectedObjects(this);
  }
  /** m_position (Vector3) */
  position = (_initProto(this), _init_position(this, vec3.create()));

  /** m_normal (Vector3) */
  normal = (_init_extra_position(this), _init_normal(this, vec3.create()));

  /** m_object (float) */
  object = (_init_extra_normal(this), _init_object(this, 0));

  /** m_line (float) */
  line = (_init_extra_object(this), _init_line(this, 0));

  /** m_color (uint32_t) */
  color = (_init_extra_line(this), _init_color(this, 0));

  /** m_zFailColor (uint32_t) */
  zFailColor = (_init_extra_color(this), _init_zFailColor(this, 0));

  /** m_effect (Tr2EffectPtr) */
  effect = (_init_extra_zFailColor(this), _init_effect(this, null));

  /** m_pickingEffect (Tr2EffectPtr) */
  pickingEffect = (_init_extra_effect(this), _init_pickingEffect(this, null));

  /** m_lines (std::vector<Vertex>) */
  lines = (_init_extra_pickingEffect(this), _init_lines(this, []));

  /** m_triangles (std::vector<Vertex>) */
  triangles = (_init_extra_lines(this), _init_triangles(this, []));

  /** m_defaultOptions (Tr2DebugRendererOptions) */
  defaultOptions = (_init_extra_triangles(this), _init_defaultOptions(this, null));

  /** m_selectedObjects (std::set<Tr2DebugObjectReference>) */
  selectedObjects = (_init_extra_defaultOptions(this), _init_selectedObjects(this, new Set()));

  /** Carbon method SetDefaultOptions (MAP_METHOD_AND_WRAP). */
  SetDefaultOptions(...args) {
    throw new Error("Tr2DebugRenderer.SetDefaultOptions is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetSelectedObjects (MAP_METHOD_AND_WRAP). */
  SetSelectedObjects(...args) {
    throw new Error("Tr2DebugRenderer.SetSelectedObjects is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetOptions (MAP_METHOD_AND_WRAP). */
  SetOptions(...args) {
    throw new Error("Tr2DebugRenderer.SetOptions is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetColorForOption -> PyGetColorForOption (MAP_METHOD). */
  GetColorForOption(...args) {
    throw new Error("Tr2DebugRenderer.GetColorForOption is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetOptions (MAP_METHOD_AND_WRAP). */
  GetOptions(...args) {
    throw new Error("Tr2DebugRenderer.GetOptions is not implemented in CarbonEngineJS.");
  }

  /** Carbon method GetDefaultOptions (MAP_METHOD_AND_WRAP). */
  GetDefaultOptions(...args) {
    throw new Error("Tr2DebugRenderer.GetDefaultOptions is not implemented in CarbonEngineJS.");
  }

  /** Carbon method SetColorForOption (MAP_METHOD_AND_WRAP). */
  SetColorForOption(...args) {
    throw new Error("Tr2DebugRenderer.SetColorForOption is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _Tr2DebugRenderer as Tr2DebugRenderer };
//# sourceMappingURL=Tr2DebugRenderer.js.map
