// Source: E:\carbonengine\trinity\trinity\Particle\Tr2GpuSharedEmitter.h
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2GpuSharedEmitter.cpp
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2GpuSharedEmitter_Blue.cpp
// Source: E:\carbonengine\trinity\trinity\Particle\Tr2GpuParticleSystem.h
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { vec4 } from "@carbonenginejs/core-math/vec4";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "Tr2GpuSharedEmitter", family: "particle" })
export class Tr2GpuSharedEmitter extends CjsModel
{
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.boolean
  continuousEmitter = true;

  @io.persist
  @type.float32
  rate = 0;

  @io.persist
  @type.float32
  emissionDensity = 0;

  @io.persist
  @type.float32
  maxEmissionDensity = 10000;

  @io.persist
  @type.float32
  maxDisplacement = 1000;

  @io.persist
  @type.vec3
  position = vec3.create();

  @io.persist
  @type.vec3
  direction = vec3.fromValues(0, 1, 0);

  @io.persist
  @type.float32
  angle = 0;

  @io.persist
  @type.float32
  innerAngle = 0;

  @io.persist
  @type.float32
  radius = 0;

  @io.persist
  @type.float32
  inheritVelocity = 1;

  @io.persist
  @type.float32
  minSpeed = 0;

  @io.persist
  @type.float32
  maxSpeed = 0;

  @io.notify
  @io.persist
  @type.float32
  minLifeTime = 0;

  @io.notify
  @io.persist
  @type.float32
  maxLifeTime = 0;

  @io.notify
  @io.persist
  @type.vec3
  sizes = vec3.create();

  @io.notify
  @io.persist
  @type.float32
  sizeVariance = 0;

  @io.notify
  @io.persist
  @type.color
  color0 = vec4.createLinear();

  @io.notify
  @io.persist
  @type.color
  color1 = vec4.createLinear();

  @io.notify
  @io.persist
  @type.color
  color2 = vec4.createLinear();

  @io.notify
  @io.persist
  @type.color
  color3 = vec4.createLinear();

  @io.notify
  @io.persist
  @type.uint32
  textureIndex = 0;

  @io.notify
  @io.persist
  @type.float32
  colorMidpoint = 0.5;

  @io.notify
  @io.persist
  @type.float32
  velocityStretchRotation = 0;

  @io.notify
  @io.persist
  @type.float32
  drag = 0;

  @io.notify
  @io.persist
  @type.float32
  turbulenceAmplitude = 0;

  @io.notify
  @io.persist
  @type.uint32
  turbulenceFrequency = 1;

  @io.notify
  @io.persist
  @type.float32
  gravity = 0;

  #enabled = true;

  #previousTime = -1;

  #emitterData = Tr2GpuSharedEmitter.CreateEmitterData();

  #paramsData = Tr2GpuSharedEmitter.CreateEmitterParams();

  #revision = 0;

  @carbon.method
  @impl.adapted
  Initialize()
  {
    this.#revision++;
    return true;
  }

  @carbon.method
  @impl.adapted
  OnModified()
  {
    this.#revision++;
    return true;
  }

  @carbon.method
  @impl.adapted
  Enable(value)
  {
    this.#enabled = !!value;
    if (!this.#enabled) this.#previousTime = -1;
  }

  @carbon.method
  @impl.adapted
  IsEnabled()
  {
    return this.#enabled;
  }

  @carbon.method
  @impl.adapted
  SetDirection(value)
  {
    vec3.copy(this.direction, value || Tr2GpuSharedEmitter.#zero3);
  }

  @carbon.method
  @impl.adapted
  SetPosition(value)
  {
    vec3.copy(this.position, value || Tr2GpuSharedEmitter.#zero3);
  }

  @carbon.method
  @impl.implemented
  Setup(rate, emitterData, paramsData)
  {
    this.rate = Number(rate) || 0;
    this.#emitterData = Tr2GpuSharedEmitter.CreateEmitterData(emitterData);
    this.#paramsData = Tr2GpuSharedEmitter.CreateEmitterParams(paramsData);

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

  @carbon.method
  @impl.adapted
  GetEmitterData()
  {
    return Tr2GpuSharedEmitter.CreateEmitterData({
      ...this.#emitterData,
      radius: this.radius,
      angle: this.angle,
      innerAngle: this.innerAngle,
      minSpeed: this.minSpeed,
      maxSpeed: this.maxSpeed
    });
  }

  @carbon.method
  @impl.adapted
  GetEmitterParams()
  {
    return Tr2GpuSharedEmitter.CreateEmitterParams({
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
      attractorStrength: "attractorStrength" in this
        ? this.attractorStrength
        : this.#paramsData.attractorStrength,
      velocityStretchRotation: this.velocityStretchRotation
    });
  }

  @carbon.method
  @impl.adapted
  GetRevision()
  {
    return this.#revision;
  }

  static CreateEmitterData(values = null)
  {
    const source = values || {};
    return {
      position: Tr2GpuSharedEmitter.#copyVec3(source.position),
      count: Number(source.count) >>> 0,
      positionPrevious: Tr2GpuSharedEmitter.#copyVec3(source.positionPrevious),
      radius: Number(source.radius) || 0,
      direction: Tr2GpuSharedEmitter.#copyVec3(source.direction),
      angle: Number(source.angle) || 0,
      directionPrevious: Tr2GpuSharedEmitter.#copyVec3(source.directionPrevious),
      emitterSeed: Number(source.emitterSeed) >>> 0,
      velocity: Tr2GpuSharedEmitter.#copyVec3(source.velocity),
      minSpeed: Number(source.minSpeed) || 0,
      velocityPrevious: Tr2GpuSharedEmitter.#copyVec3(source.velocityPrevious),
      maxSpeed: Number(source.maxSpeed) || 0,
      innerAngle: Number(source.innerAngle) || 0,
      unused: Tr2GpuSharedEmitter.#copyVec3(source.unused)
    };
  }

  static CreateEmitterParams(values = null)
  {
    const source = values || {};
    const colors = source.colors || [];
    return {
      minLifeTime: Number(source.minLifeTime) || 0,
      maxLifeTime: Number(source.maxLifeTime) || 0,
      textureIndex: Number(source.textureIndex) >>> 0,
      colorMidpoint: source.colorMidpoint === undefined ? 0.5 : Number(source.colorMidpoint) || 0,
      colors: [0, 1, 2, 3].map(index => Tr2GpuSharedEmitter.#copyColor(colors[index] ?? source[`color${index}`])),
      sizes: Tr2GpuSharedEmitter.#copyVec3(source.sizes),
      sizeVariance: Number(source.sizeVariance) || 0,
      drag: Number(source.drag) || 0,
      turbulenceAmplitude: Number(source.turbulenceAmplitude) || 0,
      turbulenceFrequency: source.turbulenceFrequency === undefined ? 1 : Number(source.turbulenceFrequency) >>> 0,
      gravity: Number(source.gravity) || 0,
      attractorPosition: Tr2GpuSharedEmitter.#copyVec3(source.attractorPosition),
      attractorStrength: Number(source.attractorStrength) || 0,
      velocityStretchRotation: Number(source.velocityStretchRotation) || 0
    };
  }

  static #copyVec3(value)
  {
    return vec3.copy(vec3.create(), value || Tr2GpuSharedEmitter.#zero3);
  }

  static #copyColor(value)
  {
    return vec4.copy(vec4.createLinear(), value || Tr2GpuSharedEmitter.#zero4);
  }

  static #zero3 = vec3.create();

  static #zero4 = vec4.createLinear();
}
