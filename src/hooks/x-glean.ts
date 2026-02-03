import { BeforeRequestContext, BeforeRequestHook } from "./types.js";
import { XGleanOptions } from "./x-glean-options.js";

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
    // Cast options to include X-Glean custom properties
    // These properties may be passed by users but aren't in the generated SDKOptions type
    const options = hookCtx.options as XGleanOptions;

    const deprecatedValue = getFirstValue(
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"],
      options.excludeDeprecatedAfter,
    );

    const experimentalValue = getFirstValue(
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"],
      options.includeExperimental === true ? "true" : undefined,
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
