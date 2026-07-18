import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass, _init_name, _init_extra_name, _init_continuousEmitter, _init_extra_continuousEmitter, _init_rate, _init_extra_rate, _init_emissionDensity, _init_extra_emissionDensity, _init_maxEmissionDensity, _init_extra_maxEmissionDensity, _init_maxDisplacement, _init_extra_maxDisplacement, _init_position, _init_extra_position, _init_direction, _init_extra_direction, _init_angle, _init_extra_angle, _init_innerAngle, _init_extra_innerAngle, _init_radius, _init_extra_radius, _init_inheritVelocity, _init_extra_inheritVelocity, _init_minSpeed, _init_extra_minSpeed, _init_maxSpeed, _init_extra_maxSpeed, _init_minLifeTime, _init_extra_minLifeTime, _init_maxLifeTime, _init_extra_maxLifeTime, _init_sizes, _init_extra_sizes, _init_sizeVariance, _init_extra_sizeVariance, _init_color, _init_extra_color, _init_color2, _init_extra_color2, _init_color3, _init_extra_color3, _init_color4, _init_extra_color4, _init_textureIndex, _init_extra_textureIndex, _init_colorMidpoint, _init_extra_colorMidpoint, _init_velocityStretchRotation, _init_extra_velocityStretchRotation, _init_drag, _init_extra_drag, _init_turbulenceAmplitude, _init_extra_turbulenceAmplitude, _init_turbulenceFrequency, _init_extra_turbulenceFrequency, _init_gravity, _init_extra_gravity;
let _Tr2GpuSharedEmitter;
new class extends _identity {
  static [class Tr2GpuSharedEmitter extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_continuousEmitter, _init_extra_continuousEmitter, _init_rate, _init_extra_rate, _init_emissionDensity, _init_extra_emissionDensity, _init_maxEmissionDensity, _init_extra_maxEmissionDensity, _init_maxDisplacement, _init_extra_maxDisplacement, _init_position, _init_extra_position, _init_direction, _init_extra_direction, _init_angle, _init_extra_angle, _init_innerAngle, _init_extra_innerAngle, _init_radius, _init_extra_radius, _init_inheritVelocity, _init_extra_inheritVelocity, _init_minSpeed, _init_extra_minSpeed, _init_maxSpeed, _init_extra_maxSpeed, _init_minLifeTime, _init_extra_minLifeTime, _init_maxLifeTime, _init_extra_maxLifeTime, _init_sizes, _init_extra_sizes, _init_sizeVariance, _init_extra_sizeVariance, _init_color, _init_extra_color, _init_color2, _init_extra_color2, _init_color3, _init_extra_color3, _init_color4, _init_extra_color4, _init_textureIndex, _init_extra_textureIndex, _init_colorMidpoint, _init_extra_colorMidpoint, _init_velocityStretchRotation, _init_extra_velocityStretchRotation, _init_drag, _init_extra_drag, _init_turbulenceAmplitude, _init_extra_turbulenceAmplitude, _init_turbulenceFrequency, _init_extra_turbulenceFrequency, _init_gravity, _init_extra_gravity, _initProto],
        c: [_Tr2GpuSharedEmitter, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2GpuSharedEmitter",
        family: "particle"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.boolean], 16, "continuousEmitter"], [[io, io.persist, type, type.float32], 16, "rate"], [[io, io.persist, type, type.float32], 16, "emissionDensity"], [[io, io.persist, type, type.float32], 16, "maxEmissionDensity"], [[io, io.persist, type, type.float32], 16, "maxDisplacement"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.vec3], 16, "direction"], [[io, io.persist, type, type.float32], 16, "angle"], [[io, io.persist, type, type.float32], 16, "innerAngle"], [[io, io.persist, type, type.float32], 16, "radius"], [[io, io.persist, type, type.float32], 16, "inheritVelocity"], [[io, io.persist, type, type.float32], 16, "minSpeed"], [[io, io.persist, type, type.float32], 16, "maxSpeed"], [[io, io.notify, io, io.persist, type, type.float32], 16, "minLifeTime"], [[io, io.notify, io, io.persist, type, type.float32], 16, "maxLifeTime"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "sizes"], [[io, io.notify, io, io.persist, type, type.float32], 16, "sizeVariance"], [[io, io.notify, io, io.persist, type, type.color], 16, "color0"], [[io, io.notify, io, io.persist, type, type.color], 16, "color1"], [[io, io.notify, io, io.persist, type, type.color], 16, "color2"], [[io, io.notify, io, io.persist, type, type.color], 16, "color3"], [[io, io.notify, io, io.persist, type, type.uint32], 16, "textureIndex"], [[io, io.notify, io, io.persist, type, type.float32], 16, "colorMidpoint"], [[io, io.notify, io, io.persist, type, type.float32], 16, "velocityStretchRotation"], [[io, io.notify, io, io.persist, type, type.float32], 16, "drag"], [[io, io.notify, io, io.persist, type, type.float32], 16, "turbulenceAmplitude"], [[io, io.notify, io, io.persist, type, type.uint32], 16, "turbulenceFrequency"], [[io, io.notify, io, io.persist, type, type.float32], 16, "gravity"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.adapted], 18, "Enable"], [[carbon, carbon.method, impl, impl.adapted], 18, "IsEnabled"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetDirection"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetPosition"], [[carbon, carbon.method, impl, impl.implemented], 18, "Setup"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetEmitterData"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetEmitterParams"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetRevision"]], 0, void 0, CjsModel));
    }
    name = (_initProto(this), _init_name(this, ""));
    continuousEmitter = (_init_extra_name(this), _init_continuousEmitter(this, true));
    rate = (_init_extra_continuousEmitter(this), _init_rate(this, 0));
    emissionDensity = (_init_extra_rate(this), _init_emissionDensity(this, 0));
    maxEmissionDensity = (_init_extra_emissionDensity(this), _init_maxEmissionDensity(this, 10000));
    maxDisplacement = (_init_extra_maxEmissionDensity(this), _init_maxDisplacement(this, 1000));
    position = (_init_extra_maxDisplacement(this), _init_position(this, vec3.create()));
    direction = (_init_extra_position(this), _init_direction(this, vec3.fromValues(0, 1, 0)));
    angle = (_init_extra_direction(this), _init_angle(this, 0));
    innerAngle = (_init_extra_angle(this), _init_innerAngle(this, 0));
    radius = (_init_extra_innerAngle(this), _init_radius(this, 0));
    inheritVelocity = (_init_extra_radius(this), _init_inheritVelocity(this, 1));
    minSpeed = (_init_extra_inheritVelocity(this), _init_minSpeed(this, 0));
    maxSpeed = (_init_extra_minSpeed(this), _init_maxSpeed(this, 0));
    minLifeTime = (_init_extra_maxSpeed(this), _init_minLifeTime(this, 0));
    maxLifeTime = (_init_extra_minLifeTime(this), _init_maxLifeTime(this, 0));
    sizes = (_init_extra_maxLifeTime(this), _init_sizes(this, vec3.create()));
    sizeVariance = (_init_extra_sizes(this), _init_sizeVariance(this, 0));
    color0 = (_init_extra_sizeVariance(this), _init_color(this, vec4.createLinear()));
    color1 = (_init_extra_color(this), _init_color2(this, vec4.createLinear()));
    color2 = (_init_extra_color2(this), _init_color3(this, vec4.createLinear()));
    color3 = (_init_extra_color3(this), _init_color4(this, vec4.createLinear()));
    textureIndex = (_init_extra_color4(this), _init_textureIndex(this, 0));
    colorMidpoint = (_init_extra_textureIndex(this), _init_colorMidpoint(this, 0.5));
    velocityStretchRotation = (_init_extra_colorMidpoint(this), _init_velocityStretchRotation(this, 0));
    drag = (_init_extra_velocityStretchRotation(this), _init_drag(this, 0));
    turbulenceAmplitude = (_init_extra_drag(this), _init_turbulenceAmplitude(this, 0));
    turbulenceFrequency = (_init_extra_turbulenceAmplitude(this), _init_turbulenceFrequency(this, 1));
    gravity = (_init_extra_turbulenceFrequency(this), _init_gravity(this, 0));
    #enabled = (_init_extra_gravity(this), true);
    #previousTime = -1;
    #emitterData = _Tr2GpuSharedEmitter.CreateEmitterData();
    #paramsData = _Tr2GpuSharedEmitter.CreateEmitterParams();
    #revision = 0;
    Initialize() {
      this.#revision++;
      return true;
    }
    OnModified() {
      this.#revision++;
      return true;
    }
    Enable(value) {
      this.#enabled = !!value;
      if (!this.#enabled) this.#previousTime = -1;
    }
    IsEnabled() {
      return this.#enabled;
    }
    SetDirection(value) {
      vec3.copy(this.direction, value || _Tr2GpuSharedEmitter.#zero3);
    }
    SetPosition(value) {
      vec3.copy(this.position, value || _Tr2GpuSharedEmitter.#zero3);
    }
    Setup(rate, emitterData, paramsData) {
      this.rate = Number(rate) || 0;
      this.#emitterData = _Tr2GpuSharedEmitter.CreateEmitterData(emitterData);
      this.#paramsData = _Tr2GpuSharedEmitter.CreateEmitterParams(paramsData);
      this.radius = this.#emitterData.radius;
      this.angle = this.#emitterData.angle;
      this.innerAngle = this.#emitterData.innerAngle;
      this.minSpeed = this.#emitterData.minSpeed;
      this.maxSpeed = this.#emitterData.maxSpeed;
      this.minLifeTime = this.#paramsData.minLifeTime;
      this.maxLifeTime = this.#paramsData.maxLifeTime;
      this.textureIndex = this.#paramsData.textureIndex;
      this.colorMidpoint = this.#paramsData.colorMidpoint;
      vec4.copy(this.color0, this.#paramsData.colors[0]);
      vec4.copy(this.color1, this.#paramsData.colors[1]);
      vec4.copy(this.color2, this.#paramsData.colors[2]);
      vec4.copy(this.color3, this.#paramsData.colors[3]);
      vec3.copy(this.sizes, this.#paramsData.sizes);
      this.sizeVariance = this.#paramsData.sizeVariance;
      this.drag = this.#paramsData.drag;
      this.turbulenceAmplitude = this.#paramsData.turbulenceAmplitude;
      this.turbulenceFrequency = this.#paramsData.turbulenceFrequency;
      this.gravity = this.#paramsData.gravity;
      this.velocityStretchRotation = this.#paramsData.velocityStretchRotation;
      if ("attractorStrength" in this) this.attractorStrength = this.#paramsData.attractorStrength;
      this.#revision++;
    }
    GetEmitterData() {
      return _Tr2GpuSharedEmitter.CreateEmitterData({
        ...this.#emitterData,
        radius: this.radius,
        angle: this.angle,
        innerAngle: this.innerAngle,
        minSpeed: this.minSpeed,
        maxSpeed: this.maxSpeed
      });
    }
    GetEmitterParams() {
      return _Tr2GpuSharedEmitter.CreateEmitterParams({
        ...this.#paramsData,
        minLifeTime: this.minLifeTime,
        maxLifeTime: this.maxLifeTime,
        textureIndex: this.textureIndex,
        colorMidpoint: this.colorMidpoint,
        colors: [this.color0, this.color1, this.color2, this.color3],
        sizes: this.sizes,
        sizeVariance: this.sizeVariance,
        drag: this.drag,
        turbulenceAmplitude: this.turbulenceAmplitude,
        turbulenceFrequency: this.turbulenceFrequency,
        gravity: this.gravity,
        attractorStrength: "attractorStrength" in this ? this.attractorStrength : this.#paramsData.attractorStrength,
        velocityStretchRotation: this.velocityStretchRotation
      });
    }
    GetRevision() {
      return this.#revision;
    }
    static CreateEmitterData(values = null) {
      const source = values || {};
      return {
        position: _Tr2GpuSharedEmitter.#copyVec3(source.position),
        count: Number(source.count) >>> 0,
        positionPrevious: _Tr2GpuSharedEmitter.#copyVec3(source.positionPrevious),
        radius: Number(source.radius) || 0,
        direction: _Tr2GpuSharedEmitter.#copyVec3(source.direction),
        angle: Number(source.angle) || 0,
        directionPrevious: _Tr2GpuSharedEmitter.#copyVec3(source.directionPrevious),
        emitterSeed: Number(source.emitterSeed) >>> 0,
        velocity: _Tr2GpuSharedEmitter.#copyVec3(source.velocity),
        minSpeed: Number(source.minSpeed) || 0,
        velocityPrevious: _Tr2GpuSharedEmitter.#copyVec3(source.velocityPrevious),
        maxSpeed: Number(source.maxSpeed) || 0,
        innerAngle: Number(source.innerAngle) || 0,
        unused: _Tr2GpuSharedEmitter.#copyVec3(source.unused)
      };
    }
    static CreateEmitterParams(values = null) {
      const source = values || {};
      const colors = source.colors || [];
      return {
        minLifeTime: Number(source.minLifeTime) || 0,
        maxLifeTime: Number(source.maxLifeTime) || 0,
        textureIndex: Number(source.textureIndex) >>> 0,
        colorMidpoint: source.colorMidpoint === undefined ? 0.5 : Number(source.colorMidpoint) || 0,
        colors: [0, 1, 2, 3].map(index => _Tr2GpuSharedEmitter.#copyColor(colors[index] ?? source[`color${index}`])),
        sizes: _Tr2GpuSharedEmitter.#copyVec3(source.sizes),
        sizeVariance: Number(source.sizeVariance) || 0,
        drag: Number(source.drag) || 0,
        turbulenceAmplitude: Number(source.turbulenceAmplitude) || 0,
        turbulenceFrequency: source.turbulenceFrequency === undefined ? 1 : Number(source.turbulenceFrequency) >>> 0,
        gravity: Number(source.gravity) || 0,
        attractorPosition: _Tr2GpuSharedEmitter.#copyVec3(source.attractorPosition),
        attractorStrength: Number(source.attractorStrength) || 0,
        velocityStretchRotation: Number(source.velocityStretchRotation) || 0
      };
    }
  }];
  #copyVec3(value) {
    return vec3.copy(vec3.create(), value || _Tr2GpuSharedEmitter.#zero3);
  }
  #copyColor(value) {
    return vec4.copy(vec4.createLinear(), value || _Tr2GpuSharedEmitter.#zero4);
  }
  #zero3 = vec3.create();
  #zero4 = vec4.createLinear();
  constructor() {
    super(_Tr2GpuSharedEmitter), _initClass();
  }
}();

export { _Tr2GpuSharedEmitter as Tr2GpuSharedEmitter };
//# sourceMappingURL=Tr2GpuSharedEmitter.js.map
