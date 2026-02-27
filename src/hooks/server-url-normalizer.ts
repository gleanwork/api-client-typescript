import { SDKInitHook, SDKInitOptions } from "./types.js";

export function normalizeServerURL(url: string): string {
  let normalized = url;
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `https://${normalized}`;
  }
  normalized = normalized.replace(/\/+$/, "");
  return normalized;
}

export const serverURLNormalizerHook: SDKInitHook = {
  sdkInit(opts: SDKInitOptions): SDKInitOptions {
    if (opts.baseURL) {
      const normalized = normalizeServerURL(opts.baseURL.toString());
      opts.baseURL = new URL(normalized);
    }
    return opts;
  },
};
