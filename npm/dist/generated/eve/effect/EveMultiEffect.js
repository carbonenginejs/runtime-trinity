import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initProto, _initClass, _init_bindings, _init_extra_bindings, _init_controllers, _init_extra_controllers, _init_curveSets, _init_extra_curveSets, _init_externalParameters, _init_extra_externalParameters, _init_parameters, _init_extra_parameters, _init_name, _init_extra_name;

/** EveMultiEffect (eve/effect) - generated from schema shapeHash 4a809af9.... */
let _EveMultiEffect;
class EveMultiEffect extends CjsModel {
  static {
    ({
      e: [_init_bindings, _init_extra_bindings, _init_controllers, _init_extra_controllers, _init_curveSets, _init_extra_curveSets, _init_externalParameters, _init_extra_externalParameters, _init_parameters, _init_extra_parameters, _init_name, _init_extra_name, _initProto],
      c: [_EveMultiEffect, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveMultiEffect",
      family: "eve/effect"
    })], [[[io, io.persist, void 0, type.list("Tr2DynamicBinding")], 16, "bindings"], [[io, io.persist, void 0, type.list("ITr2Controller")], 16, "controllers"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.persist, void 0, type.list("Tr2ExternalParameter")], 16, "externalParameters"], [[io, io.persist, void 0, type.list("EveMultiEffectParameter")], 16, "parameters"], [[io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebind"], [[carbon, carbon.method, impl, impl.implemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetParameter"], [[carbon, carbon.method, impl, impl.implemented], 18, "StartControllers"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_name(this);
  }
  /** m_bindings (PTr2DynamicBindingVector) [READ, PERSIST] */
  bindings = (_initProto(this), _init_bindings(this, []));

  /** m_controllers (PITr2ControllerVector) [READ, PERSIST] */
  controllers = (_init_extra_bindings(this), _init_controllers(this, []));

  /** m_curveSets (PTriCurveSetVector) [READ, PERSIST] */
  curveSets = (_init_extra_controllers(this), _init_curveSets(this, []));

  /** m_externalParameters (PTr2ExternalParameterVector) [READ, PERSIST] */
  externalParameters = (_init_extra_curveSets(this), _init_externalParameters(this, []));

  /** m_parameters (PEveMultiEffectParameterVector) [READ, PERSIST] */
  parameters = (_init_extra_externalParameters(this), _init_parameters(this, []));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_parameters(this), _init_name(this, ""));

  /** Carbon method Rebind (MAP_METHOD_AND_WRAP_OPTIONAL_ARGS). */
  Rebind(onlyUpdateBindings = false) {
    for (const binding of this.bindings) {
      binding?.SetOwner?.(this);
      binding?.Link?.();
      binding?.Update?.(0);
    }
    if (!onlyUpdateBindings) {
      for (const controller of this.controllers) controller?.Link?.(this);
    }
    return true;
  }

  /** Carbon method HandleControllerEvent (MAP_METHOD_AND_WRAP). */
  HandleControllerEvent(name) {
    for (const controller of this.controllers) controller?.HandleEvent?.(name);
  }

  /** Carbon method SetControllerVariable (MAP_METHOD_AND_WRAP). */
  SetControllerVariable(name, value) {
    for (const controller of this.controllers) controller?.SetVariable?.(name, value);
  }

  /** Carbon method SetParameter (MAP_METHOD_AND_WRAP). */
  SetParameter(parameterName, object) {
    const name = String(parameterName);
    const parameter = this.parameters.find(item => (item?.GetName?.() ?? item?.name) === name);
    if (!parameter) return false;
    if (parameter.SetParameterObject) parameter.SetParameterObject(object);else parameter.object = object;
    this.Rebind();
    return true;
  }

  /** Carbon method StartControllers (MAP_METHOD_AND_WRAP). */
  StartControllers() {
    for (const controller of this.controllers) controller?.Start?.();
  }
  static {
    _initClass();
  }
}

export { _EveMultiEffect as EveMultiEffect };
//# sourceMappingURL=EveMultiEffect.js.map
