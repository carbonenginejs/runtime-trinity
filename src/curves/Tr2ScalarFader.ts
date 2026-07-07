// Source: E:\carbonengine\trinity\trinity\Curves\Fader\Tr2ScalarFader.h
// Source: E:\carbonengine\trinity\trinity\Curves\Fader\Tr2ScalarFader.cpp
import { CjsSchema } from "@carbonenginejs/core-types/schema";

const TRI_PI = Math.PI;

export interface EveUpdateContextLike {
  GetDeltaT?: () => number;
  deltaT?: number;
}

export class Tr2ScalarFader {
  value = 0;
  fading = 0;
  fadeTime = -1;
  kickInLength = 3;

  Update(updateContext: EveUpdateContextLike): void {
    const deltaT = getDeltaT(updateContext);

    if (this.fading !== 0) {
      this.value += this.fading * deltaT;
      if (this.value < 0) {
        this.value = 0;
        this.fading = 0;
      } else if (this.value > 1) {
        this.value = 1;
        this.fading = 0;
      }
    }

    if (this.fadeTime >= 0) {
      this.fadeTime += deltaT;
      if (this.fadeTime > this.kickInLength) {
        this.fadeTime = -1;
      }
    }
  }

  StartFade(isFadeIn: boolean, fadeLength: number): void {
    this.kickInLength = fadeLength;
    this.fading = isFadeIn ? 1 / this.kickInLength : -1 / this.kickInLength;
    if (isFadeIn) {
      this.fadeTime = 0;
    }
  }

  IsZero(): boolean {
    return this.value === 0 && this.fading === 0;
  }

  GetFaderValue(): number {
    return this.value;
  }

  IsKickInZero(): boolean {
    return this.fadeTime <= 0;
  }

  GetKickInValue(): number {
    if (this.fadeTime < 0) {
      return 0;
    }

    const x = clamp(this.fadeTime / this.kickInLength, 0, 1);
    return Math.pow(Math.sin(TRI_PI * Math.pow(x, 0.66)), 3);
  }
}

function getDeltaT(updateContext: EveUpdateContextLike): number {
  if (typeof updateContext.GetDeltaT === "function") {
    return updateContext.GetDeltaT();
  }
  return updateContext.deltaT ?? 0;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

CjsSchema.define(Tr2ScalarFader, { className: "Tr2ScalarFader" });
CjsSchema.defineField(Tr2ScalarFader, "value", "type", { kind: "float32" });
CjsSchema.defineField(Tr2ScalarFader, "fading", "type", { kind: "float32" });
CjsSchema.defineField(Tr2ScalarFader, "fadeTime", "type", {
  kind: "float32",
});
