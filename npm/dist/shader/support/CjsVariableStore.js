class CjsVariableStore {
  static #global = null;
  #variables = new Map();
  constructor(values = null) {
    if (values) {
      this.SetValues(values);
    }
  }
  Set(name, value, Type = null) {
    return this.SetVariable(name, value, Type);
  }
  Get(name) {
    return this.GetVariable(name);
  }
  Has(name) {
    return this.HasVariable(name);
  }
  SetValues(values) {
    const entries = values instanceof Map ? values.entries() : Object.entries(values);
    for (const [name, value] of entries) {
      this.SetVariable(name, value);
    }
    return this;
  }
  SetVariable(name, value, Type = null) {
    const key = String(name);
    const variable = CjsVariableStore.isVariable(value) ? value : this.CreateVariable(key, value, Type);
    if (variable && typeof variable === "object" && "name" in variable && !variable.name) {
      variable.name = key;
    }
    this.#variables.set(key, variable);
    return variable;
  }
  CreateVariable(name, value = undefined, Type = null) {
    if (typeof Type === "function") {
      return new Type(name, value);
    }
    return new CjsStoredVariable(name, value, Type);
  }
  GetVariable(name) {
    return this.#variables.get(String(name)) ?? null;
  }
  getVariable(name) {
    return this.GetVariable(name);
  }
  HasVariable(name) {
    return this.#variables.has(String(name));
  }
  hasVariable(name) {
    return this.HasVariable(name);
  }
  DeleteVariable(name) {
    return this.#variables.delete(String(name));
  }
  Clear() {
    this.#variables.clear();
  }
  GetVariableValue(name, out = undefined) {
    const variable = this.GetVariable(name);
    return variable?.GetValue?.(out) ?? variable?.getValue?.(out) ?? variable?.value ?? undefined;
  }
  getVariableValue(name, out = undefined) {
    return this.GetVariableValue(name, out);
  }
  SetVariableValue(name, value, options = undefined) {
    const variable = this.GetVariable(name) ?? this.SetVariable(name, value);
    variable?.SetValue?.(value, options) ?? variable?.setValue?.(value, options);
    if (variable && typeof variable === "object" && !variable.SetValue && !variable.setValue) {
      variable.value = value;
    }
    return variable;
  }
  setVariableValue(name, value, options = undefined) {
    return this.SetVariableValue(name, value, options);
  }
  Entries() {
    return [...this.#variables.entries()];
  }
  Values() {
    return [...this.#variables.values()];
  }
  static isVariable(value) {
    return !!value && typeof value === "object" && (typeof value.GetValue === "function" || typeof value.SetValue === "function" || typeof value.CopyValueToEffect === "function" || typeof value.CopyToResourceSet === "function" || typeof value.ApplyUav === "function");
  }
  static GetGlobalStore() {
    if (!CjsVariableStore.#global) {
      CjsVariableStore.#global = new CjsVariableStore();
    }
    return CjsVariableStore.#global;
  }
  static SetGlobalStore(store) {
    CjsVariableStore.#global = store ?? new CjsVariableStore();
    return CjsVariableStore.#global;
  }
}
class CjsStoredVariable {
  name = "";
  value = undefined;
  type = "value";
  constructor(name = "", value = undefined, type = null) {
    this.name = String(name);
    this.value = value;
    this.type = type ?? CjsStoredVariable.inferType(value);
  }
  GetName() {
    return this.name;
  }
  GetType() {
    return this.type;
  }
  GetValue(out = undefined) {
    if (out && this.value && typeof this.value.length === "number" && typeof out.length === "number") {
      const count = Math.min(out.length, this.value.length);
      for (let i = 0; i < count; i++) {
        out[i] = this.value[i];
      }
      return out;
    }
    return this.value;
  }
  SetValue(value) {
    this.value = value;
    this.type = CjsStoredVariable.inferType(value);
    return true;
  }
  CopyValueToEffect(_inputType, destination, size = Number.POSITIVE_INFINITY) {
    if (!destination || typeof destination.length !== "number") {
      return false;
    }
    const source = this.value;
    if (typeof source === "number") {
      destination[0] = source;
      return true;
    }
    if (!source || typeof source.length !== "number") {
      return false;
    }
    const byteLimit = Number.isFinite(size) ? Math.max(0, size) : Infinity;
    const count = Math.min(destination.length, source.length, Math.floor(byteLimit / 4));
    for (let i = 0; i < count; i++) {
      destination[i] = source[i];
    }
    return count > 0;
  }
  static inferType(value) {
    if (typeof value === "number") {
      return "float";
    }
    if (typeof value === "string") {
      return "texture";
    }
    if (value && typeof value.length === "number") {
      return value.length === 16 ? "matrix4" : `vector${value.length}`;
    }
    return "value";
  }
}

export { CjsStoredVariable, CjsVariableStore };
//# sourceMappingURL=CjsVariableStore.js.map
