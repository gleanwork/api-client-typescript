/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Glean } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Entities Listentities", async () => {
  const testHttpClient = createTestHTTPClient("listentities");

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiToken: process.env["GLEAN_API_TOKEN"] ?? "value",
  });

  const result = await glean.client.entities.list({
    filter: [
      {
        fieldName: "type",
        values: [
          {
            value: "Spreadsheet",
            relationType: "EQUALS",
          },
          {
            value: "Presentation",
            relationType: "EQUALS",
          },
        ],
      },
    ],
    pageSize: 100,
  });
  expect(result).toBeDefined();
});

test("Entities People", async () => {
  const testHttpClient = createTestHTTPClient("people");

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiToken: process.env["GLEAN_API_TOKEN"] ?? "value",
  });

  const result = await glean.client.entities.readPeople({
    obfuscatedIds: [
      "abc123",
      "abc456",
    ],
  });
  expect(result).toBeDefined();
});
