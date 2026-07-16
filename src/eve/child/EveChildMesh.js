// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildMesh.h
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildMesh.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\SpaceObject\Children\EveChildMesh_Blue.cpp
import { mat4 } from "@carbonenginejs/core-math/mat4";
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import { carbon, impl, io, schema, type } from "@carbonenginejs/core-types/schema";
import { EveChildTransform } from "./EveChildTransform.js";
import { Origin } from "../../generated/eve/child/enums.js";
import { ReflectionMode } from "../../generated/eve/enums.js";
import { Tr2Lod } from "../EveLODHelper.js";


@type.define({ className: "EveChildMesh", family: "eve/child" })
export class EveChildMesh extends EveChildTransform
{
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

  @io.read
  @type.int32
  @schema.enum("Origin")
  origin = 0;

  instanceTransforms = [];

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

  @carbon.method
  @impl.adapted
  GetSofSourceLocator()
  {
    return null;
  }

  static Origin = Origin;

  static ReflectionMode = ReflectionMode;

  static Tr2Lod = Tr2Lod;

}
