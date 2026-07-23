import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveTurretSet as _EveTurretSet } from '../attachment/turrets/EveTurretSet.js';
import { EveSpaceObject2 as _EveSpaceObject } from './EveSpaceObject2.js';

let _initProto, _initClass, _init_turretSets, _init_extra_turretSets, _init_ActiveTurretCount, _init_extra_ActiveTurretCount;
let _EveMobile;
new class extends _identity {
  static [class EveMobile extends _EveSpaceObject {
    static {
      ({
        e: [_init_turretSets, _init_extra_turretSets, _init_ActiveTurretCount, _init_extra_ActiveTurretCount, _initProto],
        c: [_EveMobile, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveMobile",
        family: "eve/spaceObject"
      })], [[[io, io.notify, io, io.persist, void 0, type.list("EveTurretSet")], 16, "turretSets"], [[io, io.read, type, type.uint32], 16, "ActiveTurretCount"], [[carbon, carbon.method, impl, impl.implemented], 18, "Initialize"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("List notifications are represented by a direct browser callback; registry ownership remains runtime-engine work.")], 18, "OnListModified"], [[carbon, carbon.method, impl, impl.implemented], 18, "RegisterComponents"], [[carbon, carbon.method, impl, impl.implemented], 18, "UnRegisterComponents"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTurretLocatorIndex"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Authored EveLocator2 transforms and optional animation-updater bone transforms replace Carbon's locator-type pointer surface.")], 18, "RebuildTurretPositions"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTurretLocatorCount"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetActiveTurretCount"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Animated locator transforms use an optional animation-updater bone contract; all turret state updates remain in Trinity.")], 18, "UpdateSyncronous"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateAsyncronous"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Carbon's native ParentData constant buffers collapse to the portable parent transform required by turret graph updates.")], 18, "UpdateTurretsAsyncronous"], [[carbon, carbon.method, impl, impl.implemented], 18, "UpdateVisibility"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetRenderables"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetLocalBoundingBox"], [[carbon, carbon.method, impl, impl.implemented], 18, "SetControllerVariable"], [[carbon, carbon.method, impl, impl.implemented], 18, "HandleControllerEvent"], [[carbon, carbon.method, impl, impl.implemented], 18, "StartControllers"], [[carbon, carbon.method, impl, impl.implemented], 18, "DisplayChildren"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetTurretTransform"]], 0, void 0, _EveSpaceObject));
    }
    turretSets = (_initProto(this), _init_turretSets(this, []));
    ActiveTurretCount = (_init_extra_turretSets(this), _init_ActiveTurretCount(this, 0));
    #turretSetsLocatorInfo = (_init_extra_ActiveTurretCount(this), []);
    #turretLocatorCountingInfo = new Map();
    Initialize() {
      super.Initialize();
      this.#resetTurretLocatorCounter(true);
      this.RebuildTurretPositions();
      return true;
    }
    OnListModified() {
      this.RebuildTurretPositions();
    }

    /** Carbon EveMobile::RegisterComponents (cpp:109-120): base registration,
     * then forwards the turret sets. Gate m_display. */
    RegisterComponents() {
      super.RegisterComponents();
      const registry = this.GetComponentRegistry();
      if (registry && this.display) {
        for (const turretSet of this.turretSets) {
          turretSet?.Register?.(registry);
        }
      }
    }

    /** Carbon EveMobile::UnRegisterComponents (cpp:126-138): base, then forwards
     * the turret sets without re-checking display. */
    UnRegisterComponents() {
      super.UnRegisterComponents();
      const registry = this.GetComponentRegistry();
      if (registry) {
        for (const turretSet of this.turretSets) {
          turretSet?.UnRegister?.(registry);
        }
      }
    }
    GetTurretLocatorIndex(turretSetIndex, slotIndex) {
      return this.#turretSetsLocatorInfo[turretSetIndex]?.locators?.[slotIndex]?.index ?? 0;
    }
    RebuildTurretPositions() {
      this.#turretSetsLocatorInfo.length = 0;
      this.#resetTurretLocatorCounter(false);
      const records = this.#locatorRecords();
      for (const turretSet of this.turretSets) {
        if (!turretSet) continue;
        let name = String(turretSet.locatorName ?? "");
        let turretInName = name.includes("_turret_");
        let locatorNumber = 0;
        if (!turretInName) {
          let counting = this.#getTurretLocatorCountingInfo(name);
          if (!counting) {
            name = "locator_turret_";
            counting = this.#getTurretLocatorCountingInfo(name);
            turretInName = true;
          }
          if (!counting) {
            this.#turretSetsLocatorInfo.push({
              type: "none",
              locators: []
            });
            continue;
          }
          locatorNumber = counting.current;
          if (locatorNumber > counting.total) {
            if (!turretInName) {
              name = "locator_turret_";
              counting = this.#getTurretLocatorCountingInfo(name);
              turretInName = true;
            }
            if (!counting || counting.current > counting.total) {
              this.#turretSetsLocatorInfo.push({
                type: "none",
                locators: []
              });
              continue;
            }
            locatorNumber = counting.current;
          }
        }
        if (turretInName) locatorNumber = Number(turretSet.slotNumber) | 0;
        const baseName = `${name}${locatorNumber}`;
        const matched = records.filter(record => record.name.startsWith(baseName)).sort((a, b) => a.name.localeCompare(b.name));
        const locatorInfo = {
          type: matched.some(record => record.type === "bone") ? "bone" : "locator",
          locators: []
        };
        for (let index = 0; index < matched.length && index < _EveTurretSet.MAX_TURRETS_PER_SET; index++) {
          const record = matched[index];
          const transform = this.#getLocatorRecordTransform(record, _EveMobile.#locatorTransform);
          if (!transform) continue;
          turretSet.SetLocalTransform?.(index, transform);
          locatorInfo.locators.push(record);
        }
        this.#turretSetsLocatorInfo.push(locatorInfo);
        const counter = this.#turretLocatorCountingInfo.get(name);
        if (counter) counter.currentCount++;
      }
      return true;
    }
    GetTurretLocatorCount() {
      let foundA = 0;
      let foundB = 0;
      for (const record of this.#locatorRecords()) {
        const match = /^locator_turret_(\d+)([ab])$/.exec(record.name);
        if (!match) continue;
        const index = Number(match[1]);
        if (!(index > 0 && index <= 32)) continue;
        if (match[2] === "a") foundA |= 1 << index - 1;else foundB |= 1 << index - 1;
      }
      if (foundA !== foundB && foundB) return 0;
      let count = 0;
      while (foundA & 1) {
        count++;
        foundA >>>= 1;
      }
      return count;
    }
    GetActiveTurretCount() {
      return this.ActiveTurretCount;
    }
    UpdateSyncronous(context) {
      super.UpdateSyncronous(context);
      let activeCount = 0;
      for (let setIndex = 0; setIndex < this.turretSets.length; setIndex++) {
        const turretSet = this.turretSets[setIndex];
        if (!turretSet) continue;
        if (turretSet.state > _EveTurretSet.State.STATE_TARGETING) activeCount++;
        const locatorInfo = this.#turretSetsLocatorInfo[setIndex];
        if (locatorInfo?.type === "bone") {
          for (let turretIndex = 0; turretIndex < locatorInfo.locators.length; turretIndex++) {
            const transform = this.#getLocatorRecordTransform(locatorInfo.locators[turretIndex], _EveMobile.#locatorTransform);
            if (transform) turretSet.SetLocalTransform?.(turretIndex, transform);
          }
          turretSet.UpdateTurretTransforms?.(this.GetTurretTransform(turretSet.swarmID));
        }
        turretSet.UpdateSyncronous?.(context, this.GetTurretTransform(turretSet.swarmID));
      }
      this.ActiveTurretCount = activeCount;
      return true;
    }
    UpdateAsyncronous(context) {
      super.UpdateAsyncronous(context);
      return this.UpdateTurretsAsyncronous(context);
    }
    UpdateTurretsAsyncronous(context) {
      for (const turretSet of this.turretSets) turretSet?.UpdateAsyncronous?.(context, {
        transform: this.GetTurretTransform(turretSet.swarmID)
      });
      return true;
    }
    UpdateVisibility(context, _parentTransform = _EveMobile.#identity) {
      const visible = super.UpdateVisibility(context, _parentTransform);
      if (!this.display) return false;
      for (const turretSet of this.turretSets) turretSet?.UpdateVisibility?.(context);
      return visible;
    }
    GetRenderables(out = []) {
      if (!this.display) return out;
      super.GetRenderables(out);
      for (const turretSet of this.turretSets) turretSet?.GetRenderables?.(out);
      return out;
    }
    GetLocalBoundingBox(outMin, outMax) {
      const returnObject = !outMin || !outMax;
      outMin ??= vec3.create();
      outMax ??= vec3.create();
      const result = super.GetLocalBoundingBox(outMin, outMax);
      if (result === false) return false;
      for (const turretSet of this.turretSets) {
        if (turretSet?.GetLocalBoundingBox?.(_EveMobile.#boundsMin, _EveMobile.#boundsMax)) {
          vec3.min(outMin, outMin, _EveMobile.#boundsMin);
          vec3.max(outMax, outMax, _EveMobile.#boundsMax);
        }
      }
      return returnObject ? {
        min: outMin,
        max: outMax
      } : true;
    }
    SetControllerVariable(name, value) {
      super.SetControllerVariable(name, value);
      for (const turretSet of this.turretSets) turretSet?.SetControllerVariable?.(name, value);
    }
    HandleControllerEvent(name) {
      super.HandleControllerEvent(name);
      for (const turretSet of this.turretSets) turretSet?.HandleControllerEvent?.(name);
    }
    StartControllers() {
      super.StartControllers();
      for (const turretSet of this.turretSets) turretSet?.StartControllers?.();
    }
    DisplayChildren() {
      return this.activationStrength > 0.5;
    }
    GetTurretTransform(_turretSetIndex = 0) {
      return this.worldTransform;
    }
    #resetTurretLocatorCounter(updateTotal) {
      for (const record of this.#locatorRecords()) {
        const separator = record.name.lastIndexOf("_");
        if (separator < 0) continue;
        const prefix = record.name.slice(0, separator + 1);
        let info = this.#turretLocatorCountingInfo.get(prefix);
        if (!info) {
          info = {
            currentCount: 0,
            totalCount: 0
          };
          this.#turretLocatorCountingInfo.set(prefix, info);
        } else info.currentCount = 0;
        if (updateTotal) {
          const number = Number.parseInt(record.name.slice(separator + 1, separator + 2), 10) || 0;
          info.totalCount = Math.max(info.totalCount, number);
        }
      }
    }
    #getTurretLocatorCountingInfo(name) {
      const info = this.#turretLocatorCountingInfo.get(name);
      return info ? {
        current: info.currentCount + 1,
        total: info.totalCount
      } : null;
    }
    #locatorRecords() {
      const records = [];
      for (let index = 0; index < this.locators.length; index++) {
        const locator = this.locators[index];
        const name = String(locator?.GetName?.() ?? locator?.name ?? "");
        if (name) records.push({
          name,
          type: "locator",
          index,
          value: locator
        });
      }
      const updater = this.animationUpdater;
      const names = updater?.GetBoneNames?.() ?? updater?.boneNames ?? updater?.GetSkeleton?.()?.bones ?? updater?.skeleton?.bones ?? [];
      for (let index = 0; index < names.length; index++) {
        const value = names[index];
        const name = String(value?.name ?? value ?? "");
        if (name && !records.some(record => record.name === name)) records.push({
          name,
          type: "bone",
          index,
          value
        });
      }
      return records;
    }
    #getLocatorRecordTransform(record, out) {
      if (record.type === "bone") {
        const value = this.animationUpdater?.GetBoneWorldTransform?.(record.name, out) ?? this.animationUpdater?.GetBoneTransform?.(record.index, out);
        if (value === false || value === null || value === undefined) return null;
        if (value?.length === 16 && value !== out) mat4.copy(out, value);
        return out;
      }
      const value = record.value?.GetTransform?.() ?? record.value?.transform;
      return value?.length === 16 ? mat4.copy(out, value) : null;
    }
  }];
  #identity = mat4.create();
  #locatorTransform = mat4.create();
  #boundsMin = vec3.create();
  #boundsMax = vec3.create();
  constructor() {
    super(_EveMobile), _initClass();
  }
}();

export { _EveMobile as EveMobile };
//# sourceMappingURL=EveMobile.js.map
