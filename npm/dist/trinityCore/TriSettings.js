import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { carbon, type } from '@carbonenginejs/core-types/schema';

let _initProto, _initClass;
let _TriSettings;
new class extends _identity {
  static [class TriSettings extends CjsModel {
    static {
      ({
        e: [_initProto],
        c: [_TriSettings, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriSettings",
        family: "trinityCore"
      })], [[[carbon, carbon.method], 18, "GetValue"], [[carbon, carbon.method], 18, "SetValue"], [[carbon, carbon.method], 18, "__repr__"]], 0, void 0, CjsModel));
    }
    #settings = (_initProto(this), new Map());
    RegisterSetting(name, value) {
      const key = _TriSettings.#GetKey(name);
      const valueType = typeof value;
      if (valueType !== "boolean" && valueType !== "number" && valueType !== "string") {
        throw new TypeError(`Unsupported setting type for '${key}'`);
      }
      this.#settings.set(key, {
        value,
        valueType
      });
      return this;
    }
    FindSetting(name) {
      return this.#settings.get(_TriSettings.#GetKey(name)) ?? null;
    }
    GetValue(name) {
      const key = _TriSettings.#GetKey(name);
      const setting = this.#settings.get(key);
      if (!setting) {
        throw new RangeError(`Setting '${key}' is not registered`);
      }
      return setting.value;
    }
    SetValue(name, value) {
      const key = _TriSettings.#GetKey(name);
      const setting = this.#settings.get(key);
      if (!setting) {
        throw new RangeError(`Setting '${key}' is not registered`);
      }
      if (typeof value !== setting.valueType) {
        throw new TypeError(`Setting '${key}' requires a ${setting.valueType} value`);
      }
      setting.value = value;
    }
    GetReprString() {
      let result = "{";
      const entries = [...this.#settings.entries()].sort(([a], [b]) => a.localeCompare(b));
      for (const [name, setting] of entries) {
        result += `'${name}':${_TriSettings.#ReprValue(setting.value)}, `;
      }
      return `${result}}`;
    }
    __repr__() {
      return this.GetReprString();
    }
  }];
  #GetKey(name) {
    if (typeof name !== "string") {
      throw new TypeError("Setting name must be a string");
    }
    return name;
  }
  #ReprValue(value) {
    if (typeof value === "boolean") return value ? "True" : "False";
    if (typeof value === "string") return `'${value.replaceAll("'", "\\'")}'`;
    return String(value);
  }
  constructor() {
    super(_TriSettings), _initClass();
  }
}();

export { _TriSettings as TriSettings };
//# sourceMappingURL=TriSettings.js.map
