import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initClass, _init_volumes, _init_extra_volumes, _init_exclusionVolumes, _init_extra_exclusionVolumes, _init_boundingSphereCenter, _init_extra_boundingSphereCenter, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_name, _init_extra_name, _init_postProcessAttributes, _init_extra_postProcessAttributes;

/** EveChildPostProcessVolume (eve/child) - generated from schema shapeHash 7d506595.... */
let _EveChildPostProcessV;
class EveChildPostProcessVolume extends _EveChildTransform {
  static {
    ({
      e: [_init_volumes, _init_extra_volumes, _init_exclusionVolumes, _init_extra_exclusionVolumes, _init_boundingSphereCenter, _init_extra_boundingSphereCenter, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_name, _init_extra_name, _init_postProcessAttributes, _init_extra_postProcessAttributes],
      c: [_EveChildPostProcessV, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveChildPostProcessVolume",
      family: "eve/child"
    })], [[[io, io.persist, void 0, type.list("IEveVolume")], 16, "volumes"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "exclusionVolumes"], [[io, io.read, void 0, type.rawStruct("CcpMath::Sphere")], 16, "boundingSphereCenter"], [[io, io.read, void 0, type.rawStruct("CcpMath::Sphere")], 16, "boundingSphereRadius"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.model("Tr2PostProcessAttributes")], 16, "postProcessAttributes"]], 0, void 0, _EveChildTransform));
  }
  constructor(...args) {
    super(...args);
    _init_extra_postProcessAttributes(this);
  }
  /** m_volumes (PIEveVolumeVector) [READ, PERSIST] */
  volumes = _init_volumes(this, []);

  /** m_exclusionVolumes (PIEveVolumeVector) [READ, PERSIST] */
  exclusionVolumes = (_init_extra_volumes(this), _init_exclusionVolumes(this, []));

  /** m_boundingSphere.center (CcpMath::Sphere) [READ] */
  boundingSphereCenter = (_init_extra_exclusionVolumes(this), _init_boundingSphereCenter(this, null));

  /** m_boundingSphere.radius (CcpMath::Sphere) [READ] */
  boundingSphereRadius = (_init_extra_boundingSphereCenter(this), _init_boundingSphereRadius(this, null));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_boundingSphereRadius(this), _init_name(this, ""));

  /** m_postProcessAttributes (Tr2PostProcessAttributesPtr) [READWRITE, PERSIST] */
  postProcessAttributes = (_init_extra_name(this), _init_postProcessAttributes(this, null));
  static {
    _initClass();
  }
}

export { _EveChildPostProcessV as EveChildPostProcessVolume };
//# sourceMappingURL=EveChildPostProcessVolume.js.map
