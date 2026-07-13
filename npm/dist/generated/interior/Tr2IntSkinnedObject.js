import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_depthOffset, _init_extra_depthOffset, _init_variableStore, _init_extra_variableStore;

/** Tr2IntSkinnedObject (interior) - generated from schema shapeHash fd82f335.... */
let _Tr2IntSkinnedObject;
class Tr2IntSkinnedObject extends CjsModel {
  static {
    ({
      e: [_init_boundingSphereRadius, _init_extra_boundingSphereRadius, _init_depthOffset, _init_extra_depthOffset, _init_variableStore, _init_extra_variableStore],
      c: [_Tr2IntSkinnedObject, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2IntSkinnedObject",
      family: "interior"
    })], [[[io, io.read, type, type.vec4], 16, "boundingSphereRadius"], [[io, io.persist, type, type.float32], 16, "depthOffset"], [[io, io.read, void 0, type.objectRef("Tr2VariableStore")], 16, "variableStore"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_variableStore(this);
  }
  /** m_boundingSphere[3] (Vector4) [READ] */
  boundingSphereRadius = _init_boundingSphereRadius(this, vec4.create());

  /** m_depthOffset (float) [READWRITE, PERSIST] */
  depthOffset = (_init_extra_boundingSphereRadius(this), _init_depthOffset(this, 0));

  /** m_variableStore (Tr2VariableStorePtr) [READ] */
  variableStore = (_init_extra_depthOffset(this), _init_variableStore(this, null));
  static {
    _initClass();
  }
}

export { _Tr2IntSkinnedObject as Tr2IntSkinnedObject };
//# sourceMappingURL=Tr2IntSkinnedObject.js.map
