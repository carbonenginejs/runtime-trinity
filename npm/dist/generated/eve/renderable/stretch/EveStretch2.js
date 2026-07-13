import { applyDecs2311 as _applyDecs2311 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type } from '@carbonenginejs/core-types/schema';
import { EveEntity as _EveEntity } from '../../EveEntity.js';

let _initClass, _init_name, _init_extra_name, _init_loop, _init_extra_loop, _init_start, _init_extra_start, _init_end, _init_extra_end, _init_effect, _init_extra_effect, _init_destinationEmitter, _init_extra_destinationEmitter, _init_sourceEmitter, _init_extra_sourceEmitter, _init_quadCount, _init_extra_quadCount, _init_destinationObserver, _init_extra_destinationObserver, _init_sourceObserver, _init_extra_sourceObserver, _init_destinationLight, _init_extra_destinationLight, _init_sourceLight, _init_extra_sourceLight, _init_boundingRadius, _init_extra_boundingRadius;

/** EveStretch2 (eve/renderable/stretch) - generated from schema shapeHash 1f78134c.... */
let _EveStretch;
class EveStretch2 extends _EveEntity {
  static {
    ({
      e: [_init_name, _init_extra_name, _init_loop, _init_extra_loop, _init_start, _init_extra_start, _init_end, _init_extra_end, _init_effect, _init_extra_effect, _init_destinationEmitter, _init_extra_destinationEmitter, _init_sourceEmitter, _init_extra_sourceEmitter, _init_quadCount, _init_extra_quadCount, _init_destinationObserver, _init_extra_destinationObserver, _init_sourceObserver, _init_extra_sourceObserver, _init_destinationLight, _init_extra_destinationLight, _init_sourceLight, _init_extra_sourceLight, _init_boundingRadius, _init_extra_boundingRadius],
      c: [_EveStretch, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveStretch2",
      family: "eve/renderable/stretch"
    })], [[[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.objectRef("TriCurveSet")], 16, "loop"], [[io, io.persist, void 0, type.objectRef("TriCurveSet")], 16, "start"], [[io, io.persist, void 0, type.objectRef("TriCurveSet")], 16, "end"], [[io, io.persist, void 0, type.objectRef("Tr2Effect")], 16, "effect"], [[io, io.persist, void 0, type.objectRef("Tr2GpuSharedEmitter")], 16, "destinationEmitter"], [[io, io.persist, void 0, type.objectRef("Tr2GpuSharedEmitter")], 16, "sourceEmitter"], [[io, io.notify, io, io.persist, type, type.uint32], 16, "quadCount"], [[io, io.persist, void 0, type.objectRef("TriObserverLocal")], 16, "destinationObserver"], [[io, io.persist, void 0, type.objectRef("TriObserverLocal")], 16, "sourceObserver"], [[io, io.persist, void 0, type.objectRef("Tr2PointLight")], 16, "destinationLight"], [[io, io.persist, void 0, type.objectRef("Tr2PointLight")], 16, "sourceLight"], [[io, io.persist, type, type.float32], 16, "boundingRadius"]], 0, void 0, _EveEntity));
  }
  constructor(...args) {
    super(...args);
    _init_extra_boundingRadius(this);
  }
  /** m_name (std::string) [READWRITE, PERSIST] */
  name = _init_name(this, "");

  /** m_loop (TriCurveSetPtr) [READWRITE, PERSIST] */
  loop = (_init_extra_name(this), _init_loop(this, null));

  /** m_start (TriCurveSetPtr) [READWRITE, PERSIST] */
  start = (_init_extra_loop(this), _init_start(this, null));

  /** m_end (TriCurveSetPtr) [READWRITE, PERSIST] */
  end = (_init_extra_start(this), _init_end(this, null));

  /** m_effect (Tr2EffectPtr) [READWRITE, PERSIST] */
  effect = (_init_extra_end(this), _init_effect(this, null));

  /** m_destinationEmitter (Tr2GpuSharedEmitterPtr) [READWRITE, PERSIST] */
  destinationEmitter = (_init_extra_effect(this), _init_destinationEmitter(this, null));

  /** m_sourceEmitter (Tr2GpuSharedEmitterPtr) [READWRITE, PERSIST] */
  sourceEmitter = (_init_extra_destinationEmitter(this), _init_sourceEmitter(this, null));

  /** m_quadCount (uint32_t) [READWRITE, PERSIST, NOTIFY] */
  quadCount = (_init_extra_sourceEmitter(this), _init_quadCount(this, 0));

  /** m_destinationObserver (TriObserverLocalPtr) [READWRITE, PERSIST] */
  destinationObserver = (_init_extra_quadCount(this), _init_destinationObserver(this, null));

  /** m_sourceObserver (TriObserverLocalPtr) [READWRITE, PERSIST] */
  sourceObserver = (_init_extra_destinationObserver(this), _init_sourceObserver(this, null));

  /** m_destinationLight (Tr2PointLightPtr) [READWRITE, PERSIST] */
  destinationLight = (_init_extra_sourceObserver(this), _init_destinationLight(this, null));

  /** m_sourceLight (Tr2PointLightPtr) [READWRITE, PERSIST] */
  sourceLight = (_init_extra_destinationLight(this), _init_sourceLight(this, null));

  /** m_boundingRadius (float) [READWRITE, PERSIST] */
  boundingRadius = (_init_extra_sourceLight(this), _init_boundingRadius(this, 100));
  static {
    _initClass();
  }
}

export { _EveStretch as EveStretch2 };
//# sourceMappingURL=EveStretch2.js.map
