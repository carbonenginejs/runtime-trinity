// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocatorSets.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveLocatorSets.cpp

import type { Vec3 } from "@carbonenginejs/core-math/types";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CloneLocator,
  CopyLocatorValues,
  type Locator,
  type LocatorLike,
} from "./Locator.ts";

@type.define({ className: "EveLocatorSets", family: "eve" })
export class EveLocatorSets extends CjsModel
{
  @io.persist
  @type.list("Locator")
  locators: Locator[] = [];

  @io.persist
  @type.string
  name = "";

  @carbon.method
  @impl.implemented
  Translate(offset: Vec3): void
  {
    if (lengthSq(offset) === 0) {
      return;
    }

    for (const locator of this.locators) {
      vec3.add(locator.position, locator.position, offset);
    }
  }

  @carbon.method
  @impl.adapted
  Append(locators: readonly LocatorLike[]): void
  {
    for (const locator of locators) {
      this.locators.push(CloneLocator(locator));
    }
  }

  @carbon.method
  @impl.implemented
  HasName(name: string): boolean
  {
    return this.name === String(name);
  }

  @carbon.method
  @impl.implemented
  GetLocators(): Locator[]
  {
    return this.locators;
  }

  @carbon.method
  @impl.implemented
  GetName(): string
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  SetName(name: string): void
  {
    this.name = String(name);
  }

  @carbon.method
  @impl.adapted
  Set(name: string, locators: readonly LocatorLike[]): void
  {
    this.SetName(name);
    this.locators = locators.map((locator) => CloneLocator(locator));
  }

  @carbon.method
  @impl.adapted
  SetLocator(index: number, value: LocatorLike): void
  {
    const existing = this.locators[index];
    if (existing) {
      CopyLocatorValues(existing, value);
    }
  }
}

function lengthSq(value: Vec3): number
{
  return value[0] * value[0] + value[1] * value[1] + value[2] * value[2];
}
