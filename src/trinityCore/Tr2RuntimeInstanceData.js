// Source: E:\carbonengine\trinity\trinity\Tr2RuntimeInstanceData.h
// Source: E:\carbonengine\trinity\trinity\Tr2RuntimeInstanceData.cpp
// Source: E:\carbonengine\trinity\trinity\Tr2RuntimeInstanceData_Blue.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


@type.define({ className: "Tr2RuntimeInstanceData", family: "trinityCore" })
export class Tr2RuntimeInstanceData extends CjsModel
{
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.objectRef("Tr2ParticleSystem")
  particleSystem = null;

  @io.read
  @type.uint32
  count = 0;

  @io.read
  @type.vec3
  aabbMin = vec3.create();

  @io.read
  @type.vec3
  aabbMax = vec3.create();

  #layout = Object.freeze([]);

  #rows = [];

  #data = null;

  #stride = 0;

  #explicitBoundingBox = false;

  #dirty = false;

  #dataRevision = 0;

  get dirty()
  {
    return this.#dirty;
  }

  get dataRevision()
  {
    return this.#dataRevision;
  }

  @carbon.method
  @impl.adapted
  SetElementLayout(layout)
  {
    if (!Array.isArray(layout))
    {
      throw new TypeError("Element layout must be an array");
    }

    let offset = 0;
    const normalized = layout.map((value, index) =>
    {
      const descriptor = Tr2RuntimeInstanceData.#normalizeElement(value, index, offset);
      offset += descriptor.byteSize;
      return Object.freeze(descriptor);
    });

    this.#layout = Object.freeze(normalized);
    this.#stride = offset;
    this.DestroyData();
  }

