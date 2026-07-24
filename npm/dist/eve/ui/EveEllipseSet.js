import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { io, type, carbon } from '@carbonenginejs/runtime-utils/schema';
import { EveChildTransform as _EveChildTransform } from '../child/EveChildTransform.js';
import { EveEllipseDefinition as _EveEllipseDefinition } from './EveEllipseDefinition.js';

let _initProto, _initClass, _init_ribbonSegmentCount, _init_extra_ribbonSegmentCount, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_enablePicking, _init_extra_enablePicking, _init_depthOffset, _init_extra_depthOffset, _init_ellipses, _init_extra_ellipses, _init_effect, _init_extra_effect;
let _EveEllipseSet;
class EveEllipseSet extends _EveChildTransform {
  static {
    ({
      e: [_init_ribbonSegmentCount, _init_extra_ribbonSegmentCount, _init_name, _init_extra_name, _init_display, _init_extra_display, _init_enablePicking, _init_extra_enablePicking, _init_depthOffset, _init_extra_depthOffset, _init_ellipses, _init_extra_ellipses, _init_effect, _init_extra_effect, _initProto],
      c: [_EveEllipseSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveEllipseSet",
      family: "eve/ui"
    })], [[[io, io.notify, io, io.persist, type, type.uint32], 16, "ribbonSegmentCount"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "enablePicking"], [[io, io.persist, type, type.float32], 16, "depthOffset"], [[io, io.persist, void 0, type.list("EveEllipseDefinition")], 16, "ellipses"], [[io, io.persist, void 0, type.model("Tr2Effect")], 16, "effect"], [[carbon, carbon.method], 18, "AddEllipse"], [[carbon, carbon.method], 18, "__init__"], [[carbon, carbon.method], 18, "ClearEllipses"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_effect(this);
  }
  #geometryDirty = (_initProto(this), true);
  ribbonSegmentCount = _init_ribbonSegmentCount(this, 128);
  name = (_init_extra_ribbonSegmentCount(this), _init_name(this, ""));
  display = (_init_extra_name(this), _init_display(this, true));
  enablePicking = (_init_extra_display(this), _init_enablePicking(this, true));
  depthOffset = (_init_extra_enablePicking(this), _init_depthOffset(this, 0));
  ellipses = (_init_extra_depthOffset(this), _init_ellipses(this, []));
  effect = (_init_extra_ellipses(this), _init_effect(this, null));
  AddEllipse(center, semiMajor, semiMinor, planeNormal, rotationDegrees) {
    const ellipse = new _EveEllipseDefinition();
    vec3.copy(ellipse.center, center);
    ellipse.semiMajor = semiMajor;
    ellipse.semiMinor = semiMinor;
    vec3.copy(ellipse.planeNormal, planeNormal);
    ellipse.rotationDegrees = rotationDegrees;
    this.#BindEllipse(ellipse);
    this.ellipses.push(ellipse);
    this.#MarkGeometryDirty();
    return true;
  }
  __init__() {
    // Carbon creates the configured default effect here. Resource lookup is
    // runtime-resource/engine work; a persisted or caller-assigned effect is
    // retained and the CPU definitions are rebound after hydration.
    for (const ellipse of this.ellipses) {
      this.#BindEllipse(ellipse);
    }
  }
  ClearEllipses() {
    for (const ellipse of this.ellipses) {
      ellipse?.SetDirtyFlag?.(null);
    }
    this.ellipses.length = 0;
    this.#MarkGeometryDirty();
  }
  OnModified(_value = null) {
    this.#MarkGeometryDirty();
    return true;
  }
  #MarkGeometryDirty() {
    this.#geometryDirty = true;
  }
  #BindEllipse(ellipse) {
    ellipse?.SetDirtyFlag?.(() => this.#MarkGeometryDirty());
  }
  static {
    _initClass();
  }
}

export { _EveEllipseSet as EveEllipseSet };
//# sourceMappingURL=EveEllipseSet.js.map
