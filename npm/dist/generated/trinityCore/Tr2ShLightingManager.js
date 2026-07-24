import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_quality, _init_extra_quality, _init_lights, _init_extra_lights, _init_primaryIntensity, _init_extra_primaryIntensity, _init_secondaryIntensity, _init_extra_secondaryIntensity;

/** Tr2ShLightingManager (trinityCore) - generated from schema shapeHash e24e64a2.... */
let _Tr2ShLightingManager;
new class extends _identity {
  static [class Tr2ShLightingManager extends CjsModel {
    static {
      ({
        e: [_init_quality, _init_extra_quality, _init_lights, _init_extra_lights, _init_primaryIntensity, _init_extra_primaryIntensity, _init_secondaryIntensity, _init_extra_secondaryIntensity],
        c: [_Tr2ShLightingManager, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "Tr2ShLightingManager",
        family: "trinityCore"
      })], [[[io, io.persist, type, type.int32, void 0, schema.enum("Quality")], 16, "quality"], [[io, io.persist, void 0, type.list("Tr2PointLight")], 16, "lights"], [[io, io.persist, type, type.float32], 16, "primaryIntensity"], [[io, io.persist, type, type.float32], 16, "secondaryIntensity"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_secondaryIntensity(this);
    }
    /** m_quality (Quality - enum Quality) [READWRITE, PERSIST, ENUM] */
    quality = _init_quality(this, 0);

    /** m_lights (PTr2PointLightVector) [READ, PERSIST] */
    lights = (_init_extra_quality(this), _init_lights(this, []));

    /** m_primaryIntensity (float) [READWRITE, PERSIST] */
    primaryIntensity = (_init_extra_lights(this), _init_primaryIntensity(this, 1));

    /** m_secondaryIntensity (float) [READWRITE, PERSIST] */
    secondaryIntensity = (_init_extra_primaryIntensity(this), _init_secondaryIntensity(this, 1));
  }];
  Quality = Object.freeze({
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2,
    COUNT: 3
  });
  constructor() {
    super(_Tr2ShLightingManager), _initClass();
  }
}();

export { _Tr2ShLightingManager as Tr2ShLightingManager };
//# sourceMappingURL=Tr2ShLightingManager.js.map
