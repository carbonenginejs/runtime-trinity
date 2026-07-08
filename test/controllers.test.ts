import {
  BELIST_INSERTED,
  BELIST_REMOVED,
  CjsClearActionPythonFactory,
  CjsClearControllerResourceHost,
  type CjsActionControllerRuntime,
  CjsRegisterControllerResourcePrefetcher,
  CjsRegisterControllerResourceResolver,
  CjsRegisterActionPythonFactory,
  CjsControllerExpressionProgram,
  EveChildUpdateParams,
  type ITr2ActionController,
  type ITr2ControllerAction,
  ITr2GenericEmitter,
  type ITr2StateMachine,
  type ITr2StateMachineState,
  type ITr2Updateable,
  TR2_DIRTY_ALL,
  Tr2ActionAnimateCurveSet,
  Tr2ActionAnimateValue,
  Tr2ActionBindRTPC,
  Tr2ActionCallback,
  Tr2ActionChildEffect,
  Tr2ActionOverlay,
  Tr2ActionPlayCurveSet,
  Tr2ActionPlayMeshAnimation,
  Tr2ActionPlaySound,
  Tr2ActionPython,
  Tr2ActionResetClipSphereCenter,
  Tr2ActionSetAttenuationScaling,
  Tr2ActionSetAudioEmitterPrefix,
  Tr2ActionSetAudioSwitch,
  Tr2ActionSetExternalControllerVariable,
  Tr2ActionSetShaderOption,
  Tr2ActionSetValue,
  Tr2ActionSpawnParticles,
  Tr2BindingPoint,
  Tr2Controller,
  Tr2ControllerEventHandler,
  Tr2ControllerExpression,
  Tr2ControllerFloatVariable,
  Tr2ControllerReference,
  Tr2StateMachine,
  Tr2StateMachineState,
  Tr2StateMachineTransition,
  Tr2SyncToAnimation,
  Tr2TimelineController,
  PlayAction,
  ResetBehavior,
  StopAction,
  Type,
} from "../src/index.ts";
import { CjsSchema } from "@carbonenginejs/core-types/schema";

