// Source: E:\carbonengine\trinity\trinity\Curves\Tr2GrannyVectorTrack.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2GrannyVectorTrack.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  type CjsDecodedGrannyCurve,
  CjsDecodeGrannyCurve,
  CjsFindGrannyVectorTrack,
  CjsSampleGrannyCurve,
} from "./CjsGrannyJsonTrack.ts";
import { Tr2GrannyTrack } from "./Tr2GrannyTrack.ts";

@type.define({ className: "Tr2GrannyVectorTrack", family: "curves" })
export class Tr2GrannyVectorTrack extends Tr2GrannyTrack {
  @io.read
  @type.float32
  value = 0;

  #valueCurve: CjsDecodedGrannyCurve | null = null;
  #valueScratch = [0];

  /**
   * Checks whether vector track handles are ready.
   */
  @carbon.method
  @impl.implemented
  override TracksReady(): boolean {
    return this.#valueCurve !== null;
  }

  /**
   * Clears vector track handles.
   */
  @carbon.method
  @impl.implemented
  override ResetTracks(): void {
    this.#valueCurve = null;
  }

  /**
   * Applies vector track handles.
   */
  @carbon.method
  @impl.adapted
  override ApplyTracks(
    group: unknown,
    duration: number,
    _timeStep: number,
  ): void {
    const track = CjsFindGrannyVectorTrack(group, this.name);
    if (!track) {
      return;
    }

    const valueCurve = CjsDecodeGrannyCurve(track.valueCurve, 1);
    if (!valueCurve) {
      return;
    }

    this.duration = duration;
    this.#valueCurve = valueCurve;
    this.UpdateValue(0);
  }

  /**
   * Updates sampled vector value.
   */
  @carbon.method
  @impl.adapted
  override UpdateValueImpl(time: number): void {
    if (!this.#valueCurve) {
      return;
    }

    CjsSampleGrannyCurve(
      this.#valueScratch,
      this.#valueCurve,
      time,
      this.cycle,
      this.duration,
    );
    this.value = this.#valueScratch[0];
  }
}
