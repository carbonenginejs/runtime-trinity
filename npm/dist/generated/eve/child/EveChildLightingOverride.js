import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initClass, _init_priority, _init_extra_priority, _init_name, _init_extra_name, _init_backgroundIntensity, _init_extra_backgroundIntensity, _init_intensity, _init_extra_intensity, _init_reflectionIntensity, _init_extra_reflectionIntensity, _init_sunIntensity, _init_extra_sunIntensity, _init_sunColor, _init_extra_sunColor, _init_volumes, _init_extra_volumes;

/** EveChildLightingOverride (eve/child) - generated from schema shapeHash 5eb962c7.... */
let _EveChildLightingOver;
new class extends _identity {
  static [class EveChildLightingOverride extends _EveChildTransform {
    static {
      ({
        e: [_init_priority, _init_extra_priority, _init_name, _init_extra_name, _init_backgroundIntensity, _init_extra_backgroundIntensity, _init_intensity, _init_extra_intensity, _init_reflectionIntensity, _init_extra_reflectionIntensity, _init_sunIntensity, _init_extra_sunIntensity, _init_sunColor, _init_extra_sunColor, _init_volumes, _init_extra_volumes],
        c: [_EveChildLightingOver, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildLightingOverride",
        family: "eve/child"
      })], [[[io, io.persist, type, type.int32, void 0, schema.enum("Priority")], 16, "priority"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, type, type.unknown], 16, "backgroundIntensity"], [[io, io.persist, type, type.float32], 16, "intensity"], [[io, io.persist, type, type.unknown], 16, "reflectionIntensity"], [[io, io.persist, type, type.unknown], 16, "sunIntensity"], [[io, io.persist, type, type.unknown], 16, "sunColor"], [[io, io.persist, void 0, type.list("IEveVolume")], 16, "volumes"]], 0, void 0, _EveChildTransform));
    }
    constructor(...args) {
      super(...args);
      _init_extra_volumes(this);
    }
    /** m_overrides.priority (OverrideInfo - enum Priority) [READWRITE, PERSIST, ENUM] */
    priority = _init_priority(this, 0);

    /** m_name (BlueSharedString) [READWRITE, PERSIST] */
    name = (_init_extra_priority(this), _init_name(this, ""));

    /** m_overrides.value.backgroundIntensity (OverrideInfo) [READWRITE, PERSIST] */
    backgroundIntensity = (_init_extra_name(this), _init_backgroundIntensity(this, null));

    /** m_intensity (float) [READWRITE, PERSIST] */
    intensity = (_init_extra_backgroundIntensity(this), _init_intensity(this, 1));

    /** m_overrides.value.reflectionIntensity (OverrideInfo) [READWRITE, PERSIST] */
    reflectionIntensity = (_init_extra_intensity(this), _init_reflectionIntensity(this, null));

    /** m_overrides.value.sunIntensity (OverrideInfo) [READWRITE, PERSIST] */
    sunIntensity = (_init_extra_reflectionIntensity(this), _init_sunIntensity(this, null));

    /** m_overrides.value.sunColor (OverrideInfo) [READWRITE, PERSIST] */
    sunColor = (_init_extra_sunIntensity(this), _init_sunColor(this, null));

    /** m_volumes (PIEveVolumeVector) [READ, PERSIST] */
    volumes = (_init_extra_sunColor(this), _init_volumes(this, []));
  }];
  Priority = Object.freeze({
    SCENE_DEFAULT_PRIORITY: 0,
    LOW_PRIORITY: 1,
    MEDIUM_PRIORITY: 2,
    HIGH_PRIORITY: 3,
    UI_PRIORITY: 4,
    PRIORITY_COUNT: 5
  });
  constructor() {
    super(_EveChildLightingOver), _initClass();
  }
}();

export { _EveChildLightingOver as EveChildLightingOverride };
//# sourceMappingURL=EveChildLightingOverride.js.map