  @carbon.method
  @impl.adapted
  SetData(rows)
  {
    if (!this.#layout.length)
    {
      throw new Error("SetElementLayout must be called before SetData");
    }
    if (!Array.isArray(rows))
    {
      throw new TypeError("Instance data must be an array");
    }

    const normalizedRows = rows.map((row, index) => this.#normalizeRow(row, index));
    const data = normalizedRows.length ? new ArrayBuffer(this.#stride * normalizedRows.length) : null;
    const view = data ? new DataView(data) : null;
    for (let index = 0; index < normalizedRows.length; index++)
    {
      this.#writeRow(view, index, normalizedRows[index]);
    }

    this.#rows = normalizedRows;
    this.#data = data;
    this.count = normalizedRows.length;
    this.#dirty = true;
  }

  @carbon.method
  @impl.implemented
  GetItem(index)
  {
    this.#assertItemIndex(index);
    return this.#rows[index].map(Tr2RuntimeInstanceData.#cloneValue);
  }

  @carbon.method
  @impl.adapted
  SetItem(index, row)
  {
    this.#assertItemIndex(index);
    const normalized = this.#normalizeRow(row, index);
    this.#rows[index] = normalized;
    this.#writeRow(new DataView(this.#data), index, normalized);
    this.#dirty = true;
  }

  @carbon.method
  @impl.implemented
  GetItemElement(index, elementIndex)
  {
    this.#assertItemIndex(index);
    this.#assertElementIndex(elementIndex);
    return Tr2RuntimeInstanceData.#cloneValue(this.#rows[index][elementIndex]);
  }

  @carbon.method
  @impl.adapted
  SetItemElement(index, elementIndex, value)
  {
    this.#assertItemIndex(index);
    this.#assertElementIndex(elementIndex);
    const normalized = Tr2RuntimeInstanceData.#normalizeElementValue(
      this.#layout[elementIndex],
      value,
      `Instance ${index} element ${elementIndex}`
    );
    this.#rows[index][elementIndex] = normalized;
    this.#writeElement(new DataView(this.#data), index, elementIndex, normalized);
    this.#dirty = true;
  }

  @carbon.method
  @impl.adapted
  UpdateData()
  {
    if (!this.#dirty)
    {
      return false;
    }
    this.#dirty = false;
    this.#dataRevision++;
    return true;
  }

  @carbon.method
  @impl.adapted
  UpdateBoundingBox()
  {
    if (this.#explicitBoundingBox)
    {
      return false;
    }

    const positionIndex = this.#layout.findIndex(element =>
      element.usage === "POSITION" && element.usageIndex === 0 && element.componentCount >= 3
    );
    if (positionIndex === -1 || this.count === 0)
    {
      vec3.set(this.aabbMin, 0, 0, 0);
      vec3.set(this.aabbMax, 0, 0, 0);
      return false;
    }

    vec3.set(this.aabbMin, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
    vec3.set(this.aabbMax, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
    for (const row of this.#rows)
    {
      const position = row[positionIndex];
      for (let axis = 0; axis < 3; axis++)
      {
        const component = Number(position[axis]) || 0;
        this.aabbMin[axis] = Math.min(this.aabbMin[axis], component);
        this.aabbMax[axis] = Math.max(this.aabbMax[axis], component);
      }
    }
    return true;
  }

  @carbon.method
  @impl.adapted
  SetBoundingBox(bounds, maxBounds)
  {
    const min = maxBounds === undefined ? bounds?.min ?? bounds?.minBounds : bounds;
    const max = maxBounds === undefined ? bounds?.max ?? bounds?.maxBounds : maxBounds;
    if (!min || !max)
    {
      throw new TypeError("Bounding box requires min and max vectors");
    }
    vec3.copy(this.aabbMin, min);
    vec3.copy(this.aabbMax, max);
    this.#explicitBoundingBox = true;
  }

  @carbon.method
  @impl.implemented
  GetBoundingBox(minBounds, maxBounds)
  {
    if (minBounds && maxBounds)
    {
      vec3.copy(minBounds, this.aabbMin);
      vec3.copy(maxBounds, this.aabbMax);
      return true;
    }
    return {
      min: vec3.clone(this.aabbMin),
      max: vec3.clone(this.aabbMax)
    };
  }

  @carbon.method
  @impl.implemented
  GetInstanceBufferBoundingBox(_bufferIndex = 0)
  {
    return this.GetBoundingBox();
  }

  @carbon.method
  @impl.implemented
  GetCount()
  {
    return this.count;
  }

  @carbon.method
  @impl.implemented
  GetStride()
  {
    return this.#stride;
  }

  @carbon.method
  @impl.implemented
  GetLayout()
  {
    return this.#layout;
  }

  @carbon.method
  @impl.adapted
  GetData()
  {
    return this.#data ? new Uint8Array(this.#data) : null;
  }

  @carbon.method
  @impl.adapted
  DestroyData()
  {
    this.#rows = [];
    this.#data = null;
    this.count = 0;
    this.#dirty = true;
  }

  #normalizeRow(row, rowIndex)
  {
    const values = Array.isArray(row)
      ? row
      : this.#layout.map(element => row?.[element.name]);
    if (values.length !== this.#layout.length)
    {
      throw new TypeError(`Instance ${rowIndex} must contain ${this.#layout.length} elements`);
    }
    return values.map((value, elementIndex) => Tr2RuntimeInstanceData.#normalizeElementValue(
      this.#layout[elementIndex],
      value,
      `Instance ${rowIndex} element ${elementIndex}`
    ));
  }

  #writeRow(view, rowIndex, row)
  {
    for (let elementIndex = 0; elementIndex < this.#layout.length; elementIndex++)
    {
      this.#writeElement(view, rowIndex, elementIndex, row[elementIndex]);
    }
  }

  #writeElement(view, rowIndex, elementIndex, value)
  {
    const element = this.#layout[elementIndex];
    const offset = rowIndex * this.#stride + element.offset;
    if (!Array.isArray(value))
    {
      if (element.componentCount === 4 && element.baseType === "INT8")
      {
        view.setInt32(offset, Number(value) | 0, true);
        return;
      }
      if (element.componentCount === 4 && element.baseType === "UINT8")
      {
        view.setUint32(offset, Number(value) >>> 0, true);
        return;
      }
    }

    const values = Array.isArray(value) ? value : [value];
    for (let index = 0; index < element.componentCount; index++)
    {
      Tr2RuntimeInstanceData.#writeComponent(
        view,
        offset + index * element.componentByteSize,
        element.baseType,
        values[index]
      );
    }
  }

  #assertItemIndex(index)
  {
    if (!Number.isInteger(index) || index < 0 || index >= this.count)
    {
      throw new RangeError("Instance index out of range");
    }
  }

  #assertElementIndex(index)
  {
    if (!Number.isInteger(index) || index < 0 || index >= this.#layout.length)
    {
      throw new RangeError("Element index out of range");
    }
  }

  static #normalizeElement(value, index, offset)
  {
    const legacy = Array.isArray(value);
    if (!legacy && (!value || typeof value !== "object"))
    {
      throw new TypeError(`Element ${index} must be a descriptor or legacy triple`);
    }

    const usageValue = legacy
      ? Tr2RuntimeInstanceData.#particleUsageToVertexUsage(value[0])
      : value.usage;
    const usage = Tr2RuntimeInstanceData.#normalizeUsage(usageValue);
    const usageIndex = Number(legacy ? value[1] : value.usageIndex ?? 0);
    if (!Number.isInteger(usageIndex) || usageIndex < 0 || usageIndex > 7)
    {
      throw new TypeError(`Element ${index} has invalid usageIndex`);
    }

    const type = legacy ? `FLOAT32_${Number(value[2])}` : value.type;
    const typeInfo = Tr2RuntimeInstanceData.#normalizeType(type);
    return {
      usage,
      usageCode: Tr2RuntimeInstanceData.UsageCode[usage],
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

  static #particleUsageToVertexUsage(value)
  {
    const usages = ["TANGENT", "POSITION", "NORMAL", "BITANGENT", "TEXCOORD"];
    const index = Number(value);
    if (!Number.isInteger(index) || index < 0 || index >= usages.length)
    {
      throw new TypeError("Invalid legacy particle element usage");
    }
    return usages[index];
  }

  static #normalizeUsage(value)
  {
    if (typeof value === "number")
    {
      const entry = Object.entries(Tr2RuntimeInstanceData.UsageCode).find(([, code]) => code === value);
      if (entry) return entry[0];
    }
    const usage = String(value ?? "").toUpperCase();
    if (Object.hasOwn(Tr2RuntimeInstanceData.UsageCode, usage))
    {
      return usage;
    }
    throw new TypeError(`Invalid vertex usage ${String(value)}`);
  }

  static #normalizeType(value)
  {
    let dataType;
    let name;
    if (typeof value === "number")
    {
      dataType = value;
      name = Object.entries(Tr2RuntimeInstanceData.DataType).find(([, code]) => code === dataType)?.[0];
    }
    else
    {
      name = String(value ?? "").toUpperCase();
      dataType = Tr2RuntimeInstanceData.DataType[name];
    }
    if (!name || dataType === undefined)
    {
      throw new TypeError(`Unsupported vertex data type ${String(value)}`);
    }

    const typeCode = dataType & 7;
    const componentCount = ((dataType & 96) >> 5) + 1;
    const unsigned = (dataType & 8) !== 0;
    const baseTypes = [unsigned ? "UINT8" : "INT8", unsigned ? "UINT16" : "INT16", unsigned ? "UINT32" : "INT32", "FLOAT16", "FLOAT32"];
    const componentSizes = [1, 2, 4, 2, 4];
    if (!baseTypes[typeCode])
    {
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

  static #normalizeElementValue(element, value, label)
  {
    if (
      !Array.isArray(value) &&
      element.componentCount === 4 &&
      (element.baseType === "INT8" || element.baseType === "UINT8") &&
      Number.isFinite(Number(value))
    )
    {
      return Number(value) | 0;
    }

    if (element.componentCount === 1 && !Array.isArray(value))
    {
      if (!Number.isFinite(Number(value))) throw new TypeError(`${label} must be numeric`);
      return Number(value);
    }
    if (!Array.isArray(value) && !ArrayBuffer.isView(value))
    {
      throw new TypeError(`${label} must contain ${element.componentCount} components`);
    }
    if (value.length !== element.componentCount)
    {
      throw new TypeError(`${label} must contain ${element.componentCount} components`);
    }
    const result = Array.from(value, Number);
    if (result.some(component => !Number.isFinite(component)))
    {
      throw new TypeError(`${label} components must be numeric`);
    }
    return result;
  }

  static #writeComponent(view, offset, baseType, value)
  {
    switch (baseType)
    {
      case "INT8": view.setInt8(offset, value); break;
      case "UINT8": view.setUint8(offset, value); break;
      case "INT16": view.setInt16(offset, value, true); break;
      case "UINT16": view.setUint16(offset, value, true); break;
      case "INT32": view.setInt32(offset, value, true); break;
      case "UINT32": view.setUint32(offset, value, true); break;
      case "FLOAT32": view.setFloat32(offset, value, true); break;
      default: throw new TypeError(`Packing ${baseType} is not supported`);
    }
  }

  static #cloneValue(value)
  {
    return Array.isArray(value) ? value.slice() : value;
  }

  static UsageCode = Object.freeze({
    POSITION: 0,
    COLOR: 1,
    NORMAL: 2,
    TANGENT: 3,
    BITANGENT: 4,
    TEXCOORD: 5,
    BLENDINDICES: 6,
    BLENDWEIGHTS: 7
  });

  static DataType = Object.freeze({
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
}
