# VerificationFeed

## Example Usage

```typescript
import { VerificationFeed } from "@gleanwork/api-client/models/components";

let value: VerificationFeed = {
  documents: [
    {
      state: "DEPRECATED",
      metadata: {
        lastVerifier: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        document: {
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
        reminders: [],
        lastReminder: {
          assignee: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          requestor: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          remindAt: 665011,
        },
        candidateVerifiers: [
          {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `documents`                                                                    | [components.Verification](../../models/components/verification.md)[]           | :heavy_minus_sign:                                                             | List of document infos that include verification related information for them. |