function assert(
  condition: unknown,
  message = "assertion failed",
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function assertEquals<T>(actual: T, expected: T, message?: string): void {
  if (actual !== expected) {
    throw new Error(
      message || `expected ${String(expected)}, got ${String(actual)}`,
    );
  }
}

function assertAlmostEquals(
  actual: number,
  expected: number,
  epsilon = 1e-6,
): void {
  if (Math.abs(actual - expected) > epsilon) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

function assertThrows(fn: () => unknown, messageIncludes: string): void {
  try {
    fn();
  } catch (error) {
    if (error instanceof Error && error.message.includes(messageIncludes)) {
      return;
    }
    throw error;
  }
  throw new Error("expected function to throw");
}

type ControllerConstructor = (new () => object) & { readonly name: string };
type ImplStatus = "adapted" | "implemented" | "noop";

Deno.test("controller methods expose source-backed Carbon metadata", () => {
  new Tr2Controller();
  new Tr2ControllerEventHandler();
  new Tr2ControllerFloatVariable();
  new Tr2StateMachine();
  new Tr2StateMachineState();
  new Tr2StateMachineTransition();

  const sourceBackedMethods: Array<
    [ControllerConstructor, string, ImplStatus]
  > = [
    [Tr2Controller, "OnListModified", "implemented"],
    [Tr2Controller, "Link", "implemented"],
    [Tr2Controller, "Unlink", "implemented"],
    [Tr2Controller, "ReLink", "implemented"],
    [Tr2Controller, "IsLinked", "implemented"],
    [Tr2Controller, "Start", "implemented"],
    [Tr2Controller, "Stop", "implemented"],
    [Tr2Controller, "Update", "adapted"],
    [Tr2Controller, "SetVariable", "implemented"],
    [Tr2Controller, "HandleEvent", "implemented"],
    [Tr2Controller, "GetOwner", "implemented"],
    [Tr2Controller, "GetVariableByName", "implemented"],
    [Tr2Controller, "GetFloatVariableByName", "implemented"],
    [Tr2Controller, "GetExpressionTermInfo", "implemented"],
    [Tr2Controller, "GetVariables", "implemented"],
    [Tr2Controller, "GetVariableView", "implemented"],
    [Tr2Controller, "GetVariableBuffer", "implemented"],
    [Tr2Controller, "EnsureTempArenaSize", "implemented"],
    [Tr2Controller, "GetTempArena", "implemented"],
    [Tr2Controller, "GetBindingPathRoots", "adapted"],
    [Tr2Controller, "RegisterUpdateable", "implemented"],
    [Tr2Controller, "UnRegisterUpdateable", "implemented"],
    [Tr2Controller, "Callback", "adapted"],
    [Tr2Controller, "RegisterCallback", "adapted"],
    [Tr2Controller, "ClearCallbacks", "implemented"],
    [Tr2ControllerEventHandler, "OnListModified", "implemented"],
    [Tr2ControllerEventHandler, "Link", "implemented"],
    [Tr2ControllerEventHandler, "Unlink", "implemented"],
    [Tr2ControllerEventHandler, "GetName", "implemented"],
    [Tr2ControllerEventHandler, "Execute", "implemented"],
    [Tr2ControllerFloatVariable, "Initialize", "implemented"],
    [Tr2ControllerFloatVariable, "OnModified", "implemented"],
    [Tr2ControllerFloatVariable, "GetName", "implemented"],
    [Tr2ControllerFloatVariable, "GetValue", "implemented"],
    [Tr2ControllerFloatVariable, "SetValue", "implemented"],
    [Tr2ControllerFloatVariable, "SetDestinationBuffer", "adapted"],
    [Tr2ControllerFloatVariable, "SetDirtyMask", "adapted"],
    [Tr2StateMachine, "OnListModified", "implemented"],
    [Tr2StateMachine, "OnModified", "implemented"],
    [Tr2StateMachine, "OnSimClockRebase", "adapted"],
    [Tr2StateMachine, "Link", "implemented"],
    [Tr2StateMachine, "Unlink", "implemented"],
    [Tr2StateMachine, "Start", "adapted"],
    [Tr2StateMachine, "Stop", "implemented"],
    [Tr2StateMachine, "Update", "adapted"],
    [Tr2StateMachine, "GetController", "implemented"],
    [Tr2StateMachine, "GetStateByName", "implemented"],
    [Tr2StateMachine, "GetMachineRunTime", "adapted"],
    [Tr2StateMachine, "GetStateRunTime", "adapted"],
    [Tr2StateMachineState, "OnModified", "implemented"],
    [Tr2StateMachineState, "OnListModified", "implemented"],
    [Tr2StateMachineState, "Link", "adapted"],
    [Tr2StateMachineState, "Unlink", "implemented"],
    [Tr2StateMachineState, "Start", "adapted"],
    [Tr2StateMachineState, "Stop", "adapted"],
    [Tr2StateMachineState, "Update", "adapted"],
    [Tr2StateMachineState, "RebaseSimTime", "implemented"],
    [Tr2StateMachineState, "GetStateMachine", "implemented"],
    [Tr2StateMachineState, "GetName", "implemented"],
    [Tr2StateMachineState, "UpdateVariableMask", "implemented"],
    [Tr2StateMachineTransition, "OnModified", "adapted"],
    [Tr2StateMachineTransition, "Link", "adapted"],
    [Tr2StateMachineTransition, "Unlink", "adapted"],
    [Tr2StateMachineTransition, "CanActivate", "adapted"],
    [Tr2StateMachineTransition, "GetVariableMask", "adapted"],
    [Tr2StateMachineTransition, "GetDestination", "adapted"],
    [Tr2StateMachineTransition, "GetSource", "adapted"],
    [Tr2StateMachineTransition, "GetState", "adapted"],
    [Tr2StateMachineTransition, "IsConditionValid", "adapted"],
    [Tr2StateMachineTransition, "IsExpressionValid", "adapted"],
    [Tr2StateMachineTransition, "EvaluateExpression", "adapted"],
    [Tr2StateMachineTransition, "GetExpressionTermInfo", "adapted"],
  ];

  for (const [ctor, methodName, status] of sourceBackedMethods) {
    assertCarbonMethod(ctor, methodName, status);
  }

  const jsOnlyMethods: Array<[ControllerConstructor, string]> = [
    [Tr2Controller, "GetTime"],
    [Tr2Controller, "GetVariableValue"],
    [Tr2Controller, "SetVariableValue"],
    [Tr2Controller, "GetExpressionContext"],
    [Tr2StateMachine, "GetCurrentState"],
    [Tr2StateMachine, "GetState"],
    [Tr2StateMachine, "GetStateTime"],
    [Tr2StateMachineState, "CanTransition"],
    [Tr2StateMachineTransition, "Compile"],
    [Tr2StateMachineTransition, "GetVariableNames"],
    [Tr2StateMachineTransition, "GetFunctionNames"],
  ];

  for (const [ctor, methodName] of jsOnlyMethods) {
    assertEquals(CjsSchema.getMethod(ctor, methodName), null);
  }
});

Deno.test("promoted controller families expose source-backed Carbon metadata", () => {
  const constructors: ControllerConstructor[] = [
    Tr2ActionAnimateCurveSet,
    Tr2ActionAnimateValue,
    Tr2ActionBindRTPC,
    Tr2ActionCallback,
    Tr2ActionChildEffect,
    Tr2ActionOverlay,
    Tr2ActionPlayCurveSet,
    Tr2ActionPlayMeshAnimation,
    Tr2ActionPlaySound,
    Tr2ActionPython,
    Tr2ActionResetClipSphereCenter,
    Tr2ActionSetAttenuationScaling,
    Tr2ActionSetAudioEmitterPrefix,
    Tr2ActionSetAudioSwitch,
    Tr2ActionSetExternalControllerVariable,
    Tr2ActionSetShaderOption,
    Tr2ActionSetValue,
    Tr2ActionSpawnParticles,
    Tr2BindingPoint,
    Tr2ControllerExpression,
    Tr2ControllerReference,
    Tr2SyncToAnimation,
    Tr2TimelineController,
  ];

  for (const ctor of constructors) {
    new ctor();
  }

  assertEquals(CjsSchema.getClass("Tr2Controller"), Tr2Controller);
  assertEquals(CjsSchema.getClass("Tr2ActionPython"), Tr2ActionPython);

  const sourceBackedMethods: Array<
    [ControllerConstructor, string, ImplStatus]
  > = [
    [Tr2ActionAnimateCurveSet, "Link", "adapted"],
    [Tr2ActionAnimateCurveSet, "Unlink", "implemented"],
    [Tr2ActionAnimateCurveSet, "Start", "adapted"],
    [Tr2ActionAnimateCurveSet, "Stop", "implemented"],
    [Tr2ActionAnimateCurveSet, "RebaseSimTime", "implemented"],
    [Tr2ActionAnimateCurveSet, "Update", "adapted"],
    [Tr2ActionAnimateCurveSet, "OnModified", "adapted"],
    [Tr2ActionAnimateCurveSet, "IsExpressionValid", "implemented"],
    [Tr2ActionAnimateCurveSet, "GetExpressionTermInfo", "adapted"],
    [Tr2ActionAnimateCurveSet, "EvaluateExpression", "adapted"],
    [Tr2ActionAnimateValue, "Link", "adapted"],
    [Tr2ActionAnimateValue, "Unlink", "implemented"],
    [Tr2ActionAnimateValue, "Start", "adapted"],
    [Tr2ActionAnimateValue, "Stop", "implemented"],
    [Tr2ActionAnimateValue, "RebaseSimTime", "implemented"],
    [Tr2ActionAnimateValue, "Update", "adapted"],
    [Tr2ActionAnimateValue, "OnModified", "adapted"],
    [Tr2ActionAnimateValue, "IsBindingValid", "implemented"],
    [Tr2ActionAnimateValue, "IsExpressionValid", "implemented"],
    [Tr2ActionAnimateValue, "GetCurveValue", "adapted"],
    [Tr2ActionAnimateValue, "GetDestination", "implemented"],
    [Tr2ActionAnimateValue, "GetExpressionTermInfo", "adapted"],
    [Tr2ActionAnimateValue, "EvaluateExpression", "adapted"],
    [Tr2ActionBindRTPC, "Link", "adapted"],
    [Tr2ActionBindRTPC, "Unlink", "implemented"],
    [Tr2ActionBindRTPC, "Start", "adapted"],
    [Tr2ActionBindRTPC, "StartWithController", "implemented"],
    [Tr2ActionBindRTPC, "Stop", "implemented"],
    [Tr2ActionBindRTPC, "StopWithController", "implemented"],
    [Tr2ActionBindRTPC, "Update", "adapted"],
    [Tr2ActionBindRTPC, "OnModified", "adapted"],
    [Tr2ActionBindRTPC, "IsExpressionValid", "implemented"],
    [Tr2ActionBindRTPC, "GetCurveValue", "adapted"],
    [Tr2ActionBindRTPC, "GetExpressionTermInfo", "adapted"],
    [Tr2ActionBindRTPC, "EvaluateExpression", "adapted"],
    [Tr2ActionCallback, "Start", "implemented"],
    [Tr2ActionChildEffect, "Link", "noop"],
    [Tr2ActionChildEffect, "Start", "adapted"],
    [Tr2ActionChildEffect, "Stop", "adapted"],
    [Tr2ActionOverlay, "Start", "adapted"],
    [Tr2ActionOverlay, "Stop", "adapted"],
    [Tr2ActionPlayCurveSet, "Start", "adapted"],
    [Tr2ActionPlayCurveSet, "Stop", "adapted"],
    [Tr2ActionPlayCurveSet, "RebaseSimTime", "implemented"],
    [Tr2ActionPlayCurveSet, "CanTransition", "adapted"],
    [Tr2ActionPlayCurveSet, "Update", "implemented"],
    [Tr2ActionPlayMeshAnimation, "Link", "adapted"],
    [Tr2ActionPlayMeshAnimation, "Unlink", "implemented"],
    [Tr2ActionPlayMeshAnimation, "Start", "adapted"],
    [Tr2ActionPlayMeshAnimation, "Stop", "adapted"],
    [Tr2ActionPlayMeshAnimation, "OnModified", "adapted"],
    [Tr2ActionPlayMeshAnimation, "IsBindingValid", "adapted"],
    [Tr2ActionPlayMeshAnimation, "GetDestination", "adapted"],
    [Tr2ActionPlaySound, "Start", "adapted"],
    [Tr2ActionPlaySound, "StartWithController", "implemented"],
    [Tr2ActionPython, "Initialize", "adapted"],
    [Tr2ActionPython, "OnModified", "adapted"],
    [Tr2ActionPython, "Link", "adapted"],
    [Tr2ActionPython, "Unlink", "adapted"],
    [Tr2ActionPython, "Start", "adapted"],
    [Tr2ActionPython, "Stop", "adapted"],
    [Tr2ActionPython, "Update", "adapted"],
    [Tr2ActionPython, "GetInstance", "adapted"],
    [Tr2ActionPython, "GetWriteBufferAndSize", "adapted"],
    [Tr2ActionPython, "ReleaseWriteBuffer", "adapted"],
    [Tr2ActionPython, "AllocateReadBuffer", "adapted"],
    [Tr2ActionPython, "SetBufferAndSize", "adapted"],
    [Tr2ActionResetClipSphereCenter, "Start", "adapted"],
    [Tr2ActionSetAttenuationScaling, "Link", "adapted"],
    [Tr2ActionSetAttenuationScaling, "Unlink", "implemented"],
    [Tr2ActionSetAttenuationScaling, "Start", "adapted"],
    [Tr2ActionSetAttenuationScaling, "StartWithController", "implemented"],
    [Tr2ActionSetAttenuationScaling, "GetScalingFactor", "adapted"],
    [Tr2ActionSetAudioEmitterPrefix, "Start", "adapted"],
    [Tr2ActionSetAudioEmitterPrefix, "StartWithController", "implemented"],
    [Tr2ActionSetAudioSwitch, "Start", "adapted"],
    [Tr2ActionSetAudioSwitch, "StartWithController", "implemented"],
    [Tr2ActionSetExternalControllerVariable, "Link", "adapted"],
    [Tr2ActionSetExternalControllerVariable, "Unlink", "implemented"],
    [Tr2ActionSetExternalControllerVariable, "Start", "adapted"],
    [Tr2ActionSetExternalControllerVariable, "OnModified", "adapted"],
    [
      Tr2ActionSetExternalControllerVariable,
      "IsDestinationValid",
      "implemented",
    ],
    [Tr2ActionSetShaderOption, "Start", "adapted"],
    [Tr2ActionSetValue, "Link", "adapted"],
    [Tr2ActionSetValue, "Unlink", "implemented"],
    [Tr2ActionSetValue, "Start", "adapted"],
    [Tr2ActionSetValue, "OnModified", "adapted"],
    [Tr2ActionSetValue, "IsBindingValid", "implemented"],
    [Tr2ActionSetValue, "IsExpressionValid", "implemented"],
    [Tr2ActionSetValue, "GetDestination", "implemented"],
    [Tr2ActionSetValue, "GetExpressionTermInfo", "adapted"],
    [Tr2ActionSetValue, "EvaluateExpression", "adapted"],
    [Tr2ActionSpawnParticles, "Start", "adapted"],
    [Tr2BindingPoint, "Link", "adapted"],
    [Tr2BindingPoint, "Unlink", "implemented"],
    [Tr2BindingPoint, "IsValid", "implemented"],
    [Tr2BindingPoint, "SetValue", "adapted"],
    [Tr2BindingPoint, "GetValue", "adapted"],
    [Tr2BindingPoint, "GetBoundObject", "implemented"],
    [Tr2BindingPoint, "SetDestination", "adapted"],
    [Tr2ControllerExpression, "SetExpr", "adapted"],
    [Tr2ControllerExpression, "Eval", "adapted"],
    [Tr2ControllerExpression, "Clear", "implemented"],
    [Tr2ControllerExpression, "IsExpressionValid", "implemented"],
    [Tr2ControllerExpression, "GetVariableMask", "adapted"],
    [Tr2ControllerExpression, "GetExpressionTermInfo", "adapted"],
    [Tr2ControllerReference, "Initialize", "adapted"],
    [Tr2ControllerReference, "OnModified", "adapted"],
    [Tr2ControllerReference, "Link", "implemented"],
    [Tr2ControllerReference, "Unlink", "implemented"],
    [Tr2ControllerReference, "IsLinked", "implemented"],
    [Tr2ControllerReference, "Start", "implemented"],
    [Tr2ControllerReference, "Stop", "implemented"],
    [Tr2ControllerReference, "Update", "implemented"],
    [Tr2ControllerReference, "SetVariable", "implemented"],
    [Tr2ControllerReference, "HandleEvent", "implemented"],
    [Tr2ControllerReference, "GetOwner", "implemented"],
    [Tr2SyncToAnimation, "CanTransition", "adapted"],
    [Tr2TimelineController, "Link", "adapted"],
    [Tr2TimelineController, "Unlink", "implemented"],
    [Tr2TimelineController, "IsLinked", "implemented"],
    [Tr2TimelineController, "Start", "adapted"],
    [Tr2TimelineController, "Stop", "adapted"],
    [Tr2TimelineController, "Update", "adapted"],
    [Tr2TimelineController, "SetVariable", "implemented"],
    [Tr2TimelineController, "HandleEvent", "implemented"],
    [Tr2TimelineController, "GetOwner", "implemented"],
    [Tr2TimelineController, "Callback", "adapted"],
    [Tr2TimelineController, "RegisterUpdateable", "implemented"],
    [Tr2TimelineController, "UnRegisterUpdateable", "implemented"],
    [Tr2TimelineController, "GetBindingPathRoots", "adapted"],
    [Tr2TimelineController, "GetFloatVariableByName", "implemented"],
    [Tr2TimelineController, "GetExpressionTermInfo", "implemented"],
    [Tr2TimelineController, "GetVariableView", "implemented"],
    [Tr2TimelineController, "GetVariableBuffer", "implemented"],
    [Tr2TimelineController, "EnsureTempArenaSize", "implemented"],
    [Tr2TimelineController, "GetTempArena", "implemented"],
    [Tr2TimelineController, "OnSimClockRebase", "adapted"],
    [Tr2TimelineController, "GetActionCount", "implemented"],
    [Tr2TimelineController, "GetAction", "adapted"],
    [Tr2TimelineController, "GetActionStartTime", "implemented"],
    [Tr2TimelineController, "GetActionEndTime", "implemented"],
    [Tr2TimelineController, "GetActionTrackID", "implemented"],
    [Tr2TimelineController, "SetActionStartTime", "adapted"],
    [Tr2TimelineController, "SetActionEndTime", "adapted"],
    [Tr2TimelineController, "SetActionTrackID", "adapted"],
    [Tr2TimelineController, "AddAction", "adapted"],
    [Tr2TimelineController, "RemoveAction", "adapted"],
    [Tr2TimelineController, "IsActionEnabled", "implemented"],
    [Tr2TimelineController, "IsTrackEnabled", "implemented"],
    [Tr2TimelineController, "EnableTrack", "adapted"],
    [Tr2TimelineController, "RegisterCallback", "adapted"],
    [Tr2TimelineController, "ClearCallbacks", "implemented"],
    [Tr2TimelineController, "GetTime", "implemented"],
    [Tr2TimelineController, "SetTime", "adapted"],
    [Tr2TimelineController, "Pause", "implemented"],
    [Tr2TimelineController, "Resume", "implemented"],
    [Tr2TimelineController, "ReLink", "implemented"],
  ];

  for (const [ctor, methodName, status] of sourceBackedMethods) {
    assertCarbonMethod(ctor, methodName, status);
  }

  const jsOnlyMethods: Array<[ControllerConstructor, string]> = [
    [Tr2ActionAnimateCurveSet, "CompileExpression"],
    [Tr2ActionAnimateValue, "CompileExpression"],
    [Tr2ActionBindRTPC, "CompileExpression"],
    [Tr2ActionOverlay, "LoadOverlay"],
    [Tr2ActionPlayMeshAnimation, "ResolveDestination"],
    [Tr2ActionPlayMeshAnimation, "IsDestinationValid"],
    [Tr2ActionSetExternalControllerVariable, "LinkToDestinationOwner"],
    [Tr2ActionSetExternalControllerVariable, "IsVariableValid"],
    [Tr2ActionSetValue, "CompileExpression"],
  ];

  for (const [ctor, methodName] of jsOnlyMethods) {
    assertEquals(CjsSchema.getMethod(ctor, methodName), null);
  }
});

function assertCarbonMethod(
  ctor: ControllerConstructor,
  methodName: string,
  status: ImplStatus,
): void {
  const method = CjsSchema.getMethod(ctor, methodName);
  assertEquals(
    method?.carbon?.method,
    true,
    `${ctor.name}.${methodName} should be decorated as a Carbon method`,
  );
  assertEquals(
    method?.impl?.status,
    status,
    `${ctor.name}.${methodName} should be marked ${status}`,
  );
}

Deno.test("Tr2ControllerFloatVariable writes destinations and dirty masks", () => {
  const variable = new Tr2ControllerFloatVariable();
  variable.name = "throttle";
  variable.defaultValue = 4.5;

  assertEquals(variable.variableType, Type.FLOAT);
  assert(variable.Initialize());
  assertEquals(variable.GetName(), "throttle");
  assertAlmostEquals(variable.GetValue(), 4.5);

  const destination = new Float32Array(3);
  variable.SetDestinationBuffer(destination, 1);
  assertAlmostEquals(destination[1], 4.5);

  const dirty = { value: 0n };
  variable.SetDirtyMask(dirty, 0x10n);
  variable.SetValue(7.25);
  assertAlmostEquals(destination[1], 7.25);
  assertEquals(dirty.value, 0x10n);

  variable.value = 2.5;
  assert(variable.OnModified(null));
  assertAlmostEquals(destination[1], 2.5);
  assertEquals(dirty.value, 0x10n);

  const numberDirty = { value: 0 };
  variable.SetDirtyMask(numberDirty, 0x20);
  assert(variable.OnModified());
  assertEquals(numberDirty.value, 0x20);

  assertEquals(
    CjsSchema.getField(Tr2ControllerFloatVariable, "variableType")?.type.kind,
    "int32",
  );
  assertEquals(
    CjsSchema.getField(Tr2ControllerFloatVariable, "value")?.type.kind,
    "float32",
  );
});

Deno.test("registered controller actions update with sim time", () => {
  const updateables: ITr2Updateable[] = [];
  const appliedTimes: number[] = [];
  const controller: CjsActionControllerRuntime = {
    GetTime(): number {
      return 10;
    },
    RegisterUpdateable(value: ITr2Updateable): void {
      updateables.push(value);
    },
  };

  const action = new Tr2ActionAnimateCurveSet();
  action.curveSet = {
    ApplyTime(time: number): void {
      appliedTimes.push(time);
    },
  };
  action.value = "StateTime()";

  action.Link(controller);
  action.Start(controller);
  const registered = updateables[0];
  assert(registered);
  registered.Update?.(20, 14);

  assertEquals(appliedTimes.at(-1), 4);
});

Deno.test("controller expression actions expose Carbon local term info", () => {
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return {};
    },
    GetExpressionTermInfo(out): void {
      out.push({ group: "Variables", name: "speed", kind: "variable" });
    },
  };

  const curveSet = new Tr2ActionAnimateCurveSet();
  curveSet.Link(controller);
  const curveSetTerms = new Set(
    curveSet.GetExpressionTermInfo().map((term) => term.name),
  );
  assert(curveSetTerms.has("StateTime"));
  assert(curveSetTerms.has("Random"));
  assert(curveSetTerms.has("ServerYear"));
  assert(curveSetTerms.has("speed"));
  assert(!curveSetTerms.has("Curve"));
  assert(curveSet.GetExpressionTermInfo().some((term) =>
    term.group === "GraphicSettings" && term.name === "ShaderQuality"
  ));

  const animateValue = new Tr2ActionAnimateValue();
  animateValue.Link(controller);
  const animateTerms = new Set(
    animateValue.GetExpressionTermInfo().map((term) => term.name),
  );
  assert(animateTerms.has("StateTime"));
  assert(animateTerms.has("ServerTimeGreaterThan"));
  assert(animateTerms.has("Curve"));

  const bind = new Tr2ActionBindRTPC();
  bind.Link(controller);
  const bindTerms = new Set(
    bind.GetExpressionTermInfo().map((term) => term.name),
  );
  assert(bindTerms.has("StateTime"));
  assert(bindTerms.has("Curve"));

  const setValue = new Tr2ActionSetValue();
  setValue.Link(controller);
  const setTerms = new Set(
    setValue.GetExpressionTermInfo().map((term) => term.name),
  );
  assert(setTerms.has("StateTime"));
  assert(!setTerms.has("Curve"));
});

