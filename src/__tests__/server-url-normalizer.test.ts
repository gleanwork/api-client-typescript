import { describe, expect, it } from "vitest";
import {
  normalizeServerURL,
  serverURLNormalizerHook,
} from "../hooks/server-url-normalizer.js";
import { HTTPClient } from "../lib/http.js";
import { SDKInitOptions } from "../hooks/types.js";
import { serverURLFromOptions } from "../lib/config.js";

describe("normalizeServerURL", () => {
  it("should prepend https:// when no scheme is provided", () => {
    expect(normalizeServerURL("example.glean.com")).toBe(
      "https://example.glean.com",
    );
  });

  it("should preserve https:// scheme", () => {
    expect(normalizeServerURL("https://example.glean.com")).toBe(
      "https://example.glean.com",
    );
  });

  it("should preserve http:// for localhost", () => {
    expect(normalizeServerURL("http://localhost:8080")).toBe(
      "http://localhost:8080",
    );
  });

  it("should preserve http:// for non-localhost URLs", () => {
    expect(normalizeServerURL("http://example.glean.com")).toBe(
      "http://example.glean.com",
    );
  });

  it("should strip trailing slashes", () => {
    expect(normalizeServerURL("https://example.glean.com/")).toBe(
      "https://example.glean.com",
    );
  });

  it("should strip multiple trailing slashes", () => {
    expect(normalizeServerURL("https://example.glean.com///")).toBe(
      "https://example.glean.com",
    );
  });

  it("should preserve URLs with paths", () => {
    expect(normalizeServerURL("https://example.glean.com/api/v1")).toBe(
      "https://example.glean.com/api/v1",
    );
  });

  it("should handle no scheme with trailing slash", () => {
    expect(normalizeServerURL("example.glean.com/")).toBe(
      "https://example.glean.com",
    );
  });
});

describe("serverURLNormalizerHook", () => {
  function createOpts(baseURL: string | null): SDKInitOptions {
    return {
      baseURL: baseURL ? new URL(baseURL) : null,
      client: new HTTPClient(),
    };
  }

  it("should normalize the baseURL when present", () => {
    const opts = {
      baseURL: new URL("https://example.glean.com/"),
      client: new HTTPClient(),
    };

    const result = serverURLNormalizerHook.sdkInit(opts);

    expect(result.baseURL?.toString()).toBe("https://example.glean.com/");
  });

  it("should return opts unchanged when baseURL is null", () => {
    const opts = createOpts(null);

    const result = serverURLNormalizerHook.sdkInit(opts);

    expect(result.baseURL).toBeNull();
  });
});

describe("serverURLFromOptions (config.ts normalization)", () => {
  it("should handle schemeless serverURL", () => {
    const url = serverURLFromOptions({ serverURL: "mycompany-be.glean.com" });
    expect(url?.origin).toBe("https://mycompany-be.glean.com");
  });

  it("should handle serverURL with https scheme", () => {
    const url = serverURLFromOptions({ serverURL: "https://mycompany-be.glean.com" });
    expect(url?.origin).toBe("https://mycompany-be.glean.com");
  });

  it("should handle serverURL with http scheme", () => {
    const url = serverURLFromOptions({ serverURL: "http://localhost:8080" });
    expect(url?.origin).toBe("http://localhost:8080");
  });

  it("should handle serverURL with trailing slashes", () => {
    const url = serverURLFromOptions({ serverURL: "https://mycompany-be.glean.com///" });
    expect(url?.origin).toBe("https://mycompany-be.glean.com");
  });

  it("should handle schemeless serverURL with trailing slash", () => {
    const url = serverURLFromOptions({ serverURL: "mycompany-be.glean.com/" });
    expect(url?.origin).toBe("https://mycompany-be.glean.com");
  });
});
