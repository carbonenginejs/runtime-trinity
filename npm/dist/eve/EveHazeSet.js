import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../generated/eve/EveEntity.js';
import { EveHazeSetLight as _EveHazeSetLight } from './EveHazeSetLight.js';
import { EveComponentType } from './EveComponentTypes.js';

let _initProto, _initClass, _init_effect, _init_extra_effect, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_hazes, _init_extra_hazes, _init_lights, _init_extra_lights;
let _EveHazeSet;
class EveHazeSet extends _EveEntity {
  static {
    ({
      e: [_init_effect, _init_extra_effect, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_hazes, _init_extra_hazes, _init_lights, _init_extra_lights, _initProto],
      c: [_EveHazeSet, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveHazeSet",
      family: "eve/attachment/haze"
    })], [[[void 0, io.rebuild("packedGeometry"), io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[void 0, io.rebuild("packedGeometry"), io, io.persist, void 0, type.list("EveHazeSetItem")], 16, "hazes"], [[io, io.persist, void 0, type.list("EveHazeSetLight")], 16, "lights"], [[carbon, carbon.method, impl, impl.implemented], 18, "Setup"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddHazeItem"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddLightFromSOF"], [[carbon, carbon.method, impl, impl.implemented], 18, "RegisterComponents"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "GetLights"]], 0, void 0, _EveEntity));
  }
  effect = (_initProto(this), _init_effect(this, null));
  display = (_init_extra_effect(this), _init_display(this, true));
  name = (_init_extra_display(this), _init_name(this, ""));
  hazes = (_init_extra_name(this), _init_hazes(this, []));
  lights = (_init_extra_hazes(this), _init_lights(this, []));
  #rebuildRevision = (_init_extra_lights(this), 0);
  Setup(effect) {
    this.effect = effect ?? null;
  }
  Initialize() {
    this.Rebuild();
    return true;
  }
  Rebuild() {
    // Carbon rebuilds packed haze vertices and static bounds here. The
    // backend-neutral runtime keeps the authored graph and invalidates the
    // renderer-facing revision without allocating device resources.
    this.#rebuildRevision++;
    this.__state.rebuild.add("packedGeometry");
  }
  AddHazeItem(item) {
    this.hazes.push(item);
  }
  SetShaderOption(name, value) {
    if (this.effect && typeof this.effect.SetOption === "function") {
      this.effect.SetOption(name, value);
    }
  }
  AddLightFromSOF(light) {
    this.lights.push(_EveHazeSetLight.FromSOF(light));
  }

  /** Carbon EveHazeSet::RegisterComponents (cpp:394-401): LightOwner when
   * lights are authored. */
  RegisterComponents() {
    const registry = this.GetComponentRegistry();
    if (registry && this.lights.length) {
      registry.RegisterComponent(EveComponentType.LightOwner, this);
    }
  }

  /** Carbon EveHazeSet::GetLights (cpp:403-424): per-light submission.
   * Awaits the LightOwner consumption pass (Tr2LightManager submission is
   * unported); presence satisfies the "LightOwner" duck contract. */
  GetLights(..._args) {
    throw new Error("EveHazeSet.GetLights is not implemented in CarbonEngineJS.");
  }
  static {
    _initClass();
  }
}

export { _EveHazeSet as EveHazeSet };
//# sourceMappingURL=EveHazeSet.js.map
