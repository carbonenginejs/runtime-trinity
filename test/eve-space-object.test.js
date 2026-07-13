import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import { EveEntity, EveSpaceObject2, TriObserverLocal } from "../npm/dist/index.js";


const assertVecNear = (actual, expected, epsilon = 1e-6) =>
{
  assert.equal(actual.length, expected.length);
  for (let index = 0; index < expected.length; index++)
  {
    assert.ok(Math.abs(actual[index] - expected[index]) <= epsilon,
      `component ${index}: expected ${expected[index]}, received ${actual[index]}`);
  }
};

test("EveSpaceObject2 owns the Carbon controller graph and mesh alias", () =>
{
  const object = new EveSpaceObject2();
  const mesh = {};
  const calls = [];
  const controller = {
    linked: false,
    IsLinked()
    {
      return this.linked;
    },
    Link(owner)
    {
      this.linked = true;
      calls.push(["link", owner]);
    },
    SetVariable(name, value)
    {
      calls.push(["controller-variable", name, value]);
    },
    HandleEvent(name)
    {
      calls.push(["controller-event", name]);
    },
    Start()
    {
      calls.push(["controller-start"]);
    }
  };
  const child = {
    name: "child",
    SetVariable(name, value)
    {
      calls.push(["wrong-child-variable", name, value]);
    },
    SetControllerVariable(name, value)
    {
      calls.push(["child-variable", name, value]);
    },
    HandleControllerEvent(name)
    {
      calls.push(["child-event", name]);
    },
    StartControllers()
    {
      calls.push(["child-start"]);
    },
    SetProceduralContainerVariable(name, value)
    {
      calls.push(["procedural", name, value]);
    }
  };
  const overlay = {
    SetControllerVariable(name, value)
    {
      calls.push(["overlay-variable", name, value]);
    },
    HandleControllerEvent(name)
    {
      calls.push(["overlay-event", name]);
    },
    StartControllers()
    {
      calls.push(["overlay-start"]);
    }
  };

  assert.equal(object instanceof EveEntity, true);
  assert.equal(CjsSchema.getClass("EveSpaceObject2"), EveSpaceObject2);
  object.SetMesh(mesh);
  assert.equal(object.GetMesh(), mesh);
  assert.equal(object.meshLod, mesh);
  object.meshLod = null;
  assert.equal(object.mesh, null);

  assert.deepEqual(object.GetControllerVariables(), {
    DirtLevel: 0,
    ActivationStrength: 1,
    ShieldDamage: 1,
    ArmorDamage: 1,
    HullDamage: 1,
    ClipSphereFactor: 0,
    ClipSphereFactor2: 0
  });

  object.AddController(controller);
  assert.equal(calls[0][0], "link");
  assert.equal(calls[0][1], object);
  assert.deepEqual(calls.slice(1).map(call => call.slice(1)), [
    ["DirtLevel", 0],
    ["ActivationStrength", 1],
    ["ShieldDamage", 1],
    ["ArmorDamage", 1],
    ["HullDamage", 1],
    ["ClipSphereFactor", 0],
    ["ClipSphereFactor2", 0]
  ]);
  const afterAdd = calls.slice();
  object.Initialize();
  assert.deepEqual(calls, afterAdd);

  calls.length = 0;
  object.AddToEffectChildrenList(child);
  assert.equal(calls.some(call => call[0] === "wrong-child-variable"), false);
  object.overlayEffects.push(overlay);
  assert.equal(object.GetEffectChildByName("child"), child);
  calls.length = 0;
  object.SetControllerVariable("DirtLevel", 0.75);
  object.HandleControllerEvent("activate");
  object.StartControllers();
  object.SetProceduralContainerVariable("seed", 42);
  assert.deepEqual(calls, [
    ["controller-variable", "DirtLevel", 0.75],
    ["child-variable", "DirtLevel", 0.75],
    ["overlay-variable", "DirtLevel", 0.75],
    ["controller-event", "activate"],
    ["child-event", "activate"],
    ["overlay-event", "activate"],
    ["controller-start"],
    ["child-start"],
    ["overlay-start"],
    ["procedural", "seed", 42]
  ]);
  assert.equal(object.RemoveFromEffectChildrenList(child), true);
  assert.equal(object.RemoveFromEffectChildrenList(child), false);
});

