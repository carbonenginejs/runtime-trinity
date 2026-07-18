import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../generated/eve/EveEntity.js';
import { EveHazeSetLight as _EveHazeSetLight } from './EveHazeSetLight.js';

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
    })], [[[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.list("EveHazeSetItem")], 16, "hazes"], [[io, io.persist, void 0, type.list("EveHazeSetLight")], 16, "lights"], [[carbon, carbon.method, impl, impl.implemented], 18, "Setup"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddHazeItem"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddLightFromSOF"]], 0, void 0, _EveEntity));
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
  static {
    _initClass();
  }
}

export { _EveHazeSet as EveHazeSet };
//# sourceMappingURL=EveHazeSet.js.map
