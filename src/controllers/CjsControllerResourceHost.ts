import type { ITr2Controller } from "./ITr2ControllerAction.ts";

export type CjsControllerResourceResolver = (
  path: string,
  owner: object | null,
) => ITr2Controller | object | null;

export type CjsControllerResourcePrefetcher = (
  path: string,
  owner: object | null,
) => void;

let resolveControllerResource: CjsControllerResourceResolver | null = null;
let prefetchControllerResource: CjsControllerResourcePrefetcher | null = null;

export function CjsRegisterControllerResourceResolver(
  resolver: CjsControllerResourceResolver | null,
): CjsControllerResourceResolver | null {
  const previous = resolveControllerResource;
  resolveControllerResource = resolver;
  return previous;
}

export function CjsRegisterControllerResourcePrefetcher(
  prefetcher: CjsControllerResourcePrefetcher | null,
): CjsControllerResourcePrefetcher | null {
  const previous = prefetchControllerResource;
  prefetchControllerResource = prefetcher;
  return previous;
}

export function CjsClearControllerResourceHost(): void {
  resolveControllerResource = null;
  prefetchControllerResource = null;
}

export function CjsResolveControllerResource(
  path: string,
  owner: object | null = null,
): ITr2Controller | null {
  if (!path || !resolveControllerResource) {
    return null;
  }
  const resolved = resolveControllerResource(path, owner);
  return resolved && typeof resolved === "object" ? resolved : null;
}

export function CjsPrefetchControllerResource(
  path: string,
  owner: object | null = null,
): void {
  if (!path || !prefetchControllerResource) {
    return;
  }
  prefetchControllerResource(path, owner);
}
