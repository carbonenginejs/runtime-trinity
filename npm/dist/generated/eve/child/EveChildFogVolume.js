import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type, io, schema } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initClass, _classDecs, _priorityDecs, _init_priority, _init_extra_priority, _volumesDecs, _init_volumes, _init_extra_volumes, _boundingSphereCenterDecs, _init_boundingSphereCenter, _init_extra_boundingSphereCenter, _boundingSphereRadiusDecs, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _nameDecs, _init_name, _init_extra_name, _computedKeyDecs, _init_computedKey, _init_extra_computedKey, _EnabledDecs, _init_Enabled, _init_extra_Enabled, _intensityDecs, _init_intensity, _init_extra_intensity;

/** EveChildFogVolume (eve/child) - generated from schema shapeHash e11a95f3.... */
_classDecs = [type.define({
  className: "EveChildFogVolume",
  family: "eve/child"
})];
let _EveChildFogVolume;
class EveChildFogVolume extends _EveChildTransform {
  static {
    ({
      e: [_init_priority, _init_extra_priority, _init_volumes, _init_extra_volumes, _init_boundingSphereCenter, _init_extra_boundingSphereCenter, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_name, _init_extra_name, _init_computedKey, _init_extra_computedKey, _init_Enabled, _init_extra_Enabled, _init_intensity, _init_extra_intensity],
      c: [_EveChildFogVolume, _initClass]
    } = _applyDecs2311(this, _classDecs, [[_priorityDecs, 16, "priority"], [_volumesDecs, 16, "volumes"], [_boundingSphereCenterDecs, 16, "boundingSphereCenter"], [_boundingSphereRadiusDecs, 16, "boundingSphereRadius"], [_nameDecs, 16, "name"], [_computedKeyDecs, 16, "#NAME"], [_EnabledDecs, 16, "Enabled"], [_intensityDecs, 16, "intensity"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_intensity(this);
  }
  /** m_settings.priority (FroxelFogSettings - enum FroxelFogSettings) [READWRITE, PERSIST, ENUM] */
  priority = _init_priority(this, 0);

  /** m_volumes (PIEveVolumeVector) [READ, PERSIST] */
  volumes = (_init_extra_priority(this), _init_volumes(this, []));

  /** m_boundingSphere.center (CcpMath::Sphere) [READ] */
  boundingSphereCenter = (_init_extra_volumes(this), _init_boundingSphereCenter(this, null));

  /** m_boundingSphere.radius (CcpMath::Sphere) [READ] */
  boundingSphereRadius = (_init_extra_boundingSphereCenter(this), _init_boundingSphereRadius(this, null));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_boundingSphereRadius(this), _init_name(this, ""));

  /** m_settings.NAME.value (FroxelFogSettings) [READWRITE, PERSIST] */
  [(_EnabledDecs = [io, io.persist, type, type.unknown], _intensityDecs = [io, io.persist, type, type.float32], _priorityDecs = [io, io.persist, type, type.int32, void 0, schema.enum("FroxelFogSettings")], _volumesDecs = [io, io.persist, void 0, type.list("IEveVolume")], _boundingSphereCenterDecs = [io, io.read, void 0, type.rawStruct("CcpMath::Sphere")], _boundingSphereRadiusDecs = [io, io.read, void 0, type.rawStruct("CcpMath::Sphere")], _nameDecs = [io, io.persist, type, type.string], _computedKeyDecs = [io, io.persist, type, type.unknown], "#NAME")] = (_init_extra_name(this), _init_computedKey(this, null));

  /** m_settings.NAME.enabled (FroxelFogSettings) [READWRITE, PERSIST] */
  Enabled = (_init_extra_computedKey(this), _init_Enabled(this, null));

  /** m_intensity (float) [READWRITE, PERSIST] */
  intensity = (_init_extra_Enabled(this), _init_intensity(this, 1));
  static {
    _initClass();
  }
}

export { _EveChildFogVolume as EveChildFogVolume };
//# sourceMappingURL=EveChildFogVolume.js.map
