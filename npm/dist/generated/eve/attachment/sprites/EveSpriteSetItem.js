import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_name, _init_extra_name, _init_blinkRate, _init_extra_blinkRate, _init_blinkPhase, _init_extra_blinkPhase, _init_minScale, _init_extra_minScale, _init_maxScale, _init_extra_maxScale, _init_falloff, _init_extra_falloff, _init_position, _init_extra_position, _init_color, _init_extra_color, _init_warpColor, _init_extra_warpColor, _init_boneIndex, _init_extra_boneIndex;

/** EveSpriteSetItem (eve/attachment/sprites) - generated from schema shapeHash 6a187bdc.... */
let _EveSpriteSetItem;
class EveSpriteSetItem extends CjsModel {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_blinkRate, _init_extra_blinkRate, _init_blinkPhase, _init_extra_blinkPhase, _init_minScale, _init_extra_minScale, _init_maxScale, _init_extra_maxScale, _init_falloff, _init_extra_falloff, _init_position, _init_extra_position, _init_color, _init_extra_color, _init_warpColor, _init_extra_warpColor, _init_boneIndex, _init_extra_boneIndex],
      c: [_EveSpriteSetItem, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSpriteSetItem",
      family: "eve/attachment/sprites"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.float32], 16, "blinkRate"], [[io, io.persist, type, type.float32], 16, "blinkPhase"], [[io, io.persist, type, type.float32], 16, "minScale"], [[io, io.persist, type, type.float32], 16, "maxScale"], [[io, io.persist, type, type.float32], 16, "falloff"], [[io, io.notify, io, io.persist, type, type.vec3], 16, "position"], [[io, io.notify, io, io.persist, type, type.color], 16, "color"], [[io, io.notify, io, io.persist, type, type.color], 16, "warpColor"], [[io, io.persist, type, type.int32], 16, "boneIndex"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_boneIndex(this);
  }
  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_blinkRate (float) [READWRITE, PERSIST] */
  blinkRate = (_init_extra_name(this), _init_blinkRate(this, 0.1));

  /** m_blinkPhase (float) [READWRITE, PERSIST] */
  blinkPhase = (_init_extra_blinkRate(this), _init_blinkPhase(this, 0));

  /** m_minScale (float) [READWRITE, PERSIST] */
  minScale = (_init_extra_blinkPhase(this), _init_minScale(this, 1));

  /** m_maxScale (float) [READWRITE, PERSIST] */
  maxScale = (_init_extra_minScale(this), _init_maxScale(this, 10));

  /** m_falloff (float) [READWRITE, PERSIST] */
  falloff = (_init_extra_maxScale(this), _init_falloff(this, 0));

  /** m_position (Vector3) [READWRITE, NOTIFY, PERSIST] */
  position = (_init_extra_falloff(this), _init_position(this, vec3.create()));

  /** m_color (Color) [READWRITE, NOTIFY, PERSIST] */
  color = (_init_extra_position(this), _init_color(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_warpColor (Color) [READWRITE, NOTIFY, PERSIST] */
  warpColor = (_init_extra_color(this), _init_warpColor(this, vec4.fromValues(1, 1, 1, 1)));

  /** m_boneIndex (int32_t) [READWRITE, PERSIST] */
  boneIndex = (_init_extra_warpColor(this), _init_boneIndex(this, 0));
  static {
    _initClass();
  }
}

export { _EveSpriteSetItem as EveSpriteSetItem };
//# sourceMappingURL=EveSpriteSetItem.js.map
