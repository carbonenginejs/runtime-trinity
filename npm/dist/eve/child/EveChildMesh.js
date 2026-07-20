import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform, applyTransformModifiers } from './EveChildTransform.js';
import { Origin } from '../../generated/eve/child/enums.js';
import { ReflectionMode } from '../../generated/eve/enums.js';
import { Tr2Lod } from '../EveLODHelper.js';

let _initProto, _initClass, _init_reflectionMode, _init_extra_reflectionMode, _init_transformModifiers, _init_extra_transformModifiers, _init_worldTransform, _init_extra_worldTransform, _init_display, _init_extra_display, _init_castShadow, _init_extra_castShadow, _init_mesh, _init_extra_mesh, _init_name, _init_extra_name, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_scaling, _init_extra_scaling, _init_localTransform, _init_extra_localTransform, _init_decals, _init_extra_decals, _init_staticTransform, _init_extra_staticTransform, _init_animationUpdater, _init_extra_animationUpdater, _init_attachments, _init_extra_attachments, _init_lights, _init_extra_lights, _init_lowestLodVisible, _init_extra_lowestLodVisible, _init_minScreenSize, _init_extra_minScreenSize, _init_sortValueOffset, _init_extra_sortValueOffset, _init_sortValueScale, _init_extra_sortValueScale, _init_currentScreenSize, _init_extra_currentScreenSize, _init_currentInstanceScreenSize, _init_extra_currentInstanceScreenSize, _init_useSRT, _init_extra_useSRT, _init_updateAnimation, _init_extra_updateAnimation, _init_origin, _init_extra_origin, _init_instanceTransforms, _init_extra_instanceTransforms, _init_sofDna, _init_extra_sofDna, _init_sofParentHullName, _init_extra_sofParentHullName, _init_sofLocatorSetName, _init_extra_sofLocatorSetName, _init_sofLocatorIndex, _init_extra_sofLocatorIndex;
let _EveChildMesh;
new class extends _identity {
  static [class EveChildMesh extends _EveChildTransform {
    static {
      ({
        e: [_init_reflectionMode, _init_extra_reflectionMode, _init_transformModifiers, _init_extra_transformModifiers, _init_worldTransform, _init_extra_worldTransform, _init_display, _init_extra_display, _init_castShadow, _init_extra_castShadow, _init_mesh, _init_extra_mesh, _init_name, _init_extra_name, _init_rotation, _init_extra_rotation, _init_translation, _init_extra_translation, _init_scaling, _init_extra_scaling, _init_localTransform, _init_extra_localTransform, _init_decals, _init_extra_decals, _init_staticTransform, _init_extra_staticTransform, _init_animationUpdater, _init_extra_animationUpdater, _init_attachments, _init_extra_attachments, _init_lights, _init_extra_lights, _init_lowestLodVisible, _init_extra_lowestLodVisible, _init_minScreenSize, _init_extra_minScreenSize, _init_sortValueOffset, _init_extra_sortValueOffset, _init_sortValueScale, _init_extra_sortValueScale, _init_currentScreenSize, _init_extra_currentScreenSize, _init_currentInstanceScreenSize, _init_extra_currentInstanceScreenSize, _init_useSRT, _init_extra_useSRT, _init_updateAnimation, _init_extra_updateAnimation, _init_origin, _init_extra_origin, _init_instanceTransforms, _init_extra_instanceTransforms, _init_sofDna, _init_extra_sofDna, _init_sofParentHullName, _init_extra_sofParentHullName, _init_sofLocatorSetName, _init_extra_sofLocatorSetName, _init_sofLocatorIndex, _init_extra_sofLocatorIndex, _initProto],
        c: [_EveChildMesh, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildMesh",
        family: "eve/child"
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("ReflectionMode")], 16, "reflectionMode"], [[io, io.persist, void 0, type.list("IEveChildTransformModifier")], 16, "transformModifiers"], [[io, io.read, type, type.mat4], 16, "worldTransform"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "castShadow"], [[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2MeshBase")], 16, "mesh"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.mat4], 16, "localTransform"], [[io, io.persist, void 0, type.list("EveSpaceObjectDecal")], 16, "decals"], [[io, io.persist, type, type.boolean], 16, "staticTransform"], [[io, io.notify, io, io.persist, void 0, type.objectRef("Tr2GrannyAnimation")], 16, "animationUpdater"], [[io, io.persist, void 0, type.list("IEveSpaceObjectAttachment")], 16, "attachments"], [[io, io.persist, void 0, type.list("Tr2Light")], 16, "lights"], [[io, io.persist, type, type.int32, void 0, schema.enum("Tr2Lod")], 16, "lowestLodVisible"], [[io, io.persist, type, type.float32], 16, "minScreenSize"], [[io, io.persist, type, type.float32], 16, "sortValueOffset"], [[io, io.persist, type, type.float32], 16, "sortValueScale"], [[io, io.read, type, type.float32], 16, "currentScreenSize"], [[io, io.read, type, type.float32], 16, "currentInstanceScreenSize"], [[io, io.persist, type, type.boolean], 16, "useSRT"], [[io, io.persist, type, type.boolean], 16, "updateAnimation"], [[io, io.persist, type, type.int32, void 0, schema.enum("Origin")], 16, "origin"], [[io, io.persist, void 0, type.array("mat4")], 16, "instanceTransforms"], [[io, io.persist, type, type.string], 16, "sofDna"], [[io, io.persist, type, type.string], 16, "sofParentHullName"], [[io, io.persist, type, type.string], 16, "sofLocatorSetName"], [[io, io.persist, type, type.string], 16, "sofLocatorIndex"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "Setup"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetInstanceTransforms"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetInstanceTransforms"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetMesh"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetOrigin"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetScale"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetReflectionMode"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetCastShadow"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetMinScreenSize"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocalToWorldTransform"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddTransformModifier"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddDecal"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddAttachment"], [[carbon, carbon.method, impl, impl.implemented], 18, "ClearAttachments"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddLight"], [[carbon, carbon.method, impl, impl.implemented], 18, "ClearLights"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsAlwaysOn"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMorphTargetNames"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetMorphTargetWeight"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMorphTargetWeight"], [[impl, impl.adapted], 18, "UpdateMorphAnimationBuffer"], [[impl, impl.adapted], 18, "GetMorphTargets"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetSofSourceLocator"], [[carbon, carbon.method, void 0, carbon.contextual(["camera"]), impl, impl.adapted], 18, "UpdateAsyncronous"]], 0, void 0, _EveChildTransform));
    }
    constructor(...args) {
      super(...args);
      _init_extra_sofLocatorIndex(this);
    }
    #isMorphsBaked = (_initProto(this), false);
    #morphAnimationBuffer = [];
    #morphAnimationOffsets = {
      runtimeEvaluatedOffset: 0,
      runtimeEvaluatedCount: 0,
      bakedOffset: 0,
      bakedCount: 0,
      allCount: 0
    };
    reflectionMode = _init_reflectionMode(this, 3);
    transformModifiers = (_init_extra_reflectionMode(this), _init_transformModifiers(this, []));
    worldTransform = (_init_extra_transformModifiers(this), _init_worldTransform(this, mat4.create()));
    display = (_init_extra_worldTransform(this), _init_display(this, true));
    castShadow = (_init_extra_display(this), _init_castShadow(this, false));
    mesh = (_init_extra_castShadow(this), _init_mesh(this, null));
    name = (_init_extra_mesh(this), _init_name(this, ""));
    rotation = (_init_extra_name(this), _init_rotation(this, quat.create()));
    translation = (_init_extra_rotation(this), _init_translation(this, vec3.create()));
    scaling = (_init_extra_translation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));
    localTransform = (_init_extra_scaling(this), _init_localTransform(this, mat4.create()));
    decals = (_init_extra_localTransform(this), _init_decals(this, []));
    staticTransform = (_init_extra_decals(this), _init_staticTransform(this, false));
    animationUpdater = (_init_extra_staticTransform(this), _init_animationUpdater(this, null));
    attachments = (_init_extra_animationUpdater(this), _init_attachments(this, []));
    lights = (_init_extra_attachments(this), _init_lights(this, []));
    lowestLodVisible = (_init_extra_lights(this), _init_lowestLodVisible(this, 0));
    minScreenSize = (_init_extra_lowestLodVisible(this), _init_minScreenSize(this, 0));
    sortValueOffset = (_init_extra_minScreenSize(this), _init_sortValueOffset(this, 0));
    sortValueScale = (_init_extra_sortValueOffset(this), _init_sortValueScale(this, 1));
    currentScreenSize = (_init_extra_sortValueScale(this), _init_currentScreenSize(this, -1));
    currentInstanceScreenSize = (_init_extra_currentScreenSize(this), _init_currentInstanceScreenSize(this, -1));
    useSRT = (_init_extra_currentInstanceScreenSize(this), _init_useSRT(this, true));
    updateAnimation = (_init_extra_useSRT(this), _init_updateAnimation(this, true));

    // SOF-authored placement/instance values; persisted so the values
    // interchange reproduces Carbon's hidden child placement state.
    origin = (_init_extra_updateAnimation(this), _init_origin(this, 0));
    instanceTransforms = (_init_extra_origin(this), _init_instanceTransforms(this, []));
    sofDna = (_init_extra_instanceTransforms(this), _init_sofDna(this, ""));
    sofParentHullName = (_init_extra_sofDna(this), _init_sofParentHullName(this, ""));
    sofLocatorSetName = (_init_extra_sofParentHullName(this), _init_sofLocatorSetName(this, ""));
    sofLocatorIndex = (_init_extra_sofLocatorSetName(this), _init_sofLocatorIndex(this, ""));
    Initialize() {
      if (this.staticTransform) {
        this.RebuildLocalTransform();
      }
      return true;
    }
    Setup(scale = null, rotation = null, translation = null, lowestLodVisible = null) {
      super.Setup(scale, rotation, translation, lowestLodVisible);
      if (lowestLodVisible !== null && lowestLodVisible !== undefined) {
        this.lowestLodVisible = Number(lowestLodVisible) | 0;
      }
      return this.localTransform;
    }
    SetInstanceTransforms(instances) {
      const next = [];
      for (const transform of instances ?? []) {
        if (!transform || transform.length !== 16) {
          throw new TypeError("EveChildMesh instance transforms must contain 16 values");
        }
        next.push(mat4.clone(transform));
      }
      this.instanceTransforms = next;
      return this.instanceTransforms;
    }
    GetInstanceTransforms() {
      return this.instanceTransforms;
    }
    SetMesh(mesh) {
      this.mesh = mesh ?? null;
    }
    SetOrigin(origin) {
      this.origin = Number(origin) | 0;
    }
    SetScale(scale) {
      vec3.copy(this.scaling, scale);
    }
    SetReflectionMode(mode) {
      this.reflectionMode = Number(mode) | 0;
    }
    SetCastShadow(castShadow) {
      this.castShadow = !!castShadow;
    }
    SetMinScreenSize(minScreenSize) {
      this.minScreenSize = Number(minScreenSize);
    }
    GetLocalToWorldTransform() {
      return this.worldTransform;
    }
    GetName() {
      return this.name;
    }
    SetName(name) {
      this.name = String(name ?? "");
    }
    AddTransformModifier(modifier) {
      this.transformModifiers.push(modifier);
    }
    AddDecal(decal) {
      this.decals.push(decal);
    }
    AddAttachment(attachment) {
      this.attachments.push(attachment);
    }
    ClearAttachments() {
      this.attachments.length = 0;
    }
    AddLight(light) {
      this.lights.push(light);
    }
    ClearLights() {
      this.lights.length = 0;
    }
    IsAlwaysOn() {
      return true;
    }
    SetShaderOption(name, value) {
      this.mesh?.SetShaderOption?.(name, value);
      for (const decal of this.decals) {
        decal?.SetShaderOption?.(name, value);
      }
      for (const attachment of this.attachments) {
        attachment?.SetShaderOption?.(name, value);
      }
    }
    GetMorphTargetNames() {
      return this.mesh?.GetMorphTargetNames?.() ?? [];
    }
    SetMorphTargetWeight(name, weight) {
      this.mesh?.SetMorphTargetWeight?.(name, weight);
    }
    GetMorphTargetWeight(name) {
      return this.mesh?.GetMorphTargetWeight?.(name) ?? 0;
    }

    /** Rebuilds the source-backed indexed morph buffer from manual and animation weights. */
    UpdateMorphAnimationBuffer() {
      const names = this.mesh?.GetMorphTargetNames?.();
      this.#morphAnimationOffsets = {
        runtimeEvaluatedOffset: 0,
        runtimeEvaluatedCount: 0,
        bakedOffset: 0,
        bakedCount: 0,
        allCount: 0
      };
      if (!Array.isArray(names)) {
        this.#morphAnimationBuffer = [];
        return 0;
      }
      const manual = this.mesh?.GetMorphAnimations?.();
      const records = names.map((name, index) => ({
        index,
        weight: ReadMorphWeight(ReadNamedMorph(manual, name) ?? this.mesh?.GetMorphTargetWeight?.(name) ?? 0, name, "mesh"),
        baked: !!(this.mesh?.IsBakedMorph?.(index) ?? this.mesh?.GetBakedMorphTarget?.(name) ?? false)
      }));
      if (this.animationUpdater?.IsInitialized?.()) {
        const animated = this.animationUpdater.GetMorphAnimations?.();
        for (const record of records) {
          const name = names[record.index];
          const value = ReadNamedMorph(animated, name);
          if (value !== undefined) {
            record.weight = ReadMorphWeight(value, name, "animation");
          }
        }
      }
      const runtime = [];
      const baked = [];
      const inactive = [];
      for (const record of records) {
        if (record.weight >= 0.001) {
          (record.baked ? baked : runtime).push(record);
        } else {
          inactive.push(record);
        }
      }
      this.#morphAnimationBuffer = [...runtime, ...baked, ...inactive];
      this.#morphAnimationOffsets.runtimeEvaluatedCount = runtime.length;
      this.#morphAnimationOffsets.bakedOffset = runtime.length;
      this.#morphAnimationOffsets.bakedCount = baked.length;
      this.#morphAnimationOffsets.allCount = runtime.length + baked.length;
      return this.#morphAnimationOffsets.allCount;
    }

    /** Returns detached active indexed morph records for the native filter. */
    GetMorphTargets(filter = 2) {
      const normalized = NormalizeMorphFilter(filter);
      let offset = 0;
      let count = 0;
      if (normalized === 2) {
        count = this.#morphAnimationOffsets.allCount;
      } else if (normalized === 0) {
        offset = this.#isMorphsBaked ? this.#morphAnimationOffsets.runtimeEvaluatedOffset : 0;
        count = this.#isMorphsBaked ? this.#morphAnimationOffsets.runtimeEvaluatedCount : this.#morphAnimationOffsets.allCount;
      } else {
        offset = this.#morphAnimationOffsets.bakedOffset;
        count = this.#morphAnimationOffsets.bakedCount;
      }
      return this.#morphAnimationBuffer.slice(offset, offset + count).map(value => ({
        index: value.index,
        weight: value.weight
      }));
    }
    GetSofSourceLocator() {
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
    UpdateAsyncronous(updateContext, params) {
      const parentTransform = params?.localToWorldTransform;
      if (parentTransform && parentTransform.length === 16) {
        this.UpdateTransform(parentTransform);
      }
      const result = applyTransformModifiers(this, updateContext, params?.boneCount ?? 0, params?.bones ?? null);
      this.UpdateMorphAnimationBuffer();
      return result;
    }
  }];
  Origin = Origin;
  ReflectionMode = ReflectionMode;
  Tr2Lod = Tr2Lod;
  constructor() {
    super(_EveChildMesh), _initClass();
  }
}();
function ReadNamedMorph(values, name) {
  if (values instanceof Map) {
    return values.has(name) ? values.get(name) : undefined;
  }
  if (values && typeof values === "object" && Object.hasOwn(values, name)) {
    return values[name];
  }
  return undefined;
}
function ReadMorphWeight(value, name, source) {
  const weight = Number(value && typeof value === "object" ? value.weight : value);
  if (!Number.isFinite(weight)) {
    throw new TypeError(`EveChildMesh ${source} morph target "${name}" weight must be finite`);
  }
  return weight;
}
function NormalizeMorphFilter(value) {
  if (typeof value === "string") {
    const normalized = value.toLowerCase();
    if (normalized === "runtime" || normalized === "runtime_evaluated") return 0;
    if (normalized === "baked") return 1;
    if (normalized === "all") return 2;
  }
  const filter = Number(value);
  if (filter === 0 || filter === 1 || filter === 2) return filter;
  throw new TypeError(`Unsupported EveChildMesh morph target filter "${value}"`);
}

export { _EveChildMesh as EveChildMesh };
//# sourceMappingURL=EveChildMesh.js.map
