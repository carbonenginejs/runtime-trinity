import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initClass, _init_name, _init_extra_name, _init_passes, _init_extra_passes, _init_libraries, _init_extra_libraries, _init_shaderTypeMask, _init_extra_shaderTypeMask;

/** Tr2EffectTechnique (shader) - generated from schema shapeHash c82b7c9f.... */
let _Tr2EffectTechnique;
class Tr2EffectTechnique extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_passes, _init_extra_passes, _init_libraries, _init_extra_libraries, _init_shaderTypeMask, _init_extra_shaderTypeMask],
      c: [_Tr2EffectTechnique, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2EffectTechnique",
      family: "shader"
    })], [[[type, type.string], 16, "name"], [type.list("Tr2Pass"), 0, "passes"], [type.list("Tr2EffectLibrary"), 0, "libraries"], [[type, type.uint32], 16, "shaderTypeMask"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_shaderTypeMask(this);
  }
  /** name (BlueSharedString) */
  name = _init_name(this, "");

  /** passes (TrackableStdVector<Tr2Pass>) */
  passes = (_init_extra_name(this), _init_passes(this, []));

  /** libraries (std::vector<Tr2EffectLibrary>) */
  libraries = (_init_extra_passes(this), _init_libraries(this, []));

  /** shaderTypeMask (unsigned int) */
  shaderTypeMask = (_init_extra_libraries(this), _init_shaderTypeMask(this, 0));
  static {
    _initClass();
  }
}

export { _Tr2EffectTechnique as Tr2EffectTechnique };
//# sourceMappingURL=Tr2EffectTechnique.js.map
