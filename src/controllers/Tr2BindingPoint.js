// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2BindingPoint.h
// Source: E:\carbonengine\trinity\trinity\Controllers\Tr2BindingPoint.cpp
import { copyArrayLike, fillArrayLike } from "@carbonenginejs/core-math/utils";
import { isArrayLike } from "@carbonenginejs/core-math/is";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { CjsSchema, carbon, impl, io, type } from "@carbonenginejs/core-types/schema";


const SWIZZLE_OFFSETS = {
  x: 0,
  r: 0,
  y: 1,
  g: 1,
  z: 2,
  b: 2,
  w: 3,
  a: 3
};

@type.define({
  className: "Tr2BindingPoint",
  family: "controllers"
})
export class Tr2BindingPoint extends CjsModel
{
  @io.notify
  @io.persist
  @type.string
  path = "";

  @io.notify
  @io.persist
  @type.objectRef("IRoot")
  object = null;

  @io.notify
  @io.persist
  @type.string
  attribute = "";

  @type.unknown
  resolvedObject = null;

  @type.unknown
  notifyPtr = null;

  @type.objectRef("Be::VarEntry")
  entry = null;

  @type.objectRef("Be::Var")
  destination = null;

  @type.int32
  entryOffset = -1;

  @type.int32
  arraySize = 0;

  #target = null;

  #attributeName = "";

