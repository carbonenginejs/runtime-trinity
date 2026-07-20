import { applyDecs2311 as _applyDecs2311 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { type, io, carbon, impl } from '@carbonenginejs/core-types/schema';
import { CjsModel } from '@carbonenginejs/core-types/model';
import { vec3 } from '@carbonenginejs/core-math/vec3';
import { vec4 } from '@carbonenginejs/core-math/vec4';

let _initProto, _initClass, _init_clusters, _init_extra_clusters, _init_centerOfClusters, _init_extra_centerOfClusters, _init_boundingSphere, _init_extra_boundingSphere, _init_clusterParticleDensityAdjust, _init_extra_clusterParticleDensityAdjust, _init_estimatedSize, _init_extra_estimatedSize, _init_clusterParticleDensity, _init_extra_clusterParticleDensity, _init_maxSize, _init_extra_maxSize, _init_minSize, _init_extra_minSize, _init_mesh, _init_extra_mesh, _init_maxParticleCount, _init_extra_maxParticleCount, _init_visible, _init_extra_visible;
function createRandom(seed) {
  let state = seed >>> 0 || 0x6d2b79f5;
  return () => {
    state = Math.imul(state, 1664525) + 1013904223 >>> 0;
    return state / 0xffffffff;
  };
}
function randomGauss(random, deviation) {
  const first = Math.max(random(), 1e-100);
  return deviation * Math.pow(-2 * Math.log(first), 0.75) * Math.cos(random() * Math.PI * 2);
}

/** EveSceneStaticParticles (eve/scene) - generated from schema shapeHash 21850d79.... */
let _EveSceneStaticPartic;
class EveSceneStaticParticles extends CjsModel {
  static {
    ({
      e: [_init_clusters, _init_extra_clusters, _init_centerOfClusters, _init_extra_centerOfClusters, _init_boundingSphere, _init_extra_boundingSphere, _init_clusterParticleDensityAdjust, _init_extra_clusterParticleDensityAdjust, _init_estimatedSize, _init_extra_estimatedSize, _init_clusterParticleDensity, _init_extra_clusterParticleDensity, _init_maxSize, _init_extra_maxSize, _init_minSize, _init_extra_minSize, _init_mesh, _init_extra_mesh, _init_maxParticleCount, _init_extra_maxParticleCount, _init_visible, _init_extra_visible, _initProto],
      c: [_EveSceneStaticPartic, _initClass]
    } = _applyDecs2311(this, [type.define({
      className: "EveSceneStaticParticles",
      family: "eve/scene"
    })], [[type.list("ClusterData"), 0, "clusters"], [type.rawStruct("Vector3d"), 0, "centerOfClusters"], [[type, type.vec4], 16, "boundingSphere"], [[io, io.read, type, type.float32], 16, "clusterParticleDensityAdjust"], [[io, io.read, type, type.float32], 16, "estimatedSize"], [[io, io.readwrite, type, type.float32], 16, "clusterParticleDensity"], [[io, io.readwrite, type, type.float32], 16, "maxSize"], [[io, io.readwrite, type, type.float32], 16, "minSize"], [[io, io.readwrite, void 0, type.objectRef("Tr2InstancedMesh")], 16, "mesh"], [[io, io.readwrite, type, type.uint64], 16, "maxParticleCount"], [[io, io.read, type, type.boolean], 16, "visible"], [[carbon, carbon.method, impl, impl.adapted], 18, "AddCluster"], [[carbon, carbon.method, impl, impl.adapted, void 0, impl.reason("Builds Carbon's CPU instance rows and bounds; a deterministic local PRNG replaces Carbon's process-global C rand state.")], 18, "Rebuild"], [[carbon, carbon.method, impl, impl.adapted], 18, "ClearClusters"]], 0, void 0, CjsModel));
  }
  constructor(...args) {
    super(...args);
    _init_extra_visible(this);
  }
  /** Carbon ClusterData records retained on the CPU. */
  clusters = (_initProto(this), _init_clusters(this, []));

  /** Double-precision aggregate origin used for camera-relative placement. */
  centerOfClusters = (_init_extra_clusters(this), _init_centerOfClusters(this, new Float64Array(3)));

  /** Local particle bounds rebuilt with the CPU instance data. */
  boundingSphere = (_init_extra_centerOfClusters(this), _init_boundingSphere(this, new Float32Array(4)));

  /** m_clusterParticleDensityAdjust (float) [READ] */
  clusterParticleDensityAdjust = (_init_extra_boundingSphere(this), _init_clusterParticleDensityAdjust(this, 1));

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
  AddCluster(position, radius, color1, color2, randomSeed) {
    this.clusters.push({
      position: new Float64Array(position),
      radius,
      color1: vec4.clone(color1),
      color2: vec4.clone(color2),
      randomSeed: randomSeed >>> 0
    });
  }

  /** Carbon method Rebuild (MAP_METHOD_AND_WRAP). */
  Rebuild() {
    const instanceData = this.mesh?.GetInstanceGeometryResource?.();
    if (!instanceData?.SetElementLayout || !instanceData?.SetData) {
      return false;
    }
    if (this.clusters.length === 0) {
      instanceData.DestroyData?.();
      this.centerOfClusters.fill(0);
      this.boundingSphere.fill(0);
      return true;
    }
    this.centerOfClusters.fill(0);
    for (const cluster of this.clusters) {
      this.centerOfClusters[0] += cluster.position[0];
      this.centerOfClusters[1] += cluster.position[1];
      this.centerOfClusters[2] += cluster.position[2];
    }
    for (let axis = 0; axis < 3; axis++) {
      this.centerOfClusters[axis] /= this.clusters.length;
    }
    let unadjustedCount = 0;
    for (const cluster of this.clusters) {
      unadjustedCount += Math.max(0, Math.trunc(this.clusterParticleDensity * cluster.radius));
    }
    const maximum = Math.max(0, Number(this.maxParticleCount));
    this.clusterParticleDensityAdjust = unadjustedCount > maximum && unadjustedCount > 0 ? maximum / unadjustedCount : 1;
    const rows = [];
    for (let clusterIndex = 0; clusterIndex < this.clusters.length; clusterIndex++) {
      const cluster = this.clusters[clusterIndex];
      const count = Math.max(0, Math.trunc(this.clusterParticleDensityAdjust * this.clusterParticleDensity * cluster.radius));
      const deviation = Math.min(cluster.radius, 2000);
      const relative = vec3.fromValues(cluster.position[0] - this.centerOfClusters[0], cluster.position[1] - this.centerOfClusters[1], cluster.position[2] - this.centerOfClusters[2]);
      const random = createRandom(cluster.randomSeed || clusterIndex + 1);
      for (let index = 0; index < count; index++) {
        const offset = vec3.fromValues(randomGauss(random, 2 * deviation), randomGauss(random, deviation), randomGauss(random, 2 * deviation));
        const length = vec3.length(offset);
        const position = vec3.clone(relative);
        vec3.add(position, position, offset);
        if (length > 0) {
          vec3.scaleAndAdd(position, position, offset, cluster.radius / length);
        }
        const mix = random();
        const color = vec4.create();
        for (let channel = 0; channel < 4; channel++) {
          color[channel] = cluster.color1[channel] + (cluster.color2[channel] - cluster.color1[channel]) * mix;
        }
        color[3] = count > 0 ? index / count : 0;
        const size = random() * Math.min(cluster.radius / 10, this.maxSize) + this.minSize;
        rows.push([position, size, color]);
      }
    }
    instanceData.SetElementLayout([{
      usage: "POSITION",
      usageIndex: 0,
      type: "FLOAT32_3",
      name: "position"
    }, {
      usage: "TEXCOORD",
      usageIndex: 0,
      type: "FLOAT32_1",
      name: "size"
    }, {
      usage: "TEXCOORD",
      usageIndex: 1,
      type: "FLOAT32_4",
      name: "color"
    }]);
    instanceData.SetData(rows);
    instanceData.UpdateBoundingBox?.();
    instanceData.UpdateData?.();
    const bounds = instanceData.GetBoundingBox?.();
    if (bounds?.min && bounds?.max) {
      this.mesh.SetBoundingBox?.(bounds.min, bounds.max);
      for (let axis = 0; axis < 3; axis++) {
        this.boundingSphere[axis] = (bounds.min[axis] + bounds.max[axis]) * 0.5;
      }
      this.boundingSphere[3] = Math.hypot(bounds.max[0] - bounds.min[0], bounds.max[1] - bounds.min[1], bounds.max[2] - bounds.min[2]) * 0.5;
    }
    return true;
  }

  /** Carbon method ClearClusters (MAP_METHOD_AND_WRAP). */
  ClearClusters() {
    this.clusters.length = 0;
    this.mesh?.GetInstanceGeometryResource?.()?.DestroyData?.();
  }
  static {
    _initClass();
  }
}

export { _EveSceneStaticPartic as EveSceneStaticParticles };
//# sourceMappingURL=EveSceneStaticParticles.js.map
