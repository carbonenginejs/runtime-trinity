import type { ITr2ActionController } from "./ITr2ControllerAction.ts";

export type CjsActionPythonState =
  | ArrayBuffer
  | ArrayBufferView
  | number[]
  | string;

export interface CjsActionPythonInstance {
  OnLink?(owner: object | null, controller: ITr2ActionController): void;
  OnUnlink?(): void;
  OnStart?(owner: object | null, controller: ITr2ActionController): void;
  OnStop?(owner: object | null, controller: ITr2ActionController): void;
  OnUpdate?(
    owner: object | null,
    controller: ITr2ActionController,
    realDt: number,
    simDt: number,
  ): void;
  OnLoad?(state: Uint8Array): void;
  OnSave?(): CjsActionPythonState | null | undefined;
}

export type CjsActionPythonFactory = (
  moduleName: string,
  className: string,
  action: object,
) => CjsActionPythonInstance | null | undefined;

let actionPythonFactory: CjsActionPythonFactory | null = null;

export function CjsRegisterActionPythonFactory(
  factory: CjsActionPythonFactory | null,
): CjsActionPythonFactory | null {
  const previous = actionPythonFactory;
  actionPythonFactory = factory;
  return previous;
}

export function CjsClearActionPythonFactory(): void {
  actionPythonFactory = null;
}

export function CjsCreateActionPythonInstance(
  moduleName: string,
  className: string,
  action: object,
): CjsActionPythonInstance | null {
  if (!moduleName || !className || !actionPythonFactory) {
    return null;
  }

  return actionPythonFactory(moduleName, className, action) ?? null;
}

export function CjsActionPythonStateToBytes(
  value: CjsActionPythonState | null | undefined,
): Uint8Array | null {
  if (value == null) {
    return null;
  }

  if (typeof value === "string") {
    return new TextEncoder().encode(value);
  }

  if (Array.isArray(value)) {
    return Uint8Array.from(value);
  }

  if (value instanceof ArrayBuffer) {
    return new Uint8Array(value.slice(0));
  }

  if (ArrayBuffer.isView(value)) {
    const out = new Uint8Array(value.byteLength);
    out.set(new Uint8Array(value.buffer, value.byteOffset, value.byteLength));
    return out;
  }

  return null;
}
