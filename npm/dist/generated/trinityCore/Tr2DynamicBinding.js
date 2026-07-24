import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/runtime-utils/schema';
import { CjsModel } from '@carbonenginejs/runtime-utils/model';

let _initClass, _init_bindingDelay, _init_extra_bindingDelay, _init_destination, _init_extra_destination, _init_name, _init_extra_name, _init_destinationObjectAttribute, _init_extra_destinationObjectAttribute, _init_destinationObjectPath, _init_extra_destinationObjectPath, _init_sourceObjectAttribute, _init_extra_sourceObjectAttribute, _init_sourceObjectPath, _init_extra_sourceObjectPath, _init_scale, _init_extra_scale, _init_source, _init_extra_source, _init_binding, _init_extra_binding;

/** Tr2DynamicBinding (trinityCore) - generated from schema shapeHash a612bca4.... */
let _Tr2DynamicBinding;
class Tr2DynamicBinding extends CjsModel {
  static {
    ({
      e: [_init_bindingDelay, _init_extra_bindingDelay, _init_destination, _init_extra_destination, _init_name, _init_extra_name, _init_destinationObjectAttribute, _init_extra_destinationObjectAttribute, _init_destinationObjectPath, _init_extra_destinationObjectPath, _init_sourceObjectAttribute, _init_extra_sourceObjectAttribute, _init_sourceObjectPath, _init_extra_sourceObjectPath, _init_scale, _init_extra_scale, _init_source, _init_extra_source, _init_binding, _init_extra_binding],
      c: [_Tr2DynamicBinding, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "Tr2DynamicBinding",
      family: "trinityCore"
    })], [[[io, io.persist, type, type.int32], 16, "bindingDelay"], [[io, io.read, void 0, type.objectRef("IRoot")], 16, "destination"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.notify, io, io.persist, type, type.string], 16, "destinationObjectAttribute"], [[io, io.notify, io, io.persist, type, type.string], 16, "destinationObjectPath"], [[io, io.notify, io, io.persist, type, type.string], 16, "sourceObjectAttribute"], [[io, io.notify, io, io.persist, type, type.string], 16, "sourceObjectPath"], [[io, io.notify, io, io.persist, type, type.float32], 16, "scale"], [[io, io.read, void 0, type.objectRef("IRoot")], 16, "source"], [[io, io.read, void 0, type.objectRef("TriValueBinding")], 16, "binding"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_binding(this);
  }
  /** m_bindingDelay (int32_t) [READWRITE, PERSIST] */
  bindingDelay = _init_bindingDelay(this, 0);

  /** m_destination (BlueWeakRef<IRoot>) [READ] */
  destination = (_init_extra_bindingDelay(this), _init_destination(this, null));

  /** m_name (BlueSharedString) [READWRITE, PERSIST] */
  name = (_init_extra_destination(this), _init_name(this, ""));

  /** m_destinationObjectAttribute (BlueSharedString) [READWRITE, PERSIST, NOTIFY] */
  destinationObjectAttribute = (_init_extra_name(this), _init_destinationObjectAttribute(this, ""));

  /** m_destinationObjectPath (BlueSharedString) [READWRITE, PERSIST, NOTIFY] */
  destinationObjectPath = (_init_extra_destinationObjectAttribute(this), _init_destinationObjectPath(this, ""));

  /** m_sourceObjectAttribute (BlueSharedString) [READWRITE, PERSIST, NOTIFY] */
  sourceObjectAttribute = (_init_extra_destinationObjectPath(this), _init_sourceObjectAttribute(this, ""));

  /** m_sourceObjectPath (BlueSharedString) [READWRITE, PERSIST, NOTIFY] */
  sourceObjectPath = (_init_extra_sourceObjectAttribute(this), _init_sourceObjectPath(this, ""));

  /** m_scale (float) [READWRITE, PERSIST, NOTIFY] */
  scale = (_init_extra_sourceObjectPath(this), _init_scale(this, 1));

  /** m_source (BlueWeakRef<IRoot>) [READ] */
  source = (_init_extra_scale(this), _init_source(this, null));

  /** m_binding (TriValueBindingPtr) [READ] */
  binding = (_init_extra_source(this), _init_binding(this, null));
  static {
    _initClass();
  }
}

export { _Tr2DynamicBinding as Tr2DynamicBinding };
//# sourceMappingURL=Tr2DynamicBinding.js.map