Deno.test("Tr2ControllerEventHandler links and executes controller actions", () => {
  const events: string[] = [];
  const controller: ITr2ActionController = {};

  const first = makeAction("first", events, controller);
  const second = makeAction("second", events, controller);

  const handler = new Tr2ControllerEventHandler();
  handler.name = "activate";
  handler.actions = [first, second];

  assertEquals(handler.GetName(), "activate");
  handler.Link(controller);
  assertEquals(events.join(","), "first:link,second:link");

  handler.Execute(controller);
  assertEquals(
    events.join(","),
    "first:link,second:link,first:start,second:start,first:stop,second:stop",
  );

  const inserted = makeAction("inserted", events, controller);
  handler.OnListModified(BELIST_INSERTED, 0, 0, inserted, handler.actions);
  assertEquals(events.at(-1), "inserted:link");

  handler.OnListModified(BELIST_REMOVED, 0, 0, inserted, handler.actions);
  assertEquals(events.at(-1), "inserted:unlink");

  const unrelated = makeAction("unrelated", events, controller);
  handler.OnListModified(BELIST_INSERTED, 0, 0, unrelated, []);
  assertEquals(events.at(-1), "inserted:unlink");

  assertEquals(
    CjsSchema.getField(Tr2ControllerEventHandler, "actions")?.type.kind,
    "list",
  );
});

