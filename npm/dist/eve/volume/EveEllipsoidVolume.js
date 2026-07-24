import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { quat } from '@carbonenginejs/runtime-utils/quat';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';

let _initProto, _initClass, _init_name, _init_extra_name, _init_position, _init_extra_position, _init_rotation, _init_extra_rotation, _init_innerShape, _init_extra_innerShape, _init_shape, _init_extra_shape, _init_debugShowIntersection, _init_extra_debugShowIntersection;
let _EveEllipsoidVolume;
new class extends _identity {
  static [class EveEllipsoidVolume extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_position, _init_extra_position, _init_rotation, _init_extra_rotation, _init_innerShape, _init_extra_innerShape, _init_shape, _init_extra_shape, _init_debugShowIntersection, _init_extra_debugShowIntersection, _initProto],
        c: [_EveEllipsoidVolume, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveEllipsoidVolume",
        family: "eve/volume"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "position"], [[io, io.notify, io, io.persist, type, type.quat], 16, "rotation"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "innerShape"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "shape"], [[io, io.readwrite, type, type.boolean], 16, "debugShowIntersection"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetBoundingSphere"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetIntensity"], [[carbon, carbon.method, impl, impl.adapted], 18, "GeneratePointsInVolume"], [[carbon, carbon.method, impl, impl.adapted], 18, "RegisterForChanges"], [[carbon, carbon.method, impl, impl.implemented], 18, "UnregisterForChanges"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.noop], 18, "RenderDebugInfo"]], 0, void 0, CjsModel));
    }
    name = (_initProto(this), _init_name(this, ""));
    position = (_init_extra_name(this), _init_position(this, vec3.create()));
    rotation = (_init_extra_position(this), _init_rotation(this, quat.create()));
    innerShape = (_init_extra_rotation(this), _init_innerShape(this, vec3.create()));
    shape = (_init_extra_innerShape(this), _init_shape(this, vec3.create()));
    debugShowIntersection = (_init_extra_shape(this), _init_debugShowIntersection(this, false));
    #callbacks = (_init_extra_debugShowIntersection(this), new Map());
    #nextCallbackId = 1;
    #inverseRotation = quat.create();
    Initialize() {
      this.#setup(true);
      return true;
    }
    GetBoundingSphere() {
      return {
        center: vec3.clone(this.position),
        radius: Math.max(this.shape[0], this.shape[1], this.shape[2])
      };
    }
    GetIntensity(position) {
      const local = vec3.subtract(vec3.create(), position, this.position);
      vec3.transformQuat(local, local, this.#inverseRotation);
      const outer = _EveEllipsoidVolume.#radialDistance(local, this.shape);
      const distance = vec3.length(local);
      if (!(outer > 0) || distance > outer) {
        return 0;
      }
      const inner = _EveEllipsoidVolume.#radialDistance(local, this.innerShape);
      if (inner > 0 && distance <= inner) {
        return 1;
      }
      const span = outer - inner;
      const ratio = span > 0 ? (outer - distance) / span : 0;
      return ratio * ratio;
    }
    GeneratePointsInVolume(points, howManyToAdd, excludeInnerVolume, fallOffFactor) {
      const count = Math.max(0, Math.trunc(howManyToAdd));
      let innerSelectionChance = 0;
      if (!excludeInnerVolume) {
        innerSelectionChance = this.innerShape[0] * this.innerShape[1] * this.innerShape[2] / (this.shape[0] * this.shape[1] * this.shape[2]);
        innerSelectionChance = 1 - Math.pow(1 - innerSelectionChance, 0.6 + 0.4 * fallOffFactor);
      }
      for (let i = 0; i < count; i++) {
        const angle = Math.PI * 2 * Math.random();
        const z = Math.random() * 2 - 1;
        const radial = Math.sqrt(1 - z * z);
        const direction = vec3.normalize(vec3.create(), vec3.fromValues(radial * Math.cos(angle), radial * Math.sin(angle), z));
        const position = vec3.create();
        if (Math.random() > innerSelectionChance) {
          const distance = Math.pow(Math.random(), 0.75 * fallOffFactor);
          for (let axis = 0; axis < 3; axis++) {
            position[axis] = direction[axis] * (this.innerShape[axis] + (this.shape[axis] - this.innerShape[axis]) * distance);
          }
        } else {
          const distance = Math.pow(Math.random(), 1 / 3);
          for (let axis = 0; axis < 3; axis++) {
            position[axis] = direction[axis] * this.innerShape[axis] * distance;
          }
        }
        points.push(position);
      }
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
      this.#setup(true);
      return true;
    }
    RenderDebugInfo() {}
    #setup(notify) {
      for (let i = 0; i < 3; i++) {
        this.shape[i] = Math.max(0, this.shape[i]);
        this.innerShape[i] = Math.min(Math.max(0, this.innerShape[i]), this.shape[i]);
      }
      quat.invert(this.#inverseRotation, this.rotation);
      if (notify) {
        for (const callback of this.#callbacks.values()) {
          callback?.();
        }
      }
    }
  }];
  #radialDistance(position, radii) {
    const length = vec3.length(position);
    if (length === 0) {
      return Math.min(radii[0], radii[1], radii[2]);
    }
    let denominator = 0;
    for (let i = 0; i < 3; i++) {
      if (radii[i] <= 0 && position[i] !== 0) {
        return 0;
      }
      if (radii[i] > 0) {
        const direction = position[i] / length;
        denominator += direction * direction / (radii[i] * radii[i]);
      }
    }
    return denominator > 0 ? 1 / Math.sqrt(denominator) : 0;
  }
  constructor() {
    super(_EveEllipsoidVolume), _initClass();
  }
}();

export { _EveEllipsoidVolume as EveEllipsoidVolume };
//# sourceMappingURL=EveEllipsoidVolume.js.map
