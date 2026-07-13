import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initProto, _initClass, _init_ribbonSegmentCount, _init_extra_ribbonSegmentCount, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_enablePicking, _init_extra_enablePicking, _init_depthOffset, _init_extra_depthOffset, _init_ellipses, _init_extra_ellipses, _init_effect, _init_extra_effect;

/** EveEllipseSet (eve/ui) - generated from schema shapeHash 0b697e50.... */
let _EveEllipseSet;
class EveEllipseSet extends _EveChildTransform {
  static {
    ({
      e: [_init_ribbonSegmentCount, _init_extra_ribbonSegmentCount, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_enablePicking, _init_extra_enablePicking, _init_depthOffset, _init_extra_depthOffset, _init_ellipses, _init_extra_ellipses, _init_effect, _init_extra_effect, _initProto],
      c: [_EveEllipseSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveEllipseSet",
      family: "eve/ui"
    })], [[[io, io.notify, io, io.persist, type, type.uint32], 16, "ribbonSegmentCount"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "enablePicking"], [[io, io.persist, type, type.float32], 16, "depthOffset"], [[io, io.persist, void 0, type.list("EveEllipseDefinition")], 16, "ellipses"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddEllipse"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "__init__"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearEllipses"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_effect(this);
  }
  /** m_ribbonSegmentCount (unsigned int) [READWRITE, NOTIFY, PERSIST] */
  ribbonSegmentCount = (_initProto(this), _init_ribbonSegmentCount(this, 128));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_ribbonSegmentCount(this), _init_name(this, ""));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_name(this), _init_display(this, true));

  /** m_enablePicking (bool) [READWRITE, PERSIST] */
  enablePicking = (_init_extra_display(this), _init_enablePicking(this, true));

  /** m_depthOffset (float) [READWRITE, PERSIST] */
  depthOffset = (_init_extra_enablePicking(this), _init_depthOffset(this, 0));

  /** m_ellipses (PEveEllipseDefinitionVector) [READ, PERSIST] */
  ellipses = (_init_extra_depthOffset(this), _init_ellipses(this, []));

  /** m_effect (Tr2EffectPtr) [READWRITE, PERSIST] */
  effect = (_init_extra_ellipses(this), _init_effect(this, null));

  /** Carbon method AddEllipse (MAP_METHOD_AND_WRAP). */
  AddEllipse(...args) {
    throw _EveChildTransform.notImplemented("EveEllipseSet", "AddEllipse", args);
  }

  /** Carbon method __init__ -> py__init__ (MAP_METHOD_AND_WRAP). */
  __init__(...args) {
    throw _EveChildTransform.notImplemented("EveEllipseSet", "__init__", args);
  }

  /** Carbon method ClearEllipses (MAP_METHOD_AND_WRAP). */
  ClearEllipses(...args) {
    throw _EveChildTransform.notImplemented("EveEllipseSet", "ClearEllipses", args);
  }
  static {
    _initClass();
  }
}

export { _EveEllipseSet as EveEllipseSet };
//# sourceMappingURL=EveEllipseSet.js.map
