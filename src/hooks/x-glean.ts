import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

export const EXCLUDE_DEPRECATED_AFTER_HEADER = "X-Glean-Exclude-Deprecated-After";
export const INCLUDE_EXPERIMENTAL_HEADER = "X-Glean-Include-Experimental";

export const EXCLUDE_DEPRECATED_AFTER_ENV_VAR = "X_GLEAN_EXCLUDE_DEPRECATED_AFTER";
export const INCLUDE_EXPERIMENTAL_ENV_VAR = "X_GLEAN_INCLUDE_EXPERIMENTAL";
export const INCLUDE_BETA_ENV_VAR = "X_GLEAN_INCLUDE_BETA";

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

/**
 * Resolve a boolean opt-in from its env var and its SDK option.
 *
 * The env var is a boolean toggle and takes precedence over the option:
 * - "true" (case-insensitive) => enabled
 * - anything else (including "false") => disabled
 * - unset, empty, or whitespace => fall back to the SDK option
 */
function resolveBooleanOption(
  envValue: string | undefined,
  options: Record<string, unknown>,
  key: string,
): boolean {
  const t = envValue?.trim();
  if (t) return t.toLowerCase() === "true";
  return getBooleanOption(options, key);
}

export class XGlean implements BeforeRequestHook {
  beforeRequest(hookCtx: BeforeRequestContext, request: Request): Request {
    const opt = hookCtx.options as unknown;
    const options = typeof opt === "object" && opt != null
      ? (opt as Record<string, unknown>)
      : {};

    const deprecatedValue = getFirstValue(
      process.env[EXCLUDE_DEPRECATED_AFTER_ENV_VAR],
      getStringOption(options, "excludeDeprecatedAfter"),
    );

    // includeExperimental is an alias of includeBeta. Each one resolves on its
    // own (env var first, then SDK option), and either one enables the header.
    // Disabling one never disables the other.
    const includeBeta = resolveBooleanOption(
      process.env[INCLUDE_BETA_ENV_VAR],
      options,
      "includeBeta",
    );
    const includeExperimental = resolveBooleanOption(
      process.env[INCLUDE_EXPERIMENTAL_ENV_VAR],
      options,
      "includeExperimental",
    );

    if (deprecatedValue) {
      request.headers.set(EXCLUDE_DEPRECATED_AFTER_HEADER, deprecatedValue);
    }

    // Keep sending X-Glean-Include-Experimental for both options. Older
    // deployments do not allow X-Glean-Beta in their CORS preflight.
    if (includeBeta || includeExperimental) {
      request.headers.set(INCLUDE_EXPERIMENTAL_HEADER, "true");
    }

    return request;
  }
}
