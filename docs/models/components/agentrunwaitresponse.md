# AgentRunWaitResponse

## Example Usage

```typescript
import { AgentRunWaitResponse } from "@gleanwork/api-client/models/components";

let value: AgentRunWaitResponse = {
  run: {
    agentId: "<id>",
    messages: [
      {
        role: "USER",
      },
    ],
  },
  messages: [
    {
      role: "USER",
    },
  ],
  metadata: {
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
              startIndex: 532105,
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
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `run`                                                                                | [components.AgentRun](../../models/components/agentrun.md)                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `messages`                                                                           | [components.Message](../../models/components/message.md)[]                           | :heavy_minus_sign:                                                                   | The messages returned by the run.                                                    |
| `metadata`                                                                           | [components.AgentResponseMetadata](../../models/components/agentresponsemetadata.md) | :heavy_minus_sign:                                                                   | Metadata associated with the agent response that supplements the main messages.      |