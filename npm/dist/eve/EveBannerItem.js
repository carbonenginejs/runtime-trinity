import { applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { type } from '@carbonenginejs/core-types/schema';

let _initClass, _init_bone, _init_extra_bone, _init_position, _init_extra_position, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_angleX, _init_extra_angleX, _init_angleY, _init_extra_angleY;
let _EveBannerItem;
class EveBannerItem extends CjsModel {
  static {
    ({
      e: [_init_bone, _init_extra_bone, _init_position, _init_extra_position, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_angleX, _init_extra_angleX, _init_angleY, _init_extra_angleY],
      c: [_EveBannerItem, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveBannerItem",
      family: "eve/attachment/banners"
    })], [[[type, type.int32], 16, "bone"], [[type, type.vec3], 16, "position"], [[type, type.quat], 16, "rotation"], [[type, type.vec3], 16, "scaling"], [[type, type.float32], 16, "angleX"], [[type, type.float32], 16, "angleY"]], 0, void 0, CjsModel));
  }
  bone = _init_bone(this, -1);
  position = (_init_extra_bone(this), _init_position(this, vec3.create()));
  rotation = (_init_extra_position(this), _init_rotation(this, quat.create()));
  scaling = (_init_extra_rotation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));
  angleX = (_init_extra_scaling(this), _init_angleX(this, 0));
  angleY = (_init_extra_angleX(this), _init_angleY(this, 0));

  // Private Carbon structure metadata; deliberately absent from schema/wire.
  reference = (_init_extra_angleY(this), 0);
  static {
    _initClass();
  }
}

export { _EveBannerItem as EveBannerItem };
//# sourceMappingURL=EveBannerItem.js.map
