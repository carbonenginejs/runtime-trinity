import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';
import { mat4 } from '@carbonenginejs/core-math/mat4';

let _initClass, _init_mesh, _init_extra_mesh, _init_owner, _init_extra_owner, _init_worldTransform, _init_extra_worldTransform, _init_decals, _init_extra_decals, _init_perObjectDataVs, _init_extra_perObjectDataVs, _init_perObjectDataPs, _init_extra_perObjectDataPs, _init_psData, _init_extra_psData, _init_vsData, _init_extra_vsData;

/** EveSwarmRenderable (eve/spaceObject/swarm) - generated from schema shapeHash a22c3310.... */
let _EveSwarmRenderable;
class EveSwarmRenderable extends _EveEntity {
  static {
    ({
      e: [_init_mesh, _init_extra_mesh, _init_owner, _init_extra_owner, _init_worldTransform, _init_extra_worldTransform, _init_decals, _init_extra_decals, _init_perObjectDataVs, _init_extra_perObjectDataVs, _init_perObjectDataPs, _init_extra_perObjectDataPs, _init_psData, _init_extra_psData, _init_vsData, _init_extra_vsData],
      c: [_EveSwarmRenderable, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSwarmRenderable",
      family: "eve/spaceObject/swarm"
    })], [[type.objectRef("Tr2MeshBase"), 0, "mesh"], [[type, type.unknown], 16, "owner"], [[type, type.mat4], 16, "worldTransform"], [type.list("EveSpaceObjectDecal"), 0, "decals"], [[type, type.unknown], 16, "perObjectDataVs"], [[type, type.unknown], 16, "perObjectDataPs"], [type.rawStruct("EveSpaceObjectPSData"), 0, "psData"], [type.rawStruct("EveSpaceObjectVSData"), 0, "vsData"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_vsData(this);
  }
  /** m_mesh (Tr2MeshBasePtr) */
  mesh = _init_mesh(this, null);

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
  psData = (_init_extra_perObjectDataPs(this), _init_psData(this, null));

  /** m_vsData (EveSpaceObjectVSData) */
  vsData = (_init_extra_psData(this), _init_vsData(this, null));
  static {
    _initClass();
  }
}

export { _EveSwarmRenderable as EveSwarmRenderable };
//# sourceMappingURL=EveSwarmRenderable.js.map
