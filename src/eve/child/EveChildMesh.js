// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildMesh.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildMesh.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildMesh_Blue.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { EveChildTransform, applyTransformModifiers } from "./EveChildTransform.js";
import { Origin } from "../../generated/eve/child/enums.js";
import { ReflectionMode } from "../../generated/eve/enums.js";
import { Tr2Lod } from "../EveLODHelper.js";


@type.define({ className: "EveChildMesh", family: "eve/child" })
export class EveChildMesh extends EveChildTransform
{
  #isMorphsBaked = false;

  #morphAnimationBuffer = [];

  #morphAnimationOffsets = {
    runtimeEvaluatedOffset: 0,
    runtimeEvaluatedCount: 0,
    bakedOffset: 0,
    bakedCount: 0,
    allCount: 0
  };

  @io.notify
  @io.persist
  @type.int32
  @schema.enum("ReflectionMode")
  reflectionMode = 3;

  @io.persist
  @type.list("IEveChildTransformModifier")
  transformModifiers = [];

  @io.read
  @type.mat4
  worldTransform = mat4.create();

  @io.notify
  @io.persist
  @type.boolean
  display = true;

  @io.notify
  @io.persist
  @type.boolean
  castShadow = false;

  @io.notify
  @io.persist
  @type.objectRef("Tr2MeshBase")
  mesh = null;

  @io.persist
  @type.string
  name = "";

  @io.persist
  @type.quat
  rotation = quat.create();

  @io.persist
  @type.vec3
  translation = vec3.create();

  @io.persist
  @type.vec3
  scaling = vec3.fromValues(1, 1, 1);

  @io.persist
  @type.mat4
  localTransform = mat4.create();

  @io.persist
  @type.list("EveSpaceObjectDecal")
  decals = [];

  @io.persist
  @type.boolean
  staticTransform = false;

  @io.notify
  @io.persist
  @type.objectRef("Tr2GrannyAnimation")
  animationUpdater = null;

  @io.persist
  @type.list("IEveSpaceObjectAttachment")
  attachments = [];

  @io.persist
  @type.list("Tr2Light")
  lights = [];

  @io.persist
  @type.int32
  @schema.enum("Tr2Lod")
  lowestLodVisible = 0;

  @io.persist
  @type.float32
  minScreenSize = 0;

  @io.persist
  @type.float32
  sortValueOffset = 0;

  @io.persist
  @type.float32
  sortValueScale = 1;

  @io.read
  @type.float32
  currentScreenSize = -1;

  @io.read
  @type.float32
  currentInstanceScreenSize = -1;

  @io.persist
  @type.boolean
  useSRT = true;

  @io.persist
  @type.boolean
  updateAnimation = true;

  // SOF-authored placement/instance values; persisted so the values
  // interchange reproduces Carbon's hidden child placement state.
  @io.persist
  @type.int32
  @schema.enum("Origin")
  origin = 0;

  @io.rebuild("instanceBuffer")
  @io.persist
  @type.array("mat4")
  instanceTransforms = [];

  @io.persist
  @type.string
  sofDna = "";

  @io.persist
  @type.string
  sofParentHullName = "";

  @io.persist
  @type.string
  sofLocatorSetName = "";

  @io.persist
  @type.string
  sofLocatorIndex = "";

  @carbon.method
  @impl.adapted
  Initialize()
  {
    if (this.staticTransform)
    {
      this.RebuildLocalTransform();
    }
    return true;
  }

  @carbon.method
  @impl.implemented
  Setup(scale = null, rotation = null, translation = null, lowestLodVisible = null)
  {
    super.Setup(scale, rotation, translation, lowestLodVisible);
    if (lowestLodVisible !== null && lowestLodVisible !== undefined)
    {
      this.lowestLodVisible = Number(lowestLodVisible) | 0;
    }
    return this.localTransform;
  }

  @carbon.method
  @impl.implemented
  SetInstanceTransforms(instances)
  {
    const next = [];
    for (const transform of instances ?? [])
    {
      if (!transform || transform.length !== 16)
      {
        throw new TypeError("EveChildMesh instance transforms must contain 16 values");
      }
      next.push(mat4.clone(transform));
    }
    this.instanceTransforms = next;
    return this.instanceTransforms;
  }

  @carbon.method
  @impl.adapted
  GetInstanceTransforms()
  {
    return this.instanceTransforms;
  }

  @carbon.method
  @impl.implemented
  SetMesh(mesh)
  {
    this.mesh = mesh ?? null;
  }

  @carbon.method
  @impl.implemented
  SetOrigin(origin)
  {
    this.origin = Number(origin) | 0;
  }

  @carbon.method
  @impl.implemented
  SetScale(scale)
  {
    vec3.copy(this.scaling, scale);
  }

  @carbon.method
  @impl.implemented
  SetReflectionMode(mode)
  {
    this.reflectionMode = Number(mode) | 0;
  }

  @carbon.method
  @impl.implemented
  SetCastShadow(castShadow)
  {
    this.castShadow = !!castShadow;
  }

  @carbon.method
  @impl.implemented
  SetMinScreenSize(minScreenSize)
  {
    this.minScreenSize = Number(minScreenSize);
  }

  @carbon.method
  @impl.implemented
  GetLocalToWorldTransform()
  {
    return this.worldTransform;
  }

  @carbon.method
  @impl.implemented
  GetName()
  {
    return this.name;
  }

  @carbon.method
  @impl.implemented
  SetName(name)
  {
    this.name = String(name ?? "");
  }

  @carbon.method
  @impl.implemented
  AddTransformModifier(modifier)
  {
    this.transformModifiers.push(modifier);
  }

  @carbon.method
  @impl.implemented
  AddDecal(decal)
  {
    this.decals.push(decal);
  }

  @carbon.method
  @impl.implemented
  AddAttachment(attachment)
  {
    this.attachments.push(attachment);
  }

  @carbon.method
  @impl.implemented
  ClearAttachments()
  {
    this.attachments.length = 0;
  }

  @carbon.method
  @impl.implemented
  AddLight(light)
  {
    this.lights.push(light);
  }

  @carbon.method
  @impl.implemented
  ClearLights()
  {
    this.lights.length = 0;
  }

  @carbon.method
  @impl.implemented
  IsAlwaysOn()
  {
    return true;
  }

  @carbon.method
  @impl.implemented
  SetShaderOption(name, value)
  {
    this.mesh?.SetShaderOption?.(name, value);
    for (const decal of this.decals)
    {
      decal?.SetShaderOption?.(name, value);
    }
    for (const attachment of this.attachments)
    {
      attachment?.SetShaderOption?.(name, value);
    }
  }

  @carbon.method
  @impl.adapted
  GetMorphTargetNames()
  {
    return this.mesh?.GetMorphTargetNames?.() ?? [];
  }

  @carbon.method
  @impl.adapted
  SetMorphTargetWeight(name, weight)
  {
    this.mesh?.SetMorphTargetWeight?.(name, weight);
  }

  @carbon.method
  @impl.adapted
  GetMorphTargetWeight(name)
  {
    return this.mesh?.GetMorphTargetWeight?.(name) ?? 0;
  }

  /** Rebuilds the source-backed indexed morph buffer from manual and animation weights. */
  @impl.adapted
  UpdateMorphAnimationBuffer()
  {
    const names = this.mesh?.GetMorphTargetNames?.();

    this.#morphAnimationOffsets = {
      runtimeEvaluatedOffset: 0,
      runtimeEvaluatedCount: 0,
      bakedOffset: 0,
      bakedCount: 0,
      allCount: 0
    };

    if (!Array.isArray(names))
    {
      this.#morphAnimationBuffer = [];
      return 0;
    }

    const manual = this.mesh?.GetMorphAnimations?.();
    const records = names.map((name, index) => ({
      index,
      weight: ReadMorphWeight(
        ReadNamedMorph(manual, name) ?? this.mesh?.GetMorphTargetWeight?.(name) ?? 0,
        name,
        "mesh"
      ),
      baked: !!(this.mesh?.IsBakedMorph?.(index)
        ?? this.mesh?.GetBakedMorphTarget?.(name)
        ?? false)
    }));

    if (this.animationUpdater?.IsInitialized?.())
    {
      const animated = this.animationUpdater.GetMorphAnimations?.();

      for (const record of records)
      {
        const name = names[record.index];
        const value = ReadNamedMorph(animated, name);

        if (value !== undefined)
        {
          record.weight = ReadMorphWeight(value, name, "animation");
        }
      }
    }

    const runtime = [];
    const baked = [];
    const inactive = [];

    for (const record of records)
    {
      if (record.weight >= 0.001)
      {
        (record.baked ? baked : runtime).push(record);
      }
      else
      {
        inactive.push(record);
      }
    }

    this.#morphAnimationBuffer = [ ...runtime, ...baked, ...inactive ];
    this.#morphAnimationOffsets.runtimeEvaluatedCount = runtime.length;
    this.#morphAnimationOffsets.bakedOffset = runtime.length;
    this.#morphAnimationOffsets.bakedCount = baked.length;
    this.#morphAnimationOffsets.allCount = runtime.length + baked.length;
    return this.#morphAnimationOffsets.allCount;
  }

  /** Returns detached active indexed morph records for the native filter. */
  @impl.adapted
  GetMorphTargets(filter = 2)
  {
    const normalized = NormalizeMorphFilter(filter);
    let offset = 0;
    let count = 0;

    if (normalized === 2)
    {
      count = this.#morphAnimationOffsets.allCount;
    }
    else if (normalized === 0)
    {
      offset = this.#isMorphsBaked
        ? this.#morphAnimationOffsets.runtimeEvaluatedOffset
        : 0;
      count = this.#isMorphsBaked
        ? this.#morphAnimationOffsets.runtimeEvaluatedCount
        : this.#morphAnimationOffsets.allCount;
    }
    else
    {
      offset = this.#morphAnimationOffsets.bakedOffset;
      count = this.#morphAnimationOffsets.bakedCount;
    }

    return this.#morphAnimationBuffer.slice(offset, offset + count)
      .map(value => ({ index: value.index, weight: value.weight }));
  }

  @carbon.method
  @impl.adapted
  GetSofSourceLocator()
  {
    return null;
  }

  /**
   * Per-frame async update: rebuild the world transform from the parent, then
   * fold the transform modifiers over it. Ports the transform+modifier core of
   * EveChildMesh::UpdateAsyncronous (Carbon); the bone/morph offset advance and
   * per-object-data invalidation Carbon also does here are not modelled in this
   * runtime, hence @impl.adapted.
   * @param {Object} updateContext - frame context (EveUpdateContext), threaded to modifiers
   * @param {EveChildUpdateParams} params - localToWorldTransform + boneCount/bones
   * @returns {Float32Array} worldTransform
   */
  @carbon.method
  @carbon.contextual(["camera"])
  @impl.adapted
  UpdateAsyncronous(updateContext, params)
  {
    const parentTransform = params?.localToWorldTransform;

    if (parentTransform && parentTransform.length === 16)
    {
      this.UpdateTransform(parentTransform);
    }

    const result = applyTransformModifiers(
      this,
      updateContext,
      params?.boneCount ?? 0,
      params?.bones ?? null
    );
    this.UpdateMorphAnimationBuffer();
    return result;
  }

  static Origin = Origin;

  static ReflectionMode = ReflectionMode;

  static Tr2Lod = Tr2Lod;

}

function ReadNamedMorph(values, name)
{
  if (values instanceof Map)
  {
    return values.has(name) ? values.get(name) : undefined;
  }

  if (values && typeof values === "object" && Object.hasOwn(values, name))
  {
    return values[name];
  }

  return undefined;
}

function ReadMorphWeight(value, name, source)
{
  const weight = Number(value && typeof value === "object" ? value.weight : value);

  if (!Number.isFinite(weight))
  {
    throw new TypeError(`EveChildMesh ${source} morph target "${name}" weight must be finite`);
  }

  return weight;
}

function NormalizeMorphFilter(value)
{
  if (typeof value === "string")
  {
    const normalized = value.toLowerCase();
    if (normalized === "runtime" || normalized === "runtime_evaluated") return 0;
    if (normalized === "baked") return 1;
    if (normalized === "all") return 2;
  }

  const filter = Number(value);
  if (filter === 0 || filter === 1 || filter === 2) return filter;
  throw new TypeError(`Unsupported EveChildMesh morph target filter "${value}"`);
}
