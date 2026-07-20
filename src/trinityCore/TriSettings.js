// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/trinity/TriSettings.h
//   trinity/trinity/TriSettings_Blue.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "TriSettings", family: "trinityCore" })
export class TriSettings extends CjsModel
{
  #settings = new Map();

  RegisterSetting(name, value)
  {
    const key = TriSettings.#GetKey(name);
    const valueType = typeof value;
    if (valueType !== "boolean" && valueType !== "number" && valueType !== "string")
    {
      throw new TypeError(`Unsupported setting type for '${key}'`);
    }
    this.#settings.set(key, { value, valueType });
    return this;
  }

  FindSetting(name)
  {
    return this.#settings.get(TriSettings.#GetKey(name)) ?? null;
  }

  @carbon.method
  GetValue(name)
  {
    const key = TriSettings.#GetKey(name);
    const setting = this.#settings.get(key);
    if (!setting)
    {
      throw new RangeError(`Setting '${key}' is not registered`);
    }
    return setting.value;
  }

  @carbon.method
  SetValue(name, value)
  {
    const key = TriSettings.#GetKey(name);
    const setting = this.#settings.get(key);
    if (!setting)
    {
      throw new RangeError(`Setting '${key}' is not registered`);
    }
    if (typeof value !== setting.valueType)
    {
      throw new TypeError(`Setting '${key}' requires a ${setting.valueType} value`);
    }
    setting.value = value;
  }

  GetReprString()
  {
    let result = "{";
    const entries = [...this.#settings.entries()].sort(([a], [b]) => a.localeCompare(b));
    for (const [name, setting] of entries)
    {
      result += `'${name}':${TriSettings.#ReprValue(setting.value)}, `;
    }
    return `${result}}`;
  }

  @carbon.method
  __repr__()
  {
    return this.GetReprString();
  }

  static #GetKey(name)
  {
    if (typeof name !== "string")
    {
      throw new TypeError("Setting name must be a string");
    }
    return name;
  }

  static #ReprValue(value)
  {
    if (typeof value === "boolean") return value ? "True" : "False";
    if (typeof value === "string") return `'${value.replaceAll("'", "\\'")}'`;
    return String(value);
  }
}
