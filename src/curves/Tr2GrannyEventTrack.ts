// Source: E:\carbonengine\trinity\trinity\Curves\Tr2GrannyEventTrack.h
// Source: E:\carbonengine\trinity\trinity\Curves\Tr2GrannyEventTrack.cpp
import { carbon, impl, io, type } from "@carbonenginejs/core-types/schema";
import {
  CjsFindGrannyTextTrack,
  CjsGetGrannyTextTrackEntries,
  type CjsGrannyTextTrackEntry,
} from "./CjsGrannyJsonTrack.ts";
import type { IBlueEventListener } from "./contracts.ts";
import { Tr2GrannyTrack } from "./Tr2GrannyTrack.ts";

@type.define({ className: "Tr2GrannyEventTrack", family: "curves" })
export class Tr2GrannyEventTrack extends Tr2GrannyTrack {
  @io.readwrite
  @type.objectRef("IBlueEventListener")
  eventListener: IBlueEventListener | null = null;

  #entries: CjsGrannyTextTrackEntry[] | null = null;
  #previousTime = 0;
  #previousIndex = 0;

  /**
   * Checks whether event track handles are ready.
   */
  @carbon.method
  @impl.implemented
  override TracksReady(): boolean {
    return this.#entries !== null;
  }

  /**
   * Clears event track handles.
   */
  @carbon.method
  @impl.implemented
  override ResetTracks(): void {
    this.#entries = null;
    this.#previousTime = 0;
    this.#previousIndex = 0;
  }

  /**
   * Applies event track handles.
   */
  @carbon.method
  @impl.adapted
  override ApplyTracks(
    group: unknown,
    duration: number,
    _timeStep: number,
  ): void {
    const track = CjsFindGrannyTextTrack(group, this.name);
    if (!track) {
      return;
    }

    this.duration = duration;
    this.#entries = CjsGetGrannyTextTrackEntries(track);
    this.#previousTime = 0;
    this.#previousIndex = 0;
  }

  /**
   * Emits resource events when available.
   */
  @carbon.method
  @impl.adapted
  override UpdateValueImpl(time: number): void {
    const entries = this.#entries;
    if (!entries) {
      return;
    }

    if (time < this.#previousTime) {
      this.#previousTime = 0;
      this.#previousIndex = 0;
    }

    while (this.#previousIndex < entries.length) {
      const entry = entries[this.#previousIndex];
      if (entry.time >= this.#previousTime && entry.time <= time) {
        this.eventListener?.HandleEvent(entry.text);
      } else if (entry.time > time) {
        break;
      }

      this.#previousIndex++;
    }

    this.#previousTime = time;
  }
}
