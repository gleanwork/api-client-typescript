import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { XGlean } from "../hooks/x-glean.js";
import { BeforeRequestContext } from "../hooks/types.js";
import { SDKOptions } from "../lib/config.js";
import { XGleanOptions } from "../hooks/x-glean-options.js";

function createMockRequest(): Request {
  return new Request("https://example.com/api/test");
}

/**
 * Creates a mock BeforeRequestContext for testing.
 * Uses intersection type to support both base SDKOptions and X-Glean custom options.
 */
function createMockContext(
  options: SDKOptions & XGleanOptions = {},
): BeforeRequestContext {
  return {
    baseURL: "https://example.com",
    operationID: "test-operation",
    oAuth2Scopes: null,
    retryConfig: { strategy: "none" },
    resolvedSecurity: null,
    options,
  };
}

describe("XGlean hook", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    delete process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"];
    delete process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"];
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("when neither options nor environment variables are set", () => {
    it("should not set any X-Glean headers", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({});

      const result = hook.beforeRequest(context, request);

      expect(result.headers.has("X-Glean-Exclude-Deprecated-After")).toBe(
        false,
      );
      expect(result.headers.has("X-Glean-Experimental")).toBe(false);
    });
  });

  describe("when using SDK constructor options", () => {
    it("should set X-Glean-Exclude-Deprecated-After header from excludeDeprecatedAfter option", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        excludeDeprecatedAfter: "2026-10-15",
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Exclude-Deprecated-After")).toBe(
        "2026-10-15",
      );
    });

    it("should set X-Glean-Experimental header when includeExperimental is true", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Experimental")).toBe("true");
    });

    it("should not set X-Glean-Experimental header when includeExperimental is false", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: false,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.has("X-Glean-Experimental")).toBe(false);
    });

    it("should set both headers when both options are provided", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        excludeDeprecatedAfter: "2026-10-15",
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Exclude-Deprecated-After")).toBe(
        "2026-10-15",
      );
      expect(result.headers.get("X-Glean-Experimental")).toBe("true");
    });
  });

  describe("when using environment variables", () => {
    it("should set X-Glean-Exclude-Deprecated-After header from environment variable", () => {
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"] = "2027-01-01";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({});

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Exclude-Deprecated-After")).toBe(
        "2027-01-01",
      );
    });

    it("should set X-Glean-Experimental header from environment variable", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "true";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({});

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Experimental")).toBe("true");
    });

    it("should set both headers from environment variables", () => {
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"] = "2027-06-15";
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "true";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({});

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Exclude-Deprecated-After")).toBe(
        "2027-06-15",
      );
      expect(result.headers.get("X-Glean-Experimental")).toBe("true");
    });

    it("should not set X-Glean-Experimental header when environment variable is false", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "false";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.has("X-Glean-Experimental")).toBe(false);
    });

    it("should fall back to SDK options when experimental env var is empty", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = " ";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Experimental")).toBe("true");
    });
  });

  describe("environment variables take precedence over SDK options", () => {
    it("should use environment variable for excludeDeprecatedAfter when both are set", () => {
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"] = "2027-12-31";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        excludeDeprecatedAfter: "2026-01-01",
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Exclude-Deprecated-After")).toBe(
        "2027-12-31",
      );
    });

    it("should use environment variable for includeExperimental when both are set", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "true";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: false,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Experimental")).toBe("true");
    });

    it("should use environment variables for both headers when all are set", () => {
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"] = "2028-01-01";
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "true";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        excludeDeprecatedAfter: "2026-06-01",
        includeExperimental: false,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get("X-Glean-Exclude-Deprecated-After")).toBe(
        "2028-01-01",
      );
      expect(result.headers.get("X-Glean-Experimental")).toBe("true");
    });

    it("should omit X-Glean-Experimental header when env var is false, even if option is true", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "false";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.has("X-Glean-Experimental")).toBe(false);
    });
  });

  describe("when options are malformed at runtime", () => {
    it("should not set X-Glean-Exclude-Deprecated-After when excludeDeprecatedAfter is not a string", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        excludeDeprecatedAfter: 123 as any,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.has("X-Glean-Exclude-Deprecated-After")).toBe(false);
    });
  });
});
