// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveThrottleable.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveThrottleable.cpp
import { CjsModel } from "@carbonenginejs/runtime-utils/model";
import { carbon, impl, io, type } from "@carbonenginejs/runtime-utils/schema";
import { CjsEveThrottleableState } from "./CjsEveThrottleableState.js";


@type.define({
  className: "EveThrottleable",
  family: "eve/utils"
})
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
  ShouldSkipUpdate(normalizedUpdateFrequency = 0.5, currentTime = 0)
  {
    return this.#throttle.ShouldSkipUpdate(this, normalizedUpdateFrequency, currentTime);
  }
}
