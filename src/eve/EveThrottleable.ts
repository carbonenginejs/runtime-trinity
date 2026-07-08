// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveThrottleable.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveThrottleable.cpp

import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import { CjsEveThrottleableState } from "./CjsEveThrottleable.ts";

@type.define({ className: "EveThrottleable", family: "eve" })
export class EveThrottleable extends CjsModel
{
  @io.read
  @type.float32
  currentUpdateFrequency = 10;

  @io.persist
  @type.boolean
  updateThrottle = true;

  @io.persist
  @type.uint32
  maxUpdateFrequency = 20;

  @io.persist
  @type.uint32
  minUpdateFrequency = 2;

  #throttle = new CjsEveThrottleableState();

  @carbon.method
  @impl.adapted
  ShouldSkipUpdate(
    normalizedUpdateFrequency = 0.5,
    currentTime = 0,
  ): boolean
  {
    return this.#throttle.ShouldSkipUpdate(
      this,
      normalizedUpdateFrequency,
      currentTime,
    );
  }
}
