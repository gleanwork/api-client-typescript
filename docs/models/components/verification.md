# Verification

## Example Usage

```typescript
import { Verification } from "@gleanwork/api-client/models/components";

let value: Verification = {
  state: "UNVERIFIED",
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
      remindAt: 16612,
    },
    candidateVerifiers: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `state`                                                                            | [components.State](../../models/components/state.md)                               | :heavy_check_mark:                                                                 | The verification state for the document.                                           |
| `metadata`                                                                         | [components.VerificationMetadata](../../models/components/verificationmetadata.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |