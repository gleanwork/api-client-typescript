import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  XGlean,
  EXCLUDE_DEPRECATED_AFTER_HEADER,
  INCLUDE_EXPERIMENTAL_HEADER,
} from "../hooks/x-glean.js";
import { BeforeRequestContext } from "../hooks/types.js";
import { SDKOptions } from "../lib/config.js";
import { XGleanOptions } from "../hooks/x-glean-options.js";
import { HTTPClient } from "../lib/http.js";
import { Glean } from "../index.js";

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
    delete process.env["X_GLEAN_INCLUDE_BETA"];
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

      expect(result.headers.has(EXCLUDE_DEPRECATED_AFTER_HEADER)).toBe(
        false,
      );
      expect(result.headers.has(INCLUDE_EXPERIMENTAL_HEADER)).toBe(false);
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

      expect(result.headers.get(EXCLUDE_DEPRECATED_AFTER_HEADER)).toBe(
        "2026-10-15",
      );
    });

    it("should set X-Glean-Include-Experimental header when includeExperimental is true", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
    });

    it("should not set X-Glean-Include-Experimental header when includeExperimental is false", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: false,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.has(INCLUDE_EXPERIMENTAL_HEADER)).toBe(false);
    });

    it("should set both headers when both options are provided", () => {
      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        excludeDeprecatedAfter: "2026-10-15",
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get(EXCLUDE_DEPRECATED_AFTER_HEADER)).toBe(
        "2026-10-15",
      );
      expect(result.headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
    });
  });

  describe("when using environment variables", () => {
    it("should set X-Glean-Exclude-Deprecated-After header from environment variable", () => {
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"] = "2027-01-01";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({});

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get(EXCLUDE_DEPRECATED_AFTER_HEADER)).toBe(
        "2027-01-01",
      );
    });

    it("should set X-Glean-Include-Experimental header from environment variable", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "true";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({});

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
    });

    it("should set both headers from environment variables", () => {
      process.env["X_GLEAN_EXCLUDE_DEPRECATED_AFTER"] = "2027-06-15";
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "true";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({});

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get(EXCLUDE_DEPRECATED_AFTER_HEADER)).toBe(
        "2027-06-15",
      );
      expect(result.headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
    });

    it("should not set X-Glean-Include-Experimental header when environment variable is false", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "false";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.has(INCLUDE_EXPERIMENTAL_HEADER)).toBe(false);
    });

    it("should fall back to SDK options when experimental env var is empty", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = " ";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
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

      expect(result.headers.get(EXCLUDE_DEPRECATED_AFTER_HEADER)).toBe(
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

      expect(result.headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
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

      expect(result.headers.get(EXCLUDE_DEPRECATED_AFTER_HEADER)).toBe(
        "2028-01-01",
      );
      expect(result.headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
    });

    it("should omit X-Glean-Include-Experimental header when env var is false, even if option is true", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "false";

      const hook = new XGlean();
      const request = createMockRequest();
      const context = createMockContext({
        includeExperimental: true,
      });

      const result = hook.beforeRequest(context, request);

      expect(result.headers.has(INCLUDE_EXPERIMENTAL_HEADER)).toBe(false);
    });
  });

  describe("includeBeta and its includeExperimental alias", () => {
    function headerFor(
      options: SDKOptions & XGleanOptions,
    ): string | null {
      const hook = new XGlean();
      const result = hook.beforeRequest(
        createMockContext(options),
        createMockRequest(),
      );
      return result.headers.get(INCLUDE_EXPERIMENTAL_HEADER);
    }

    it("should set X-Glean-Include-Experimental when includeBeta is true", () => {
      expect(headerFor({ includeBeta: true })).toBe("true");
    });

    it("should not set the header when includeBeta is false", () => {
      expect(headerFor({ includeBeta: false })).toBeNull();
    });

    it("should set the header once when includeBeta and includeExperimental are both true", () => {
      expect(
        headerFor({ includeBeta: true, includeExperimental: true }),
      ).toBe("true");
    });

    it("should set the header when either option is true", () => {
      expect(
        headerFor({ includeBeta: true, includeExperimental: false }),
      ).toBe("true");
      expect(
        headerFor({ includeBeta: false, includeExperimental: true }),
      ).toBe("true");
    });

    it("should not set the header when both options are false", () => {
      expect(
        headerFor({ includeBeta: false, includeExperimental: false }),
      ).toBeNull();
    });

    it("should set the header from X_GLEAN_INCLUDE_BETA", () => {
      process.env["X_GLEAN_INCLUDE_BETA"] = "TRUE";
      expect(headerFor({})).toBe("true");
    });

    it("should set the header when both env vars are true", () => {
      process.env["X_GLEAN_INCLUDE_BETA"] = "true";
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "true";
      expect(headerFor({})).toBe("true");
    });

    it("should let X_GLEAN_INCLUDE_BETA=false override includeBeta", () => {
      process.env["X_GLEAN_INCLUDE_BETA"] = "false";
      expect(headerFor({ includeBeta: true })).toBeNull();
    });

    it("should let X_GLEAN_INCLUDE_BETA=true override includeBeta=false", () => {
      process.env["X_GLEAN_INCLUDE_BETA"] = "true";
      expect(headerFor({ includeBeta: false })).toBe("true");
    });

    it("should fall back to includeBeta when X_GLEAN_INCLUDE_BETA is empty", () => {
      process.env["X_GLEAN_INCLUDE_BETA"] = " ";
      expect(headerFor({ includeBeta: true })).toBe("true");
    });

    it("should not let X_GLEAN_INCLUDE_BETA=false turn off includeExperimental", () => {
      process.env["X_GLEAN_INCLUDE_BETA"] = "false";
      expect(headerFor({ includeExperimental: true })).toBe("true");
    });

    it("should not let X_GLEAN_INCLUDE_EXPERIMENTAL=false turn off includeBeta", () => {
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "false";
      expect(headerFor({ includeBeta: true })).toBe("true");
    });

    it("should not set the header when both env vars are false", () => {
      process.env["X_GLEAN_INCLUDE_BETA"] = "false";
      process.env["X_GLEAN_INCLUDE_EXPERIMENTAL"] = "false";
      expect(
        headerFor({ includeBeta: true, includeExperimental: true }),
      ).toBeNull();
    });

    it("should not send X-Glean-Beta yet", () => {
      const hook = new XGlean();
      const result = hook.beforeRequest(
        createMockContext({ includeBeta: true }),
        createMockRequest(),
      );
      expect(result.headers.has("X-Glean-Beta")).toBe(false);
    });
  });

  describe("when passed to the Glean constructor", () => {
    async function sentHeaders(
      options: XGleanOptions,
    ): Promise<Headers> {
      let captured: Headers | undefined;
      const httpClient = new HTTPClient({
        fetcher: async (input) => {
          captured = (input as Request).headers;
          return new Response("{}", {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        },
      });
      const glean = new Glean({
        apiToken: "test-token",
        serverURL: "https://example.com",
        httpClient,
        ...options,
      } satisfies SDKOptions & XGleanOptions);

      await glean.client.search.query({ query: "test" }).catch(() => {});

      if (!captured) throw new Error("no request was sent");
      return captured;
    }

    it("should send X-Glean-Include-Experimental for includeBeta", async () => {
      const headers = await sentHeaders({ includeBeta: true });
      expect(headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
    });

    it("should send X-Glean-Include-Experimental for includeExperimental", async () => {
      const headers = await sentHeaders({ includeExperimental: true });
      expect(headers.get(INCLUDE_EXPERIMENTAL_HEADER)).toBe("true");
    });

    it("should not send the header when neither option is set", async () => {
      const headers = await sentHeaders({});
      expect(headers.has(INCLUDE_EXPERIMENTAL_HEADER)).toBe(false);
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

      expect(result.headers.has(EXCLUDE_DEPRECATED_AFTER_HEADER)).toBe(false);
    });
  });
});
