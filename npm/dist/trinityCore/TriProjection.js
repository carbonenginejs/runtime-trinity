import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { mat4 } from '@carbonenginejs/runtime-utils/mat4';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { type, io, carbon, impl } from '@carbonenginejs/runtime-utils/schema';

let _initProto, _initClass, _init_projectionType, _init_extra_projectionType, _init_fov, _init_extra_fov, _init_aspect, _init_extra_aspect, _init_left, _init_extra_left, _init_right, _init_extra_right, _init_bottom, _init_extra_bottom, _init_top, _init_extra_top, _init_zn, _init_extra_zn, _init_zf, _init_extra_zf, _init_customTransform, _init_extra_customTransform, _init_transform, _init_extra_transform;
let _TriProjection;
new class extends _identity {
  static [class TriProjection extends CjsModel {
    static {
      ({
        e: [_init_projectionType, _init_extra_projectionType, _init_fov, _init_extra_fov, _init_aspect, _init_extra_aspect, _init_left, _init_extra_left, _init_right, _init_extra_right, _init_bottom, _init_extra_bottom, _init_top, _init_extra_top, _init_zn, _init_extra_zn, _init_zf, _init_extra_zf, _init_customTransform, _init_extra_customTransform, _init_transform, _init_extra_transform, _initProto],
        c: [_TriProjection, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "TriProjection",
        family: "trinityCore"
      })], [[[type, type.int8], 16, "projectionType"], [[type, type.float32], 16, "fov"], [[type, type.float32], 16, "aspect"], [[type, type.float32], 16, "left"], [[type, type.float32], 16, "right"], [[type, type.float32], 16, "bottom"], [[type, type.float32], 16, "top"], [[type, type.float32], 16, "zn"], [[type, type.float32], 16, "zf"], [[type, type.mat4], 16, "customTransform"], [[io, io.read, type, type.mat4], 16, "transform"], [[carbon, carbon.method, impl, impl.implemented], 18, "PerspectiveFov"], [[carbon, carbon.method, impl, impl.implemented], 18, "PerspectiveOffCenter"], [[carbon, carbon.method, impl, impl.implemented], 18, "PerspectiveOrthographic"], [[carbon, carbon.method, impl, impl.adapted], 18, "CustomProjection"], [[carbon, carbon.method, impl, impl.implemented], 18, "GetProjectionType"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetMatrixWithoutViewAdjustment"], [[carbon, carbon.method, impl, impl.adapted], 18, "GetTransform"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_transform(this);
    }
    projectionType = (_initProto(this), _init_projectionType(this, 0));
    fov = (_init_extra_projectionType(this), _init_fov(this, 0));
    aspect = (_init_extra_fov(this), _init_aspect(this, 0));
    left = (_init_extra_aspect(this), _init_left(this, 0));
    right = (_init_extra_left(this), _init_right(this, 0));
    bottom = (_init_extra_right(this), _init_bottom(this, 0));
    top = (_init_extra_bottom(this), _init_top(this, 0));
    zn = (_init_extra_top(this), _init_zn(this, 0));
    zf = (_init_extra_zn(this), _init_zf(this, 0));
    customTransform = (_init_extra_zf(this), _init_customTransform(this, mat4.create()));
    transform = (_init_extra_customTransform(this), _init_transform(this, mat4.create()));
    PerspectiveFov(fov, aspect, zn, zf) {
      this.projectionType = _TriProjection.FOV;
      this.fov = fov;
      this.aspect = aspect;
      this.zn = zn;
      this.zf = zf;
      _TriProjection.#perspectiveFovLH(this.transform, fov, aspect, zn, zf);
    }
    PerspectiveOffCenter(left, right, bottom, top, zn, zf) {
      this.projectionType = _TriProjection.OFF_CENTER;
      this.left = left;
      this.right = right;
      this.bottom = bottom;
      this.top = top;
      this.zn = zn;
      this.zf = zf;
      _TriProjection.#perspectiveOffCenterLH(this.transform, left, right, bottom, top, zn, zf);
    }
    PerspectiveOrthographic(width, height, front, back) {
      this.projectionType = _TriProjection.ORTHO;
      this.left = width;
      this.top = height;
      this.zn = front;
      this.zf = back;
      _TriProjection.#orthoLH(this.transform, width, height, front, back);
    }
    CustomProjection(value) {
      this.projectionType = _TriProjection.CUSTOM;
      mat4.copy(this.customTransform, value);
      mat4.copy(this.transform, value);
    }
    GetProjectionType() {
      return this.projectionType;
    }
    GetMatrixWithoutViewAdjustment(out = mat4.create()) {
      switch (this.projectionType) {
        case _TriProjection.FOV:
          return _TriProjection.#perspectiveFovLH(out, this.fov, this.aspect, this.zn, this.zf);
        case _TriProjection.OFF_CENTER:
          return _TriProjection.#perspectiveOffCenterLH(out, this.left, this.right, this.bottom, this.top, this.zn, this.zf);
        case _TriProjection.ORTHO:
          return _TriProjection.#orthoLH(out, this.left, this.top, this.zn, this.zf);
        case _TriProjection.CUSTOM:
          return mat4.copy(out, this.customTransform);
        default:
          return mat4.identity(out);
      }
    }
    GetTransform(out = mat4.create()) {
      this.GetMatrixWithoutViewAdjustment(this.transform);
      return mat4.copy(out, this.transform);
    }
  }];
  FOV = 1;
  OFF_CENTER = 2;
  ORTHO = 3;
  CUSTOM = 4;
  #perspectiveFovLH(out, fov, aspect, zn, zf) {
    const yScale = 1 / Math.tan(fov * 0.5);
    const xScale = yScale / aspect;
    out.fill(0);
    out[0] = xScale;
    out[5] = yScale;
    out[10] = zf / (zf - zn);
    out[11] = 1;
    out[14] = zn * zf / (zn - zf);
    return out;
  }
  #perspectiveOffCenterLH(out, left, right, bottom, top, zn, zf) {
    out.fill(0);
    out[0] = 2 * zn / (right - left);
    out[5] = 2 * zn / (top - bottom);
    out[8] = (left + right) / (left - right);
    out[9] = (top + bottom) / (bottom - top);
    out[10] = zf / (zf - zn);
    out[11] = 1;
    out[14] = zn * zf / (zn - zf);
    return out;
  }
  #orthoLH(out, width, height, zn, zf) {
    mat4.identity(out);
    out[0] = 2 / width;
    out[5] = 2 / height;
    out[10] = 1 / (zf - zn);
    out[14] = zn / (zn - zf);
    return out;
  }
  constructor() {
    super(_TriProjection), _initClass();
  }
}();

export { _TriProjection as TriProjection };
//# sourceMappingURL=TriProjection.js.map
