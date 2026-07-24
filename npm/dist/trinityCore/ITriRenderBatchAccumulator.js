import { RenderingMode } from '@carbonenginejs/runtime-utils/graphics';

// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/TriRenderBatch.h (ITriRenderBatchAccumulator)
//
// Abstract base for render-batch accumulators: shared render-mode / user-data
// state plus the collect/sort contract. Concrete accumulators
// (TriRenderBatchAccumulator) implement Commit/Finalize/Get*/TransferFrom. This
// stays GPU-free; dispatch to the device is the engine adapter's job.
class ITriRenderBatchAccumulator {
  constructor() {
    this.userData = 0;
    this.renderingMode = RenderingMode.RM_ANY;

    // The per-object-data store (a RawDataStore), set once from the render
    // context at scene setup. The engine builds it from its own struct
    // reflection; Trinity never defines a struct here.
    this.rawDataStore = null;
  }

  // Bind the per-object-data store (from the render context). Carbon's pool
  // allocator (Tr2Renderer::GetPoolAllocator) relocates onto this store.
  SetRawDataStore(store) {
    this.rawDataStore = store;
    return this;
  }
  GetRawDataStore() {
    return this.rawDataStore;
  }

  // Lease a transient per-object payload for a registered struct (the pooled
  // per-object-data allocation). Requires a store - there is no fallback; a
  // missing store is a setup error, not a silent tight-pack.
  Alloc(name) {
    if (!this.rawDataStore) {
      throw new Error(`ITriRenderBatchAccumulator: no per-object-data store bound (set it from the render context before Alloc "${name}")`);
    }
    return this.rawDataStore.Alloc(name);
  }

  // Carbon pool-allocates per-object data from the accumulator; in JS the GC
  // owns lifetime, so this just constructs the requested object. Retained for
  // the deferred { object: this } sites during the per-object-data migration.
  Allocate(Constructor) {
    return new Constructor();
  }
  SetUserData(userData) {
    this.userData = userData;
  }
  SetRenderingMode(mode) {
    this.renderingMode = mode;
  }
  GetRenderingMode() {
    return this.renderingMode;
  }
  Clear() {
    throw new Error("ITriRenderBatchAccumulator.Clear is abstract");
  }
  Commit(_batch) {
    throw new Error("ITriRenderBatchAccumulator.Commit is abstract");
  }
  GetGdprBatches() {
    throw new Error("ITriRenderBatchAccumulator.GetGdprBatches is abstract");
  }
  GetBatches() {
    throw new Error("ITriRenderBatchAccumulator.GetBatches is abstract");
  }
  Finalize() {
    throw new Error("ITriRenderBatchAccumulator.Finalize is abstract");
  }
  GetBatchCount() {
    throw new Error("ITriRenderBatchAccumulator.GetBatchCount is abstract");
  }
  IsChainedByEffect() {
    throw new Error("ITriRenderBatchAccumulator.IsChainedByEffect is abstract");
  }
  TransferFrom(_source) {
    throw new Error("ITriRenderBatchAccumulator.TransferFrom is abstract");
  }
}

export { ITriRenderBatchAccumulator };
//# sourceMappingURL=ITriRenderBatchAccumulator.js.map
