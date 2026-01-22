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
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"],
      hookCtx.options.excludeDeprecatedAfter,
    );

    const experimentalValue = getFirstValue(
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"],
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
