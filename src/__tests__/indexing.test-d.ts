import { expectTypeOf, test } from "vitest";
import { Glean } from "../index.js";

test("type test for `Glean` constructor", () => {
  // @ts-expect-error - Function is defined but never used (only for type checking)
  async function run() {
    const glean = new Glean({
      apiToken: process.env["GLEAN_API_TOKEN"],
      instance: process.env["GLEAN_INSTANCE"],
    });

    const response = await glean.indexing.documents.index({
      datasource: "my-datasource",
      documents: [
        {
          datasource: "my-datasource",
          id: "doc-123",
          title: "Sample Document",
          body: {
            mimeType: "text/plain",
            textContent: "This is a sample document to index in Glean.",
          },
          viewURL: "https://example.com/documents/123",
          permissions: {
            allowedUsers: [{ email: "user@example.com" }],
            allowedGroups: ["everyone@example.com"],
          },
        },
      ],
    });

    return response;
  }
  
  const correctClient = new Glean({
    apiToken: "token",
    instance: "example-instance",
  });
  expectTypeOf(correctClient).toEqualTypeOf<Glean>();
});
