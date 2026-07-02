import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

/**
 * Get the first non-empty value from the provided arguments.
 */
function getFirstValue(
  aValue: string | undefined,
  bValue: string | undefined,
): string | false {
  if (aValue && aValue.trim()) return aValue.trim();
  if (bValue && bValue.trim()) return bValue.trim();
  return false;
}

function getStringOption(
  options: Record<string, unknown>,
  key: string,
): string | undefined {
  const v = options[key];
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

function getBooleanOption(options: Record<string, unknown>, key: string): boolean {
  return options[key] === true;
}

export class XGlean implements BeforeRequestHook {
  beforeRequest(hookCtx: BeforeRequestContext, request: Request): Request {
    const opt = hookCtx.options as unknown;
    const options = typeof opt === "object" && opt != null
      ? (opt as Record<string, unknown>)
      : {};

    const deprecatedValue = getFirstValue(
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"],
      getStringOption(options, "excludeDeprecatedAfter"),
    );

    const experimentalEnv = process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"];
    let experimentalValue: string | false = false;
    if (typeof experimentalEnv !== "undefined") {
      const t = experimentalEnv.trim();
      // Env var is treated as a boolean toggle.
      // - "true" (case-insensitive) => set header
      // - anything else (including "false") => omit header
      // - empty/whitespace => treat as unset and fall back to options
      if (!t) {
        experimentalValue = getBooleanOption(options, "includeExperimental")
          ? "true"
          : false;
      } else if (t.toLowerCase() === "true") {
        experimentalValue = "true";
      } else {
        experimentalValue = false;
      }
    } else {
      experimentalValue = getBooleanOption(options, "includeExperimental")
        ? "true"
        : false;
    }

    if (deprecatedValue) {
      request.headers.set("X-Glean-Exclude-Deprecated-After", deprecatedValue);
    }

    if (experimentalValue) {
      request.headers.set("X-Glean-Include-Experimental", experimentalValue);
    }

    return request;
  }
}
