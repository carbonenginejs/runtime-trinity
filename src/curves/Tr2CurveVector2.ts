// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector2.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveVector2.cpp
import { vec2 } from "@carbonenginejs/core-math/vec2";
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import type { ITriCurveLength, Vec2 } from "./contracts.ts";
import { Tr2CurveInterpolation, Tr2CurveTangentType } from "./enums.ts";
import type {
  Tr2CurveExtrapolationValue,
  Tr2CurveInterpolationValue,
  Tr2CurveTangentTypeValue,
} from "./enums.ts";
import { Tr2CurveScalar } from "./Tr2CurveScalar.ts";

@type.define({ className: "Tr2CurveVector2", family: "curves" })
export class Tr2CurveVector2 extends CjsModel implements ITriCurveLength {
  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  x: Tr2CurveScalar = new Tr2CurveScalar();

  @io.persist
  @type.objectRef("Tr2CurveScalar")
  y: Tr2CurveScalar = new Tr2CurveScalar();

  @io.read
  @type.vec2
  currentValue: Vec2 = vec2.create();

  /**
   * Updates the cached vector value by updating each scalar component curve.
   */
  @carbon.method
  @impl.implemented
  UpdateValue(time: number): void {
    this.currentValue[0] = this.x.Update(time);
    this.currentValue[1] = this.y.Update(time);
  }

  /**
   * Gets the longest scalar component curve length.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    return Math.max(this.x.Length(), this.y.Length());
  }

  /**
   * Gets the vector value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValue(time: number, out: Vec2): Vec2 {
    return this.GetValueAt(time, out);
  }

  /**
   * Adds one vector key by adding matching scalar keys to each component curve.
   */
  @carbon.method
  @impl.adapted
  AddKey(
    time: number,
    value: Vec2,
    interpolation: Tr2CurveInterpolationValue = Tr2CurveInterpolation.HERMITE,
    leftTangent?: Vec2,
    rightTangent?: Vec2,
    tangentType: Tr2CurveTangentTypeValue = Tr2CurveTangentType.AUTO_CLAMP,
  ): void {
    const useRightTangent = !!leftTangent && !!rightTangent;
    this.x.AddKey(
      time,
      value[0],
      interpolation,
      leftTangent?.[0] ?? 0,
      useRightTangent ? rightTangent[0] : 0,
      tangentType,
    );
    this.y.AddKey(
      time,
      value[1],
      interpolation,
      leftTangent?.[1] ?? 0,
      useRightTangent ? rightTangent[1] : 0,
      tangentType,
    );
  }

  /**
   * Sets extrapolation on all scalar component curves.
   */
  @carbon.method
  @impl.implemented
  SetExtrapolation(extrapolation: Tr2CurveExtrapolationValue): void {
    this.x.SetExtrapolation(extrapolation);
    this.y.SetExtrapolation(extrapolation);
  }

  /**
   * Gets the vector value at `time` into `out`.
   */
  @carbon.method
  @impl.adapted
  GetValueAt(time: number, out: Vec2): Vec2 {
    out[0] = this.x.GetValue(time);
    out[1] = this.y.GetValue(time);
    return out;
  }
}
