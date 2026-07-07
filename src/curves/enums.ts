// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.h

export interface Tr2CurveInterpolationEnum {
  readonly CONSTANT: 0;
  readonly LINEAR: 1;
  readonly HERMITE: 2;
}

export type Tr2CurveInterpolationValue =
  Tr2CurveInterpolationEnum[keyof Tr2CurveInterpolationEnum];

export const Tr2CurveInterpolation: Tr2CurveInterpolationEnum = Object.freeze({
  CONSTANT: 0,
  LINEAR: 1,
  HERMITE: 2,
});

export interface Tr2CurveTangentTypeEnum {
  readonly AUTO_CLAMP: 0;
  readonly AUTO: 1;
  readonly FREE_JOINED: 2;
  readonly FREE_SPLIT: 3;
}

export type Tr2CurveTangentTypeValue =
  Tr2CurveTangentTypeEnum[keyof Tr2CurveTangentTypeEnum];

export const Tr2CurveTangentType: Tr2CurveTangentTypeEnum = Object.freeze({
  AUTO_CLAMP: 0,
  AUTO: 1,
  FREE_JOINED: 2,
  FREE_SPLIT: 3,
});

export interface Tr2CurveExtrapolationEnum {
  readonly CLAMP: 0;
  readonly CYCLE: 1;
  readonly MIRROR: 2;
  readonly LINEAR: 3;
}

export type Tr2CurveExtrapolationValue =
  Tr2CurveExtrapolationEnum[keyof Tr2CurveExtrapolationEnum];

export const Tr2CurveExtrapolation: Tr2CurveExtrapolationEnum = Object.freeze({
  CLAMP: 0,
  CYCLE: 1,
  MIRROR: 2,
  LINEAR: 3,
});
