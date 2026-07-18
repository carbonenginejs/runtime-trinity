import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform, applyTransformModifiers } from './EveChildTransform.js';
import { Origin } from '../../generated/eve/child/enums.js';

let _initProto, _initClass, _init_displayFilter, _init_extra_displayFilter, _init_objects, _init_extra_objects, _init_transformModifiers, _init_extra_transformModifiers, _init_curveSets, _init_extra_curveSets, _init_worldTransform, _init_extra_worldTransform, _init_mute, _init_extra_mute, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_translation, _init_extra_translation, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_localTransform, _init_extra_localTransform, _init_staticTransform, _init_extra_staticTransform, _init_alwaysOn, _init_extra_alwaysOn, _init_updateOnDisplay, _init_extra_updateOnDisplay, _init_attachments, _init_extra_attachments, _init_observers, _init_extra_observers, _init_fxAttributes, _init_extra_fxAttributes, _init_lights, _init_extra_lights, _init_controllers, _init_extra_controllers, _init_inheritProperties, _init_extra_inheritProperties, _init_useSRT, _init_extra_useSRT, _init_useStaticRotation, _init_extra_useStaticRotation, _init_useStaticScale, _init_extra_useStaticScale, _init_animationOwner, _init_extra_animationOwner, _init_origin, _init_extra_origin;
let _EveChildContainer;
new class extends _identity {
  static [class EveChildContainer extends _EveChildTransform {
    static {
      ({
        e: [_init_displayFilter, _init_extra_displayFilter, _init_objects, _init_extra_objects, _init_transformModifiers, _init_extra_transformModifiers, _init_curveSets, _init_extra_curveSets, _init_worldTransform, _init_extra_worldTransform, _init_mute, _init_extra_mute, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_translation, _init_extra_translation, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_localTransform, _init_extra_localTransform, _init_staticTransform, _init_extra_staticTransform, _init_alwaysOn, _init_extra_alwaysOn, _init_updateOnDisplay, _init_extra_updateOnDisplay, _init_attachments, _init_extra_attachments, _init_observers, _init_extra_observers, _init_fxAttributes, _init_extra_fxAttributes, _init_lights, _init_extra_lights, _init_controllers, _init_extra_controllers, _init_inheritProperties, _init_extra_inheritProperties, _init_useSRT, _init_extra_useSRT, _init_useStaticRotation, _init_extra_useStaticRotation, _init_useStaticScale, _init_extra_useStaticScale, _init_animationOwner, _init_extra_animationOwner, _init_origin, _init_extra_origin, _initProto],
        c: [_EveChildContainer, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildContainer",
        family: "eve/child"
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("DisplayQualityModifier")], 16, "displayFilter"], [[io, io.persist, void 0, type.list("IEveSpaceObjectChild")], 16, "objects"], [[io, io.persist, void 0, type.list("IEveChildTransformModifier")], 16, "transformModifiers"], [[io, io.persist, void 0, type.list("TriCurveSet")], 16, "curveSets"], [[io, io.read, type, type.mat4], 16, "worldTransform"], [[io, io.notify, io, io.readwrite, type, type.boolean], 16, "mute"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.vec3], 16, "translation"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.mat4], 16, "localTransform"], [[io, io.persist, type, type.boolean], 16, "staticTransform"], [[io, io.persist, type, type.boolean], 16, "alwaysOn"], [[io, io.persist, type, type.boolean], 16, "updateOnDisplay"], [[io, io.persist, void 0, type.list("IEveSpaceObjectAttachment")], 16, "attachments"], [[io, io.persist, void 0, type.list("TriObserverLocal")], 16, "observers"], [[io, io.persist, void 0, type.list("IEveFxAttribute")], 16, "fxAttributes"], [[io, io.persist, void 0, type.list("Tr2Light")], 16, "lights"], [[io, io.persist, void 0, type.list("ITr2Controller")], 16, "controllers"], [[io, io.persist, void 0, type.objectRef("EveChildInheritProperties")], 16, "inheritProperties"], [[io, io.persist, type, type.boolean], 16, "useSRT"], [[io, io.persist, type, type.boolean], 16, "useStaticRotation"], [[io, io.persist, type, type.boolean], 16, "useStaticScale"], [[io, io.read, void 0, type.objectRef("ITr2GrannyAnimationOwner")], 16, "animationOwner"], [[io, io.read, type, type.int32, void 0, schema.enum("Origin")], 16, "origin"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "Setup"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetName"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetOrigin"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetAlwaysOn"], [[carbon, carbon.method, impl, impl.implemented], 18, "IsAlwaysOn"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetDisplayQualityModifier"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetMute"], [[carbon, carbon.method, impl, impl.implemented], 18, "MuteChildren"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddTransformModifier"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddObserver"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddController"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.implemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.implemented], 18, "StartControllers"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetProceduralContainerVariable"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetEffectChildByName"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddToEffectChildrenList"], [[carbon, carbon.method, impl, impl.implemented], 18, "RemoveFromEffectChildrenList"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetShaderOption"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetAnimationOwner"], [[carbon, carbon.method, impl, impl.implemented], 18, "AddAttachment"], [[carbon, carbon.method, impl, impl.implemented], 18, "ClearAttachments"], [[carbon, carbon.method, impl, impl.implemented], 18, "Empty"], [[carbon, carbon.method, void 0, carbon.contextual(["camera"]), impl, impl.adapted], 18, "UpdateAsyncronous"]], 0, void 0, _EveChildTransform));
    }
    displayFilter = (_initProto(this), _init_displayFilter(this, 5));
    objects = (_init_extra_displayFilter(this), _init_objects(this, []));
    transformModifiers = (_init_extra_objects(this), _init_transformModifiers(this, []));
    curveSets = (_init_extra_transformModifiers(this), _init_curveSets(this, []));
    worldTransform = (_init_extra_curveSets(this), _init_worldTransform(this, mat4.create()));
    mute = (_init_extra_worldTransform(this), _init_mute(this, false));
    display = (_init_extra_mute(this), _init_display(this, true));
    name = (_init_extra_display(this), _init_name(this, ""));
    translation = (_init_extra_name(this), _init_translation(this, vec3.create()));
    rotation = (_init_extra_translation(this), _init_rotation(this, quat.create()));
    scaling = (_init_extra_rotation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));
    localTransform = (_init_extra_scaling(this), _init_localTransform(this, mat4.create()));
    staticTransform = (_init_extra_localTransform(this), _init_staticTransform(this, false));
    alwaysOn = (_init_extra_staticTransform(this), _init_alwaysOn(this, false));
    updateOnDisplay = (_init_extra_alwaysOn(this), _init_updateOnDisplay(this, true));
    attachments = (_init_extra_updateOnDisplay(this), _init_attachments(this, []));
    observers = (_init_extra_attachments(this), _init_observers(this, []));
    fxAttributes = (_init_extra_observers(this), _init_fxAttributes(this, []));
    lights = (_init_extra_fxAttributes(this), _init_lights(this, []));
    controllers = (_init_extra_lights(this), _init_controllers(this, []));
    inheritProperties = (_init_extra_controllers(this), _init_inheritProperties(this, null));
    useSRT = (_init_extra_inheritProperties(this), _init_useSRT(this, true));
    useStaticRotation = (_init_extra_useSRT(this), _init_useStaticRotation(this, false));
    useStaticScale = (_init_extra_useStaticRotation(this), _init_useStaticScale(this, false));
    animationOwner = (_init_extra_useStaticScale(this), _init_animationOwner(this, null));
    origin = (_init_extra_animationOwner(this), _init_origin(this, 0));
    #controllerVariables = (_init_extra_origin(this), new Map());
    Initialize() {
      for (const controller of this.controllers) {
        if (!controller?.IsLinked?.()) {
          controller?.Link?.(this);
        }
      }
      return true;
    }
    Setup(scale = null, rotation = null, translation = null, lowestLodVisible = null) {
      return super.Setup(scale, rotation, translation, lowestLodVisible);
    }
    GetName() {
      return this.name;
    }
    SetName(name) {
      this.name = String(name ?? "");
    }
    SetOrigin(origin) {
      this.origin = Number(origin) | 0;
    }
    SetAlwaysOn(alwaysOn) {
      this.alwaysOn = !!alwaysOn;
    }
    IsAlwaysOn() {
      return this.alwaysOn;
    }
    SetDisplayQualityModifier(filter) {
      this.displayFilter = Number(filter) | 0;
    }
    SetMute(mute) {
      const next = !!mute;
      if (next !== this.mute) {
        this.mute = next;
        this.MuteChildren();
      }
    }
    MuteChildren() {
      for (const child of this.objects) {
        child?.SetMute?.(this.mute);
      }
      for (const observer of this.observers) {
        observer?.SetMute?.(this.mute);
      }
    }
    AddTransformModifier(modifier) {
      this.transformModifiers.push(modifier);
    }
    AddObserver(observer) {
      this.observers.push(observer);
    }
    AddController(controller) {
      this.controllers.push(controller);
      controller?.Link?.(this);
      for (const [name, value] of this.#controllerVariables) {
        controller?.SetVariable?.(name, value);
      }
    }
    SetControllerVariable(name, value) {
      const key = String(name ?? "");
      const next = Number(value);
      this.#controllerVariables.set(key, next);
      for (const controller of this.controllers) {
        controller?.SetVariable?.(key, next);
      }
      for (const child of this.objects) {
        child?.SetControllerVariable?.(key, next);
      }
    }
    HandleControllerEvent(name) {
      const eventName = String(name ?? "");
      for (const controller of this.controllers) {
        controller?.HandleEvent?.(eventName);
      }
      for (const child of this.objects) {
        child?.HandleControllerEvent?.(eventName);
      }
    }
    StartControllers() {
      for (const controller of this.controllers) {
        controller?.Start?.();
      }
      for (const child of this.objects) {
        child?.StartControllers?.();
      }
    }
    SetProceduralContainerVariable(name, value) {
      for (const child of this.objects) {
        child?.SetProceduralContainerVariable?.(name, value);
      }
    }
    GetEffectChildByName(name) {
      const target = String(name ?? "");
      for (const child of this.objects) {
        if ((child?.GetName?.() ?? child?.name ?? "") === target) {
          return child;
        }
      }
      return null;
    }
    AddToEffectChildrenList(child) {
      this.objects.push(child);
      for (const [name, value] of this.#controllerVariables) {
        child?.SetControllerVariable?.(name, value);
      }
      return child;
    }
    RemoveFromEffectChildrenList(child) {
      const index = this.objects.indexOf(child);
      if (index !== -1) {
        this.objects.splice(index, 1);
        return true;
      }
      return false;
    }
    SetShaderOption(name, value) {
      for (const child of this.objects) {
        child?.SetShaderOption?.(name, value);
      }
      for (const attachment of this.attachments) {
        attachment?.SetShaderOption?.(name, value);
      }
    }
    SetAnimationOwner(animationOwner) {
      this.animationOwner = animationOwner ?? null;
    }
    AddAttachment(attachment) {
      this.attachments.push(attachment);
    }
    ClearAttachments() {
      this.attachments.length = 0;
    }
    Empty() {
      return this.objects.length === 0 && this.lights.length === 0 && this.attachments.length === 0 && this.controllers.length === 0 && this.curveSets.length === 0 && this.transformModifiers.length === 0 && this.observers.length === 0;
    }

    /**
     * Per-frame async update: rebuild the world transform from the parent, tick
     * this container's controllers, then fold the transform modifiers over the
     * world transform. Ports EveChildContainer::DoUpdateAsyncronous (Carbon);
     * @impl.adapted because the task-group dispatch wrapper and the Granny
     * bone-list override are not modelled yet (see note below).
     * @param {Object} updateContext - frame context (EveUpdateContext), threaded to modifiers
     * @param {EveChildUpdateParams} params - localToWorldTransform + boneCount/bones
     * @returns {Float32Array} worldTransform
     */
    UpdateAsyncronous(updateContext, params) {
      const parentTransform = params?.localToWorldTransform;
      if (parentTransform && parentTransform.length === 16) {
        this.UpdateTransform(parentTransform);
      }
      const frequency = params?.controllerUpdateFrequency ?? 0.5;
      for (const controller of this.controllers) {
        controller?.Update?.(frequency);
      }

      // Carbon's DoUpdateAsyncronous overrides boneCount/bones from this
      // container's own animation controller here (Tr2GrannyAnimationUtils::
      // GetBoneList) before folding modifiers. Deferred until the Granny bone-list
      // API and the bone-consuming EveChildModifierAttachToBone are ported; no
      // currently-ported modifier reads bones.
      return applyTransformModifiers(this, updateContext, params?.boneCount ?? 0, params?.bones ?? null);
    }
  }];
  DisplayQualityModifier = Object.freeze({
    ONLY_REFLECTIONS: 6,
    SHADER_ALL: 5,
    SHADER_HIGHMID: 3,
    SHADER_LOWMID: 1,
    SHADER_HIGH: 4,
    SHADER_MED: 2,
    SHADER_LOW: 0
  });
  Origin = Origin;
  constructor() {
    super(_EveChildContainer), _initClass();
  }
}();

export { _EveChildContainer as EveChildContainer };
//# sourceMappingURL=EveChildContainer.js.map
