import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { io, type, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';

let _initProto, _initClass, _init_clusterParticleDensityAdjust, _init_extra_clusterParticleDensityAdjust, _init_estimatedSize, _init_extra_estimatedSize, _init_clusterParticleDensity, _init_extra_clusterParticleDensity, _init_maxSize, _init_extra_maxSize, _init_minSize, _init_extra_minSize, _init_mesh, _init_extra_mesh, _init_maxParticleCount, _init_extra_maxParticleCount, _init_visible, _init_extra_visible;

/** EveSceneStaticParticles (eve/scene) - generated from schema shapeHash 21850d79.... */
let _EveSceneStaticPartic;
class EveSceneStaticParticles extends CjsModel {
  static {
    ({
      e: [_init_clusterParticleDensityAdjust, _init_extra_clusterParticleDensityAdjust, _init_estimatedSize, _init_extra_estimatedSize, _init_clusterParticleDensity, _init_extra_clusterParticleDensity, _init_maxSize, _init_extra_maxSize, _init_minSize, _init_extra_minSize, _init_mesh, _init_extra_mesh, _init_maxParticleCount, _init_extra_maxParticleCount, _init_visible, _init_extra_visible, _initProto],
      c: [_EveSceneStaticPartic, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSceneStaticParticles",
      family: "eve/scene"
    })], [[[io, io.read, type, type.float32], 16, "clusterParticleDensityAdjust"], [[io, io.read, type, type.float32], 16, "estimatedSize"], [[io, io.readwrite, type, type.float32], 16, "clusterParticleDensity"], [[io, io.readwrite, type, type.float32], 16, "maxSize"], [[io, io.readwrite, type, type.float32], 16, "minSize"], [[io, io.readwrite, void 0, type.objectRef("Tr2InstancedMesh")], 16, "mesh"], [[io, io.readwrite, type, type.uint64], 16, "maxParticleCount"], [[io, io.read, type, type.boolean], 16, "visible"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "AddCluster"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.notImplemented], 18, "ClearClusters"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_visible(this);
  }
  /** m_clusterParticleDensityAdjust (float) [READ] */
  clusterParticleDensityAdjust = (_initProto(this), _init_clusterParticleDensityAdjust(this, 1));

  /** m_estimatedSize (float) [READ] */
  estimatedSize = (_init_extra_clusterParticleDensityAdjust(this), _init_estimatedSize(this, 0));

  /** m_clusterParticleDensity (float) [READWRITE] */
  clusterParticleDensity = (_init_extra_estimatedSize(this), _init_clusterParticleDensity(this, 100));

  /** m_maxSize (float) [READWRITE] */
  maxSize = (_init_extra_clusterParticleDensity(this), _init_maxSize(this, 200));

  /** m_minSize (float) [READWRITE] */
  minSize = (_init_extra_maxSize(this), _init_minSize(this, 5));

  /** m_mesh (Tr2InstancedMeshPtr) [READWRITE] */
  mesh = (_init_extra_minSize(this), _init_mesh(this, null));

  /** m_maxParticleCount (size_t) [READWRITE] */
  maxParticleCount = (_init_extra_mesh(this), _init_maxParticleCount(this, 100000));

  /** m_visible (bool) [READ] */
  visible = (_init_extra_maxParticleCount(this), _init_visible(this, false));

  /** Carbon method AddCluster (MAP_METHOD_AND_WRAP). */
  AddCluster(...args) {
    throw CjsModel.notImplemented("EveSceneStaticParticles", "AddCluster", args);
  }

  /** Carbon method Rebuild (MAP_METHOD_AND_WRAP). */
  Rebuild(...args) {
    throw CjsModel.notImplemented("EveSceneStaticParticles", "Rebuild", args);
  }

  /** Carbon method ClearClusters (MAP_METHOD_AND_WRAP). */
  ClearClusters(...args) {
    throw CjsModel.notImplemented("EveSceneStaticParticles", "ClearClusters", args);
  }
  static {
    _initClass();
  }
}

export { _EveSceneStaticPartic as EveSceneStaticParticles };
//# sourceMappingURL=EveSceneStaticParticles.js.map
