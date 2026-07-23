import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { io, type, carbon, impl, schema } from '@carbonenginejs/core-types/schema';
import { Tr2Mesh as _Tr2Mesh } from './Tr2Mesh.js';

let _initProto, _initClass, _init_boundsMethod, _init_extra_boundsMethod, _init_instanceGeometryResPath, _init_extra_instanceGeometryResPath, _init_maxBounds, _init_extra_maxBounds, _init_maxInstanceSize, _init_extra_maxInstanceSize, _init_minBounds, _init_extra_minBounds, _init_instanceGeometryResource, _init_extra_instanceGeometryResource, _init_instanceMeshIndex, _init_extra_instanceMeshIndex;
let _Tr2InstancedMesh;
new class extends _identity {
  static [class Tr2InstancedMesh extends _Tr2Mesh {
    static {
      ({
        e: [_init_boundsMethod, _init_extra_boundsMethod, _init_instanceGeometryResPath, _init_extra_instanceGeometryResPath, _init_maxBounds, _init_extra_maxBounds, _init_maxInstanceSize, _init_extra_maxInstanceSize, _init_minBounds, _init_extra_minBounds, _init_instanceGeometryResource, _init_extra_instanceGeometryResource, _init_instanceMeshIndex, _init_extra_instanceMeshIndex, _initProto],
        c: [_Tr2InstancedMesh, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2InstancedMesh",
        family: "trinityCore"
      })], [[[io, io.persist, type, type.int32, void 0, schema.enum("BoundsMethod")], 16, "boundsMethod"], [[void 0, io.rebuild("instanceBuffer"), io, io.notify, io, io.persist, type, type.string], 16, "instanceGeometryResPath"], [[io, io.persist, type, type.vec3], 16, "maxBounds"], [[io, io.persist, type, type.float32], 16, "maxInstanceSize"], [[io, io.persist, type, type.vec3], 16, "minBounds"], [[void 0, io.rebuild("instanceBuffer"), io, io.persistOnly, void 0, type.objectRef("ITr2InstanceData")], 16, "instanceGeometryResource"], [[void 0, io.rebuild("instanceBuffer"), io, io.notify, io, io.persist, type, type.int32], 16, "instanceMeshIndex"], [[carbon, carbon.method, impl, impl.adapted], 18, "Initialize"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetInstanceMeshResPath"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetInstanceMeshResPath"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetInstanceMeshIndex"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetInstanceGeometryResource"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetInstanceGeometryRes"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetBoundingBox"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetDynamicBounds"], [[carbon, carbon.method, impl, impl.adapted], 18, "SetDynamicScaledBounds"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetBounds"]], 0, void 0, _Tr2Mesh));
    }
    constructor(...args) {
      super(...args);
      _init_extra_instanceMeshIndex(this);
    }
    boundsMethod = (_initProto(this), _init_boundsMethod(this, 0));
    instanceGeometryResPath = (_init_extra_boundsMethod(this), _init_instanceGeometryResPath(this, ""));
    maxBounds = (_init_extra_instanceGeometryResPath(this), _init_maxBounds(this, vec3.create()));
    maxInstanceSize = (_init_extra_maxBounds(this), _init_maxInstanceSize(this, 0));
    minBounds = (_init_extra_maxInstanceSize(this), _init_minBounds(this, vec3.create()));
    instanceGeometryResource = (_init_extra_minBounds(this), _init_instanceGeometryResource(this, null));
    instanceMeshIndex = (_init_extra_instanceGeometryResource(this), _init_instanceMeshIndex(this, 0));
    Initialize() {
      return super.Initialize();
    }
    GetInstanceMeshResPath() {
      return this.instanceGeometryResPath;
    }
    SetInstanceMeshResPath(path) {
      this.instanceGeometryResPath = String(path ?? "");
    }
    GetInstanceMeshIndex() {
      return this.instanceMeshIndex;
    }
    GetInstanceGeometryResource() {
      return this.instanceGeometryResource;
    }
    SetInstanceGeometryRes(resource) {
      this.instanceGeometryResource = resource ?? null;
    }
    SetBoundingBox(minBounds, maxBounds) {
      vec3.copy(this.minBounds, minBounds ?? _Tr2InstancedMesh.#zero);
      vec3.copy(this.maxBounds, maxBounds ?? _Tr2InstancedMesh.#zero);
    }
    SetDynamicBounds(maxInstanceSize) {
      this.boundsMethod = _Tr2InstancedMesh.BoundsMethod.DYNAMIC;
      this.maxInstanceSize = Number(maxInstanceSize) || 0;
    }
    SetDynamicScaledBounds(maxScale) {
      this.boundsMethod = _Tr2InstancedMesh.BoundsMethod.DYNAMIC_SCALED;
      this.maxInstanceSize = Number(maxScale) || 0;
    }
    GetBounds() {
      if (this.boundsMethod === _Tr2InstancedMesh.BoundsMethod.STATIC) {
        return _Tr2InstancedMesh.#cloneBounds(this.minBounds, this.maxBounds);
      }
      const instanceResource = this.GetInstanceGeometryResource();
      const source = instanceResource?.GetInstanceBufferBoundingBox?.(this.instanceMeshIndex) ?? instanceResource?.GetBoundingBox?.();
      if (!source) {
        return _Tr2InstancedMesh.#cloneBounds(_Tr2InstancedMesh.#zero, _Tr2InstancedMesh.#zero);
      }
      let size = this.maxInstanceSize;
      if (this.boundsMethod === _Tr2InstancedMesh.BoundsMethod.DYNAMIC_SCALED) {
        size *= _Tr2InstancedMesh.#getGeometryRadius(this.GetGeometryResource(), this.meshIndex);
      }
      const minBounds = vec3.clone(source.min ?? source.minBounds ?? _Tr2InstancedMesh.#zero);
      const maxBounds = vec3.clone(source.max ?? source.maxBounds ?? _Tr2InstancedMesh.#zero);
      for (let index = 0; index < 3; index++) {
        minBounds[index] -= size;
        maxBounds[index] += size;
      }
      return {
        min: minBounds,
        max: maxBounds
      };
    }
  }];
  #cloneBounds(minBounds, maxBounds) {
    return {
      min: vec3.clone(minBounds),
      max: vec3.clone(maxBounds)
    };
  }
  #getGeometryRadius(resource, meshIndex) {
    const bounds = resource?.GetBoundingBox?.(meshIndex);
    if (!bounds) {
      return 1;
    }
    const minBounds = bounds.min ?? bounds.minBounds ?? _Tr2InstancedMesh.#zero;
    const maxBounds = bounds.max ?? bounds.maxBounds ?? _Tr2InstancedMesh.#zero;
    const x = Math.max(Math.abs(Number(minBounds[0]) || 0), Math.abs(Number(maxBounds[0]) || 0));
    const y = Math.max(Math.abs(Number(minBounds[1]) || 0), Math.abs(Number(maxBounds[1]) || 0));
    const z = Math.max(Math.abs(Number(minBounds[2]) || 0), Math.abs(Number(maxBounds[2]) || 0));
    return Math.hypot(x, y, z);
  }
  #zero = Object.freeze([0, 0, 0]);
  BoundsMethod = Object.freeze({
    STATIC: 0,
    DYNAMIC: 1,
    DYNAMIC_SCALED: 2
  });
  constructor() {
    super(_Tr2InstancedMesh), _initClass();
  }
}();

export { _Tr2InstancedMesh as Tr2InstancedMesh };
//# sourceMappingURL=Tr2InstancedMesh.js.map
