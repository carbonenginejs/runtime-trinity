/** Shared JavaScript adapters for Carbon's ITr2ControllerAction contract. */
export class ITr2ControllerAction
{
  static getOwner(controller, owner = null)
  {
    return owner ?? controller?.GetOwner?.() ?? null;
  }

  static requireController(controller, methodName)
  {
    if (!controller)
    {
      throw new TypeError(`${methodName} expects a Tr2Controller as a parameter.`);
    }
    return controller;
  }

  static getTime(controller, fallback = 0)
  {
    if (controller?.CjsGetCurrentFrameTime)
    {
      return this.toNumber(controller.CjsGetCurrentFrameTime(), fallback);
    }
    return this.toNumber(controller?.GetTime?.(), fallback);
  }

  static callTarget(target, methodName, ...args)
  {
    return this.hasFunction(target, methodName) ? target[methodName](...args) : undefined;
  }

  static toNumber(value, fallback = 0)
  {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  static hasProperty(value, key)
  {
    return !!value && typeof value === "object" && key in value;
  }

  static hasFunction(value, key)
  {
    return this.hasProperty(value, key) && typeof value[key] === "function";
  }

  static asObject(value)
  {
    return value && typeof value === "object" ? value : null;
  }

  static getProperty(target, propertyName)
  {
    return this.hasProperty(target, propertyName) ? target[propertyName] : undefined;
  }

  static getParameterOwner(owner, name)
  {
    const parameter = this.callTarget(owner, "GetParameterByName", name);
    if (!parameter)
    {
      return null;
    }
    return this.asObject(this.callTarget(parameter, "GetParameterObject") ?? this.getProperty(parameter, "parameterObject") ?? this.getProperty(parameter, "object"));
  }

  static findSoundEmitter(owner, name)
  {
    return this.callTarget(owner, "FindSoundEmitter", name) ?? null;
  }

  static getAnimationController(owner)
  {
    return this.callTarget(owner, "GetAnimationController") ?? this.getProperty(owner, "animationController") ?? null;
  }
}
