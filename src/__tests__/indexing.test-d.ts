import { expectTypeOf, test } from "vitest";
import { Glean } from "../index.js";

// This test verifies that the Glean client initialization works properly
test("Glean constructor with apiToken", () => {
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
  expectTypeOf(correctClient).toMatchTypeOf<Glean>();
});
