import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { io, type, impl, schema } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from './EveChildTransform.js';

let _initProto, _initClass, _init_priority, _init_extra_priority, _init_volumes, _init_extra_volumes, _init_boundingSphereCenter, _init_extra_boundingSphereCenter, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_name, _init_extra_name, _init_intensity, _init_extra_intensity, _init_thickness, _init_extra_thickness, _init_thicknessEnabled, _init_extra_thicknessEnabled, _init_lightDirectionality, _init_extra_lightDirectionality, _init_lightDirectionalityEnabled, _init_extra_lightDirectionalityEnabled, _init_environmentIntensity, _init_extra_environmentIntensity, _init_environmentIntensityEnabled, _init_extra_environmentIntensityEnabled, _init_environmentDirectionality, _init_extra_environmentDirectionality, _init_environmentDirectionalityEnabled, _init_extra_environmentDirectionalityEnabled, _init_fogColor, _init_extra_fogColor, _init_fogColorEnabled, _init_extra_fogColorEnabled, _init_backgroundVisibility, _init_extra_backgroundVisibility, _init_backgroundVisibilityEnabled, _init_extra_backgroundVisibilityEnabled, _init_godRayNoiseIntensity, _init_extra_godRayNoiseIntensity, _init_godRayNoiseIntensityEnabled, _init_extra_godRayNoiseIntensityEnabled, _init_godRayNoiseFrequency, _init_extra_godRayNoiseFrequency, _init_godRayNoiseFrequencyEnabled, _init_extra_godRayNoiseFrequencyEnabled, _init_godRayNoiseAnimationSpeed, _init_extra_godRayNoiseAnimationSpeed, _init_godRayNoiseAnimationSpeedEnabled, _init_extra_godRayNoiseAnimationSpeedEnabled, _init_fogNoiseIntensity, _init_extra_fogNoiseIntensity, _init_fogNoiseIntensityEnabled, _init_extra_fogNoiseIntensityEnabled, _init_fogNoiseFrequency, _init_extra_fogNoiseFrequency, _init_fogNoiseFrequencyEnabled, _init_extra_fogNoiseFrequencyEnabled;
let _EveChildFogVolume;
new class extends _identity {
  static [class EveChildFogVolume extends _EveChildTransform {
    static {
      ({
        e: [_init_priority, _init_extra_priority, _init_volumes, _init_extra_volumes, _init_boundingSphereCenter, _init_extra_boundingSphereCenter, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_name, _init_extra_name, _init_intensity, _init_extra_intensity, _init_thickness, _init_extra_thickness, _init_thicknessEnabled, _init_extra_thicknessEnabled, _init_lightDirectionality, _init_extra_lightDirectionality, _init_lightDirectionalityEnabled, _init_extra_lightDirectionalityEnabled, _init_environmentIntensity, _init_extra_environmentIntensity, _init_environmentIntensityEnabled, _init_extra_environmentIntensityEnabled, _init_environmentDirectionality, _init_extra_environmentDirectionality, _init_environmentDirectionalityEnabled, _init_extra_environmentDirectionalityEnabled, _init_fogColor, _init_extra_fogColor, _init_fogColorEnabled, _init_extra_fogColorEnabled, _init_backgroundVisibility, _init_extra_backgroundVisibility, _init_backgroundVisibilityEnabled, _init_extra_backgroundVisibilityEnabled, _init_godRayNoiseIntensity, _init_extra_godRayNoiseIntensity, _init_godRayNoiseIntensityEnabled, _init_extra_godRayNoiseIntensityEnabled, _init_godRayNoiseFrequency, _init_extra_godRayNoiseFrequency, _init_godRayNoiseFrequencyEnabled, _init_extra_godRayNoiseFrequencyEnabled, _init_godRayNoiseAnimationSpeed, _init_extra_godRayNoiseAnimationSpeed, _init_godRayNoiseAnimationSpeedEnabled, _init_extra_godRayNoiseAnimationSpeedEnabled, _init_fogNoiseIntensity, _init_extra_fogNoiseIntensity, _init_fogNoiseIntensityEnabled, _init_extra_fogNoiseIntensityEnabled, _init_fogNoiseFrequency, _init_extra_fogNoiseFrequency, _init_fogNoiseFrequencyEnabled, _init_extra_fogNoiseFrequencyEnabled, _initProto],
        c: [_EveChildFogVolume, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildFogVolume",
        family: "eve/child"
      })], [[[io, io.persist, type, type.int32, void 0, schema.enum("Priority")], 16, "priority"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "volumes"], [[io, io.read, type, type.vec3], 16, "boundingSphereCenter"], [[io, io.read, type, type.float32], 16, "boundingSphereRadius"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.float32], 16, "intensity"], [[io, io.persist, type, type.float32], 16, "thickness"], [[io, io.persist, type, type.boolean], 16, "thicknessEnabled"], [[io, io.persist, type, type.float32], 16, "lightDirectionality"], [[io, io.persist, type, type.boolean], 16, "lightDirectionalityEnabled"], [[io, io.persist, type, type.float32], 16, "environmentIntensity"], [[io, io.persist, type, type.boolean], 16, "environmentIntensityEnabled"], [[io, io.persist, type, type.float32], 16, "environmentDirectionality"], [[io, io.persist, type, type.boolean], 16, "environmentDirectionalityEnabled"], [[io, io.persist, type, type.color], 16, "fogColor"], [[io, io.persist, type, type.boolean], 16, "fogColorEnabled"], [[io, io.persist, type, type.float32], 16, "backgroundVisibility"], [[io, io.persist, type, type.boolean], 16, "backgroundVisibilityEnabled"], [[io, io.persist, type, type.float32], 16, "godRayNoiseIntensity"], [[io, io.persist, type, type.boolean], 16, "godRayNoiseIntensityEnabled"], [[io, io.persist, type, type.float32], 16, "godRayNoiseFrequency"], [[io, io.persist, type, type.boolean], 16, "godRayNoiseFrequencyEnabled"], [[io, io.persist, type, type.float32], 16, "godRayNoiseAnimationSpeed"], [[io, io.persist, type, type.boolean], 16, "godRayNoiseAnimationSpeedEnabled"], [[io, io.persist, type, type.float32], 16, "fogNoiseIntensity"], [[io, io.persist, type, type.boolean], 16, "fogNoiseIntensityEnabled"], [[io, io.persist, type, type.float32], 16, "fogNoiseFrequency"], [[io, io.persist, type, type.boolean], 16, "fogNoiseFrequencyEnabled"], [[impl, impl.adapted], 18, "RebuildBoundingSphere"], [[impl, impl.adapted], 18, "UpdateAsyncronous"], [[impl, impl.adapted], 18, "GetFroxelFogSettings"]], 0, void 0, _EveChildTransform));
    }
    constructor(...args) {
      super(...args);
      _init_extra_fogNoiseFrequencyEnabled(this);
    }
    #fogIntensity = (_initProto(this), 0);
    priority = _init_priority(this, 2);
    volumes = (_init_extra_priority(this), _init_volumes(this, []));
    boundingSphereCenter = (_init_extra_volumes(this), _init_boundingSphereCenter(this, vec3.create()));
    boundingSphereRadius = (_init_extra_boundingSphereCenter(this), _init_boundingSphereRadius(this, 0));
    name = (_init_extra_boundingSphereRadius(this), _init_name(this, ""));
    intensity = (_init_extra_name(this), _init_intensity(this, 1));
    thickness = (_init_extra_intensity(this), _init_thickness(this, 1));
    thicknessEnabled = (_init_extra_thickness(this), _init_thicknessEnabled(this, false));
    lightDirectionality = (_init_extra_thicknessEnabled(this), _init_lightDirectionality(this, 0.5));
    lightDirectionalityEnabled = (_init_extra_lightDirectionality(this), _init_lightDirectionalityEnabled(this, false));
    environmentIntensity = (_init_extra_lightDirectionalityEnabled(this), _init_environmentIntensity(this, 1));
    environmentIntensityEnabled = (_init_extra_environmentIntensity(this), _init_environmentIntensityEnabled(this, false));
    environmentDirectionality = (_init_extra_environmentIntensityEnabled(this), _init_environmentDirectionality(this, 0.75));
    environmentDirectionalityEnabled = (_init_extra_environmentDirectionality(this), _init_environmentDirectionalityEnabled(this, false));
    fogColor = (_init_extra_environmentDirectionalityEnabled(this), _init_fogColor(this, vec4.fromValues(1, 1, 1, 1)));
    fogColorEnabled = (_init_extra_fogColor(this), _init_fogColorEnabled(this, false));
    backgroundVisibility = (_init_extra_fogColorEnabled(this), _init_backgroundVisibility(this, 0));
    backgroundVisibilityEnabled = (_init_extra_backgroundVisibility(this), _init_backgroundVisibilityEnabled(this, false));
    godRayNoiseIntensity = (_init_extra_backgroundVisibilityEnabled(this), _init_godRayNoiseIntensity(this, 0));
    godRayNoiseIntensityEnabled = (_init_extra_godRayNoiseIntensity(this), _init_godRayNoiseIntensityEnabled(this, false));
    godRayNoiseFrequency = (_init_extra_godRayNoiseIntensityEnabled(this), _init_godRayNoiseFrequency(this, 15));
    godRayNoiseFrequencyEnabled = (_init_extra_godRayNoiseFrequency(this), _init_godRayNoiseFrequencyEnabled(this, false));
    godRayNoiseAnimationSpeed = (_init_extra_godRayNoiseFrequencyEnabled(this), _init_godRayNoiseAnimationSpeed(this, 0));
    godRayNoiseAnimationSpeedEnabled = (_init_extra_godRayNoiseAnimationSpeed(this), _init_godRayNoiseAnimationSpeedEnabled(this, false));
    fogNoiseIntensity = (_init_extra_godRayNoiseAnimationSpeedEnabled(this), _init_fogNoiseIntensity(this, 0));
    fogNoiseIntensityEnabled = (_init_extra_fogNoiseIntensity(this), _init_fogNoiseIntensityEnabled(this, false));
    fogNoiseFrequency = (_init_extra_fogNoiseIntensityEnabled(this), _init_fogNoiseFrequency(this, 15));
    fogNoiseFrequencyEnabled = (_init_extra_fogNoiseFrequency(this), _init_fogNoiseFrequencyEnabled(this, false));
    RebuildBoundingSphere() {
      vec3.set(this.boundingSphereCenter, 0, 0, 0);
      this.boundingSphereRadius = 0;
      let initialized = false;
      for (const volume of this.volumes) {
        const sphere = volume?.GetBoundingSphere?.();
        if (!sphere?.center || !Number.isFinite(sphere.radius) || sphere.radius < 0) continue;
        if (!initialized) {
          vec3.copy(this.boundingSphereCenter, sphere.center);
          this.boundingSphereRadius = sphere.radius;
          initialized = true;
          continue;
        }
        this.#UnionSphere(sphere);
      }
      return initialized;
    }
    GetName() {
      return this.name;
    }
    SetName(name) {
      this.name = String(name ?? "");
    }
    GetBoundingSphere(out = vec4.create()) {
      vec4.set(out, this.boundingSphereCenter[0], this.boundingSphereCenter[1], this.boundingSphereCenter[2], this.boundingSphereRadius);
      return true;
    }
    UpdateSyncronous(_updateContext, _params) {}
    UpdateAsyncronous(updateContext, params = {}) {
      this.UpdateTransform(params.localToWorldTransform ?? mat4.create());
      const initialized = this.RebuildBoundingSphere();
      if (this.volumes.length === 0) {
        this.#fogIntensity = this.intensity;
        return;
      }
      this.#fogIntensity = 0;
      const viewPosition = updateContext?.renderContext?.GetViewPosition?.();
      const inverse = mat4.invert(mat4.create(), this.worldTransform);
      if (!viewPosition || !inverse || !initialized) return;
      const localView = vec3.transformMat4(vec3.create(), viewPosition, inverse);
      if (vec3.distance(localView, this.boundingSphereCenter) > this.boundingSphereRadius) return;
      for (const volume of this.volumes) {
        this.#fogIntensity = Math.max(this.#fogIntensity, Number(volume?.GetIntensity?.(localView)) || 0);
        if (this.#fogIntensity >= 1) break;
      }
      this.#fogIntensity *= this.intensity;
    }
    GetLocalToWorldTransform(out = mat4.create()) {
      return mat4.copy(out, this.worldTransform);
    }
    Setup(scale, rotation, translation, lowestLodVisible) {
      return super.Setup(scale, rotation, translation, lowestLodVisible);
    }
    IsAlwaysOn() {
      return true;
    }
    Initialize() {
      this.RebuildBoundingSphere();
      return true;
    }
    GetFroxelFogSettings() {
      const attribute = (value, enabled) => ({
        value,
        enabled
      });
      return {
        priority: this.priority,
        intensity: this.#fogIntensity,
        thickness: attribute(this.thickness, this.thicknessEnabled),
        lightDirectionality: attribute(this.lightDirectionality, this.lightDirectionalityEnabled),
        environmentIntensity: attribute(this.environmentIntensity, this.environmentIntensityEnabled),
        environmentDirectionality: attribute(this.environmentDirectionality, this.environmentDirectionalityEnabled),
        fogColor: attribute(vec4.clone(this.fogColor), this.fogColorEnabled),
        backgroundVisibility: attribute(this.backgroundVisibility, this.backgroundVisibilityEnabled),
        godRayNoiseIntensity: attribute(this.godRayNoiseIntensity, this.godRayNoiseIntensityEnabled),
        godRayNoiseFrequency: attribute(this.godRayNoiseFrequency, this.godRayNoiseFrequencyEnabled),
        godRayNoiseAnimationSpeed: attribute(this.godRayNoiseAnimationSpeed, this.godRayNoiseAnimationSpeedEnabled),
        fogNoiseIntensity: attribute(this.fogNoiseIntensity, this.fogNoiseIntensityEnabled),
        fogNoiseFrequency: attribute(this.fogNoiseFrequency, this.fogNoiseFrequencyEnabled)
      };
    }
    UpdateVisibility(_updateContext, _parentTransform, _parentLod) {}
    GetRenderables(_renderables) {}
    ChangeLOD(_lod) {}
    #UnionSphere(sphere) {
      const delta = vec3.subtract(vec3.create(), sphere.center, this.boundingSphereCenter);
      const distance = vec3.length(delta);
      if (distance + sphere.radius <= this.boundingSphereRadius) return;
      if (distance + this.boundingSphereRadius <= sphere.radius) {
        vec3.copy(this.boundingSphereCenter, sphere.center);
        this.boundingSphereRadius = sphere.radius;
        return;
      }
      if (distance === 0) {
        this.boundingSphereRadius = Math.max(this.boundingSphereRadius, sphere.radius);
        return;
      }
      const radius = (this.boundingSphereRadius + sphere.radius + distance) * 0.5;
      vec3.scaleAndAdd(this.boundingSphereCenter, this.boundingSphereCenter, delta, (radius - this.boundingSphereRadius) / distance);
      this.boundingSphereRadius = radius;
    }
  }];
  Priority = Object.freeze({
    SCENE_DEFAULT_PRIORITY: 0,
    LOW_PRIORITY: 1,
    MEDIUM_PRIORITY: 2,
    HIGH_PRIORITY: 3,
    UI_PRIORITY: 4,
    PRIORITY_COUNT: 5
  });
  constructor() {
    super(_EveChildFogVolume), _initClass();
  }
}();

export { _EveChildFogVolume as EveChildFogVolume };
//# sourceMappingURL=EveChildFogVolume.js.map
