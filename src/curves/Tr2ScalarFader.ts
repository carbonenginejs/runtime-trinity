// Source: E:\carbonengine\trinity\trinity\Curves\Fader\Tr2ScalarFader.h
// Source: E:\carbonengine\trinity\trinity\Curves\Fader\Tr2ScalarFader.cpp
import { num } from "@carbonenginejs/core-math/num";
import { CjsSchema } from "@carbonenginejs/core-types/schema";

const TRI_PI = Math.PI;

export interface EveUpdateContextLike
{
  GetDeltaT?: () => number;
  deltaT?: number;
}

@CjsSchema.type.define({ className: "Tr2ScalarFader" })
export class Tr2ScalarFader
{

  @CjsSchema.type.float32
  value = 0;

  @CjsSchema.type.float32
  fading = 0;

  @CjsSchema.type.float32
  fadeTime = -1;

  kickInLength = 3;

  /**
   * Advances fade state by the update context delta time.
   */
  Update(updateContext: EveUpdateContextLike): void
  {
    const deltaT = getDeltaT(updateContext);

    if (this.fading !== 0)
    {
      this.value += this.fading * deltaT;
      if (this.value < 0)
      {
        this.value = 0;
        this.fading = 0;
      }
      else if (this.value > 1)
      {
        this.value = 1;
        this.fading = 0;
      }
    }

    if (this.fadeTime >= 0)
    {
      this.fadeTime += deltaT;
      if (this.fadeTime > this.kickInLength)
      {
        this.fadeTime = -1;
      }
    }
  }

  /**
   * Starts a fade-in or fade-out over the supplied duration.
   */
  StartFade(isFadeIn: boolean, fadeLength: number): void
  {
    this.kickInLength = fadeLength;
    this.fading = isFadeIn ? 1 / this.kickInLength : -1 / this.kickInLength;
    if (isFadeIn)
    {
      this.fadeTime = 0;
    }
  }

  /**
   * Checks whether the fader is fully inactive and contributes no value.
   */
  IsZero(): boolean
  {
    return this.value === 0 && this.fading === 0;
  }

  /**
   * Gets the current linear fade value.
   */
  GetFaderValue(): number
  {
    return this.value;
  }

  /**
   * Checks whether the non-linear kick-in envelope has not started.
   */
  IsKickInZero(): boolean
  {
    return this.fadeTime <= 0;
  }

  /**
   * Gets Carbon's non-linear kick-in envelope value.
   */
  GetKickInValue(): number
  {
    if (this.fadeTime < 0)
    {
      return 0;
    }

    const x = num.clamp(this.fadeTime / this.kickInLength, 0, 1);
    return Math.pow(Math.sin(TRI_PI * Math.pow(x, 0.66)), 3);
  }

}

/**
 * Reads delta time from Carbon-style or plain JavaScript update contexts.
 */
function getDeltaT(updateContext: EveUpdateContextLike): number
{
  if (typeof updateContext.GetDeltaT === "function")
  {
    return updateContext.GetDeltaT();
  }
  return updateContext.deltaT ?? 0;
}
