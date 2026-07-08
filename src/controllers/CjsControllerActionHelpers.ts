// JS-only helpers for Carbon controller actions.
import type {
  CjsControllerExpressionContext,
  CjsControllerExpressionFunction,
  CjsControllerExpressionProgram,
} from "./CjsControllerExpressionProgram.ts";
import { CjsControllerExpressionProgram as ExpressionProgram } from "./CjsControllerExpressionProgram.ts";
import type {
  ITr2ActionController,
  Tr2ExpressionTermInfoLike,
} from "./ITr2ControllerAction.ts";

export interface CjsActionControllerRuntime extends ITr2ActionController {
  CjsGetCurrentFrameTime?(): number;
  GetTime?(): number;
  GetVariableValue?(name: string, fallback?: number): number | undefined;
  SetVariableValue?(name: string, value: number): boolean;
  GetExpressionContext?(
    owner?: object | null,
    stateMachine?: object | null,
    extra?: Record<string, unknown>,
  ): Record<string, unknown>;
}

export interface CjsExpressionState {
  program: CjsControllerExpressionProgram | null;
  source: string;
}

export interface CjsActionRuntimeState extends CjsExpressionState {
  controller: ITr2ActionController | null;
  startTime: number;
  lastTime: number;
}

export function CreateActionRuntimeState(): CjsActionRuntimeState {
  return {
    controller: null,
    program: null,
    source: "",
    startTime: 0,
    lastTime: 0,
  };
}

export function CompileControllerExpression(
  state: CjsExpressionState,
  expression: string,
  emptyValue = 0,
  functions?: Record<string, CjsControllerExpressionFunction>,
): CjsControllerExpressionProgram {
  if (!state.program || state.source !== expression) {
    state.program = ExpressionProgram.Compile(expression, {
      emptyValue,
      functions,
    });
    state.source = expression;
  }
  return state.program;
}

export function GetControllerOwner(
  controller: ITr2ActionController | null | undefined,
  owner?: object | null,
): object | null {
  return owner ?? controller?.GetOwner?.() ?? null;
}

export function CjsRequireActionController(
  controller: ITr2ActionController | null | undefined,
  methodName: string,
): ITr2ActionController {
  if (!controller) {
    throw new TypeError(
      `${methodName} expects a Tr2Controller as a parameter.`,
    );
  }
  return controller;
}

export function GetControllerTime(
  controller: ITr2ActionController | null | undefined,
  fallback = 0,
): number {
  const runtime = controller as CjsActionControllerRuntime | null | undefined;
  if (runtime?.CjsGetCurrentFrameTime) {
    return ToNumber(runtime.CjsGetCurrentFrameTime(), fallback);
  }
  return ToNumber(runtime?.GetTime?.(), fallback);
}

export function MakeActionExpressionContext(
  controller: ITr2ActionController | null | undefined,
  owner: object | null,
  state: CjsActionRuntimeState,
  extra: Record<string, unknown> = {},
): CjsControllerExpressionContext {
  const stateTime = state.lastTime - state.startTime;
  const runtime = controller as CjsActionControllerRuntime | null | undefined;
  if (runtime?.GetExpressionContext) {
    return runtime.GetExpressionContext(owner, null, {
      ...extra,
      stateTime,
    }) as CjsControllerExpressionContext;
  }

  return {
    ...extra,
    controller: runtime ?? undefined,
    owner: owner as Record<string, unknown> | null,
    stateTime,
    time: state.lastTime,
  };
}

export function GetCurveValue(curve: unknown, time: number): number {
  if (HasFunction(curve, "GetValueAt")) {
    return ToNumber(curve.GetValueAt(time));
  }
  if (HasFunction(curve, "GetValue")) {
    return ToNumber(curve.GetValue(time));
  }
  if (HasFunction(curve, "Update")) {
    return ToNumber(curve.Update(time));
  }
  if (HasProperty(curve, "currentValue")) {
    return ToNumber(curve.currentValue);
  }
  return ToNumber(curve);
}

