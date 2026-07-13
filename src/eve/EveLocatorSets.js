// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocatorSets.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocatorSets.cpp
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { Locator } from "./Locator.js";


@type.define({
  className: "EveLocatorSets",
  family: "eve/utils"
})
export class EveLocatorSets extends CjsModel
{
  @io.persist
  @type.list("Locator")
  locators = [];

  @io.persist
  @type.string
  name = "";

  @carbon.method
  @impl.implemented
  Translate(offset)
  {
    if (EveLocatorSets.#lengthSq(offset) === 0)
    {
      return;
    }
    for (const locator of this.locators)
    {
      vec3.add(locator.position, locator.position, offset);
    }
  }
  @carbon.method
  @impl.adapted
  Append(locators)
  {
    for (const locator of locators)
    {
      this.locators.push(Locator.Clone(locator));
    }
  }
  @carbon.method
  @impl.implemented
  HasName(name)
  {
    return this.name === String(name);
  }
  @carbon.method
  @impl.implemented
  GetLocators()
  {
    return this.locators;
  }
  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }
  @carbon.method
  @impl.implemented
  SetName(name)
  {
    this.name = String(name);
  }
  @carbon.method
  @impl.adapted
  Set(name, locators)
  {
    this.SetName(name);
    this.locators = locators.map(locator => Locator.Clone(locator));
  }
  @carbon.method
  @impl.adapted
  SetLocator(index, value)
  {
    const existing = this.locators[index];
    if (existing)
    {
      Locator.CopyValues(existing, value);
    }
  }

  static #lengthSq(value)
  {
    return value[0] * value[0] + value[1] * value[1] + value[2] * value[2];
  }
}
