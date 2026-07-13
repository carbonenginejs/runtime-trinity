import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { Tr2Light as _Tr2Light } from '../../../eve/lights/Tr2Light.js';

let _initClass, _init_factionColor, _init_extra_factionColor, _init_saturation, _init_extra_saturation, _init_isSpotlight, _init_extra_isSpotlight;

/** Tr2FactionLight (eve/lights) - generated from schema shapeHash c9f0dbda.... */
let _Tr2FactionLight;
class Tr2FactionLight extends _Tr2Light {
  static {
    ({
      e: [_init_factionColor, _init_extra_factionColor, _init_saturation, _init_extra_saturation, _init_isSpotlight, _init_extra_isSpotlight],
      c: [_Tr2FactionLight, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2FactionLight",
      family: "eve/lights"
    })], [[[io, io.notify, io, io.persist, type, type.int32], 16, "factionColor"], [[io, io.notify, io, io.persist, type, type.float32], 16, "saturation"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "isSpotlight"]], 0, void 0, _Tr2Light));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isSpotlight(this);
  }
  /** m_selectedColor (int) [READWRITE, PERSIST, NOTIFY, ENUM] */
  factionColor = _init_factionColor(this, -1);

  /** m_saturation (float) [READWRITE, PERSIST, NOTIFY] */
  saturation = (_init_extra_factionColor(this), _init_saturation(this, 1));

  /** m_isSpotlight (bool) [READWRITE, PERSIST, NOTIFY] */
  isSpotlight = (_init_extra_saturation(this), _init_isSpotlight(this, false));
  static {
    _initClass();
  }
}

export { _Tr2FactionLight as Tr2FactionLight };
//# sourceMappingURL=Tr2FactionLight.js.map
