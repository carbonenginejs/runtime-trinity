// Source-backed JS runtime helper: Carbon queues TriDevice post-update callbacks.
export type CjsPostUpdateCallback = () => void;

const postUpdateCallbacks: CjsPostUpdateCallback[] = [];

export function CjsQueuePostUpdateCallback(
  callback: CjsPostUpdateCallback,
): void {
  postUpdateCallbacks.push(callback);
}

export function CjsRunNextPostUpdateCallback(): boolean {
  const callback = postUpdateCallbacks.shift();
  if (!callback) {
    return false;
  }

  callback();
  return true;
}

export function CjsFlushPostUpdateCallbacks(
  limit = Number.POSITIVE_INFINITY,
): number {
  let count = 0;
  while (count < limit && CjsRunNextPostUpdateCallback()) {
    count++;
  }
  return count;
}

export function CjsGetPostUpdateCallbackCount(): number {
  return postUpdateCallbacks.length;
}

export function CjsClearPostUpdateCallbacks(): void {
  postUpdateCallbacks.length = 0;
}
