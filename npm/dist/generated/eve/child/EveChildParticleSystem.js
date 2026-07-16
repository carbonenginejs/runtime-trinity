import { identity as _identity, applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, schema } from '@carbonenginejs/core-types/schema';
import { EveChildTransform as _EveChildTransform } from '../../../eve/child/EveChildTransform.js';

let _initClass, _init_reflectionMode, _init_extra_reflectionMode, _init_particleEmitters, _init_extra_particleEmitters, _init_particleSystems, _init_extra_particleSystems, _init_transformModifiers, _init_extra_transformModifiers, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_mesh, _init_extra_mesh, _init_lodClampLow, _init_extra_lodClampLow, _init_lodSphereRadius, _init_extra_lodSphereRadius, _init_useDynamicLod, _init_extra_useDynamicLod, _init_lodFactorLow, _init_extra_lodFactorLow, _init_lodFactorMedium, _init_extra_lodFactorMedium, _init_minScreenSize, _init_extra_minScreenSize, _init_currentScreenSize, _init_extra_currentScreenSize;

/** EveChildParticleSystem (eve/child) - generated from schema shapeHash 30e9fc72.... */
let _EveChildParticleSyst;
new class extends _identity {
  static [class EveChildParticleSystem extends _EveChildTransform {
    static {
      ({
        e: [_init_reflectionMode, _init_extra_reflectionMode, _init_particleEmitters, _init_extra_particleEmitters, _init_particleSystems, _init_extra_particleSystems, _init_transformModifiers, _init_extra_transformModifiers, _init_display, _init_extra_display, _init_name, _init_extra_name, _init_mesh, _init_extra_mesh, _init_lodClampLow, _init_extra_lodClampLow, _init_lodSphereRadius, _init_extra_lodSphereRadius, _init_useDynamicLod, _init_extra_useDynamicLod, _init_lodFactorLow, _init_extra_lodFactorLow, _init_lodFactorMedium, _init_extra_lodFactorMedium, _init_minScreenSize, _init_extra_minScreenSize, _init_currentScreenSize, _init_extra_currentScreenSize],
        c: [_EveChildParticleSyst, _initClass]
      } = _applyDecs2311(this, [type.define({
        className: "EveChildParticleSystem",
        family: "eve/child"
      })], [[[io, io.notify, io, io.persist, type, type.int32, void 0, schema.enum("ReflectionMode")], 16, "reflectionMode"], [[io, io.persist, void 0, type.list("ITr2GenericEmitter")], 16, "particleEmitters"], [[io, io.persist, void 0, type.list("Tr2ParticleSystem")], 16, "particleSystems"], [[io, io.persist, void 0, type.list("IEveChildTransformModifier")], 16, "transformModifiers"], [[io, io.notify, io, io.persist, type, type.boolean], 16, "display"], [[io, io.persist, type, type.string], 16, "name"], [[io, io.persist, void 0, type.model("Tr2InstancedMesh")], 16, "mesh"], [[io, io.persist, type, type.uint32], 16, "lodClampLow"], [[io, io.persist, type, type.float32], 16, "lodSphereRadius"], [[io, io.persist, type, type.boolean], 16, "useDynamicLod"], [[io, io.persist, type, type.float32], 16, "lodFactorLow"], [[io, io.persist, type, type.float32], 16, "lodFactorMedium"], [[io, io.persist, type, type.float32], 16, "minScreenSize"], [[io, io.read, type, type.float32], 16, "currentScreenSize"]], 0, void 0, _EveChildTransform));
    }
    constructor(...args) {
      super(...args);
      _init_extra_currentScreenSize(this);
    }
    /** m_reflectionMode (EntityComponents::ReflectionMode - enum ReflectionMode) [READWRITE, PERSIST, NOTIFY, ENUM] */
    reflectionMode = _init_reflectionMode(this, 3);

    /** m_particleEmitters (PITr2GenericEmitterVector) [READ, PERSIST] */
    particleEmitters = (_init_extra_reflectionMode(this), _init_particleEmitters(this, []));

    /** m_particleSystems (PTr2ParticleSystemVector) [READ, PERSIST] */
    particleSystems = (_init_extra_particleEmitters(this), _init_particleSystems(this, []));

    /** m_transformModifiers (PIEveChildTransformModifierVector) [READ, PERSIST] */
    transformModifiers = (_init_extra_particleSystems(this), _init_transformModifiers(this, []));

    /** m_display (bool) [READWRITE, PERSIST, NOTIFY] */
    display = (_init_extra_transformModifiers(this), _init_display(this, true));

    /** m_name (BlueSharedString) [READWRITE, PERSIST] */
    name = (_init_extra_display(this), _init_name(this, ""));

    /** m_mesh (Tr2InstancedMeshPtr) [READWRITE, PERSIST] */
    mesh = (_init_extra_name(this), _init_mesh(this, null));

    /** m_lodClampLow (uint32_t) [READWRITE, PERSIST] */
    lodClampLow = (_init_extra_mesh(this), _init_lodClampLow(this, 5));

    /** m_lodSphereRadius (float) [READWRITE, PERSIST] */
    lodSphereRadius = (_init_extra_lodClampLow(this), _init_lodSphereRadius(this, 0));

    /** m_useDynamicLod (bool) [READWRITE, PERSIST] */
    useDynamicLod = (_init_extra_lodSphereRadius(this), _init_useDynamicLod(this, false));

    /** m_lodFactorLow (float) [READWRITE, PERSIST] */
    lodFactorLow = (_init_extra_useDynamicLod(this), _init_lodFactorLow(this, 0.125));

    /** m_lodFactorMedium (float) [READWRITE, PERSIST] */
    lodFactorMedium = (_init_extra_lodFactorLow(this), _init_lodFactorMedium(this, 0.25));

    /** m_minScreenSize (float) [READWRITE, PERSIST] */
    minScreenSize = (_init_extra_lodFactorMedium(this), _init_minScreenSize(this, 0));

    /** m_currentScreenSize (float) [READ] */
    currentScreenSize = (_init_extra_minScreenSize(this), _init_currentScreenSize(this, -1));
  }];
  ReflectionMode = Object.freeze({
    REFLECT_HIGH: 0,
    REFLECT_MEDIUM_AND_HIGH: 1,
    REFLECT_LOW_MEDIUM_HIGH: 2,
    REFLECT_NEVER: 3
  });
  constructor() {
    super(_EveChildParticleSyst), _initClass();
  }
}();

export { _EveChildParticleSyst as EveChildParticleSystem };
//# sourceMappingURL=EveChildParticleSystem.js.map