Deno.test("Tr2Controller links variables, events, callbacks, and updateables", () => {
  const events: string[] = [];
  const dirtyMasks: (bigint | number)[] = [];

  const controller = new Tr2Controller();
  controller.updateThrottle = false;
  const variable = new Tr2ControllerFloatVariable();
  variable.name = "speed";
  variable.defaultValue = 2;
  assert(variable.Initialize());

  const action = makeAction("ignite", events, controller);
  const handler = new Tr2ControllerEventHandler();
  handler.name = "ignite";
  handler.actions = [action];

  const stateMachine: ITr2StateMachine = {
    Link(value: ITr2ActionController): void {
      assertEquals(value, controller);
      events.push("machine:link");
    },
    Start(): void {
      events.push("machine:start");
    },
    Update(variableDirtyMask: bigint | number = 0): void {
      dirtyMasks.push(variableDirtyMask);
      events.push("machine:update");
    },
    Stop(): void {
      events.push("machine:stop");
    },
    Unlink(): void {
      events.push("machine:unlink");
    },
  };

  controller.variables = [variable];
  controller.eventHandlers = [handler];
  controller.stateMachines = [stateMachine];

  const owner = { name: "owner" };
  controller.Link(owner);
  assert(controller.IsLinked());
  assertEquals(controller.GetOwner(), owner);
  assertEquals(events.join(","), "machine:link,ignite:link");
  assertEquals(controller.GetVariableBuffer()[0], 2);
  assertEquals(controller.GetVariableView()[0].name, "speed");
  assertEquals(controller.GetBindingPathRoots()[0][1], owner);

  controller.SetVariable("speed", 5);
  assertEquals(variable.GetValue(), 5);
  assertEquals(controller.GetVariableBuffer()[0], 5);
  assertEquals(controller.GetFloatVariableByName("speed"), 5);

  let updateRealTime = 0;
  const updateSimTimes: number[] = [];
  controller.RegisterUpdateable({
    Update(realTime: number, simTime: number): void {
      updateRealTime = realTime;
      updateSimTimes.push(simTime);
      events.push("updateable:update");
    },
  });

  let callbackCount = 0;
  controller.RegisterCallback("done", () => {
    callbackCount++;
    events.push("callback:done");
  });

  controller.Start();
  controller.Update(1);
  assertEquals(dirtyMasks[0], TR2_DIRTY_ALL);
  assert(updateRealTime > 0);
  assert(updateSimTimes[0] > 0);

  controller.SetVariable("speed", 8);
  controller.Update(1);
  assertEquals(dirtyMasks[1], 1n);
  assert(updateSimTimes[1] >= updateSimTimes[0]);

  controller.HandleEvent("ignite");
  assertEquals(events.at(-2), "ignite:start");
  assertEquals(events.at(-1), "ignite:stop");

  controller.Callback("done");
  assertEquals(callbackCount, 1);

  controller.Stop();
  assert(!controller.isPlaying);
  controller.Unlink();
  assert(!controller.IsLinked());

  assertEquals(
    CjsSchema.getField(Tr2Controller, "stateMachines")?.type.kind,
    "list",
  );
  assertEquals(
    CjsSchema.getField(Tr2Controller, "isPlaying")?.type.kind,
    "boolean",
  );
  assertEquals(controller.currentUpdateFrequency, 10);
});

Deno.test("Tr2Controller applies Carbon EveThrottleable update gating", () => {
  let updateCount = 0;
  const controller = new Tr2Controller();
  const stateMachine: ITr2StateMachine = {
    Start(): void {},
    Update(): void {
      updateCount++;
    },
    Stop(): void {},
  };

  controller.stateMachines = [stateMachine];
  controller.Link({});
  controller.Start();

  controller.Update(1);
  controller.Update(1);

  assertEquals(updateCount, 1);
  assertEquals(controller.currentUpdateFrequency, 20);

  controller.updateThrottle = false;
  controller.Update(1);
  assertEquals(updateCount, 2);
});

Deno.test("CjsControllerExpressionProgram evaluates a safe parser subset without eval", () => {
  const program = CjsControllerExpressionProgram.Compile(
    "speed > 5 ? max(speed, rint(2.5)) + 1 ^ 2 ^ 3 : 0",
  );

  assert(program.IsValid());
  assertEquals(program.GetVariableNames().join(","), "speed");
  const functions = new Set(program.GetFunctionNames());
  assert(functions.has("max"));
  assert(functions.has("rint"));
  assertEquals(program.Evaluate({ variables: { speed: 6 } }), 7);
  assertEquals(program.Evaluate({ variables: { speed: 4 } }), 0);
  assertEquals(
    CjsControllerExpressionProgram.Compile("1 ^ 2 * 3").Evaluate(),
    3,
  );
  assertEquals(
    CjsControllerExpressionProgram.Compile("1 ^ 2 ^ 3").Evaluate(),
    1,
  );

  const unsafe = CjsControllerExpressionProgram.Compile("eval(1)");
  assert(!unsafe.IsValid());
});

Deno.test("controller expression program exposes Carbon controller DateTime functions", () => {
  const context = {
    serverTime: new Date(2026, 6, 4, 12, 34, 56),
  };

  assertEquals(
    CjsControllerExpressionProgram.Compile("ServerYear()").Evaluate(context),
    2026,
  );
  assertEquals(
    CjsControllerExpressionProgram.Compile("ServerMonth()").Evaluate(context),
    7,
  );
  assertEquals(
    CjsControllerExpressionProgram.Compile("ServerDayOfWeek()").Evaluate(
      context,
    ),
    6,
  );
  assertEquals(
    CjsControllerExpressionProgram.Compile("IsWeekend()").Evaluate(context),
    1,
  );
  assertEquals(
    CjsControllerExpressionProgram.Compile(
      "ServerTimeGreaterThan(2026, 7, 4, 12, 34, 55)",
    ).Evaluate(context),
    1,
  );
  assertEquals(
    CjsControllerExpressionProgram.Compile(
      "ServerTimeLessThanOrEqual(2026, 7, 4, 12, 34, 56)",
    ).Evaluate(context),
    1,
  );
  assertEquals(
    CjsControllerExpressionProgram.Compile(
      "ServerTimeEqual(2026, 7, 4, 12, 34, 56)",
    ).Evaluate(context),
    1,
  );
});

Deno.test("controller expression dirty masks respect Carbon function purity", () => {
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return {};
    },
    GetVariableView(): unknown {
      return [{ name: "speed", index: 0 }];
    },
  };

  const expression = new Tr2ControllerExpression();
  assertEquals(expression.SetExpr("sin(speed)", controller), "");
  assertEquals(expression.GetVariableMask(), 1n);
  assertEquals(expression.SetExpr("speed + StateTime()", controller), "");
  assertEquals(expression.GetVariableMask(), 0n);
  assertEquals(expression.SetExpr("speed + ServerSecond()", controller), "");
  assertEquals(expression.GetVariableMask(), 0n);

  let sourceMaskUpdates = 0;
  const transition = new Tr2StateMachineTransition();
  const source: ITr2StateMachineState = {
    GetStateMachine(): ITr2StateMachine {
      return {
        GetController(): ITr2ActionController {
          return controller;
        },
      };
    },
    UpdateVariableMask(): void {
      sourceMaskUpdates++;
    },
  };

  transition.Link(source);
  transition.condition = "sin(speed) > 0";
  assertEquals(transition.GetVariableMask(), 1n);
  transition.condition = "speed + StateTime() > 0";
  transition.OnModified("condition");
  assertEquals(transition.GetVariableMask(), 0n);
  assertEquals(sourceMaskUpdates, 1);
});

Deno.test("Tr2StateMachineTransition evaluates live expression state", () => {
  const events: string[] = [];
  const controller = new Tr2Controller();
  controller.updateThrottle = false;
  const speed = new Tr2ControllerFloatVariable();
  speed.name = "speed";
  speed.value = 0;

  const idle = new Tr2StateMachineState();
  idle.name = "idle";
  idle.actions = [makeAction("idle", events, controller)];

  const active = new Tr2StateMachineState();
  active.name = "active";
  active.actions = [makeAction("active", events, controller)];

  const transition = new Tr2StateMachineTransition();
  transition.name = "active";
  transition.condition = "speed > 5 && IsAnimationPlaying('gate') == 0";
  idle.transitions = [transition];

  const machine = new Tr2StateMachine();
  machine.startState = idle;
  machine.states = [idle, active];

  controller.variables = [speed];
  controller.stateMachines = [machine];
  controller.Link({
    IsAnimationPlaying(_name: string): number {
      return 0;
    },
  });
  controller.Start();
  assertEquals(machine.currentState, idle);

  controller.Update(0.1);
  assertEquals(machine.currentState, idle);

  controller.SetVariable("speed", 6);
  controller.Update(0.1);

  assertEquals(machine.currentState, active);
  assert(events.includes("idle:stop"));
  assert(events.includes("active:start"));
  assertEquals(events.filter((event) => event === "idle:stop").length, 1);
  assert(transition.IsExpressionValid());
  assertEquals(
    CjsSchema.getField(Tr2StateMachineTransition, "condition")?.type.kind,
    "string",
  );
  assertEquals(
    CjsSchema.getField(Tr2StateMachineState, "transitions")?.type.kind,
    "list",
  );
  assertEquals(
    CjsSchema.getField(Tr2StateMachine, "startState")?.type.kind,
    "objectRef",
  );

  const transitionTerms = new Set(
    transition.GetExpressionTermInfo().map((term) => term.name),
  );
  assert(transitionTerms.has("StateTime"));
  assert(transitionTerms.has("ServerYear"));
  assert(transitionTerms.has("speed"));
});

