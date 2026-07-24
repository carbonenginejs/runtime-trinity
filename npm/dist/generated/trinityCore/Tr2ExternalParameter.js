import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { TriValueBinding as _TriValueBinding } from './TriValueBinding.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_destinationObject, _init_extra_destinationObject, _init_destinationAttribute, _init_extra_destinationAttribute, _init_valid, _init_extra_valid;

/** Tr2ExternalParameter (trinityCore) - generated from schema shapeHash 03b24e53.... */
let _Tr2ExternalParameter;
new class extends _identity {
  static [class Tr2ExternalParameter extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_destinationObject, _init_extra_destinationObject, _init_destinationAttribute, _init_extra_destinationAttribute, _init_valid, _init_extra_valid, _initProto],
        c: [_Tr2ExternalParameter, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2ExternalParameter",
        family: "trinityCore"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, void 0, type.model("IRoot")], 16, "destinationObject"], [[io, io.notify, io, io.persist, type, type.string], 16, "destinationAttribute"], [[io, io.read, type, type.boolean], 16, "valid"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetValue"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetValue"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "OnModified"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_valid(this);
    }
    #destinationName = (_initProto(this), "");
    #destinationOffset = -1;

    /** m_name (std::string) [READWRITE, PERSIST] */
    name = _init_name(this, "");

    /** m_destinationObject (IRootPtr) [READWRITE, PERSIST, NOTIFY] */
    destinationObject = (_init_extra_name(this), _init_destinationObject(this, null));

    /** m_destinationAttribute (std::string) [READWRITE, PERSIST, NOTIFY] */
    destinationAttribute = (_init_extra_destinationObject(this), _init_destinationAttribute(this, ""));

    /** m_valid (bool) [READ] */
    valid = (_init_extra_destinationAttribute(this), _init_valid(this, false));

    /** Carbon method GetValue (MAP_METHOD_AND_WRAP). */
    GetValue() {
      if (!this.valid) this.Initialize();
      if (!this.valid) throw new Error("invalid binding");
      const value = this.destinationObject[this.#destinationName];
      if (this.#destinationOffset !== -1) return value[this.#destinationOffset];
      if (ArrayBuffer.isView(value)) return value.slice();
      if (Array.isArray(value)) return value.slice();
      return value;
    }

    /** Carbon method SetValue (MAP_METHOD_AND_WRAP). */
    SetValue(value) {
      if (!this.valid) this.Initialize();
      if (!this.valid) throw new Error("invalid binding");
      const current = this.destinationObject[this.#destinationName];
      if (this.#destinationOffset !== -1) {
        const next = Number(value);
        if (!Number.isFinite(next)) throw new TypeError("float value expected");
        current[this.#destinationOffset] = next;
      } else if (ArrayBuffer.isView(current)) {
        if (value == null || typeof value === "string" || typeof value.length !== "number") throw new TypeError("incompatible type");
        current.set(value);
      } else if (Array.isArray(current)) {
        if (!Array.isArray(value) && !ArrayBuffer.isView(value)) throw new TypeError("incompatible type");
        current.splice(0, current.length, ...value);
      } else {
        this.destinationObject[this.#destinationName] = value;
      }
      _Tr2ExternalParameter.#Notify(this.destinationObject, this.#destinationName, this);
      return true;
    }
    Initialize() {
      this.valid = false;
      this.#destinationName = "";
      this.#destinationOffset = -1;
      if (!this.destinationObject || !this.destinationAttribute) return true;
      const parsed = _Tr2ExternalParameter.#ParseAttribute(this.destinationAttribute);
      if (!parsed || !(parsed.name in this.destinationObject)) return true;
      const value = this.destinationObject[parsed.name];
      if (parsed.offset !== -1 && (!_Tr2ExternalParameter.#IsArrayLike(value) || value.length <= parsed.offset)) return true;
      this.#destinationName = parsed.name;
      this.#destinationOffset = parsed.offset;
      this.valid = true;
      return true;
    }
    OnModified(_value = null) {
      this.Initialize();
      return true;
    }
    GetName() {
      return this.name;
    }
    SetName(name) {
      this.name = String(name ?? "");
    }
    SetDestinationObject(destinationObject) {
      this.destinationObject = destinationObject ?? null;
      this.Initialize();
    }
    SetDestinationAttribute(destinationAttribute) {
      this.destinationAttribute = String(destinationAttribute ?? "");
      this.Initialize();
    }
    IsValid() {
      return this.valid;
    }
    GetDestination() {
      if (!this.valid) this.Initialize();
      return this.valid ? this.destinationObject[this.#destinationName] : null;
    }
    GetDestinationEntry() {
      return this.valid ? {
        name: this.#destinationName,
        offset: this.#destinationOffset
      } : null;
    }
    CreateBinding() {
      const binding = new _TriValueBinding();
      binding.SetDestination(this.destinationAttribute, this.destinationObject);
      return binding;
    }
  }];
  #ParseAttribute(attribute) {
    const value = String(attribute ?? "");
    const dot = value.indexOf(".");
    if (dot === -1) return value ? {
      name: value,
      offset: -1
    } : null;
    const offsets = {
      x: 0,
      r: 0,
      y: 1,
      g: 1,
      z: 2,
      b: 2,
      w: 3,
      a: 3
    };
    const component = value.slice(dot + 1);
    return component.length === 1 && offsets[component] !== undefined ? {
      name: value.slice(0, dot),
      offset: offsets[component]
    } : null;
  }
  #IsArrayLike(value) {
    return Array.isArray(value) || ArrayBuffer.isView(value);
  }
  #Notify(object, name, source) {
    if (typeof object.UpdateValues === "function") object.UpdateValues({
      property: name,
      source
    });else if (typeof object.OnValueChanged === "function") object.OnValueChanged(name, object[name], source);else object.OnModified?.({
      property: name,
      source
    });
  }
  constructor() {
    super(_Tr2ExternalParameter), _initClass();
  }
}();

export { _Tr2ExternalParameter as Tr2ExternalParameter };
//# sourceMappingURL=Tr2ExternalParameter.js.map
