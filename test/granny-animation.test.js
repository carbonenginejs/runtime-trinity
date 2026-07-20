import test from "node:test";
import assert from "node:assert/strict";
import { CjsSchema } from "@carbonenginejs/core-types/schema";
import { Tr2GrannyAnimation } from "../npm/dist/generated/trinityCore/Tr2GrannyAnimation.js";


const identity3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
const identity4 = [0, 0, 0, 1];


function explicitCurve(knots, controls, dimension, degree = 1)
{
  return { knots, controls, dimension, degree };
}


function createResource()
{
  return {
    models: [{
      name: "Ship",
      skeleton: {
        bones: [{
          name: "Root",
          parentIndex: -1,
          position: [0, 0, 0],
          orientation: identity4,
          scaleShear: identity3
        }, {
          name: "Child",
          parentIndex: 0,
          position: [0, 2, 0],
          orientation: identity4,
          scaleShear: identity3
        }]
      },
      meshBindings: [0]
    }],
    meshes: [{
      boneBindings: [{ name: "Root" }, { name: "Child" }]
    }],
    animations: [{
      name: "Move",
      duration: 2,
      trackGroups: [{
        name: "Ship",
        transformTracks: [{
          name: "Root",
          position: explicitCurve([0, 2], [0, 0, 0, 10, 0, 0], 3),
          orientation: explicitCurve([0], identity4, 4, 0),
          scaleShear: explicitCurve([0], identity3, 9, 0)
        }]
      }]
    }]
  };
}


test("Tr2GrannyAnimation builds and samples browser bone matrices", () =>
{
  const animation = new Tr2GrannyAnimation();
  animation.model_ = "Ship";
  assert.equal(animation.SetGrannyResource(createResource()), true);
  assert.equal(animation.IsInitialized(), true);
  assert.equal(animation.GetMeshBoneCount(), 2);
  assert.deepEqual(animation.GetAnimationBoneList(), ["Root", "Child"]);
  assert.deepEqual(animation.GetAnimationNames(), ["Move"]);

  assert.equal(animation.PlayAnimation("Move", true, 0, 0, 1, false), true);
  assert.equal(animation.Update(1), true);
  const bones = animation.GetMeshBoneMatrixList();
  assert.equal(bones.length, 2);
  assert.ok(Math.abs(bones[0][12] - 5) < 1e-6);
  assert.ok(Math.abs(bones[1][12] - 5) < 1e-6);

  assert.equal(CjsSchema.getMethod(Tr2GrannyAnimation, "PlayAnimation")?.carbon?.method, true);
  assert.equal(CjsSchema.getMethod(Tr2GrannyAnimation, "PlayAnimationOnce")?.carbon?.method, undefined);
});


test("Tr2GrannyAnimation handles reverse, paused, and masked-layer playback", () =>
{
  const animation = new Tr2GrannyAnimation();
  animation.model_ = "Ship";
  animation.SetGrannyResource(createResource());
  animation.PlayAnimation("Move", true, 0, 0, -1, false);
  animation.Update(0.5);
  assert.ok(Math.abs(animation.GetMeshBoneMatrixList()[0][12] - 7.5) < 1e-6);

  animation.TogglePauseAnimations(true);
  animation.Update(1);
  assert.ok(Math.abs(animation.GetMeshBoneMatrixList()[0][12] - 7.5) < 1e-6);
  animation.TogglePauseAnimations(false);

  assert.equal(animation.AddAnimationLayer("upper", 0.5), true);
  assert.equal(animation.AddAnimationLayerBone("upper", "Child"), true);
  assert.equal(animation.PlayLayerAnimation("upper", "Move", true, 0, 0, 1, false), true);
  assert.equal(animation.GetLayerWeight("upper"), 0.5);
  assert.equal(animation.RemoveAnimationLayerBone("upper", "Child"), true);
  animation.ClearAnimationLayers();
  assert.equal(animation.GetLayerWeight("upper"), 0);
});
