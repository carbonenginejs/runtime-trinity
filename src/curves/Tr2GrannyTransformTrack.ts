// Source: E:\carbonengine\trinity\trinity\Curves\Tr2GrannyTransformTrack.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2GrannyTransformTrack.cpp
import { quat } from "@carbonenginejs/core-math/quat";
import { vec3 } from "@carbonenginejs/core-math/vec3";
import type { Quat, Vec3 } from "@carbonenginejs/core-math/types";
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  type CjsDecodedGrannyCurve,
  CjsDecodeGrannyCurve,
  CjsFindGrannyTransformTrack,
  CjsSampleGrannyCurve,
} from "./CjsGrannyJsonTrack.ts";
import { Tr2GrannyTrack } from "./Tr2GrannyTrack.ts";

@type.define({ className: "Tr2GrannyTransformTrack", family: "curves" })
export class Tr2GrannyTransformTrack extends Tr2GrannyTrack {
  @io.readwrite
  @type.boolean
  compressCurves = false;

  @io.read
  @type.quat
  rotation: Quat = quat.create();

  @io.read
  @type.vec3
  translation: Vec3 = vec3.create();

  @io.read
  @type.vec3
  scale: Vec3 = vec3.create();

  #positionCurve: CjsDecodedGrannyCurve | null = null;
  #orientationCurve: CjsDecodedGrannyCurve | null = null;
  #scaleCurve: CjsDecodedGrannyCurve | null = null;
  #scaleShearScratch = new Array<number>(9).fill(0);

  /**
   * Checks whether transform track handles are ready.
   */
  @carbon.method
  @impl.implemented
  override TracksReady(): boolean {
    return this.#positionCurve !== null &&
      this.#orientationCurve !== null &&
      this.#scaleCurve !== null;
  }

  /**
   * Clears transform track handles.
   */
  @carbon.method
  @impl.implemented
  override ResetTracks(): void {
    this.#positionCurve = null;
    this.#orientationCurve = null;
    this.#scaleCurve = null;
  }

  /**
   * Applies transform track handles.
   */
  @carbon.method
  @impl.adapted
  override ApplyTracks(
    group: unknown,
    duration: number,
    _timeStep: number,
  ): void {
    const track = CjsFindGrannyTransformTrack(group, this.name);
    if (!track) {
      return;
    }

    const positionCurve = CjsDecodeGrannyCurve(track.position, 3);
    const orientationCurve = CjsDecodeGrannyCurve(track.orientation, 4);
    const scaleCurve = CjsDecodeGrannyCurve(track.scaleShear, 9);
    if (!positionCurve || !orientationCurve || !scaleCurve) {
      return;
    }

    this.duration = duration;
    this.#positionCurve = positionCurve;
    this.#orientationCurve = orientationCurve;
    this.#scaleCurve = scaleCurve;
    this.UpdateValue(0);
  }

  /**
   * Updates sampled transform values.
   */
  @carbon.method
  @impl.adapted
  override UpdateValueImpl(time: number): void {
    if (!this.#positionCurve || !this.#orientationCurve || !this.#scaleCurve) {
      return;
    }

    CjsSampleGrannyCurve(
      this.translation,
      this.#positionCurve,
      time,
      this.cycle,
      this.duration,
    );
    CjsSampleGrannyCurve(
      this.rotation,
      this.#orientationCurve,
      time,
      this.cycle,
      this.duration,
    );
    quat.normalize(this.rotation, this.rotation);

    const scaleShear = CjsSampleGrannyCurve(
      this.#scaleShearScratch,
      this.#scaleCurve,
      time,
      this.cycle,
      this.duration,
    );
    this.scale[0] = Math.hypot(scaleShear[0], scaleShear[1], scaleShear[2]);
    this.scale[1] = Math.hypot(scaleShear[3], scaleShear[4], scaleShear[5]);
    this.scale[2] = Math.hypot(scaleShear[6], scaleShear[7], scaleShear[8]);
  }
}
