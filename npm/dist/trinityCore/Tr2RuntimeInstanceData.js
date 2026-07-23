import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { Tr2ParticleElementDeclaration as _Tr2ParticleElementDe } from '../particle/Tr2ParticleElementDeclaration.js';

let _initProto, _initClass, _init_name, _init_extra_name, _init_particleSystem, _init_extra_particleSystem, _init_layout, _init_extra_layout, _init_rows, _init_extra_rows, _init_explicitBoundingBox, _init_extra_explicitBoundingBox, _init_count, _init_extra_count, _init_aabbMin, _init_extra_aabbMin, _init_aabbMax, _init_extra_aabbMax;
let _Tr2RuntimeInstanceDa;
new class extends _identity {
  static [class Tr2RuntimeInstanceData extends CjsModel {
    static {
      ({
        e: [_init_name, _init_extra_name, _init_particleSystem, _init_extra_particleSystem, _init_layout, _init_extra_layout, _init_rows, _init_extra_rows, _init_explicitBoundingBox, _init_extra_explicitBoundingBox, _init_count, _init_extra_count, _init_aabbMin, _init_extra_aabbMin, _init_aabbMax, _init_extra_aabbMax, _initProto],
        c: [_Tr2RuntimeInstanceDa, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2RuntimeInstanceData",
        family: "trinityCore"
      })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("Tr2ParticleSystem")], 16, "particleSystem"], [[void 0, io.flag("cpuData"), void 0, io.rebuild("instanceBuffer"), io, io.notify, io, io.persist, void 0, type.array("unknown")], 16, "layout"], [[void 0, io.flag("cpuData"), void 0, io.rebuild("instanceBuffer"), io, io.notify, io, io.persist, void 0, type.array("unknown")], 16, "rows"], [[io, io.persist, type, type.boolean], 16, "explicitBoundingBox"], [[io, io.read, type, type.uint32], 16, "count"], [[io, io.persist, type, type.vec3], 16, "aabbMin"], [[io, io.persist, type, type.vec3], 16, "aabbMax"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted], 18, "OnModified"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetElementLayout"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetData"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetItem"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetItem"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetItemElement"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetItemElement"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateData"], [[carbon, carbon.method, impl, impl.adapted], 18, "UpdateBoundingBox"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetBoundingBox"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetBoundingBox"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetInstanceBufferBoundingBox"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetCount"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetStride"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLayout"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetData"], [[carbon, carbon.method, impl, impl.adapted], 18, "DestroyData"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Maps Carbon vertex semantics into the maintained CPU particle-system declaration without GPU buffers.")], 18, "Spawn"], [[carbon, carbon.method, impl, impl.implemented], 18, "Update"], [[carbon, carbon.method, impl, impl.implemented], 18, "SpawnParticles"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetThreadSafeFlag"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SaveToCMF"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "SaveToGranny"]], 0, void 0, CjsModel));
    }
    name = (_initProto(this), _init_name(this, ""));
    particleSystem = (_init_extra_name(this), _init_particleSystem(this, null));

    // DIVERGENCE (deliberate): Carbon only Blue-persists name/particleSystem and
    // exposes aabbMin/aabbMax as Be::READ; layout/rows/explicitBoundingBox are
    // private, fed at runtime via SetElementLayout/SetData/SetBoundingBox.
    // The JS port persists the whole quintet so instance data authored in JS can
    // round-trip without Carbon's Python/CMF side channels. Carbon-authored
    // .black files never populate these fields.
    layout = (_init_extra_particleSystem(this), _init_layout(this, []));
    rows = (_init_extra_layout(this), _init_rows(this, []));
    explicitBoundingBox = (_init_extra_rows(this), _init_explicitBoundingBox(this, false));
    count = (_init_extra_explicitBoundingBox(this), _init_count(this, 0));
    aabbMin = (_init_extra_count(this), _init_aabbMin(this, vec3.create()));
    aabbMax = (_init_extra_aabbMin(this), _init_aabbMax(this, vec3.create()));
    #layout = (_init_extra_aabbMax(this), Object.freeze([]));
    #data = null;
    #stride = 0;
    #dirty = false;
    #dataRevision = 0;
    get dirty() {
      return this.#dirty;
    }
    get dataRevision() {
      return this.#dataRevision;
    }
    Initialize() {
      this.#rebuildCpuData();
      this.UpdateData();
      return true;
    }
    OnModified(_options = {}) {
      if (this.__state.flags.delete("cpuData")) {
        this.#rebuildCpuData();
      }
      return true;
    }
    SetElementLayout(layout) {
      this.#setElementLayout(layout);
      this.DestroyData();
    }
    SetData(rows) {
      this.#setData(rows);
    }
    GetItem(index) {
      this.#assertItemIndex(index);
      return this.rows[index].map(_Tr2RuntimeInstanceDa.#cloneValue);
    }
    SetItem(index, row) {
      this.#assertItemIndex(index);
      const normalized = this.#normalizeRow(row, index);
      this.rows[index] = normalized;
      this.#writeRow(new DataView(this.#data), index, normalized);
      this.#dirty = true;
    }
    GetItemElement(index, elementIndex) {
      this.#assertItemIndex(index);
      this.#assertElementIndex(elementIndex);
      return _Tr2RuntimeInstanceDa.#cloneValue(this.rows[index][elementIndex]);
    }
    SetItemElement(index, elementIndex, value) {
      this.#assertItemIndex(index);
      this.#assertElementIndex(elementIndex);
      const normalized = _Tr2RuntimeInstanceDa.#normalizeElementValue(this.#layout[elementIndex], value, `Instance ${index} element ${elementIndex}`);
      this.rows[index][elementIndex] = normalized;
      this.#writeElement(new DataView(this.#data), index, elementIndex, normalized);
      this.#dirty = true;
    }
    UpdateData() {
      if (!this.#dirty) {
        return false;
      }
      this.#dirty = false;
      this.#dataRevision++;
      return true;
    }
    UpdateBoundingBox() {
      if (this.explicitBoundingBox) {
        return false;
      }
      const positionIndex = this.#layout.findIndex(element => element.usage === "POSITION" && element.usageIndex === 0 && element.componentCount >= 3);
      if (positionIndex === -1 || this.count === 0) {
        vec3.set(this.aabbMin, 0, 0, 0);
        vec3.set(this.aabbMax, 0, 0, 0);
        return false;
      }
      vec3.set(this.aabbMin, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
      vec3.set(this.aabbMax, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
      for (const row of this.rows) {
        const position = row[positionIndex];
        for (let axis = 0; axis < 3; axis++) {
          const component = Number(position[axis]) || 0;
          this.aabbMin[axis] = Math.min(this.aabbMin[axis], component);
          this.aabbMax[axis] = Math.max(this.aabbMax[axis], component);
        }
      }
      return true;
    }
    SetBoundingBox(bounds, maxBounds) {
      const min = maxBounds === undefined ? bounds?.min ?? bounds?.minBounds : bounds;
      const max = maxBounds === undefined ? bounds?.max ?? bounds?.maxBounds : maxBounds;
      if (!min || !max) {
        throw new TypeError("Bounding box requires min and max vectors");
      }
      vec3.copy(this.aabbMin, min);
      vec3.copy(this.aabbMax, max);
      this.explicitBoundingBox = true;
    }
    GetBoundingBox(minBounds, maxBounds) {
      if (minBounds && maxBounds) {
        vec3.copy(minBounds, this.aabbMin);
        vec3.copy(maxBounds, this.aabbMax);
        return true;
      }
      return {
        min: vec3.clone(this.aabbMin),
        max: vec3.clone(this.aabbMax)
      };
    }
    GetInstanceBufferBoundingBox(_bufferIndex = 0) {
      return this.GetBoundingBox();
    }
    GetCount() {
      return this.count;
    }
    GetStride() {
      return this.#stride;
    }
    GetLayout() {
      return this.#layout;
    }
    GetData() {
      return this.#data ? new Uint8Array(this.#data) : null;
    }
    DestroyData() {
      this.rows = [];
      this.#data = null;
      this.count = 0;
      this.#dirty = true;
    }

    /**
     * Replaces the target particle system with particles decoded from the CPU
     * instance rows.
     */
    Spawn() {
      const particleSystem = this.particleSystem;
      if (!particleSystem?.isValid || !this.#layout.length || !this.#data) {
        return;
      }
      const declaration = particleSystem.GetElementDeclaration();
      if (!(declaration instanceof Map)) {
        throw new TypeError("Tr2ParticleSystem.GetElementDeclaration must return the CPU declaration Map.");
      }
      const mappings = [];
      for (const element of declaration.values()) {
        const usage = _Tr2RuntimeInstanceDa.#particleUsageToVertexUsage(element.elementType);
        const usageIndex = element.elementType === _Tr2ParticleElementDe.Type.CUSTOM ? element.usageIndex : 0;
        const layoutIndex = this.#layout.findIndex(item => item.usage === usage && item.usageIndex === usageIndex);
        if (layoutIndex === -1) {
          return;
        }
        const layout = this.#layout[layoutIndex];
        if (layout.baseType !== "FLOAT32" || layout.componentCount < element.dimension) {
          return;
        }
        mappings.push({
          element,
          layoutIndex
        });
      }
      particleSystem.ClearParticles();
      for (const row of this.rows) {
        const particleIndex = particleSystem.BeginSpawnParticle();
        if (particleIndex === null) {
          break;
        }
        for (const mapping of mappings) {
          particleSystem.SetParticleElement(particleIndex, mapping.element.key, row[mapping.layoutIndex]);
        }
        particleSystem.EndSpawnParticle();
      }
    }

    /**
     * Implements ITr2GenericEmitter. Does nothing as this emitter only emits
     * particles on demand (Spawn).
     */
    Update(_arguments) {}

    /**
     * Implements ITr2GenericEmitter. Does nothing as this emitter only emits
     * particles on demand (Spawn); both Carbon overloads are deliberate no-ops.
     */
    SpawnParticles(..._args) {}

    /**
     * Implements ITr2GenericEmitter. Nothing to prepare - this emitter never
     * spawns from the threaded particle update.
     */
    SetThreadSafeFlag() {}

    /** Carbon's CMF writer requires the native resource-path and file encoder. */
    SaveToCMF(...args) {
      throw new Error("Tr2RuntimeInstanceData.SaveToCMF is not implemented in CarbonEngineJS.");
    }

    /** Carbon's Granny writer requires the native Granny SDK and filesystem. */
    SaveToGranny(...args) {
      throw new Error("Tr2RuntimeInstanceData.SaveToGranny is not implemented in CarbonEngineJS.");
    }

    /**
     * Builds Carbon's common current/previous-transform instance stream without
     * creating renderer or GPU resources.
     *
     * @param {Array<object|ArrayLike<number>>} instances
     * @returns {number} Maximum instance scale.
     */
    SetTransformInstances(instances) {
      if (!Array.isArray(instances)) {
        throw new TypeError("Transform instances must be an array");
      }
      const rows = [];
      const min = vec3.fromValues(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
      const max = vec3.fromValues(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
      let maxScale = 0;
      for (let index = 0; index < instances.length; index++) {
        const value = instances[index];
        const transform = Array.isArray(value) || ArrayBuffer.isView(value) ? value : value?.transform;
        const previousTransform = value?.previousTransform ?? transform;
        if (!transform || transform.length !== 16) {
          throw new TypeError(`Transform instance ${index} must contain 16 transform values`);
        }
        if (!previousTransform || previousTransform.length !== 16) {
          throw new TypeError(`Transform instance ${index} must contain 16 previous-transform values`);
        }
        const currentRows = _Tr2RuntimeInstanceDa.#packTransform(transform);
        const previousRows = _Tr2RuntimeInstanceDa.#packTransform(previousTransform);
        rows.push([...currentRows, ...previousRows, Number(value?.boneIndex ?? 0) | 0]);
        for (let axis = 0; axis < 3; axis++) {
          min[axis] = Math.min(min[axis], Number(transform[12 + axis]) || 0);
          max[axis] = Math.max(max[axis], Number(transform[12 + axis]) || 0);
        }
        for (const row of currentRows) {
          maxScale = Math.max(maxScale, Math.hypot(row[0], row[1], row[2]));
        }
      }
      this.SetElementLayout(_Tr2RuntimeInstanceDa.TransformLayout);
      this.SetData(rows);
      this.SetBoundingBox(instances.length ? min : _Tr2RuntimeInstanceDa.#zero, instances.length ? max : _Tr2RuntimeInstanceDa.#zero);
      this.UpdateData();
      return maxScale;
    }
    #rebuildCpuData() {
      const rows = this.rows;
      this.#setElementLayout(this.layout);
      if (!this.#layout.length) {
        if (rows.length) {
          throw new Error("SetElementLayout must be called before SetData");
        }
        this.rows = [];
        this.#data = null;
        this.count = 0;
        this.#dirty = true;
        return;
      }
      this.#setData(rows);
    }
    #setElementLayout(layout) {
      if (!Array.isArray(layout)) {
        throw new TypeError("Element layout must be an array");
      }
      let offset = 0;
      const normalized = layout.map((value, index) => {
        const descriptor = _Tr2RuntimeInstanceDa.#normalizeElement(value, index, offset);
        offset += descriptor.byteSize;
        return Object.freeze(descriptor);
      });
      this.layout = normalized.map(_Tr2RuntimeInstanceDa.#describeElement);
      this.#layout = Object.freeze(normalized);
      this.#stride = offset;
    }
    #setData(rows) {
      if (!this.#layout.length) {
        throw new Error("SetElementLayout must be called before SetData");
      }
      if (!Array.isArray(rows)) {
        throw new TypeError("Instance data must be an array");
      }
      const normalizedRows = rows.map((row, index) => this.#normalizeRow(row, index));
      const data = normalizedRows.length ? new ArrayBuffer(this.#stride * normalizedRows.length) : null;
      const view = data ? new DataView(data) : null;
      for (let index = 0; index < normalizedRows.length; index++) {
        this.#writeRow(view, index, normalizedRows[index]);
      }
      this.rows = normalizedRows;
      this.#data = data;
      this.count = normalizedRows.length;
      this.#dirty = true;
    }
    #normalizeRow(row, rowIndex) {
      const values = Array.isArray(row) ? row : this.#layout.map(element => row?.[element.name]);
      if (values.length !== this.#layout.length) {
        throw new TypeError(`Instance ${rowIndex} must contain ${this.#layout.length} elements`);
      }
      return values.map((value, elementIndex) => _Tr2RuntimeInstanceDa.#normalizeElementValue(this.#layout[elementIndex], value, `Instance ${rowIndex} element ${elementIndex}`));
    }
    #writeRow(view, rowIndex, row) {
      for (let elementIndex = 0; elementIndex < this.#layout.length; elementIndex++) {
        this.#writeElement(view, rowIndex, elementIndex, row[elementIndex]);
      }
    }
    #writeElement(view, rowIndex, elementIndex, value) {
      const element = this.#layout[elementIndex];
      const offset = rowIndex * this.#stride + element.offset;
      if (!Array.isArray(value)) {
        if (element.componentCount === 4 && element.baseType === "INT8") {
          view.setInt32(offset, Number(value) | 0, true);
          return;
        }
        if (element.componentCount === 4 && element.baseType === "UINT8") {
          view.setUint32(offset, Number(value) >>> 0, true);
          return;
        }
      }
      const values = Array.isArray(value) ? value : [value];
      for (let index = 0; index < element.componentCount; index++) {
        _Tr2RuntimeInstanceDa.#writeComponent(view, offset + index * element.componentByteSize, element.baseType, values[index]);
      }
    }
    #assertItemIndex(index) {
      if (!Number.isInteger(index) || index < 0 || index >= this.count) {
        throw new RangeError("Instance index out of range");
      }
    }
    #assertElementIndex(index) {
      if (!Number.isInteger(index) || index < 0 || index >= this.#layout.length) {
        throw new RangeError("Element index out of range");
      }
    }
  }];
  #normalizeElement(value, index, offset) {
    const legacy = Array.isArray(value);
    if (!legacy && (!value || typeof value !== "object")) {
      throw new TypeError(`Element ${index} must be a descriptor or legacy triple`);
    }
    const usageValue = legacy ? _Tr2RuntimeInstanceDa.#particleUsageToVertexUsage(value[0]) : value.usage;
    const usage = _Tr2RuntimeInstanceDa.#normalizeUsage(usageValue);
    const usageIndex = Number(legacy ? value[1] : value.usageIndex ?? 0);
    if (!Number.isInteger(usageIndex) || usageIndex < 0 || usageIndex > 7) {
      throw new TypeError(`Element ${index} has invalid usageIndex`);
    }
    const type = legacy ? `FLOAT32_${Number(value[2])}` : value.type;
    const typeInfo = _Tr2RuntimeInstanceDa.#normalizeType(type);
    return {
      usage,
      usageCode: _Tr2RuntimeInstanceDa.UsageCode[usage],
      usageIndex,
      type: typeInfo.name,
      dataType: typeInfo.dataType,
      baseType: typeInfo.baseType,
      componentCount: typeInfo.componentCount,
      componentByteSize: typeInfo.componentByteSize,
      byteSize: typeInfo.componentCount * typeInfo.componentByteSize,
      offset,
      name: String(legacy ? `element${index}` : value.name ?? `element${index}`)
    };
  }
  #describeElement(value) {
    return Object.freeze({
      usage: value.usage,
      usageIndex: value.usageIndex,
      type: value.type,
      name: value.name
    });
  }
  #packTransform(value) {
    return [[Number(value[0]), Number(value[4]), Number(value[8]), Number(value[12])], [Number(value[1]), Number(value[5]), Number(value[9]), Number(value[13])], [Number(value[2]), Number(value[6]), Number(value[10]), Number(value[14])]];
  }
  #particleUsageToVertexUsage(value) {
    const usages = ["TANGENT", "POSITION", "NORMAL", "BITANGENT", "TEXCOORD"];
    const index = Number(value);
    if (!Number.isInteger(index) || index < 0 || index >= usages.length) {
      throw new TypeError("Invalid legacy particle element usage");
    }
    return usages[index];
  }
  #normalizeUsage(value) {
    if (typeof value === "number") {
      const entry = Object.entries(_Tr2RuntimeInstanceDa.UsageCode).find(([, code]) => code === value);
      if (entry) return entry[0];
    }
    const usage = String(value ?? "").toUpperCase();
    if (Object.hasOwn(_Tr2RuntimeInstanceDa.UsageCode, usage)) {
      return usage;
    }
    throw new TypeError(`Invalid vertex usage ${String(value)}`);
  }
  #normalizeType(value) {
    let dataType;
    let name;
    if (typeof value === "number") {
      dataType = value;
      name = Object.entries(_Tr2RuntimeInstanceDa.DataType).find(([, code]) => code === dataType)?.[0];
    } else {
      name = String(value ?? "").toUpperCase();
      dataType = _Tr2RuntimeInstanceDa.DataType[name];
    }
    if (!name || dataType === undefined) {
      throw new TypeError(`Unsupported vertex data type ${String(value)}`);
    }
    const typeCode = dataType & 7;
    const componentCount = ((dataType & 96) >> 5) + 1;
    const unsigned = (dataType & 8) !== 0;
    const baseTypes = [unsigned ? "UINT8" : "INT8", unsigned ? "UINT16" : "INT16", unsigned ? "UINT32" : "INT32", "FLOAT16", "FLOAT32"];
    const componentSizes = [1, 2, 4, 2, 4];
    if (!baseTypes[typeCode]) {
      throw new TypeError(`Unsupported vertex data type ${String(value)}`);
    }
    return {
      name,
      dataType,
      baseType: baseTypes[typeCode],
      componentCount,
      componentByteSize: componentSizes[typeCode]
    };
  }
  #normalizeElementValue(element, value, label) {
    if (!Array.isArray(value) && element.componentCount === 4 && (element.baseType === "INT8" || element.baseType === "UINT8") && Number.isFinite(Number(value))) {
      return Number(value) | 0;
    }
    if (element.componentCount === 1 && !Array.isArray(value)) {
      if (!Number.isFinite(Number(value))) throw new TypeError(`${label} must be numeric`);
      return Number(value);
    }
    if (!Array.isArray(value) && !ArrayBuffer.isView(value)) {
      throw new TypeError(`${label} must contain ${element.componentCount} components`);
    }
    if (value.length !== element.componentCount) {
      throw new TypeError(`${label} must contain ${element.componentCount} components`);
    }
    const result = Array.from(value, Number);
    if (result.some(component => !Number.isFinite(component))) {
      throw new TypeError(`${label} components must be numeric`);
    }
    return result;
  }
  #writeComponent(view, offset, baseType, value) {
    switch (baseType) {
      case "INT8":
        view.setInt8(offset, value);
        break;
      case "UINT8":
        view.setUint8(offset, value);
        break;
      case "INT16":
        view.setInt16(offset, value, true);
        break;
      case "UINT16":
        view.setUint16(offset, value, true);
        break;
      case "INT32":
        view.setInt32(offset, value, true);
        break;
      case "UINT32":
        view.setUint32(offset, value, true);
        break;
      case "FLOAT32":
        view.setFloat32(offset, value, true);
        break;
      default:
        throw new TypeError(`Packing ${baseType} is not supported`);
    }
  }
  #cloneValue(value) {
    return Array.isArray(value) ? value.slice() : value;
  }
  TransformLayout = Object.freeze([Object.freeze({
    usage: "TEXCOORD",
    usageIndex: 0,
    type: "FLOAT32_4",
    name: "transform0"
  }), Object.freeze({
    usage: "TEXCOORD",
    usageIndex: 1,
    type: "FLOAT32_4",
    name: "transform1"
  }), Object.freeze({
    usage: "TEXCOORD",
    usageIndex: 2,
    type: "FLOAT32_4",
    name: "transform2"
  }), Object.freeze({
    usage: "TEXCOORD",
    usageIndex: 3,
    type: "FLOAT32_4",
    name: "lastTransform0"
  }), Object.freeze({
    usage: "TEXCOORD",
    usageIndex: 4,
    type: "FLOAT32_4",
    name: "lastTransform1"
  }), Object.freeze({
    usage: "TEXCOORD",
    usageIndex: 5,
    type: "FLOAT32_4",
    name: "lastTransform2"
  }), Object.freeze({
    usage: "TEXCOORD",
    usageIndex: 6,
    type: "BYTE_4",
    name: "boneIndex"
  })]);
  #zero = vec3.create();
  UsageCode = Object.freeze({
    POSITION: 0,
    COLOR: 1,
    NORMAL: 2,
    TANGENT: 3,
    BITANGENT: 4,
    TEXCOORD: 5,
    BLENDINDICES: 6,
    BLENDWEIGHTS: 7
  });
  DataType = Object.freeze({
    BYTE_1: 0,
    BYTE_2: 32,
    BYTE_3: 64,
    BYTE_4: 96,
    UBYTE_1: 8,
    UBYTE_2: 40,
    UBYTE_3: 72,
    UBYTE_4: 104,
    SHORT_1: 1,
    SHORT_2: 33,
    SHORT_3: 65,
    SHORT_4: 97,
    USHORT_1: 9,
    USHORT_2: 41,
    USHORT_3: 73,
    USHORT_4: 105,
    INT32_1: 2,
    INT32_2: 34,
    INT32_3: 66,
    INT32_4: 98,
    UINT32_1: 10,
    UINT32_2: 42,
    UINT32_3: 74,
    UINT32_4: 106,
    FLOAT32_1: 4,
    FLOAT32_2: 36,
    FLOAT32_3: 68,
    FLOAT32_4: 100
  });
  constructor() {
    super(_Tr2RuntimeInstanceDa), _initClass();
  }
}();

export { _Tr2RuntimeInstanceDa as Tr2RuntimeInstanceData };
//# sourceMappingURL=Tr2RuntimeInstanceData.js.map
