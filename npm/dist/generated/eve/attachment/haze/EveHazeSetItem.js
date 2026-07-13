import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { quat } from '@carbonenginejs/core-math/quat';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_color, _init_extra_color, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_name, _init_extra_name, _init_boneIndex, _init_extra_boneIndex, _init_position, _init_extra_position, _init_hazeData, _init_extra_hazeData;

/** EveHazeSetItem (eve/attachment/haze) - generated from schema shapeHash 0b3f1c57.... */
let _EveHazeSetItem;
class EveHazeSetItem extends CjsModel {
  static {
    ({
      e: [_init_color, _init_extra_color, _init_rotation, _init_extra_rotation, _init_scaling, _init_extra_scaling, _init_name, _init_extra_name, _init_boneIndex, _init_extra_boneIndex, _init_position, _init_extra_position, _init_hazeData, _init_extra_hazeData],
      c: [_EveHazeSetItem, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveHazeSetItem",
      family: "eve/attachment/haze"
    })], [[[io, io.persist, type, type.color], 16, "color"], [[io, io.persist, type, type.quat], 16, "rotation"], [[io, io.persist, type, type.vec3], 16, "scaling"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.int32], 16, "boneIndex"], [[io, io.persist, type, type.vec3], 16, "position"], [[io, io.persist, type, type.vec4], 16, "hazeData"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_hazeData(this);
  }
  /** m_color (Color) [READWRITE, PERSIST] */
  color = _init_color(this, vec4.fromValues(1, 1, 1, 1));

  /** m_rotation (Quaternion) [READWRITE, PERSIST] */
  rotation = (_init_extra_color(this), _init_rotation(this, quat.create()));

  /** m_scaling (Vector3) [READWRITE, PERSIST] */
  scaling = (_init_extra_rotation(this), _init_scaling(this, vec3.fromValues(1, 1, 1)));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_scaling(this), _init_name(this, ""));

  /** m_boneIndex (int32_t) [READWRITE, PERSIST] */
  boneIndex = (_init_extra_name(this), _init_boneIndex(this, 0));

  /** m_position (Vector3) [READWRITE, PERSIST] */
  position = (_init_extra_boneIndex(this), _init_position(this, vec3.create()));

  /** m_hazeData (Vector4) [READWRITE, PERSIST] */
  hazeData = (_init_extra_position(this), _init_hazeData(this, vec4.fromValues(4, 0.2, 2, 0)));
  static {
    _initClass();
  }
}

export { _EveHazeSetItem as EveHazeSetItem };
//# sourceMappingURL=EveHazeSetItem.js.map
