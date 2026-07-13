import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_position, _init_extra_position, _init_scaling, _init_extra_scaling, _init_innerScaling, _init_extra_innerScaling, _init_rotation, _init_extra_rotation, _init_name, _init_extra_name, _init_debugShowIntersection, _init_extra_debugShowIntersection;
let _EveBoxVolume;
new class extends _identity {
  static [class EveBoxVolume extends CjsModel {
    static {
      ({
        e: [_init_position, _init_extra_position, _init_scaling, _init_extra_scaling, _init_innerScaling, _init_extra_innerScaling, _init_rotation, _init_extra_rotation, _init_name, _init_extra_name, _init_debugShowIntersection, _init_extra_debugShowIntersection, _initProto],
        c: [_EveBoxVolume, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveBoxVolume",
        family: "eve/volume"
      })], [[[io, io.notify, io, io.persist, type, type.vec3], 16, "position"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "innerScaling"], [[io, io.notify, io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.readwrite, type, type.boolean], 16, "debugShowIntersection"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetBoundingSphere"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetIntensity"], [[carbon, carbon.method, impl, impl.adapted], 18, "RegisterForChanges"], [[carbon, carbon.method, impl, impl.implemented], 18, "UnregisterForChanges"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.noop], 18, "RenderDebugInfo"]], 0, void 0, CjsModel));
    }
    position = (_initProto(this), _init_position(this, vec3.create()));
    scaling = (_init_extra_position(this), _init_scaling(this, vec3.create()));
    innerScaling = (_init_extra_scaling(this), _init_innerScaling(this, vec3.create()));
    rotation = (_init_extra_innerScaling(this), _init_rotation(this, quat.create()));
    name = (_init_extra_rotation(this), _init_name(this, ""));
    debugShowIntersection = (_init_extra_name(this), _init_debugShowIntersection(this, false));
    #callbacks = (_init_extra_debugShowIntersection(this), new Map());
    #nextCallbackId = 1;
    #inverseRotation = quat.create();
    Initialize() {
      this.#setup();
      return true;
    }
    GetBoundingSphere() {
      return {
        center: vec3.clone(this.position),
        radius: vec3.length(this.scaling) * 0.5
      };
    }
    GetIntensity(position) {
      const local = _EveBoxVolume.#toLocal(position, this.position, this.#inverseRotation);
      const outer = _EveBoxVolume.#radialBoxDistance(local, this.scaling);
      const distance = vec3.length(local);
      if (!(outer > 0) || distance > outer) {
        return 0;
      }
      const inner = _EveBoxVolume.#radialBoxDistance(local, this.innerScaling);
      if (inner > 0 && distance <= inner) {
        return 1;
      }
      const span = outer - inner;
      const ratio = span > 0 ? (outer - distance) / span : 0;
      return ratio * ratio;
    }
    RegisterForChanges(callback) {
      const id = this.#nextCallbackId++;
      this.#callbacks.set(id, callback);
      return id;
    }
    UnregisterForChanges(callbackId) {
      this.#callbacks.delete(callbackId);
    }
    OnModified() {
      this.#setup();
      for (const callback of this.#callbacks.values()) {
        callback?.();
      }
      return true;
    }
    RenderDebugInfo() {}
    #setup() {
      for (let i = 0; i < 3; i++) {
        this.scaling[i] = Math.max(0, this.scaling[i]);
        this.innerScaling[i] = Math.min(Math.max(0, this.innerScaling[i]), this.scaling[i]);
      }
      quat.invert(this.#inverseRotation, this.rotation);
    }
  }];
  #toLocal(position, center, inverseRotation) {
    const local = vec3.subtract(vec3.create(), position, center);
    return vec3.transformQuat(local, local, inverseRotation);
  }
  #radialBoxDistance(position, scaling) {
    const length = vec3.length(position);
    if (length === 0) {
      return Math.min(scaling[0], scaling[1], scaling[2]) * 0.5;
    }
    let distance = Number.POSITIVE_INFINITY;
    for (let i = 0; i < 3; i++) {
      const direction = Math.abs(position[i] / length);
      if (direction > 0) {
        distance = Math.min(distance, scaling[i] * 0.5 / direction);
      }
    }
    return Number.isFinite(distance) ? distance : 0;
  }
  constructor() {
    super(_EveBoxVolume), _initClass();
  }
}();

export { _EveBoxVolume as EveBoxVolume };
//# sourceMappingURL=EveBoxVolume.js.map
