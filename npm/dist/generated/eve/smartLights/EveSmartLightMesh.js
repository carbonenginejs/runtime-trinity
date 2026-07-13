import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { EveChildInstanceMeshRenderer as _EveChildInstanceMesh } from '../child/EveChildInstanceMeshRenderer.js';

let _initProto, _initClass, _init_shaderParamColorName, _init_extra_shaderParamColorName;

/** EveSmartLightMesh (eve/smartLights) - generated from schema shapeHash 36d09410.... */
let _EveSmartLightMesh;
class EveSmartLightMesh extends _EveChildInstanceMesh {
  static {
    ({
      e: [_init_shaderParamColorName, _init_extra_shaderParamColorName, _initProto],
      c: [_EveSmartLightMesh, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSmartLightMesh",
      family: "eve/smartLights"
    })], [[[io, io.persist, type, type.string], 16, "shaderParamColorName"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "RefreshStaticGeometry"]], 0, void 0, _EveChildInstanceMesh));
  }
  constructor(...args) {
    super(...args);
    _init_extra_shaderParamColorName(this);
  }
  /** m_shaderParamColorName (BlueSharedString) [READWRITE, PERSIST] */
  shaderParamColorName = (_initProto(this), _init_shaderParamColorName(this, ""));

  /** Carbon method RefreshStaticGeometry (MAP_METHOD_AND_WRAP). */
  RefreshStaticGeometry(...args) {
    throw _EveChildInstanceMesh.notImplemented("EveSmartLightMesh", "RefreshStaticGeometry", args);
  }
  static {
    _initClass();
  }
}

export { _EveSmartLightMesh as EveSmartLightMesh };
//# sourceMappingURL=EveSmartLightMesh.js.map
