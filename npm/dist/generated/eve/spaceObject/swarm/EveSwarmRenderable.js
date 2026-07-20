import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { type, impl } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';
import { EveSpaceObjectPSData as _EveSpaceObjectPSData } from '../../../../eve/EveSpaceObjectPSData.js';
import { EveSpaceObjectVSData as _EveSpaceObjectVSData } from '../../../../eve/EveSpaceObjectVSData.js';

let _initProto, _initClass, _init_mesh, _init_extra_mesh, _init_owner, _init_extra_owner, _init_worldTransform, _init_extra_worldTransform, _init_decals, _init_extra_decals, _init_perObjectDataVs, _init_extra_perObjectDataVs, _init_perObjectDataPs, _init_extra_perObjectDataPs, _init_psData, _init_extra_psData, _init_vsData, _init_extra_vsData;

/** EveSwarmRenderable (eve/spaceObject/swarm) - generated from schema shapeHash a22c3310.... */
let _EveSwarmRenderable;
class EveSwarmRenderable extends _EveEntity {
  static {
    ({
      e: [_init_mesh, _init_extra_mesh, _init_owner, _init_extra_owner, _init_worldTransform, _init_extra_worldTransform, _init_decals, _init_extra_decals, _init_perObjectDataVs, _init_extra_perObjectDataVs, _init_perObjectDataPs, _init_extra_perObjectDataPs, _init_psData, _init_extra_psData, _init_vsData, _init_extra_vsData, _initProto],
      c: [_EveSwarmRenderable, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSwarmRenderable",
      family: "eve/spaceObject/swarm"
    })], [[type.objectRef("Tr2MeshBase"), 0, "mesh"], [type.objectRef("EveSwarm"), 0, "owner"], [[type, type.mat4], 16, "worldTransform"], [type.list("EveSpaceObjectDecal"), 0, "decals"], [type.rawStruct("Tr2PersistentPerObjectData"), 0, "perObjectDataVs"], [type.rawStruct("Tr2PersistentPerObjectData"), 0, "perObjectDataPs"], [type.rawStruct("EveSpaceObjectPSData"), 0, "psData"], [type.rawStruct("EveSpaceObjectVSData"), 0, "vsData"], [[impl, impl.adapted], 18, "InitializeRenderable"], [[impl, impl.adapted], 18, "SetWorldTransform"], [[impl, impl.implemented], 18, "GetWorldTransform"], [[impl, impl.implemented], 18, "SetBoosterIntensity"], [[impl, impl.adapted], 18, "SetShaderData"], [[impl, impl.adapted], 18, "InitDecals"], [[impl, impl.implemented], 18, "GetID"], [[impl, impl.adapted], 18, "SetShaderOption"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_vsData(this);
  }
  /** m_mesh (Tr2MeshBasePtr) */
  mesh = (_initProto(this), _init_mesh(this, null));

  /** m_owner (BlueWeakRef<EveSwarm>) */
  owner = (_init_extra_mesh(this), _init_owner(this, null));

  /** m_worldTransform (Matrix) */
  worldTransform = (_init_extra_owner(this), _init_worldTransform(this, mat4.create()));

  /** m_decals (PEveSpaceObjectDecalVector) */
  decals = (_init_extra_worldTransform(this), _init_decals(this, []));

  /** m_perObjectDataVs (Tr2PersistentPerObjectData<EveSwarmRenderable>) */
  perObjectDataVs = (_init_extra_decals(this), _init_perObjectDataVs(this, null));

  /** m_perObjectDataPs (Tr2PersistentPerObjectData<EveSwarmRenderable>) */
  perObjectDataPs = (_init_extra_perObjectDataVs(this), _init_perObjectDataPs(this, null));

  /** m_psData (EveSpaceObjectPSData) */
  psData = (_init_extra_perObjectDataPs(this), _init_psData(this, new _EveSpaceObjectPSData()));

  /** m_vsData (EveSpaceObjectVSData) */
  vsData = (_init_extra_psData(this), _init_vsData(this, new _EveSpaceObjectVSData()));
  InitializeRenderable(owner, mesh) {
    this.owner = owner ?? null;
    this.mesh = mesh ?? null;
  }
  SetWorldTransform(transform) {
    mat4.copy(this.worldTransform, transform);
    mat4.copy(this.vsData.worldTransformLast, this.vsData.worldTransform);
    mat4.transpose(this.vsData.worldTransform, this.worldTransform);
    if (!mat4.invert(this.vsData.invWorldTransform, this.vsData.worldTransform)) {
      mat4.identity(this.vsData.invWorldTransform);
    }
    mat4.copy(this.psData.worldTransform, this.vsData.worldTransform);
    mat4.copy(this.psData.worldTransformLast, this.vsData.worldTransformLast);
    mat4.copy(this.psData.invWorldTransform, this.vsData.invWorldTransform);
  }
  GetWorldTransform() {
    return this.worldTransform;
  }
  SetBoosterIntensity(intensity) {
    this.psData.shipData[0] = intensity;
  }
  SetShaderData(vsData, psData) {
    for (const name of ["clipData", "ellpsoidCenter", "ellpsoidRadii", "shipData"]) {
      vec4.copy(this.vsData[name], vsData[name]);
    }
    vec3.copy(this.psData.clipSphereCenter, psData.clipSphereCenter);
    for (const name of ["clipRadiusSq", "clipRadius2Sq", "impactDataOffset", "clipSphereFactor2", "clipSphereFactor"]) {
      this.psData[name] = psData[name];
    }
    for (let index = 0; index < this.psData.shLightingCoefficients.length; index++) {
      vec4.copy(this.psData.shLightingCoefficients[index], psData.shLightingCoefficients[index]);
    }
    this.psData.shipData[1] = psData.shipData[1];
    this.psData.shipData[2] = psData.shipData[2];
    this.psData.shipData[3] = psData.shipData[3];
  }
  InitDecals(decals) {
    this.decals = decals.map(decal => decal?.Clone?.() ?? decal);
  }
  GetID() {
    return this.owner;
  }
  SetShaderOption(name, value) {
    this.mesh?.SetShaderOption?.(name, value);
  }
  static {
    _initClass();
  }
}

export { _EveSwarmRenderable as EveSwarmRenderable };
//# sourceMappingURL=EveSwarmRenderable.js.map
