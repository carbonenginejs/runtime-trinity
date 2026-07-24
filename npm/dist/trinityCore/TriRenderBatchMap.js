import { TriBatchType } from '@carbonenginejs/runtime-const/graphics';
import { Tr2RenderReason } from '../generated/trinityCore/enums.js';
import { TriRenderBatchAccumulator, DefaultKeyGenerator, EffectKeyGenerator } from './TriRenderBatchAccumulator.js';

// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/Eve/EveSpaceScene.h  (BatchMap typedef)
//   trinity/Eve/EveSpaceScene.cpp (GetBatchesFromRenderables / FinalizeBatches / ClearBatches)
//
// GPU-free scene batch collection. Wraps Carbon's BatchMap (one accumulator per
// TriBatchType) plus the GetBatchesFromRenderables/FinalizeBatches/ClearBatches
// flow, exposed as methods on a cohesive object rather than a free function. The
// engine adapter reads the finalized per-type accumulators and issues draws.
class TriRenderBatchMap {
  // batchTypes: iterable of TriBatchType values to collect. createAccumulator:
  // optional (batchType) => accumulator factory. The default matches Carbon's
  // key-generator selection: order-preserving for TRANSPARENT (the producer
  // inserts back-to-front), effect-sorted for everything else.
  constructor(batchTypes, createAccumulator = null) {
    this.accumulators = new Map();
    const factory = createAccumulator ?? (batchType => new TriRenderBatchAccumulator(batchType === TriBatchType.TRIBATCHTYPE_TRANSPARENT ? DefaultKeyGenerator : EffectKeyGenerator));
    for (const batchType of batchTypes) {
      this.accumulators.set(batchType, factory(batchType));
    }
  }
  GetAccumulator(batchType) {
    return this.accumulators.get(batchType) ?? null;
  }

  // Bind the per-object-data store (from the render context) onto every
  // accumulator - GetPerObjectData Allocs pooled records through it.
  SetRawDataStore(store) {
    for (const accumulator of this.accumulators.values()) {
      accumulator.SetRawDataStore(store);
    }
    return this;
  }
  GetBatchTypes() {
    return Array.from(this.accumulators.keys());
  }

  // Serial form of Carbon GetBatchesFromRenderables: one GetPerObjectData per
  // renderable (keyed off the pool accumulator, by convention the OPAQUE one),
  // then GetBatches into each registered batch type. Renderables are expected
  // pre-culled; visibility/frustum filtering is a scene concern upstream.
  CollectFromRenderables(renderables, reason = Tr2RenderReason.TR2RENDERREASON_NORMAL) {
    if (!renderables) return;
    const poolAccumulator = this.accumulators.get(TriBatchType.TRIBATCHTYPE_OPAQUE) ?? this.accumulators.values().next().value ?? null;
    for (const renderable of renderables) {
      if (!renderable) continue;
      const perObjectData = renderable.GetPerObjectData?.(poolAccumulator) ?? null;
      for (const [batchType, accumulator] of this.accumulators) {
        renderable.GetBatches?.(accumulator, batchType, perObjectData, reason);
      }
    }
  }
  Finalize() {
    for (const accumulator of this.accumulators.values()) accumulator.Finalize();
  }
  Clear() {
    for (const accumulator of this.accumulators.values()) accumulator.Clear();
  }
  GetBatchCount() {
    let count = 0;
    for (const accumulator of this.accumulators.values()) count += accumulator.GetBatchCount();
    return count;
  }
}

export { TriRenderBatchMap };
//# sourceMappingURL=TriRenderBatchMap.js.map
