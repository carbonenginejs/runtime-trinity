// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Utils\EveThrottleable.cpp

export interface CjsEveThrottleableHost
{
  updateThrottle: boolean;
  minUpdateFrequency: number;
  maxUpdateFrequency: number;
  currentUpdateFrequency: number;
}

export class CjsEveThrottleableState
{
  #nextUpdateTime = 0;

  ShouldSkipUpdate(
    host: CjsEveThrottleableHost,
    normalizedUpdateFrequency = 0.5,
    currentTime: number,
  ): boolean
  {
    if (!host.updateThrottle) {
      return false;
    }

    if (currentTime < this.#nextUpdateTime) {
      return true;
    }

    const updateFrequency = normalizedUpdateFrequency *
        (host.maxUpdateFrequency - host.minUpdateFrequency) +
      host.minUpdateFrequency;
    host.currentUpdateFrequency = Math.max(updateFrequency, 0.1);
    this.#nextUpdateTime = currentTime + 1 / host.currentUpdateFrequency;
    return false;
  }
}