Deno.test("Tr2StateMachineTransition refreshes source dirty masks on condition edits", () => {
  const events: string[] = [];
  const controller = new Tr2Controller();
  const a = new Tr2ControllerFloatVariable();
  a.name = "a";
  a.value = 0;
  const b = new Tr2ControllerFloatVariable();
  b.name = "b";
  b.value = 0;

  const source = new Tr2StateMachineState();
  source.name = "source";
  source.actions = [makeAction("source", events, controller)];

  const destination = new Tr2StateMachineState();
  destination.name = "destination";
  destination.actions = [makeAction("destination", events, controller)];

  const transition = new Tr2StateMachineTransition();
  transition.name = "destination";
  transition.condition = "a > 0";
  source.transitions = [transition];

  const machine = new Tr2StateMachine();
  machine.startState = source;
  machine.states = [source, destination];

  controller.variables = [a, b];
  controller.stateMachines = [machine];
  controller.Link({});
  controller.Start();
  assertEquals(machine.currentState, source);

  transition.condition = "b > 0";
  transition.OnModified("condition");
  controller.SetVariable("b", 1);
  controller.Update(1);

  assertEquals(machine.currentState, destination);
});

Deno.test("Tr2StateMachine requires an explicit Carbon startState", () => {
  const events: string[] = [];
  const controller = new Tr2Controller();
  const state = new Tr2StateMachineState();
  state.name = "only";
  state.actions = [makeAction("only", events, controller)];

  const machine = new Tr2StateMachine();
  machine.states = [state];

  controller.stateMachines = [machine];
  controller.Link({});
  controller.Start();

  assertEquals(machine.currentState, null);
  assertEquals(events.join(","), "only:link");
  assertEquals(machine.GetStateByName("only"), state);
});

Deno.test("Tr2StateMachineState finalizer gates after actions stop", () => {
  const events: string[] = [];
  let canFinalize = false;
  let transitionActive = false;
  const controller = new Tr2Controller();
  controller.updateThrottle = false;

  const source = new Tr2StateMachineState();
  source.name = "source";
  source.actions = [makeAction("source", events, controller)];

  const destination = new Tr2StateMachineState();
  destination.name = "destination";
  destination.actions = [makeAction("destination", events, controller)];

  source.transitions = [{
    Link(): void {},
    Unlink(): void {},
    CanActivate(): boolean {
      return transitionActive;
    },
    GetDestination(): Tr2StateMachineState {
      return destination;
    },
    GetVariableMask(): bigint {
      return 0n;
    },
  }];
  source.finalizer = {
    CanTransition(): boolean {
      return canFinalize;
    },
  };

  const machine = new Tr2StateMachine();
  machine.startState = source;
  machine.states = [source, destination];

  controller.stateMachines = [machine];
  controller.Link({});
  controller.Start();
  assertEquals(machine.currentState, source);
  assertEquals(events.at(-1), "source:start");

  transitionActive = true;
  controller.Update(0.1);
  assertEquals(machine.currentState, source);
  assertEquals(events.at(-1), "source:stop");

  canFinalize = true;
  controller.Update(0.1);
  assertEquals(machine.currentState, destination);
  assertEquals(events.at(-1), "destination:start");
  assertEquals(events.filter((event) => event === "source:stop").length, 1);
});

Deno.test("Tr2StateMachineState ignores timeline-style disabled action flags", () => {
  const controller = new Tr2Controller();
  controller.updateThrottle = false;
  let startCount = 0;
  let stopCount = 0;
  let transitionChecks = 0;
  let canTransition = false;

  const source = new Tr2StateMachineState();
  source.name = "source";
  source.actions = [{
    isDisabled: true,
    Start(): void {
      startCount++;
    },
    Stop(): void {
      stopCount++;
    },
    CanTransition(): boolean {
      transitionChecks++;
      return canTransition;
    },
  } as ITr2ControllerAction & { isDisabled: true }];

  const destination = new Tr2StateMachineState();
  destination.name = "destination";
  source.transitions = [{
    CanActivate(): boolean {
      return true;
    },
    GetDestination(): Tr2StateMachineState {
      return destination;
    },
    GetVariableMask(): bigint {
      return 0n;
    },
  }];

  const machine = new Tr2StateMachine();
  machine.startState = source;
  machine.states = [source, destination];
  controller.stateMachines = [machine];
  controller.Link({});
  controller.Start();

  assertEquals(startCount, 1);
  controller.Update(0.1);
  assertEquals(machine.currentState, source);
  assert(transitionChecks > 0);

  const stopsAfterVeto = stopCount;
  const checksAfterVeto = transitionChecks;
  canTransition = true;
  controller.Update(0.1);
  assertEquals(machine.currentState, destination);
  assert(transitionChecks > checksAfterVeto);
  assert(stopCount > stopsAfterVeto);
});

Deno.test("Tr2TimelineController follows Carbon active range edits", () => {
  const events: string[] = [];
  const rebaseDiffs: number[] = [];
  const timeline = new Tr2TimelineController();
  const action: ITr2ControllerAction = {
    Link(controller: ITr2ActionController): void {
      assertEquals(controller, timeline);
      events.push("link");
    },
    Start(controller: ITr2ActionController): void {
      assertEquals(controller, timeline);
      events.push("start");
    },
    Stop(controller: ITr2ActionController): void {
      assertEquals(controller, timeline);
      events.push("stop");
    },
    RebaseSimTime(diff: number): void {
      rebaseDiffs.push(diff);
    },
  };

  timeline.AddAction(action, 5, 10, 1);
  timeline.Link({});
  assertEquals(events.join(","), "link");

  timeline.SetTime(6);
  assertEquals(timeline.GetTime(), 0);
  assertEquals(events.join(","), "link");

  timeline.Start();
  timeline.SetTime(6);
  assertEquals(timeline.GetTime(), 6);
  assertEquals(events.join(","), "link,start");

  assert(timeline.SetActionEndTime(0, 5));
  assertEquals(events.at(-1), "stop");
  assert(timeline.SetActionEndTime(0, 10));
  assertEquals(events.at(-1), "start");

  timeline.EnableTrack(2, false);
  assert(timeline.SetActionTrackID(0, 2));
  assertEquals(events.at(-1), "stop");
  assert(timeline.SetActionTrackID(0, 1));
  assertEquals(events.at(-1), "start");

  assert(timeline.SetActionStartTime(0, 7));
  assertEquals(events.at(-1), "stop");
  assert(timeline.SetActionStartTime(0, 5));
  assertEquals(events.at(-1), "start");

  timeline.OnSimClockRebase(12, 15);
  assertEquals(rebaseDiffs.at(-1), 3);
});

Deno.test("Tr2TimelineController keeps Carbon action bounds and owner gates", () => {
  const timeline = new Tr2TimelineController();
  assertEquals(timeline.GetActionStartTime(0), 0);
  assertEquals(timeline.GetActionEndTime(0), 0);
  assertEquals(timeline.GetActionTrackID(0), 0);
  assertEquals(timeline.entries.length, 0);
  timeline.AddAction(null, 1, 2);
  assertEquals(timeline.GetActionCount(), 0);

  const events: string[] = [];
  const action: ITr2ControllerAction = {
    Unlink(): void {
      events.push("unlink");
    },
  };
  timeline.AddAction(action, 1, 2);
  assert(timeline.RemoveAction(0));
  assertEquals(events.join(","), "");
});

Deno.test("Tr2TimelineController applies Carbon EveThrottleable update gating", () => {
  let updateCount = 0;
  const timeline = new Tr2TimelineController();
  timeline.RegisterUpdateable({
    Update(realTime: number, simTime: number): void {
      assert(realTime > 0);
      assert(simTime > 0);
      updateCount++;
    },
  });

  timeline.Link({});
  timeline.Start();
  timeline.Update(1);
  timeline.Update(1);

  assertEquals(updateCount, 1);
  assertEquals(timeline.currentUpdateFrequency, 20);

  timeline.updateThrottle = false;
  timeline.Update(1);
  assertEquals(updateCount, 2);
});

Deno.test("Tr2ControllerReference clears stale controller on path changes", () => {
  const events: string[] = [];
  const reference = new Tr2ControllerReference();
  reference.controller = {
    Link(): void {
      events.push("link");
    },
    Unlink(): void {
      events.push("unlink");
    },
  };

  reference.Link({});
  assertEquals(events.join(","), "link");

  reference.path = "res:/controller.red";
  reference.OnModified("path");
  assertEquals(reference.controller, null);
  assertEquals(events.join(","), "link");
  assertEquals(
    CjsSchema.getField(Tr2ControllerReference, "path")?.type.kind,
    "path",
  );
});

Deno.test("Tr2ControllerReference resolves and links controllers through host adapter", () => {
  const events: string[] = [];
  const owner = {};
  const resolvedController = {
    Link(value: object): void {
      events.push(`link:${value === owner}`);
    },
  };

  const previous = CjsRegisterControllerResourceResolver(
    (path: string): object | null => {
      events.push(`resolve:${path}`);
      return resolvedController;
    },
  );

  const reference = new Tr2ControllerReference();
  reference.path = "res:/controller.red";
  assert(reference.Initialize());
  assertEquals(reference.controller, resolvedController);
  assertEquals(events.join(","), "resolve:res:/controller.red");

  reference.Link(owner);
  assertEquals(events.join(","), "resolve:res:/controller.red,link:true");

  events.length = 0;
  CjsRegisterControllerResourceResolver((): object | null => {
    events.push("resolve-stale");
    return null;
  });
  reference.path = "res:/new-controller.red";
  reference.OnModified("path");
  assertEquals(events.join(","), "resolve-stale");
  assertEquals(reference.controller, null);
  assertEquals(CjsSchema.getClass("Tr2ControllerReference"), Tr2ControllerReference);

  CjsRegisterControllerResourceResolver(previous);
  CjsClearControllerResourceHost();
});

