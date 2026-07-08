import type { Mat4, Vec2, Vec3, Vec4 } from "@carbonenginejs/core-math/types";

export type CjsScalarDestination =
  | { value: number }
  | ((value: number) => void)
  | number[]
  | Float32Array;

export type CjsVectorDestination =
  | number[]
  | Float32Array
  | Vec2
  | Vec3
  | Vec4
  | Mat4;

export type CjsRerouteBinding =
  | ((destination: unknown) => void)
  | { RerouteDestination?(destination: unknown): void };

export interface CjsDestinationInfo
{
  dest: unknown;
  size: number;
}

export function IsScalarDestination(value: unknown): value is CjsScalarDestination
{
  return typeof value === "function" ||
    IsNumberHolder(value) ||
    IsWritableNumberArray(value, 1);
}

export function IsVectorDestination(
  value: unknown,
  length: number,
): value is CjsVectorDestination
{
  return IsWritableNumberArray(value, length);
}

export function ReadScalarDestination(
  destination: CjsScalarDestination,
  fallback: number,
): number
{
  if (typeof destination === "function") {
    return fallback;
  }
  if (IsNumberHolder(destination)) {
    return Number(destination.value);
  }
  return Number(destination[0]);
}

export function WriteScalarDestination(
  destination: CjsScalarDestination,
  value: number,
): void
{
  if (typeof destination === "function") {
    destination(value);
    return;
  }
  if (IsNumberHolder(destination)) {
    destination.value = value;
    return;
  }
  destination[0] = value;
}

export function ReadVectorDestination<T extends CjsVectorDestination>(
  destination: T,
  out: T,
  length: number,
): T
{
  for (let i = 0; i < length; i++) {
    out[i] = destination[i];
  }
  return out;
}

export function WriteVectorDestination(
  destination: CjsVectorDestination,
  value: CjsVectorDestination,
  length: number,
): void
{
  for (let i = 0; i < length; i++) {
    destination[i] = value[i];
  }
}

export function CopyNumberArray(
  out: CjsVectorDestination,
  value: CjsVectorDestination,
  length: number,
): CjsVectorDestination
{
  for (let i = 0; i < length; i++) {
    out[i] = value[i];
  }
  return out;
}

export function NotifyBindings(
  bindings: CjsRerouteBinding[],
  destination: unknown,
): void
{
  for (const binding of bindings) {
    if (typeof binding === "function") {
      binding(destination);
    } else {
      binding.RerouteDestination?.(destination);
    }
  }
}

export function RegisterBinding(
  bindings: CjsRerouteBinding[],
  binding: CjsRerouteBinding,
): void
{
  if (!bindings.includes(binding)) {
    bindings.push(binding);
  }
}

export function UnregisterBinding(
  bindings: CjsRerouteBinding[],
  binding: CjsRerouteBinding,
): void
{
  const index = bindings.indexOf(binding);
  if (index >= 0) {
    bindings.splice(index, 1);
  }
}

export function HasEffectConstant(effectRes: unknown, name: string): boolean
{
  return !!GetEffectConstant(effectRes, name);
}

export function GetEffectConstant(effectRes: unknown, name: string): unknown
{
  const reader = effectRes as
    | { GetConstant?(name: string): unknown; getConstant?(name: string): unknown }
    | null
    | undefined;
  return reader?.GetConstant?.(name) ?? reader?.getConstant?.(name) ?? null;
}

export function HasEffectResource(effectRes: unknown, name: string): boolean
{
  const reader = effectRes as
    | { GetResource?(name: string): unknown; getResource?(name: string): unknown }
    | null
    | undefined;
  return !!(reader?.GetResource?.(name) ?? reader?.getResource?.(name));
}

export function GetConstantIsSrgb(constant: unknown): boolean
{
  const data = constant as
    | { isSRGB?: unknown; isSrgb?: unknown; srgb?: unknown }
    | null
    | undefined;
  return !!(data?.isSRGB ?? data?.isSrgb ?? data?.srgb);
}

function IsNumberHolder(value: unknown): value is { value: number }
{
  return typeof value === "object" && value !== null &&
    "value" in value &&
    typeof (value as { value: unknown }).value === "number";
}

function IsWritableNumberArray(
  value: unknown,
  length: number,
): value is number[] | Float32Array
{
  return !!value &&
    typeof value === "object" &&
    "length" in value &&
    Number((value as { length: unknown }).length) >= length;
}