test("EveSpaceObject2 evaluates Carbon model curves into detached world transforms", () =>
{
  const object = new EveSpaceObject2();
  const halfSqrt = Math.SQRT1_2;
  const translationCurve = {
    Update(time, out)
    {
      assert.equal(time, 5);
      out[0] = 10;
      out[1] = 20;
      out[2] = 30;
    },
    GetValueAt()
    {
      assert.fail("a void-returning Update must not fall through to GetValueAt");
    },
    GetValueDotAt(time, out)
    {
      assert.equal(time, 5);
      out[0] = 1;
      out[1] = 2;
      out[2] = 3;
    }
  };
  const rotationCurve = {
    Update(_time, out)
    {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
    }
  };
  const modelRotationCurve = {
    Update(_time, out)
    {
      out[0] = 0;
      out[1] = 0;
      out[2] = halfSqrt;
      out[3] = halfSqrt;
    }
  };
  const modelTranslationCurve = {
    Update(_time, out)
    {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
    }
  };

  object.translationCurve = translationCurve;
  object.rotationCurve = rotationCurve;
  object.SetModelRotationCurve(modelRotationCurve);
  object.SetModelTranslationCurve(modelTranslationCurve);
  object.modelScale = 2;
  assert.equal(object.GetModelRotationCurve(), modelRotationCurve);
  assert.equal(object.GetModelTranslationCurve(), modelTranslationCurve);
  assert.equal(object.UpdateWorldTransform(5), true);
  assert.equal(object.UpdateWorldTransform(5), false);
  assertVecNear(object.worldPosition, [10, 20, 30]);
  assertVecNear(object.worldVelocity, [1, 2, 3]);
  assertVecNear(object.worldTransform.slice(12, 15), [10, 22, 30]);

  const identity = mat4.multiply(mat4.create(), object.worldTransform, object.inverseWorldTransform);
  assertVecNear(identity, mat4.create(), 1e-5);
  assert.notEqual(object.GetLocalToWorldTransform(), object.inverseWorldTransform);
  assert.equal(object.GetObserverTransform(), object.worldTransform);
});

test("EveSpaceObject2 drives observers, controller frequency, mute, and emitter lookup", () =>
{
  const object = new EveSpaceObject2();
  const calls = [];
  const emitter = {
    UpdatePlacement(front, up, position)
    {
      calls.push(["placement", Array.from(front), Array.from(up), Array.from(position)]);
    },
    Mute()
    {
      calls.push(["mute"]);
    },
    Unmute()
    {
      calls.push(["unmute"]);
    }
  };
  const observer = new TriObserverLocal();
  observer.name = "engine";
  observer.SetPosition([1, 2, 3]);
  observer.SetObserver(emitter);
  object.AddObserver(observer);
  object.translationCurve = {
    Update(_time, out)
    {
      out[0] = 10;
      out[1] = 20;
      out[2] = 30;
    }
  };
  object.controllers.push({
    Update(frequency)
    {
      calls.push(["frequency", frequency]);
    }
  });
  object.estimatedPixelDiameter = 50;
  const childUpdates = [];
  object.effectChildren.push({
    IsAlwaysOn()
    {
      return false;
    },
    UpdateSyncronous(context, params)
    {
      childUpdates.push(["synchronous", context, params]);
    },
    UpdateAsyncronous(context, params)
    {
      childUpdates.push(["asynchronous", context, params]);
    }
  });

  const synchronousContext = { currentTime: 4 };
  assert.equal(object.UpdateSyncronous(synchronousContext), true);
  assert.deepEqual(calls[0], ["placement", [0, 0, 1], [0, 1, 0], [11, 22, 33]]);
  assert.equal(childUpdates[0][0], "synchronous");
  assert.equal(childUpdates[0][1], synchronousContext);
  assert.equal(childUpdates[0][2].spaceObjectParent, object);
  assert.equal(childUpdates[0][2].activationStrength, 1);
  assert.equal(childUpdates[0][2].isVisible, true);
  assert.notEqual(childUpdates[0][2].localToWorldTransform, object.worldTransform);

  object.isVisible = true;
  const asynchronousContext = { highDetailThreshold: 100 };
  assert.equal(object.UpdateAsyncronous(asynchronousContext), 0.5);
  object.isVisible = false;
  assert.equal(object.UpdateAsyncronous(asynchronousContext), 0);
  assert.deepEqual(calls.slice(1, 3), [["frequency", 0.5], ["frequency", 0]]);
  assert.equal(childUpdates[1][0], "asynchronous");
  assert.equal(childUpdates[1][1], asynchronousContext);
  assert.equal(childUpdates[1][2].controllerUpdateFrequency, 0.5);
  assert.equal(childUpdates[2][2].controllerUpdateFrequency, 0);
  assert.equal(object.FindSoundEmitter("engine"), emitter);

  object.SetMute(true);
  object.SetMute(false);
  assert.deepEqual(calls.slice(3), [["mute"], ["unmute"]]);

  const nestedEmitter = {};
  object.effectChildren.push({
    FindSoundEmitter(name)
    {
      return name === "nested" ? nestedEmitter : null;
    }
  });
  assert.equal(object.FindSoundEmitter("nested"), nestedEmitter);

  object.observers.unshift({
    name: "silent",
    observer: emitter,
    GetObserver()
    {
      return null;
    }
  });
  assert.equal(object.FindSoundEmitter("silent"), null);
});

test("maintained EveSpaceObject2 and TriObserverLocal replace generated fallbacks", () =>
{
  const generatedSpaceObject = new URL("../src/generated/eve/spaceObject/EveSpaceObject2.js", import.meta.url);
  const generatedObserver = new URL("../src/generated/trinityCore/TriObserverLocal.js", import.meta.url);
  assert.equal(existsSync(generatedSpaceObject), false);
  assert.equal(existsSync(generatedObserver), false);

  const summary = JSON.parse(readFileSync(new URL("../src/generated/summary.json", import.meta.url), "utf8"));
  const skipped = summary.skipped.filter(entry =>
    entry.className === "EveSpaceObject2" || entry.className === "TriObserverLocal"
  );
  assert.deepEqual(skipped.map(entry => entry.className).sort(), ["EveSpaceObject2", "TriObserverLocal"]);
  assert.equal(skipped.every(entry => entry.reason === "hand-maintained source exists"), true);
});
