// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveScalar.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2CurveCombiner.h

export type Vec3 = [number, number, number];
export type Quat = [number, number, number, number];

export interface ITriCurveLength {
  Length(): number;
}

export interface ITriScalarFunction {
  Update(time: number): number;
  GetValueAt(time: number): number;
}

export interface ITriVectorFunction {
  Update(out: Vec3, time: number): Vec3;
  GetValueAt(out: Vec3, time: number): Vec3;
  GetValueDotAt(out: Vec3, time: number): Vec3;
  GetValueDoubleDotAt(out: Vec3, time: number): Vec3;
}