Deno.test("Tr2ActionPlayCurveSet accepts Carbon void owner methods", () => {
  const events: string[] = [];
  const updateables: ITr2Updateable[] = [];
  const owner = {
    PlayCurveSet(name: string, rangeName: string): void {
      events.push(`play:${name}:${rangeName}`);
    },
    StopCurveSet(name: string): void {
      events.push(`stop:${name}`);
    },
    GetRangeDuration(name: string, rangeName: string): number {
      events.push(`duration:${name}:${rangeName}`);
      return 2;
    },
  };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return owner;
    },
    RegisterUpdateable(updateable: ITr2Updateable): void {
      updateables.push(updateable);
    },
    UnRegisterUpdateable(updateable: ITr2Updateable): void {
      const index = updateables.indexOf(updateable);
      if (index !== -1) {
        updateables.splice(index, 1);
      }
    },
  };

  const action = new Tr2ActionPlayCurveSet();
  action.curveSetName = "warp";
  action.rangeName = "intro";
  action.syncToRange = true;

  action.Start(controller);
  assertEquals(events.join(","), "play:warp:intro,duration:warp:intro");
  assertEquals(updateables.length, 1);

  action.Stop(controller);
  assertEquals(events.at(-1), "stop:warp");
  assertEquals(updateables.length, 0);
});

Deno.test("Tr2ActionPlayCurveSet sync probes do not consume transition windows", () => {
  const updateables: ITr2Updateable[] = [];
  const owner = {
    PlayCurveSet(): void {},
    StopCurveSet(): void {},
    GetRangeDuration(): number {
      return 0;
    },
  };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return owner;
    },
    RegisterUpdateable(updateable: ITr2Updateable): void {
      updateables.push(updateable);
    },
  };

  const action = new Tr2ActionPlayCurveSet();
  action.syncToRange = true;
  action.rangeName = "zero";
  action.Start(controller);
  assertEquals(updateables.length, 1);
  assert(action.CanTransition());
  assert(action.CanTransition());
});

Deno.test("Tr2ActionSpawnParticles calls the Carbon emitter shape once", () => {
  const calls: unknown[][] = [];
  const action = new Tr2ActionSpawnParticles();
  action.rate = 4;
  action.emitter = {
    SpawnParticles(...args: unknown[]): void {
      calls.push(args);
    },
  };

  action.Start();
  assertEquals(calls.length, 1);
  assertEquals(calls[0].length, 4);
  assertEquals((calls[0][0] as { emitCountFactor: number }).emitCountFactor, 1);
  assertEquals(calls[0][3], 4);

  action.emitter = {};
  action.Start();
  assertEquals(calls.length, 1);
});

Deno.test("generated context packets keep Carbon constructor defaults", () => {
  const childParams = new EveChildUpdateParams();
  assertEquals(childParams.activationStrength, 1);
  assertEquals(childParams.controllerUpdateFrequency, 0.5);
  assertEquals(childParams.isVisible, true);

  const emitterArgs = new ITr2GenericEmitter();
  assertEquals(emitterArgs.emitCountFactor, 1);
});

Deno.test("Tr2ActionPlayMeshAnimation uses Carbon animation layer calls", () => {
  const events: string[] = [];
  const layer = {
    ClearAnimations(): void {
      events.push("clear");
    },
    EndAnimation(): void {
      events.push("end");
    },
  };
  const animationController = {
    AddAnimationLayerWithTrackMask(layerName: string, maskName: string): void {
      events.push(`add:${layerName}:${maskName}`);
    },
    PlayLayerAnimationByName(
      layerName: string | null,
      animationName: string,
      playImmediately: boolean,
      loops: number,
      delay: number,
      speed: number,
      unknownFlag: boolean,
    ): void {
      events.push(
        `play:${layerName}:${animationName}:${playImmediately}:${loops}:${delay}:${speed}:${unknownFlag}`,
      );
    },
    GetAnimationLayer(layerName: string | null): object {
      events.push(`layer:${layerName}`);
      return layer;
    },
    Play(): void {
      events.push("legacy:play");
    },
    Stop(): void {
      events.push("legacy:stop");
    },
  };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return {
        GetAnimationController(): object {
          return animationController;
        },
      };
    },
  };

  const action = new Tr2ActionPlayMeshAnimation();
  action.animation = "WarpIn";
  action.mask = "body";
  action.playAction = PlayAction.PLAY;
  action.loops = -1;
  action.delay = 0.25;
  action.speed = 2;

  action.Start(controller);
  assertEquals(
    events.join(","),
    "add:body:body,play:body:WarpIn:true:0:0.25:2:false",
  );

  action.stopAction = StopAction.ENQUEUE_STOP;
  action.Stop(controller);
  assertEquals(events.at(-2), "layer:body");
  assertEquals(events.at(-1), "end");

  action.stopAction = StopAction.STOP;
  action.Stop(controller);
  assertEquals(events.at(-2), "layer:body");
  assertEquals(events.at(-1), "clear");
  assert(!events.includes("legacy:play"));
  assert(!events.includes("legacy:stop"));
});

Deno.test("Tr2ActionOverlay follows Carbon overlay lifecycle", () => {
  const action = new Tr2ActionOverlay();
  const overlaySchema = CjsSchema.getSchema(Tr2ActionOverlay);
  assertEquals(
    overlaySchema.fields.map((field: { name: string }) => field.name).join(","),
    "path,overlayName,targetAnotherOwner,addOnStart,removeOnStop",
  );
  assertEquals(CjsSchema.getField(Tr2ActionOverlay, "path")?.type?.kind, "path");

  const events: string[] = [];
  const owner = makeOverlayOwner(events, true);
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return owner;
    },
  };
  action.overlayName = "glow";
  action.path = "RES:/Effect.red";

  action.Start(controller);
  assertEquals(
    events.join(","),
    "load:res:/effect_skinned.red,add:glow,start",
  );
  action.Stop(controller);
  assertEquals(events.at(-1), "remove:glow");
  assert(!events.includes("stop"));

  events.length = 0;
  const existing = {
    name: "glow",
    StartControllers(): void {
      events.push("existing:start");
    },
    StopControllers(): void {
      events.push("existing:stop");
    },
  };
  owner.overlays = [existing];
  action.path = "";
  action.Start(controller);
  action.Stop(controller);
  assertEquals(events.join(","), "remove:glow");

  events.length = 0;
  const staticOwner = makeOverlayOwner(events, false);
  const staticController: ITr2ActionController = {
    GetOwner(): object {
      return staticOwner;
    },
  };
  action.path = "res:/plain_skinned.red";
  action.removeOnStop = false;
  action.Start(staticController);
  action.Stop(staticController);
  action.Stop(staticController);
  assertEquals(events.join(","), "load:res:/plain.red,add:glow,start");

  events.length = 0;
  const missingOwner = {
    overlays: [] as object[],
    LoadOverlayEffectFromPath(path: string): null {
      events.push(`miss:${path}`);
      return null;
    },
    AddOverlayEffect(): void {
      events.push("bad:add");
    },
  };
  const missingController: ITr2ActionController = {
    GetOwner(): object {
      return missingOwner;
    },
  };
  action.path = "res:/missing.red";
  action.removeOnStop = true;
  action.Start(missingController);
  assertEquals(events.join(","), "miss:res:/missing.red");
  assertEquals(missingOwner.overlays.length, 0);

  events.length = 0;
  const parameterOwner = makeOverlayOwner(events, false);
  const parameterRoot = {
    GetParameterByName(name: string): object | null {
      if (name !== "overlayTarget") {
        return null;
      }
      return {
        GetParameterObject(): object {
          return parameterOwner;
        },
      };
    },
    Rebind(value: boolean): void {
      events.push(`rebind:${value}`);
    },
  };
  const parameterController: ITr2ActionController = {
    GetOwner(): object {
      return parameterRoot;
    },
  };
  action.targetAnotherOwner = "overlayTarget";
  action.path = "res:/param.red";
  action.Start(parameterController);
  assertEquals(events.join(","), "load:res:/param.red,add:glow,start,rebind:true");

  events.length = 0;
  action.targetAnotherOwner = "missing";
  action.Start(parameterController);
  assertEquals(events.join(","), "");
});