  /**
   * Resolves and links this binding against named root objects.
   */
  @carbon.method
  @impl.adapted
  Link(roots = null, owner = null)
  {
    this.Unlink();
    const target = this.path ? Tr2BindingPoint.ResolvePath(this.path, Tr2BindingPoint.#getLinkRoots(roots, owner)) : this.object ?? owner;
    return this.SetDestination(target, this.attribute);
  }

  /**
   * Clears the resolved binding target.
   */
  @carbon.method
  @impl.implemented
  Unlink()
  {
    this.resolvedObject = null;
    this.notifyPtr = null;
    this.entry = null;
    this.destination = null;
    this.entryOffset = -1;
    this.arraySize = 0;
    this.#target = null;
    this.#attributeName = "";
  }

  /**
   * Checks whether this binding has resolved to a writable target.
   */
  @carbon.method
  @impl.implemented
  IsValid()
  {
    return !!this.#target && !!this.#attributeName;
  }

  /**
   * Writes a value into the bound destination.
   */
  @carbon.method
  @impl.adapted
  SetValue(value, roots = null, owner = null)
  {
    if (!this.IsValid())
    {
      this.Link(roots, owner);
    }
    if (!this.#target || !this.#attributeName)
    {
      return false;
    }
    const current = this.#target[this.#attributeName];
    const always = CjsSchema.getField(this.#target.constructor, this.#attributeName)?.io?.always === true;
    let changed = false;
    if (this.entryOffset === -1)
    {
      if (ArrayBuffer.isView(current) && isArrayLike(value))
      {
        const previous = Array.from(current);
        current.set(value);
        changed = !Tr2BindingPoint.#areArrayValuesEqual(previous, current);
      }
      else if (Array.isArray(current) && isArrayLike(value))
      {
        const previous = current.slice();
        copyArrayLike(current, value);
        changed = !Tr2BindingPoint.#areArrayValuesEqual(previous, current);
      }
      else if (isArrayLike(current) && typeof current !== "string" && typeof value === "number")
      {
        const previous = Array.from(current);
        fillArrayLike(current, value);
        changed = !Tr2BindingPoint.#areArrayValuesEqual(previous, current);
      }
      else
      {
        if (always || !Object.is(current, value))
        {
          this.#target[this.#attributeName] = value;
          changed = true;
        }
      }
    }
    else if (isArrayLike(current))
    {
      const next = Number(value);
      if (always || !Object.is(current[this.entryOffset], next))
      {
        current[this.entryOffset] = next;
        changed = true;
      }
    }
    else
    {
      return false;
    }
    if (always)
    {
      changed = true;
    }
    if (changed)
    {
      Tr2BindingPoint.#notifyValueChanged(this.#target, this.#attributeName, value, this);
    }
    return changed;
  }

  /**
   * Reads a numeric value from the bound destination.
   */
  @carbon.method
  @impl.adapted
  GetValue(roots = null, owner = null, fallback = 0)
  {
    if (!this.IsValid())
    {
      this.Link(roots, owner);
    }
    if (!this.#target || !this.#attributeName)
    {
      return fallback;
    }
    const value = this.#target[this.#attributeName];
    if (this.entryOffset !== -1)
    {
      return isArrayLike(value) && value.length > this.entryOffset ? Number(value[this.entryOffset]) : fallback;
    }
    const number = isArrayLike(value) && typeof value !== "string" ? Number(value[0]) : Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  /**
   * Gets the resolved object, or the authored direct object.
   */
  @carbon.method
  @impl.implemented
  GetBoundObject(roots = null, owner = null)
  {
    if (!this.IsValid())
    {
      this.Link(roots, owner);
    }
    return this.resolvedObject ?? this.object;
  }

  /**
   * Sets the resolved destination object and attribute swizzle.
   */
  @carbon.method
  @impl.adapted
  SetDestination(target, attribute)
  {
    this.Unlink();
    const parsed = Tr2BindingPoint.#parseAttribute(attribute);
    if (!Tr2BindingPoint.#isObjectRecord(target) || !parsed || !parsed.name)
    {
      return false;
    }
    if (!(parsed.name in target))
    {
      return false;
    }
    const current = target[parsed.name];
    if (parsed.offset !== -1 && (!isArrayLike(current) || parsed.offset >= current.length))
    {
      return false;
    }
    this.resolvedObject = target;
    this.destination = current;
    this.entry = parsed.name;
    this.entryOffset = parsed.offset;
    this.arraySize = isArrayLike(current) ? current.length : 0;
    this.#target = target;
    this.#attributeName = parsed.name;
    return true;
  }

  static ResolvePath(path, roots)
  {
    if (!path)
    {
      return null;
    }
    const root = Tr2BindingPoint.#readIdentifier(path, 0);
    if (!root)
    {
      return null;
    }
    let object = null;
    for (const [name, value] of roots)
    {
      if (name === root.value)
      {
        object = value;
        break;
      }
    }
    let index = root.next;
    while (object && index < path.length)
    {
      if (path[index] === ".")
      {
        const property = Tr2BindingPoint.#readIdentifier(path, index + 1);
        if (!property || !Tr2BindingPoint.#isObjectRecord(object))
        {
          return null;
        }
        object = object[property.value];
        index = property.next;
        continue;
      }
      const selector = Tr2BindingPoint.#readIndex(path, index);
      if (!selector)
      {
        return null;
      }
      object = Tr2BindingPoint.#getListElement(object, selector.value);
      index = selector.next;
    }
    return Tr2BindingPoint.#isObjectRecord(object) ? object : null;
  }

  static #getLinkRoots(roots, owner)
  {
    if (Array.isArray(roots))
    {
      return roots.slice();
    }
    if (Tr2BindingPoint.#isPlainRootMap(roots))
    {
      return Object.entries(roots).map(([name, value]) => [name, value && typeof value === "object" ? value : null]);
    }
    const controller = roots;
    const out = [];
    const controllerOwner = owner ?? controller?.GetOwner?.() ?? null;
    if (controllerOwner)
    {
      out.push(["Owner", controllerOwner]);
    }
    if (controller)
    {
      out.push(...(controller.GetBindingPathRoots?.() ?? []));
    }
    return out;
  }

  static #parseAttribute(attribute)
  {
    const dot = attribute.indexOf(".");
    if (dot === -1)
    {
      return { name: attribute, offset: -1 };
    }
    const swizzle = attribute.slice(dot + 1);
    if (swizzle.length !== 1 || SWIZZLE_OFFSETS[swizzle] === undefined)
    {
      return null;
    }
    return { name: attribute.slice(0, dot), offset: SWIZZLE_OFFSETS[swizzle] };
  }

  static #readIdentifier(path, index)
  {
    const match = /^[A-Za-z_][A-Za-z0-9_]*/.exec(path.slice(index));
    return match ? { value: match[0], next: index + match[0].length } : null;
  }

  static #readIndex(path, index)
  {
    if (path[index] !== "[")
    {
      return null;
    }
    const end = path.indexOf("]", index + 1);
    if (end === -1)
    {
      return null;
    }
    const body = path.slice(index + 1, end);
    if (/^-?\d+$/.test(body))
    {
      return { value: Number(body), next: end + 1 };
    }
    if (body.length >= 2 && body[0] === '"' && body[body.length - 1] === '"')
    {
      return { value: body.slice(1, -1), next: end + 1 };
    }
    return null;
  }

  static #getListElement(object, selector)
  {
    if (!object)
    {
      return null;
    }
    const list = Array.isArray(object) ? object : Tr2BindingPoint.#isObjectRecord(object) ? Tr2BindingPoint.#findListProperty(object) : null;
    if (!list)
    {
      return null;
    }
    if (typeof selector === "number")
    {
      const index = selector < 0 ? list.length + selector : selector;
      return index >= 0 && index < list.length ? list[index] : null;
    }
    return list.find(item => Tr2BindingPoint.#isObjectRecord(item) && item.name === selector) ?? null;
  }

  static #findListProperty(object)
  {
    for (const name of ["items", "children", "curveSets", "controllers", "actions"])
    {
      if (Array.isArray(object[name]))
      {
        return object[name];
      }
    }
    return null;
  }

  static #notifyValueChanged(target, attribute, value, source)
  {
    if (Tr2BindingPoint.#hasFunction(target, "UpdateValues"))
    {
      target.UpdateValues({ property: attribute, source });
    }
    else if (Tr2BindingPoint.#hasFunction(target, "OnValueChanged"))
    {
      target.OnValueChanged(attribute, value, source);
    }
    else if (Tr2BindingPoint.#hasFunction(target, "OnModified"))
    {
      target.OnModified({ property: attribute, source });
    }
    else if (Tr2BindingPoint.#isObjectRecord(target._dirty))
    {
      target._dirty[attribute] = true;
    }
  }

  static #areArrayValuesEqual(a, b)
  {
    if (a.length !== b.length)
    {
      return false;
    }
    for (let i = 0; i < a.length; i++)
    {
      if (!Object.is(a[i], b[i]))
      {
        return false;
      }
    }
    return true;
  }

  static #isPlainRootMap(value)
  {
    return Tr2BindingPoint.#isObjectRecord(value) && !Tr2BindingPoint.#hasFunction(value, "GetOwner") && !Tr2BindingPoint.#hasFunction(value, "GetBindingPathRoots");
  }

  static #isObjectRecord(value)
  {
    return !!value && typeof value === "object";
  }

  static #hasFunction(value, key)
  {
    return Tr2BindingPoint.#isObjectRecord(value) && typeof value[key] === "function";
  }
}
