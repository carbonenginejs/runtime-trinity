import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';
import { type } from '@carbonenginejs/runtime-utils/schema';

let _initClass;
let _IEveSpaceObjectChild;
new class extends _identity {
  static [class IEveSpaceObjectChild extends CjsModel {
    static {
      [_IEveSpaceObjectChild, _initClass] = _applyDecs2311(this, [type.define({
        className: "IEveSpaceObjectChild",
        family: "eve/child"
      })], [], 0, void 0, CjsModel).c;
    }
  }];
  Origin = Object.freeze({
    SPACE: 0,
    SOF: 1
  });
  constructor() {
    super(_IEveSpaceObjectChild), _initClass();
  }
}();

export { _IEveSpaceObjectChild as IEveSpaceObjectChild };
//# sourceMappingURL=IEveSpaceObjectChild.js.map