Deno.test("Tr2ActionPlaySound follows Carbon emitter dispatch", () => {
  const action = new Tr2ActionPlaySound();
  const soundSchema = CjsSchema.getSchema(Tr2ActionPlaySound);
  assertEquals(
    soundSchema.fields.map((field: { name: string }) => field.name).join(","),
    "emitter,event,target,bypassPrefix",
  );

  const events: string[] = [];
  const emitter = {
    SendEvent(eventName: string, bypassPrefix: boolean): void {
      events.push(`send:${eventName}:${bypassPrefix}`);
    },
    PlayEvent(): void {
      events.push("bad:play-event");
    },
    PlaySound(): void {
      events.push("bad:play-sound");
    },
  };
  const owner = {
    FindSoundEmitter(name: string): object {
      events.push(`find:${name}`);
      return emitter;
    },
    GetSoundEmitter(): object {
      events.push("bad:get-sound-emitter");
      return emitter;
    },
  };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return owner;
    },
  };

  action.emitter = "main";
  action.event = "ship_start";
  action.bypassPrefix = true;
  action.Start(controller);
  assertEquals(events.join(","), "find:main,send:ship_start:true");
  assertThrows(
    () => action.StartWithController(null),
    "StartWithController expects a Tr2Controller",
  );

  events.length = 0;
  const targetOwner = {
    FindSoundEmitter(name: string): object {
      events.push(`target-find:${name}`);
      return emitter;
    },
  };
  const parameterRoot = {
    GetParameterByName(name: string): object | null {
      return name === "speaker"
        ? {
          GetParameterObject(): object {
            return targetOwner;
          },
        }
        : null;
    },
  };
  action.target = "speaker";
  action.Start({
    GetOwner(): object {
      return parameterRoot;
    },
  });
  assertEquals(events.join(","), "target-find:main,send:ship_start:true");

  events.length = 0;
  const childRoot = {
    FindSoundEmitter(): object {
      events.push("bad:root-find");
      return emitter;
    },
    GetEffectChildByName(): null {
      return null;
    },
  };
  action.target = "missing";
  action.Start({
    GetOwner(): object {
      return childRoot;
    },
  });
  assertEquals(events.join(","), "");
});

Deno.test("Tr2ActionSetValue leaves destination unchanged on failed eval", () => {
  const destination = { value: 5 };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return {};
    },
  };

  const action = new Tr2ActionSetValue();
  action.destination = destination;
  action.attribute = "value";
  action.value = "eval(1)";
  action.Link(controller);

  action.Start(controller);
  assertEquals(destination.value, 5);

  action.value = "0";
  action.OnModified();
  action.Start(controller);
  assertEquals(destination.value, 0);

  action.Unlink();
  assert(!action.IsBindingValid());
});

Deno.test("Tr2ActionBindRTPC caches Carbon emitter and expression state", () => {
  const action = new Tr2ActionBindRTPC();
  const bindSchema = CjsSchema.getSchema(Tr2ActionBindRTPC);
  assertEquals(
    bindSchema.fields.map((field: { name: string }) => field.name).join(","),
    "value,emitter,rtpcName,curve",
  );

  const events: string[] = [];
  const updateables: ITr2Updateable[] = [];
  const emitter = {
    SetRTPC(name: string, value: number): void {
      events.push(`set:${name}:${value}`);
    },
    SetRtpc(): void {
      events.push("bad:set-rtpc-alias");
    },
  };
  const lateEmitter = {
    SetRTPC(): void {
      events.push("bad:late-emitter");
    },
  };
  let resolvedEmitter: object = emitter;
  const owner = {
    FindSoundEmitter(name: string): object {
      events.push(`find:${name}`);
      return resolvedEmitter;
    },
    GetSoundEmitter(): object {
      events.push("bad:get-sound-emitter");
      return lateEmitter;
    },
  };
  const controller: CjsActionControllerRuntime = {
    GetOwner(): object {
      return owner;
    },
    GetTime(): number {
      return 10;
    },
    RegisterUpdateable(updateable: ITr2Updateable): void {
      updateables.push(updateable);
    },
    UnRegisterUpdateable(updateable: ITr2Updateable): void {
      const index = updateables.indexOf(updateable);
      if (index !== -1) {
        updateables.splice(index, 1);
      }
    },
  };

  action.value = "StateTime()";
  action.emitter = "main";
  action.rtpcName = "thrust";
  action.Link(controller);
  action.Start(controller);
  resolvedEmitter = lateEmitter;

  updateables[0].Update?.(20, 14);
  assertEquals(events.join(","), "find:main,set:thrust:4");
  assertEquals(action.EvaluateExpression("StateTime()"), 4);
  assert(!("RebaseSimTime" in action));
  assertThrows(
    () => action.StopWithController(null),
    "StopWithController expects a Tr2Controller",
  );

  action.Stop(controller);
  assertEquals(updateables.length, 0);
});

Deno.test("Tr2ActionSetExternalControllerVariable only relinks destination owner edits", () => {
  const firstDestination = {
    SetControllerVariable(): void {
    },
  };
  const secondDestination = {
    SetControllerVariable(): void {
    },
  };
  let roots: Array<[string, object]> = [["Child", firstDestination]];
  const owner = {
    GetBindingRoots(): Array<[string, object]> {
      return roots;
    },
  };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return owner;
    },
  };

  const action = new Tr2ActionSetExternalControllerVariable();
  action.destinationOwner = "child";
  action.Link(controller);
  assertEquals(action.destination, firstDestination);

  roots = [["Child", secondDestination]];
  action.value = 4;
  action.OnModified("value");
  assertEquals(action.destination, firstDestination);

  action.OnModified("destinationOwner");
  assertEquals(action.destination, secondDestination);
  assertEquals(
    CjsSchema.getMethod(
      Tr2ActionSetExternalControllerVariable,
      "LinkToDestinationOwner",
    ),
    null,
  );
});

Deno.test("audio controller actions use Carbon emitter APIs only", () => {
  const events: string[] = [];
  const emitter = {
    SetPrefix(prefix: string): void {
      events.push(`prefix:${prefix}`);
    },
    SetAudioPrefix(): void {
      events.push("bad:audio-prefix");
    },
    SetSwitch(group: string, state: string): void {
      events.push(`switch:${group}:${state}`);
    },
    SetAudioSwitch(): void {
      events.push("bad:audio-switch");
    },
    SetAttenuationScalingFactor(value: number): void {
      events.push(`attenuation:${value}`);
    },
    SetAttenuationScaling(): void {
      events.push("bad:attenuation-alias");
    },
  };
  const owner = {
    FindSoundEmitter(name: string): object {
      events.push(`find:${name}`);
      return emitter;
    },
    GetSoundEmitter(): object {
      events.push("bad:get-sound-emitter");
      return emitter;
    },
    emitters: [emitter],
  };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return owner;
    },
    GetFloatVariableByName(name: string): number | undefined {
      return name === "scale" ? 2 : undefined;
    },
  };

  const prefix = new Tr2ActionSetAudioEmitterPrefix();
  prefix.emitter = "main";
  prefix.prefix = "ship";
  prefix.Start(controller);
  assertThrows(
    () => prefix.StartWithController(null),
    "StartWithController expects a Tr2Controller",
  );

  const audioSwitch = new Tr2ActionSetAudioSwitch();
  audioSwitch.emitter = "main";
  audioSwitch.switchGroup = "mode";
  audioSwitch.switchState = "warp";
  audioSwitch.Start(controller);
  assertThrows(
    () => audioSwitch.StartWithController(null),
    "StartWithController expects a Tr2Controller",
  );

  const attenuation = new Tr2ActionSetAttenuationScaling();
  attenuation.emitter = "main";
  attenuation.scalingFactor = 3;
  attenuation.controllerVariable = "scale";
  attenuation.Link(controller);
  attenuation.Start(controller);
  assertThrows(
    () => attenuation.StartWithController(null),
    "StartWithController expects a Tr2Controller",
  );

  assertEquals(
    events.join(","),
    "find:main,prefix:ship,find:main,switch:mode:warp,find:main,attenuation:6",
  );
});

Deno.test("Tr2ActionChildEffect follows Carbon child owner lifecycle", () => {
  const pathField = CjsSchema.getField(Tr2ActionChildEffect, "path");
  assertEquals(pathField?.type?.kind, "path");

  const events: string[] = [];
  const targetOwner = makeChildOwner("target", events);
  const rootOwner = {
    children: [targetOwner],
    GetEffectChildByName(name: string): object | null {
      return this.children.find((child) => child.name === name) ?? null;
    },
    Rebind(value: boolean): void {
      events.push(`rebind:${value}`);
    },
  };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return rootOwner;
    },
  };

  const action = new Tr2ActionChildEffect();
  action.targetAnotherOwner = "target";
  action.childName = "spark";
  action.path = "res:/spark.red";

  action.Start(controller);
  assertEquals(events.join(","), "load:res:/spark.red:spark,start");
  action.Stop(controller);
  assertEquals(events.join(","), "load:res:/spark.red:spark,start,remove");

  events.length = 0;
  const existing = {
    name: "spark",
    StartControllers(): void {
      events.push("existing:start");
    },
  };
  targetOwner.children = [existing];
  action.Start(controller);
  assertEquals(events.join(","), "");
  action.Stop(controller);
  assertEquals(events.join(","), "remove");

  events.length = 0;
  action.targetAnotherOwner = "missing";
  action.Start(controller);
  assertEquals(events.join(","), "");

  const parameterOwner = makeChildOwner("parameterOwner", events);
  const parameterRoot = {
    GetEffectChildByName(): object | null {
      return null;
    },
    GetParameterByName(name: string): object | null {
      if (name !== "paramOwner") {
        return null;
      }
      return {
        GetParameterObject(): object {
          return parameterOwner;
        },
      };
    },
    Rebind(value: boolean): void {
      events.push(`rebind:${value}`);
    },
  };
  const parameterController: ITr2ActionController = {
    GetOwner(): object {
      return parameterRoot;
    },
  };

  action.targetAnotherOwner = "paramOwner";
  action.childName = "beam";
  action.path = "res:/beam.red";
  action.Start(parameterController);
  assertEquals(events.join(","), "load:res:/beam.red:beam,start,rebind:true");
});

