import { applyDecs2311 as _applyDecs2311 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initClass, _init_destinationAttribute, _init_extra_destinationAttribute, _init_sourceAttribute, _init_extra_sourceAttribute, _init_destinationObject, _init_extra_destinationObject, _init_isEnabled, _init_extra_isEnabled, _init_name, _init_extra_name, _init_sourceObject, _init_extra_sourceObject, _init_offset, _init_extra_offset, _init_copyValueCallable, _init_extra_copyValueCallable, _init_scale, _init_extra_scale, _init_isWeak, _init_extra_isWeak;

/** TriValueBinding (trinityCore) - generated from schema shapeHash 785c7efb.... */
let _TriValueBinding;
class TriValueBinding extends CjsModel {
  static {
    ({
      e: [_init_destinationAttribute, _init_extra_destinationAttribute, _init_sourceAttribute, _init_extra_sourceAttribute, _init_destinationObject, _init_extra_destinationObject, _init_isEnabled, _init_extra_isEnabled, _init_name, _init_extra_name, _init_sourceObject, _init_extra_sourceObject, _init_offset, _init_extra_offset, _init_copyValueCallable, _init_extra_copyValueCallable, _init_scale, _init_extra_scale, _init_isWeak, _init_extra_isWeak],
      c: [_TriValueBinding, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "TriValueBinding",
      family: "trinityCore"
    })], [[[io, io.notify, io, io.persist, type, type.string], 16, "destinationAttribute"], [[io, io.notify, io, io.persist, type, type.string], 16, "sourceAttribute"], [[io, io.persistOnly, void 0, type.model("IRoot")], 16, "destinationObject"], [[io, io.readwrite, type, type.boolean], 16, "isEnabled"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persistOnly, void 0, type.model("IRoot")], 16, "sourceObject"], [[io, io.persist, type, type.vec4], 16, "offset"], [[io, io.notify, io, io.readwrite, void 0, type.rawStruct("BlueScriptCallback")], 16, "copyValueCallable"], [[io, io.persist, type, type.float32], 16, "scale"], [[io, io.read, type, type.boolean], 16, "isWeak"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_isWeak(this);
  }
  /** m_destinationAttribute (std::string) [READWRITE, PERSIST, NOTIFY] */
  destinationAttribute = _init_destinationAttribute(this, "");

  /** m_sourceAttribute (std::string) [READWRITE, PERSIST, NOTIFY] */
  sourceAttribute = (_init_extra_destinationAttribute(this), _init_sourceAttribute(this, ""));

  /** m_destinationObject (IRootPtr) [PERSISTONLY] */
  destinationObject = (_init_extra_sourceAttribute(this), _init_destinationObject(this, null));

  /** m_isEnabled (bool) [READWRITE] */
  isEnabled = (_init_extra_destinationObject(this), _init_isEnabled(this, true));

  /** m_name (std::string) [READWRITE, PERSIST] */
  name = (_init_extra_isEnabled(this), _init_name(this, ""));

  /** m_sourceObject (IRootPtr) [PERSISTONLY] */
  sourceObject = (_init_extra_name(this), _init_sourceObject(this, null));

  /** m_offset (Vector4) [READWRITE, PERSIST] */
  offset = (_init_extra_sourceObject(this), _init_offset(this, vec4.create()));

  /** m_copyValueCallable (BlueScriptCallback) [READWRITE, NOTIFY] */
  copyValueCallable = (_init_extra_offset(this), _init_copyValueCallable(this, null));

  /** m_scale (float) [READWRITE, PERSIST] */
  scale = (_init_extra_copyValueCallable(this), _init_scale(this, 1));

  /** m_isWeak (bool) [READ] */
  isWeak = (_init_extra_scale(this), _init_isWeak(this, false));
  static {
    _initClass();
  }
}

export { _TriValueBinding as TriValueBinding };
//# sourceMappingURL=TriValueBinding.js.map