export function CjsAddControllerExpressionTermInfo(
  out: Tr2ExpressionTermInfoLike[],
  options: { curve?: boolean } = {},
): void {
  for (const term of CONTROLLER_EXPRESSION_TERMS) {
    PushExpressionTerm(out, term);
  }
  if (options.curve) {
    PushExpressionTerm(out, {
      group: "Controller",
      name: "Curve",
      description: "action curve value at time x",
      kind: "function",
    });
  }
}

const CONTROLLER_EXPRESSION_TERMS: Tr2ExpressionTermInfoLike[] = [
  {
    group: "Controller",
    name: "StateTime",
    description: "time in seconds the current state is running",
    kind: "function",
  },
  {
    group: "Controller",
    name: "AnimationTime",
    description: "geometry animation duration for the given name",
    kind: "function",
  },
  {
    group: "Controller",
    name: "CurveSetTime",
    description: "duration in seconds of the named curve set",
    kind: "function",
  },
  {
    group: "Controller",
    name: "GetExternalControllerVariable",
    description: "external controller variable lookup",
    kind: "function",
  },
  {
    group: "Controller",
    name: "IsAnimationPlaying",
    description: "returns 1 if the named animation layer is playing",
    kind: "function",
  },
  {
    group: "Controller",
    name: "ShipSpeed",
    description: "owning ship speed",
    kind: "function",
  },
  {
    group: "Controller",
    name: "ShipMaxSpeed",
    description: "owning ship maximum speed",
    kind: "function",
  },
  {
    group: "Controller",
    name: "ShipBoosterIntensity",
    description: "owning ship booster intensity",
    kind: "function",
  },
  {
    group: "Controller",
    name: "Random",
    description: "random integer from min to max - 1",
    kind: "function",
  },
  {
    group: "Controller",
    name: "KillCount",
    description: "owning ship kill count",
    kind: "function",
  },
  {
    group: "Controller",
    name: "BoundingSphereRadius",
    description: "owning object's bounding sphere radius",
    kind: "function",
  },
  {
    group: "GraphicSettings",
    name: "ShaderQuality",
    description: "user shader quality setting",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "IsWeekend",
    description: "returns 1 on Saturday or Sunday",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerYear",
    description: "current server year",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerMonth",
    description: "current server month",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerDay",
    description: "current server day of month",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerDayOfWeek",
    description: "current server day of week",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerHour",
    description: "current server hour",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerMinute",
    description: "current server minute",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerSecond",
    description: "current server second",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerTimePhase",
    description: "seconds phase in a server-time period",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerTimeGreaterThan",
    description: "server-time comparison",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerTimeLessThanOrEqual",
    description: "server-time comparison",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "ServerTimeEqual",
    description: "server-time equality comparison",
    kind: "function",
  },
  {
    group: "DateTime",
    name: "DaysSinceServerTime",
    description: "days since the supplied server date",
    kind: "function",
  },
];

export function CallTarget(
  target: unknown,
  methodName: string,
  ...args: unknown[]
): unknown {
  if (HasFunction(target, methodName)) {
    return target[methodName](...args);
  }
  return undefined;
}

export function ToNumber(value: unknown, fallback = 0): number {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

export function HasProperty<K extends string>(
  value: unknown,
  key: K,
): value is Record<K, unknown> {
  return !!value && typeof value === "object" && key in value;
}

export function HasFunction<K extends string>(
  value: unknown,
  key: K,
): value is Record<K, (...args: unknown[]) => unknown> {
  return HasProperty(value, key) && typeof value[key] === "function";
}

function PushExpressionTerm(
  out: Tr2ExpressionTermInfoLike[],
  term: Tr2ExpressionTermInfoLike,
): void {
  if (!out.some((item) => item.group === term.group && item.name === term.name)) {
    out.push(term);
  }
}
