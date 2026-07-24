import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { vec4 } from '@carbonenginejs/runtime-utils/vec4';

let _initProto, _initClass, _init_destinationAttribute, _init_extra_destinationAttribute, _init_sourceAttribute, _init_extra_sourceAttribute, _init_destinationObject, _init_extra_destinationObject, _init_isEnabled, _init_extra_isEnabled, _init_name, _init_extra_name, _init_sourceObject, _init_extra_sourceObject, _init_offset, _init_extra_offset, _init_copyValueCallable, _init_extra_copyValueCallable, _init_scale, _init_extra_scale, _init_isWeak, _init_extra_isWeak, _init_isValid, _init_extra_isValid;

/** TriValueBinding (trinityCore) - generated from schema shapeHash 785c7efb.... */
let _TriValueBinding;
new class extends _identity {
  static [class TriValueBinding extends CjsModel {
    static {
      ({
        e: [_init_destinationAttribute, _init_extra_destinationAttribute, _init_sourceAttribute, _init_extra_sourceAttribute, _init_destinationObject, _init_extra_destinationObject, _init_isEnabled, _init_extra_isEnabled, _init_name, _init_extra_name, _init_sourceObject, _init_extra_sourceObject, _init_offset, _init_extra_offset, _init_copyValueCallable, _init_extra_copyValueCallable, _init_scale, _init_extra_scale, _init_isWeak, _init_extra_isWeak, _init_isValid, _init_extra_isValid, _initProto],
        c: [_TriValueBinding, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriValueBinding",
        family: "trinityCore"
      })], [[[io, io.notify, io, io.persist, type, type.string], 16, "destinationAttribute"], [[io, io.notify, io, io.persist, type, type.string], 16, "sourceAttribute"], [[io, io.persistOnly, void 0, type.model("IRoot")], 16, "destinationObject"], [[io, io.readwrite, type, type.boolean], 16, "isEnabled"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persistOnly, void 0, type.model("IRoot")], 16, "sourceObject"], [[io, io.persist, type, type.vec4], 16, "offset"], [[io, io.notify, io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "copyValueCallable"], [[io, io.persist, type, type.float32], 16, "scale"], [[io, io.read, type, type.boolean], 16, "isWeak"], [[io, io.read, type, type.boolean], 16, "isValid"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "CopyValue"], [[carbon, carbon.method, impl, impl.implemented], 18, "OnModified"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetSource"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetDestination"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetScale"], [[carbon, carbon.method, impl, impl.adapted], 18, "CreateWeakBinding"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsValid"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_isValid(this);
    }
    #source = (_initProto(this), null);
    #destination = null;
    #sourceOffset = -1;
    #destinationOffset = -1;
    #sourceObjectWeak = null;
    #destinationObjectWeak = null;

    /** m_destinationAttribute (std::string) [READWRITE, PERSIST, NOTIFY] */
    destinationAttribute = _init_destinationAttribute(this, "");

    /** m_sourceAttribute (std::string) [READWRITE, PERSIST, NOTIFY] */
    sourceAttribute = (_init_extra_destinationAttribute(this), _init_sourceAttribute(this, ""));

    /** m_destinationObject (IRootPtr) [PERSISTONLY] */
    destinationObject = (_init_extra_sourceAttribute(this), _init_destinationObject(this, null));

    /** m_isEnabled (bool) [READWRITE] */
    isEnabled = (_init_extra_destinationObject(this), _init_isEnabled(this, true));

    /** m_name (std::string) [READWRITE, PERSIST] */
    name = (_init_extra_isEnabled(this), _init_name(this, ""));

    /** m_sourceObject (IRootPtr) [PERSISTONLY] */
    sourceObject = (_init_extra_name(this), _init_sourceObject(this, null));

    /** m_offset (Vector4) [READWRITE, PERSIST] */
    offset = (_init_extra_sourceObject(this), _init_offset(this, vec4.create()));

    /** m_copyValueCallable (BlueScriptCallback) [READWRITE, NOTIFY] */
    copyValueCallable = (_init_extra_offset(this), _init_copyValueCallable(this, null));

    /** m_scale (float) [READWRITE, PERSIST] */
    scale = (_init_extra_copyValueCallable(this), _init_scale(this, 1));

    /** m_isWeak (bool) [READ] */
    isWeak = (_init_extra_scale(this), _init_isWeak(this, false));
    isValid = (_init_extra_isWeak(this), _init_isValid(this, false));
    Initialize() {
      this.#source = null;
      this.#destination = null;
      this.#sourceOffset = -1;
      this.#destinationOffset = -1;
      this.isValid = false;
      const sourceObject = this.GetCurrentSourceObject();
      const destinationObject = this.GetCurrentDestinationObject();
      if (!sourceObject || !destinationObject) return;
      if (typeof this.copyValueCallable === "function") {
        this.isValid = true;
        return;
      }
      const source = _TriValueBinding.#ParseAttribute(this.sourceAttribute);
      const destination = _TriValueBinding.#ParseAttribute(this.destinationAttribute);
      if (!source || !destination || !(source.name in sourceObject) || !(destination.name in destinationObject)) return;
      const sourceValue = sourceObject[source.name];
      const destinationValue = destinationObject[destination.name];
      if (!_TriValueBinding.#CanUseOffset(sourceValue, source.offset) || !_TriValueBinding.#CanUseOffset(destinationValue, destination.offset)) return;
      this.#source = {
        object: sourceObject,
        name: source.name
      };
      this.#destination = {
        object: destinationObject,
        name: destination.name
      };
      this.#sourceOffset = source.offset;
      this.#destinationOffset = destination.offset;
      this.isValid = true;
    }
    CopyValue() {
      if (!this.isEnabled) return false;
      if (!this.isValid) this.Initialize();
      if (!this.isValid) return false;
      const sourceObject = this.GetCurrentSourceObject();
      const destinationObject = this.GetCurrentDestinationObject();
      if (!sourceObject || !destinationObject) return false;
      if (typeof this.copyValueCallable === "function") {
        this.copyValueCallable(sourceObject, destinationObject);
        return true;
      }
      const sourceValue = this.#source.object[this.#source.name];
      const destinationValue = this.#destination.object[this.#destination.name];
      const value = this.#sourceOffset === -1 ? sourceValue : sourceValue[this.#sourceOffset];
      const changed = this.#destinationOffset === -1 ? _TriValueBinding.#CopyWholeValue(this.#destination.object, this.#destination.name, destinationValue, value, this.scale, this.offset) : _TriValueBinding.#CopyComponent(destinationValue, this.#destinationOffset, value, this.scale, this.offset[0]);
      if (changed) _TriValueBinding.#Notify(this.#destination.object, this.#destination.name, this);
      return changed;
    }
    OnModified(_value = null) {
      this.Initialize();
      return true;
    }
    GetDestinationAttributeName() {
      return this.destinationAttribute;
    }
    SetSource(sourceAttribute, sourceObject) {
      this.sourceAttribute = String(sourceAttribute ?? "");
      this.SetSourceObject(sourceObject);
    }
    SetDestination(destinationAttribute, destinationObject) {
      this.destinationAttribute = String(destinationAttribute ?? "");
      this.SetDestinationObject(destinationObject);
    }
    SetScale(scale) {
      this.scale = Number(scale);
    }
    CreateWeakBinding(source, sourceAttribute, destination, destinationAttribute, scale = 1, offset = [0, 0, 0, 0]) {
      this.isWeak = true;
      this.sourceObject = null;
      this.destinationObject = null;
      this.#sourceObjectWeak = source && typeof WeakRef === "function" ? new WeakRef(source) : {
        deref: () => source
      };
      this.#destinationObjectWeak = destination && typeof WeakRef === "function" ? new WeakRef(destination) : {
        deref: () => destination
      };
      this.sourceAttribute = String(sourceAttribute ?? "");
      this.destinationAttribute = String(destinationAttribute ?? "");
      this.scale = Number(scale);
      for (let index = 0; index < 4; index++) this.offset[index] = Number(offset?.[index] ?? 0);
      this.Initialize();
      return this.isValid;
    }
    IsValid() {
      return this.isValid;
    }
    GetCurrentSourceObject() {
      return this.isWeak ? this.#sourceObjectWeak?.deref?.() ?? null : this.sourceObject;
    }
    GetCurrentDestinationObject() {
      return this.isWeak ? this.#destinationObjectWeak?.deref?.() ?? null : this.destinationObject;
    }
    GetSourceObject() {
      return this.GetCurrentSourceObject();
    }
    SetSourceObject(sourceObject) {
      this.isWeak = false;
      this.#sourceObjectWeak = null;
      this.sourceObject = sourceObject ?? null;
      this.Initialize();
    }
    GetDestinationObject() {
      return this.GetCurrentDestinationObject();
    }
    SetDestinationObject(destinationObject) {
      this.isWeak = false;
      this.#destinationObjectWeak = null;
      this.destinationObject = destinationObject ?? null;
      this.Initialize();
    }
    RerouteDestination(destinationObject) {
      this.SetDestinationObject(destinationObject);
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
  #CanUseOffset(value, offset) {
    return offset === -1 || _TriValueBinding.#IsArrayLike(value) && value.length > offset;
  }
  #CopyWholeValue(object, name, destination, source, scale, offset) {
    if (_TriValueBinding.#IsArrayLike(destination)) {
      const sourceArray = _TriValueBinding.#IsArrayLike(source) ? source : null;
      let changed = false;
      for (let index = 0; index < destination.length; index++) {
        const sourceValue = Number(sourceArray ? sourceArray[Math.min(index, sourceArray.length - 1)] : source);
        const next = sourceValue * scale + Number(offset[index] ?? 0);
        if (!Object.is(destination[index], next)) {
          destination[index] = next;
          changed = true;
        }
      }
      return changed;
    }
    const numeric = typeof source === "number" || typeof destination === "number" || typeof destination === "boolean";
    const next = numeric ? Number(source) * scale + Number(offset[0] ?? 0) : source;
    const value = typeof destination === "boolean" ? Boolean(next) : next;
    if (Object.is(destination, value)) return false;
    object[name] = value;
    return true;
  }
  #CopyComponent(destination, index, source, scale, offset) {
    if (!_TriValueBinding.#IsArrayLike(destination)) return false;
    const next = Number(_TriValueBinding.#IsArrayLike(source) ? source[0] : source) * scale + Number(offset ?? 0);
    if (Object.is(destination[index], next)) return false;
    destination[index] = next;
    return true;
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
  #IsArrayLike(value) {
    return Array.isArray(value) || ArrayBuffer.isView(value);
  }
  constructor() {
    super(_TriValueBinding), _initClass();
  }
}();

export { _TriValueBinding as TriValueBinding };
//# sourceMappingURL=TriValueBinding.js.map
