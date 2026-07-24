import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { mat4 } from '@carbonenginejs/runtime-utils/mat4';
import { vec3 } from '@carbonenginejs/runtime-utils/vec3';
import { vec4 } from '@carbonenginejs/runtime-utils/vec4';

let _initClass, _init_name, _init_extra_name, _init_boneIndex, _init_extra_boneIndex, _init_coneColor, _init_extra_coneColor, _init_flareColor, _init_extra_flareColor, _init_spriteColor, _init_extra_spriteColor, _init_transform, _init_extra_transform, _init_spriteScale, _init_extra_spriteScale, _init_boosterGainInfluence, _init_extra_boosterGainInfluence;

/** EveSpotlightSetItem (eve/attachment/spotlights) - generated from schema shapeHash bf270eb9.... */
let _EveSpotlightSetItem;
class EveSpotlightSetItem extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_boneIndex, _init_extra_boneIndex, _init_coneColor, _init_extra_coneColor, _init_flareColor, _init_extra_flareColor, _init_spriteColor, _init_extra_spriteColor, _init_transform, _init_extra_transform, _init_spriteScale, _init_extra_spriteScale, _init_boosterGainInfluence, _init_extra_boosterGainInfluence],
      c: [_EveSpotlightSetItem, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpotlightSetItem",
      family: "eve/attachment/spotlights"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.int32], 16, "boneIndex"], [[io, io.persist, type, type.color], 16, "coneColor"], [[io, io.persist, type, type.color], 16, "flareColor"], [[io, io.persist, type, type.color], 16, "spriteColor"], [[io, io.persist, type, type.mat4], 16, "transform"], [[io, io.persist, type, type.vec3], 16, "spriteScale"], [[io, io.persist, type, type.boolean], 16, "boosterGainInfluence"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_boosterGainInfluence(this);
  }
  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_boneIndex (int32_t) [READWRITE, PERSIST] */
  boneIndex = (_init_extra_name(this), _init_boneIndex(this, 0));

  /** m_coneColor (Color) [READWRITE, PERSIST] */
  coneColor = (_init_extra_boneIndex(this), _init_coneColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_flareColor (Color) [READWRITE, PERSIST] */
  flareColor = (_init_extra_coneColor(this), _init_flareColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_spriteColor (Color) [READWRITE, PERSIST] */
  spriteColor = (_init_extra_flareColor(this), _init_spriteColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_transform (Matrix) [READWRITE, PERSIST] */
  transform = (_init_extra_spriteColor(this), _init_transform(this, mat4.create()));

  /** m_spriteScale (Vector3) [READWRITE, PERSIST] */
  spriteScale = (_init_extra_transform(this), _init_spriteScale(this, vec3.fromValues(1, 1, 1)));

  /** m_boosterGainInfluence (bool) [READWRITE, PERSIST] */
  boosterGainInfluence = (_init_extra_spriteScale(this), _init_boosterGainInfluence(this, false));
  static {
    _initClass();
  }
}

export { _EveSpotlightSetItem as EveSpotlightSetItem };
//# sourceMappingURL=EveSpotlightSetItem.js.map
