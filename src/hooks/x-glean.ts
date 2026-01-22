import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

/**
 * Get the first non-empty value from the provided arguments.
 */
function getFirstValue(
  aValue: string | undefined,
  bValue: string | undefined,
): string | false {
  if (aValue) return aValue;
  if (bValue) return bValue;
  return false;
}

export class XGlean implements BeforeRequestHook {
  beforeRequest(hookCtx: BeforeRequestContext, request: Request): Request {
    const deprecatedValue = getFirstValue(
      process.env["X_Glean_Exclude_Deprecated_After"],
      hookCtx.options.excludeDeprecatedAfter,
    );

    const experimentalValue = getFirstValue(
      process.env["X_Glean_Include_Experimental"],
      hookCtx.options.includeExperimental === true ? "true" : undefined,
    );

    if (deprecatedValue) {
      request.headers.set("X-Glean-Exclude-Deprecated-After", deprecatedValue);
    }

    if (experimentalValue) {
      request.headers.set("X-Glean-Experimental", experimentalValue);
    }

    return request;
  }
}
