import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initProto, _initClass, _init_scaling, _init_extra_scaling, _init_name, _init_extra_name, _init_rotationCurve, _init_extra_rotationCurve, _init_effect, _init_extra_effect, _init_display, _init_extra_display, _init_renderTransparent, _init_extra_renderTransparent, _init_translationCurve, _init_extra_translationCurve;

/** EveLineSet (eve/ui) - generated from schema shapeHash c858d211.... */
let _EveLineSet;
class EveLineSet extends CjsModel {
  static {
    ({
      e: [_init_scaling, _init_extra_scaling, _init_name, _init_extra_name, _init_rotationCurve, _init_extra_rotationCurve, _init_effect, _init_extra_effect, _init_display, _init_extra_display, _init_renderTransparent, _init_extra_renderTransparent, _init_translationCurve, _init_extra_translationCurve, _initProto],
      c: [_EveLineSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveLineSet",
      family: "eve/ui"
    })], [[[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("ITriQuaternionFunction")], 16, "rotationCurve"], [[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.boolean], 16, "renderTransparent"], [[io, io.persist, void 0, type.objectRef("ITriVectorFunction")], 16, "translationCurve"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLineColor"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ChangeLinePosition"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearLines"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RemoveLine"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SubmitChanges"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_translationCurve(this);
  }
  /** m_scaling (Vector3) [READWRITE, PERSIST] */
  scaling = (_initProto(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_scaling(this), _init_name(this, ""));

  /** m_ballRotation (ITriQuaternionFunctionPtr) [READWRITE, PERSIST] */
  rotationCurve = (_init_extra_name(this), _init_rotationCurve(this, null));

  /** m_effect (Tr2EffectPtr) [READWRITE, NOTIFY, PERSIST] */
  effect = (_init_extra_rotationCurve(this), _init_effect(this, null));

  /** m_display (bool) [READWRITE, PERSIST] */
  display = (_init_extra_effect(this), _init_display(this, true));

  /** m_isRenderedAsTransparent (bool) [READWRITE, PERSIST] */
  renderTransparent = (_init_extra_display(this), _init_renderTransparent(this, false));

  /** m_ballPosition (ITriVectorFunctionPtr) [READWRITE, PERSIST] */
  translationCurve = (_init_extra_renderTransparent(this), _init_translationCurve(this, null));

  /** Carbon method AddLine (MAP_METHOD_AND_WRAP). */
  AddLine(...args) {
    throw CjsModel.notImplemented("EveLineSet", "AddLine", args);
  }

  /** Carbon method ChangeLineColor (MAP_METHOD_AND_WRAP). */
  ChangeLineColor(...args) {
    throw CjsModel.notImplemented("EveLineSet", "ChangeLineColor", args);
  }

  /** Carbon method ChangeLine (MAP_METHOD_AND_WRAP). */
  ChangeLine(...args) {
    throw CjsModel.notImplemented("EveLineSet", "ChangeLine", args);
  }

  /** Carbon method ChangeLinePosition (MAP_METHOD_AND_WRAP). */
  ChangeLinePosition(...args) {
    throw CjsModel.notImplemented("EveLineSet", "ChangeLinePosition", args);
  }

  /** Carbon method ClearLines (MAP_METHOD_AND_WRAP). */
  ClearLines(...args) {
    throw CjsModel.notImplemented("EveLineSet", "ClearLines", args);
  }

  /** Carbon method RemoveLine (MAP_METHOD_AND_WRAP). */
  RemoveLine(...args) {
    throw CjsModel.notImplemented("EveLineSet", "RemoveLine", args);
  }

  /** Carbon method SubmitChanges (MAP_METHOD_AND_WRAP). */
  SubmitChanges(...args) {
    throw CjsModel.notImplemented("EveLineSet", "SubmitChanges", args);
  }
  static {
    _initClass();
  }
}

export { _EveLineSet as EveLineSet };
//# sourceMappingURL=EveLineSet.js.map
