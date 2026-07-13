// Source: E:\carbonengine\trinity\trinity\Eve\EveLODHelper.h
// Source: E:\carbonengine\trinity\trinity\Eve\EveLODHelper.cpp
// Source: E:\carbonengine\trinity\trinity\Eve\EveSpaceScene.cpp
// Source: E:\carbonengine\trinity\trinity\Resources\Tr2LodResource.h


export const Tr2Lod = Object.freeze({
  TR2_LOD_UNSPECIFIED: -1,
  TR2_LOD_LOW: 0,
  TR2_LOD_MEDIUM: 1,
  TR2_LOD_HIGH: 2,
  TR2_LOD_ULTRA: 3,
  TR2_LOD_COUNT: 4
});

/** Carbon's stateless LOD decision helper. */
export class EveLODHelper
{
  static lowUpdateRate = 1;

  static mediumUpdateRate = 0.1;

  static ShouldUpdate(lod, timeSinceUpdate)
  {
    switch (lod)
    {
      case Tr2Lod.TR2_LOD_UNSPECIFIED:
      case Tr2Lod.TR2_LOD_LOW:
        return timeSinceUpdate >= EveLODHelper.lowUpdateRate;
      case Tr2Lod.TR2_LOD_MEDIUM:
        return timeSinceUpdate >= EveLODHelper.mediumUpdateRate;
      default:
        return true;
    }
  }

  static MergeLOD(lod0, lodOrSphere, updateContext = null)
  {
    if (updateContext)
    {
      const frustum = updateContext.GetFrustum();
      if (!frustum.IsSphereVisible(lodOrSphere))
      {
        return Tr2Lod.TR2_LOD_UNSPECIFIED;
      }

      const estimatedSize = frustum.GetPixelSizeAccross(lodOrSphere);
      let lod1 = Tr2Lod.TR2_LOD_LOW;
      if (estimatedSize >= updateContext.GetMediumDetailThreshold())
      {
        lod1 = Tr2Lod.TR2_LOD_HIGH;
      }
      else if (estimatedSize >= updateContext.GetLowDetailThreshold())
      {
        lod1 = Tr2Lod.TR2_LOD_MEDIUM;
      }
      return EveLODHelper.MergeLOD(lod0, lod1);
    }

    const lod1 = lodOrSphere;
    if (lod0 === Tr2Lod.TR2_LOD_UNSPECIFIED || lod1 === Tr2Lod.TR2_LOD_UNSPECIFIED)
    {
      return lod0 === Tr2Lod.TR2_LOD_UNSPECIFIED ? lod1 : lod0;
    }

    return lod0 > lod1 ? lod0 : lod1;
  }
}