Deno.test("Tr2ActionChildEffect.Link forwards prefetch through controller resource host", () => {
  const prefetch: string[] = [];
  const stopHost = CjsRegisterControllerResourcePrefetcher(
    (path: string): void => {
      prefetch.push(`prefetch:${path}`);
    },
  );

  const owner = {};
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return owner;
    },
  };

  const action = new Tr2ActionChildEffect();
  action.path = "res:/child.red";
  action.Link(controller);
  assertEquals(prefetch.join(","), "prefetch:res:/child.red");

  CjsRegisterControllerResourcePrefetcher(stopHost);
  CjsClearControllerResourceHost();
});

Deno.test("Tr2ActionPython delegates lifecycle to a JS host bridge", () => {
  const events: string[] = [];
  let updateCount = 0;
  const updateables: ITr2Updateable[] = [];
  const owner = { name: "owner" };
  const controller: ITr2ActionController = {
    GetOwner(): object {
      return owner;
    },
    RegisterUpdateable(updateable: ITr2Updateable): void {
      updateables.push(updateable);
      events.push("register");
    },
    UnRegisterUpdateable(updateable: ITr2Updateable): void {
      const index = updateables.indexOf(updateable);
      if (index !== -1) {
        updateables.splice(index, 1);
      }
      events.push("unregister");
    },
  };

  CjsClearActionPythonFactory();
  CjsRegisterActionPythonFactory((moduleName, className) => {
    events.push(`factory:${moduleName}.${className}`);
    return {
      OnLink(linkOwner, linkController): void {
        assertEquals(linkOwner, owner);
        assertEquals(linkController, controller);
        events.push("link");
      },
      OnUnlink(): void {
        events.push("unlink");
      },
      OnStart(startOwner, startController): void {
        assertEquals(startOwner, owner);
        assertEquals(startController, controller);
        events.push("start");
      },
      OnStop(stopOwner, stopController): void {
        assertEquals(stopOwner, owner);
        assertEquals(stopController, controller);
        events.push("stop");
      },
      OnUpdate(updateOwner, updateController, realDt, simDt): void {
        assertEquals(updateOwner, owner);
        assertEquals(updateController, controller);
        if (updateCount === 0) {
          assert(Number.isFinite(realDt));
          assert(Number.isFinite(simDt));
          events.push("update:first");
        } else {
          events.push(`update:${realDt}:${simDt}`);
        }
        updateCount++;
      },
      OnLoad(state): void {
        events.push(`load:${state[0]}:${state[1]}`);
      },
      OnSave(): Uint8Array {
        events.push("save");
        return Uint8Array.from([7, 8]);
      },
    };
  });

  const action = new Tr2ActionPython();
  action.module = "mod";
  action.className = "Action";
  action.SetBufferAndSize("state", Uint8Array.from([1, 2, 3]), 2);
  action.Link(controller);
  action.Start(controller);
  assertEquals(updateables.length, 1);
  action.Update(12, 20);
  action.Update(15, 21);
  action.Stop(controller);
  action.Unlink();

  const saved = action.GetWriteBufferAndSize("state");
  assertEquals(saved?.[0], 7);
  assertEquals(saved?.[1], 8);
  assertEquals(action.state?.[0], 7);
  assertEquals(action.GetInstance() !== null, true);

  assertEquals(
    events.join(","),
    "factory:mod.Action,load:1:2,link,register,start,update:first,update:3:1,unregister,stop,unlink,save",
  );

  CjsClearActionPythonFactory();
});

Deno.test("controller actions match Carbon reset and attenuation edge cases", () => {
  const shaderEvents: string[] = [];
  const shaderAction = new Tr2ActionSetShaderOption();
  shaderAction.key = "SPACE_OBJECT_CLIPPING";
  shaderAction.value = "SOC_ENABLED";
  shaderAction.Start({
    GetOwner(): object {
      return {
        SetShaderOption(name: string, value: string): void {
          shaderEvents.push(`${name}:${value}`);
        },
      };
    },
  });
  assertEquals(shaderEvents.join(","), "SPACE_OBJECT_CLIPPING:SOC_ENABLED");

  const resetCalls: string[] = [];
  let locatorCenter: number[] | null = null;
  const resetOwner = {
    ResetClipSphereCenter(): void {
      resetCalls.push("object");
    },
    GetLastDamageLocatorHit(): number {
      return 1;
    },
    GetLocatorsForSet(name: string): Array<{ position: number[] }> {
      assertEquals(name, "damage");
      return [
        { position: [1, 2, 3] },
        { position: [4, 5, 6] },
      ];
    },
    ResetClipSphereCenterToPos(value: number[]): void {
      locatorCenter = value;
      resetCalls.push("locator");
    },
  };
  const resetController: ITr2ActionController = {
    GetOwner(): object {
      return resetOwner;
    },
  };

  const reset = new Tr2ActionResetClipSphereCenter();
  reset.resetBehavior = ResetBehavior.OBJECT_CENTER;
  reset.Start(resetController);
  reset.resetBehavior = ResetBehavior.LAST_DAMAGELOCATOR_HIT;
  reset.Start(resetController);

  assertEquals(resetCalls.join(","), "object,locator");
  assertEquals(locatorCenter?.[0], 4);

  let attenuation = 0;
  const emitter = {
    SetAttenuationScalingFactor(value: number): void {
      attenuation = value;
    },
  };
  const attenuationController: ITr2ActionController = {
    GetOwner(): object {
      return {
        FindSoundEmitter(): object {
          return emitter;
        },
      };
    },
    GetFloatVariableByName(name: string): number | undefined {
      return name === "boost" ? 3 : 0;
    },
  };

  const scale = new Tr2ActionSetAttenuationScaling();
  scale.scalingFactor = 2;
  scale.controllerVariable = "zero";
  scale.Link(attenuationController);
  assertEquals(scale.GetScalingFactor(), 2);
  scale.Start(attenuationController);
  assertEquals(attenuation, 2);

  scale.controllerVariable = "boost";
  assertEquals(scale.GetScalingFactor(), 6);

  const order: string[] = [];
  const destination = {
    StartControllers(): void {
      order.push("start");
    },
    SetControllerVariable(name: string, value: number): void {
      order.push(`${name}:${value}`);
    },
  };
  const externalController: ITr2ActionController = {
    GetOwner(): object {
      return {
        GetBindingRoots(): Array<[string, object]> {
          return [["Child", destination]];
        },
      };
    },
    GetFloatVariableByName(name: string): number | undefined {
      return name === "source" ? 7 : undefined;
    },
  };
  const external = new Tr2ActionSetExternalControllerVariable();
  external.destinationOwner = "child";
  external.variable = "target";
  external.value = 2;
  external.sourceVariable = "source";
  external.startControllers = true;
  external.Link(externalController);
  assert(external.IsDestinationValid());
  external.Start(externalController);
  assertEquals(order.join(","), "start,target:7");

  external.destinationOwner = "";
  external.OnModified();
  assert(!external.IsDestinationValid());
});

function makeAction(
  name: string,
  events: string[],
  expectedController: ITr2ActionController,
): ITr2ControllerAction {
  return {
    Link(controller: ITr2ActionController): void {
      assertEquals(controller, expectedController);
      events.push(`${name}:link`);
    },
    Unlink(): void {
      events.push(`${name}:unlink`);
    },
    Start(controller: ITr2ActionController): void {
      assertEquals(controller, expectedController);
      events.push(`${name}:start`);
    },
    Stop(controller: ITr2ActionController): void {
      assertEquals(controller, expectedController);
      events.push(`${name}:stop`);
    },
  };
}

function makeChildOwner(name: string, events: string[]): {
  name: string;
  children: Array<{ name: string }>;
  AddChildFromPath(path: string, childName: string): object;
  RemoveFromEffectChildrenList(child: object): void;
} {
  return {
    name,
    children: [],
    AddChildFromPath(path: string, childName: string): object {
      events.push(`load:${path}:${childName}`);
      const child = {
        name: childName,
        path,
        StartControllers(): void {
          events.push("start");
        },
        StopControllers(): void {
          events.push("stop");
        },
      };
      this.children.push(child);
      return child;
    },
    RemoveFromEffectChildrenList(child: object): void {
      events.push("remove");
      const index = this.children.indexOf(child as { name: string });
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    },
  };
}

function makeOverlayOwner(events: string[], animated: boolean): {
  overlays: Array<{ name: string }>;
  IsAnimated(): boolean;
  GetOverlayEffectByName(name: string): object | null;
  LoadOverlayEffectFromPath(path: string): object;
  AddOverlayEffect(overlay: object): void;
  RemoveOverlayEffect(overlay: object): void;
} {
  return {
    overlays: [],
    IsAnimated(): boolean {
      return animated;
    },
    GetOverlayEffectByName(name: string): object | null {
      return this.overlays.find((overlay) => overlay.name === name) ?? null;
    },
    LoadOverlayEffectFromPath(path: string): object {
      events.push(`load:${path}`);
      return {
        path,
        StartControllers(): void {
          events.push("start");
        },
        StopControllers(): void {
          events.push("stop");
        },
      };
    },
    AddOverlayEffect(overlay: object): void {
      const named = overlay as { name: string };
      events.push(`add:${named.name}`);
      this.overlays.push(named);
    },
    RemoveOverlayEffect(overlay: object): void {
      const named = overlay as { name: string };
      events.push(`remove:${named.name}`);
      const index = this.overlays.indexOf(named);
      if (index !== -1) {
        this.overlays.splice(index, 1);
      }
    },
  };
}
