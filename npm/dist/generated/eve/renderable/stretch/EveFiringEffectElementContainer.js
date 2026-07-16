import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_element, _init_extra_element, _init_source, _init_extra_source, _init_sourceTransform, _init_extra_sourceTransform, _init_destination, _init_extra_destination, _init_useSourceTransform, _init_extra_useSourceTransform, _init_displayDestination, _init_extra_displayDestination, _init_displaySource, _init_extra_displaySource, _init_display, _init_extra_display, _init_destinationScale, _init_extra_destinationScale;

/** EveFiringEffectElementContainer (eve/renderable/stretch) - generated from schema shapeHash c4d19b46.... */
let _EveFiringEffectEleme;
class EveFiringEffectElementContainer extends _EveEntity {
  static {
    ({
      e: [_init_element, _init_extra_element, _init_source, _init_extra_source, _init_sourceTransform, _init_extra_sourceTransform, _init_destination, _init_extra_destination, _init_useSourceTransform, _init_extra_useSourceTransform, _init_displayDestination, _init_extra_displayDestination, _init_displaySource, _init_extra_displaySource, _init_display, _init_extra_display, _init_destinationScale, _init_extra_destinationScale],
      c: [_EveFiringEffectEleme, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveFiringEffectElementContainer",
      family: "eve/renderable/stretch"
    })], [[[io, io.persistOnly, void 0, type.model("IEveFiringEffectElement")], 16, "element"], [[io, io.readwrite, type, type.mat4], 16, "source"], [[io, io.persist, type, type.mat4], 16, "sourceTransform"], [[io, io.persist, type, type.vec3], 16, "destination"], [[io, io.persist, type, type.boolean], 16, "useSourceTransform"], [[io, io.persist, type, type.boolean], 16, "displayDestination"], [[io, io.persist, type, type.boolean], 16, "displaySource"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.float32], 16, "destinationScale"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_destinationScale(this);
  }
  /** m_element (IEveFiringEffectElementPtr) [PERSISTONLY] */
  element = _init_element(this, null);

  /** m_source.GetTranslation() (Matrix) [READWRITE] */
  source = (_init_extra_element(this), _init_source(this, mat4.create()));

  /** m_source (Matrix) [READWRITE, PERSIST] */
  sourceTransform = (_init_extra_source(this), _init_sourceTransform(this, mat4.create()));

  /** m_destination (Vector3) [READWRITE, PERSIST] */
  destination = (_init_extra_sourceTransform(this), _init_destination(this, vec3.create()));

  /** m_useSourceTransform (bool) [READWRITE, PERSIST] */
  useSourceTransform = (_init_extra_destination(this), _init_useSourceTransform(this, false));

  /** m_displayDestination (bool) [READWRITE, PERSIST] */
  displayDestination = (_init_extra_useSourceTransform(this), _init_displayDestination(this, true));

  /** m_displaySource (bool) [READWRITE, PERSIST] */
  displaySource = (_init_extra_displayDestination(this), _init_displaySource(this, true));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_displaySource(this), _init_display(this, true));

  /** m_destinationScale (float) [READWRITE, PERSIST] */
  destinationScale = (_init_extra_display(this), _init_destinationScale(this, 1));
  static {
    _initClass();
  }
}

export { _EveFiringEffectEleme as EveFiringEffectElementContainer };
//# sourceMappingURL=EveFiringEffectElementContainer.js.map
