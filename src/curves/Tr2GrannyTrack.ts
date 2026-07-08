// Source: E:\carbonengine\trinity\trinity\Curves\Tr2GrannyTrack.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2GrannyTrack.cpp
import { CjsModel } from "@carbonenginejs/core-types/model";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CjsGetGrannyAnimationDuration,
  CjsGetGrannyAnimations,
  CjsGetGrannyAnimationTimeStep,
  CjsGetGrannyJsonTrackSource,
  CjsGetGrannyTrackGroups,
  CjsResolveGrannyJsonResource,
} from "./CjsGrannyJsonTrack.ts";
import type { ITriCurveLength } from "./contracts.ts";

@type.define({ className: "Tr2GrannyTrack", family: "curves" })
export class Tr2GrannyTrack extends CjsModel implements ITriCurveLength {
  @io.persist
  @io.notify
  @type.path
  grannyResPath = "";

  @io.persist
  @type.boolean
  cycle = false;

  @io.read
  @type.unknown
  duration = 0;

  @io.read
  @type.objectRef("TriGrannyRes")
  grannyRes: unknown = null;

  @io.notify
  @io.persist
  @type.string
  name = "";

  @io.notify
  @io.persist
  @type.string
  group = "";

  /**
   * Initializes the resource-backed track.
   */
  @carbon.method
  @impl.adapted
  Initialize(): boolean {
    this.SetGrannyResource();
    return true;
  }

  /**
   * Relinks the resource when authored fields change.
   */
  @carbon.method
  @impl.adapted
  OnModified(_value: unknown = null): boolean {
    this.SetGrannyResource();
    return true;
  }

  /**
   * Relinks the authored Granny resource path.
   */
  @carbon.method
  @impl.adapted
  SetGrannyResource(): void {
    this.ResetTracks();
    this.duration = 0;
    if (this.grannyResPath) {
      this.grannyRes = CjsResolveGrannyJsonResource(this.grannyResPath);
    }
    this.SetCurves();
  }

  /**
   * Updates the track value.
   */
  @carbon.method
  @impl.adapted
  UpdateValue(time: number): void {
    if (!this.TracksReady()) {
      return;
    }

    const duration = this.Length();
    const localTime = this.cycle && duration > 0 ? time % duration : time;
    if (localTime >= 0 && localTime <= duration) {
      this.UpdateValueImpl(localTime);
    }
  }

  /**
   * Gets track duration.
   */
  @carbon.method
  @impl.implemented
  Length(): number {
    return Number(this.duration) || 0;
  }

  /**
   * Locates resource curves.
   */
  @carbon.method
  @impl.adapted
  SetCurves(): void {
    if (!this.name || !this.group) {
      return;
    }

    const source = CjsGetGrannyJsonTrackSource(this.grannyRes);
    if (!source) {
      return;
    }

    for (const animation of CjsGetGrannyAnimations(source)) {
      for (const trackGroup of CjsGetGrannyTrackGroups(animation)) {
        const groupName = trackGroup.name ?? trackGroup.Name;
        if (groupName === this.group) {
          this.ApplyTracks(
            trackGroup,
            CjsGetGrannyAnimationDuration(animation),
            CjsGetGrannyAnimationTimeStep(animation),
          );
          return;
        }
      }
    }
  }

  /**
   * Subclass hook for sampled value updates.
   */
  @carbon.method
  @impl.noop
  UpdateValueImpl(_time: number): void {
  }

  /**
   * Subclass hook for clearing resource track handles.
   */
  @carbon.method
  @impl.noop
  ResetTracks(): void {
  }

  /**
   * Subclass hook for applying resource track handles.
   */
  @carbon.method
  @impl.noop
  ApplyTracks(_group: unknown, _duration: number, _timeStep: number): void {
  }

  /**
   * Checks whether resource track handles are ready.
   */
  @carbon.method
  @impl.noop
  TracksReady(): boolean {
    return false;
  }
}
