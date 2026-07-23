// Ported from CarbonEngine (MIT, (c) 2026 CCP Games) - https://github.com/carbonengine/trinity
//   trinity/TriRenderBatch.h (ITriRenderBatchAccumulator)
//
// Abstract base for render-batch accumulators: shared render-mode / user-data
// state plus the collect/sort contract. Concrete accumulators
// (TriRenderBatchAccumulator) implement Commit/Finalize/Get*/TransferFrom. This
// stays GPU-free; dispatch to the device is the engine adapter's job.
import { RenderingMode } from "@carbonenginejs/runtime-const/graphics";


export class ITriRenderBatchAccumulator
{
  constructor()
  {
    this.userData = 0;

    this.renderingMode = RenderingMode.RM_ANY;
  }

  // Carbon pool-allocates per-object data from the accumulator; in JS the GC
  // owns lifetime, so this just constructs the requested per-object-data object.
  Allocate(Constructor)
  {
    return new Constructor();
  }

  SetUserData(userData)
  {
    this.userData = userData;
  }

  SetRenderingMode(mode)
  {
    this.renderingMode = mode;
  }

  GetRenderingMode()
  {
    return this.renderingMode;
  }

  Clear()
  {
    throw new Error("ITriRenderBatchAccumulator.Clear is abstract");
  }

  Commit(_batch)
  {
    throw new Error("ITriRenderBatchAccumulator.Commit is abstract");
  }

  GetGdprBatches()
  {
    throw new Error("ITriRenderBatchAccumulator.GetGdprBatches is abstract");
  }

  GetBatches()
  {
    throw new Error("ITriRenderBatchAccumulator.GetBatches is abstract");
  }

  Finalize()
  {
    throw new Error("ITriRenderBatchAccumulator.Finalize is abstract");
  }

  GetBatchCount()
  {
    throw new Error("ITriRenderBatchAccumulator.GetBatchCount is abstract");
  }

  IsChainedByEffect()
  {
    throw new Error("ITriRenderBatchAccumulator.IsChainedByEffect is abstract");
  }

  TransferFrom(_source)
  {
    throw new Error("ITriRenderBatchAccumulator.TransferFrom is abstract");
  }
}
