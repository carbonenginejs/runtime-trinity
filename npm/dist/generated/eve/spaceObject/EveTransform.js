import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';

let _initClass, _init_meshLod, _init_extra_meshLod, _init_children, _init_extra_children, _init_overrideBoundsMin, _init_extra_overrideBoundsMin, _init_overrideBoundsMax, _init_extra_overrideBoundsMax, _init_particleEmitters, _init_extra_particleEmitters, _init_particleSystems, _init_extra_particleSystems, _init_lodLevel, _init_extra_lodLevel, _init_hideOnLowQuality, _init_extra_hideOnLowQuality, _init_visibilityThreshold, _init_extra_visibilityThreshold, _init_observers, _init_extra_observers, _init_useLodLevel, _init_extra_useLodLevel;

/** EveTransform (eve/spaceObject) - generated from schema shapeHash db288b04.... */
let _EveTransform;
new class extends _identity {
  static [class EveTransform extends CjsModel {
    static {
      ({
        e: [_init_meshLod, _init_extra_meshLod, _init_children, _init_extra_children, _init_overrideBoundsMin, _init_extra_overrideBoundsMin, _init_overrideBoundsMax, _init_extra_overrideBoundsMax, _init_particleEmitters, _init_extra_particleEmitters, _init_particleSystems, _init_extra_particleSystems, _init_lodLevel, _init_extra_lodLevel, _init_hideOnLowQuality, _init_extra_hideOnLowQuality, _init_visibilityThreshold, _init_extra_visibilityThreshold, _init_observers, _init_extra_observers, _init_useLodLevel, _init_extra_useLodLevel],
        c: [_EveTransform, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveTransform",
        family: "eve/spaceObject"
      })], [[[io, io.persist, void 0, type.model("Tr2MeshBase")], 16, "meshLod"], [[io, io.persist, void 0, type.list("IEveTransform")], 16, "children"], [[io, io.persist, type, type.vec3], 16, "overrideBoundsMin"], [[io, io.persist, type, type.vec3], 16, "overrideBoundsMax"], [[io, io.persist, void 0, type.list("ITr2GenericEmitter")], 16, "particleEmitters"], [[io, io.persist, void 0, type.list("Tr2ParticleSystem")], 16, "particleSystems"], [[io, io.read, type, type.int32, void 0, schema.enum("Tr2Lod")], 16, "lodLevel"], [[io, io.persist, type, type.boolean], 16, "hideOnLowQuality"], [[io, io.persist, type, type.float32], 16, "visibilityThreshold"], [[io, io.persist, void 0, type.list("TriObserverLocal")], 16, "observers"], [[io, io.persist, type, type.boolean], 16, "useLodLevel"]], 0, void 0, CjsModel));
    }
    constructor(...args) {
      super(...args);
      _init_extra_useLodLevel(this);
    }
    /** m_meshLod (Tr2MeshBasePtr) [READWRITE, PERSIST] */
    meshLod = _init_meshLod(this, null);

    /** m_children (PIEveTransformVector) [READ, PERSIST] */
    children = (_init_extra_meshLod(this), _init_children(this, []));

    /** m_overrideBoundsMin (Vector3) [READWRITE, PERSIST] */
    overrideBoundsMin = (_init_extra_children(this), _init_overrideBoundsMin(this, vec3.create()));

    /** m_overrideBoundsMax (Vector3) [READWRITE, PERSIST] */
    overrideBoundsMax = (_init_extra_overrideBoundsMin(this), _init_overrideBoundsMax(this, vec3.create()));

    /** m_particleEmitters (PITr2GenericEmitterVector) [READ, PERSIST] */
    particleEmitters = (_init_extra_overrideBoundsMax(this), _init_particleEmitters(this, []));

    /** m_particleSystems (PTr2ParticleSystemVector) [READ, PERSIST] */
    particleSystems = (_init_extra_particleEmitters(this), _init_particleSystems(this, []));

    /** m_lodLevel (Tr2Lod - enum Tr2Lod) [READ] */
    lodLevel = (_init_extra_particleSystems(this), _init_lodLevel(this, 0));

    /** m_hideOnLowQuality (bool) [READWRITE, PERSIST] */
    hideOnLowQuality = (_init_extra_lodLevel(this), _init_hideOnLowQuality(this, false));

    /** m_visibilityThreshold (float) [READWRITE, PERSIST] */
    visibilityThreshold = (_init_extra_hideOnLowQuality(this), _init_visibilityThreshold(this, 2));

    /** m_observers (PTriObserverLocalVector) [READ, PERSIST] */
    observers = (_init_extra_visibilityThreshold(this), _init_observers(this, []));

    /** m_useLodLevel (bool) [READWRITE, PERSIST] */
    useLodLevel = (_init_extra_observers(this), _init_useLodLevel(this, true));
  }];
  Tr2Lod = Object.freeze({
    TR2_LOD_UNSPECIFIED: -1,
    TR2_LOD_LOW: 0,
    TR2_LOD_MEDIUM: 1,
    TR2_LOD_HIGH: 2,
    TR2_LOD_ULTRA: 3,
    TR2_LOD_COUNT: 4
  });
  constructor() {
    super(_EveTransform), _initClass();
  }
}();

export { _EveTransform as EveTransform };
//# sourceMappingURL=EveTransform.js.map
