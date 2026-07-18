import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_position, _init_extra_position, _init_radius, _init_extra_radius, _init_innerRadius, _init_extra_innerRadius, _init_name, _init_extra_name;
let _EveSphereVolume;
class EveSphereVolume extends CjsModel {
  static {
    ({
      e: [_init_position, _init_extra_position, _init_radius, _init_extra_radius, _init_innerRadius, _init_extra_innerRadius, _init_name, _init_extra_name, _initProto],
      c: [_EveSphereVolume, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSphereVolume",
      family: "eve/volume"
    })], [[[io, io.notify, io, io.persist, type, type.vec3], 16, "position"], [[void 0, io.flag("radius"), io, io.notify, io, io.persist, type, type.float32], 16, "radius"], [[void 0, io.flag("innerRadius"), io, io.notify, io, io.persist, type, type.float32], 16, "innerRadius"], [[io, io.persist, type, type.string], 16, "name"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetBoundingSphere"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetIntensity"], [[carbon, carbon.method, impl, impl.adapted], 18, "RegisterForChanges"], [[carbon, carbon.method, impl, impl.implemented], 18, "UnregisterForChanges"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.noop], 18, "RenderDebugInfo"]], 0, void 0, CjsModel));
  }
  position = (_initProto(this), _init_position(this, vec3.create()));
  radius = (_init_extra_position(this), _init_radius(this, 1));
  innerRadius = (_init_extra_radius(this), _init_innerRadius(this, 1));
  name = (_init_extra_innerRadius(this), _init_name(this, ""));
  #callbacks = (_init_extra_name(this), new Map());
  #nextCallbackId = 1;
  GetBoundingSphere() {
    return {
      center: vec3.clone(this.position),
      radius: this.radius
    };
  }
  GetIntensity(position) {
    const distanceSq = vec3.squaredDistance(position, this.position);
    const outerRadiusSq = this.radius * this.radius;
    if (distanceSq > outerRadiusSq) {
      return 0;
    }
    const innerRadiusSq = this.innerRadius * this.innerRadius;
    if (distanceSq <= innerRadiusSq) {
      return 1;
    }
    const interpolationDistance = outerRadiusSq - innerRadiusSq;
    return interpolationDistance > 0 ? 1 - (distanceSq - innerRadiusSq) / interpolationDistance : 0;
  }
  RegisterForChanges(callback) {
    const id = this.#nextCallbackId++;
    this.#callbacks.set(id, callback);
    return id;
  }
  UnregisterForChanges(callbackId) {
    this.#callbacks.delete(callbackId);
  }
  OnModified(_options = {}) {
    const flags = this.__state.flags;
    if (flags.delete("innerRadius") && this.innerRadius > this.radius) {
      this.radius = this.innerRadius;
    }
    if (flags.delete("radius")) {
      this.radius = Math.max(0, this.radius);
      if (this.innerRadius > this.radius) {
        this.innerRadius = this.radius;
      }
    }
    for (const callback of this.#callbacks.values()) {
      callback?.();
    }
    return true;
  }
  RenderDebugInfo() {}
  static {
    _initClass();
  }
}

export { _EveSphereVolume as EveSphereVolume };
//# sourceMappingURL=EveSphereVolume.js.map
