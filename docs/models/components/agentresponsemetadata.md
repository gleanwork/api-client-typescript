# AgentResponseMetadata

Metadata associated with the agent response that supplements the main messages.

## Example Usage

```typescript
import { AgentResponseMetadata } from "@gleanwork/api-client/models/components";

let value: AgentResponseMetadata = {
  citations: [
    {
      sourceDocument: {
        containerDocument: {
          parentDocument: {
            metadata: {
              datasource: "datasource",
              objectType: "Feature Request",
              container: "container",
              parentId: "JIRA_EN-1337",
              mimeType: "mimeType",
              documentId: "documentId",
              createTime: new Date("2000-01-23T04:56:07.000Z"),
              updateTime: new Date("2000-01-23T04:56:07.000Z"),
              author: {
                name: "name",
                obfuscatedId: "<id>",
              },
              components: [
                "Backend",
                "Networking",
              ],
              status: "[\"Done\"]",
              customData: {
                "someCustomField": {},
              },
            },
          },
        },
      },
      sourceFile: {
        id: "FILE_1234",
        url: "www.google.com",
        name: "sample.pdf",
      },
      sourcePerson: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      referenceRanges: [
        {
          textRange: {
            startIndex: 321251,
            document: {},
          },
          snippets: [
            {
              snippet: "snippet",
              mimeType: "mimeType",
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `citations`                                                                                       | [components.ChatMessageCitation](../../models/components/chatmessagecitation.md)[]                | :heavy_minus_sign:                                                                                | Citations referencing source documents, files, or people that were used to generate the response. |