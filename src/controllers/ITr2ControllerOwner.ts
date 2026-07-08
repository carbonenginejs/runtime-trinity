// Source: E:\carbonengine\trinity\trinity\Controllers\ITr2ControllerOwner.h
import type { ITr2Controller } from "./ITr2ControllerAction.ts";

export interface ITr2ControllerOwner {
  SetControllerVariable?(name: string, value: number): boolean;
  GetControllerValueByName?(
    name: string,
    out?: { value: number },
  ): number | boolean | undefined;
  HandleControllerEvent?(name: string): void;
  StartControllers?(): void;
  GetBindingRoots?():
    | Record<string, unknown>
    | readonly [string, object | null][];
  AddController?(controller: ITr2Controller): void;
}
