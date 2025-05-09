# VerificationMetadata

## Example Usage

```typescript
import { VerificationMetadata } from "@gleanwork/api-client/models/components";

let value: VerificationMetadata = {
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
    remindAt: 298116,
  },
  candidateVerifiers: [
    {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `lastVerifier`                                                                                           | [components.Person](../../models/components/person.md)                                                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                       |
| `lastVerificationTs`                                                                                     | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The unix timestamp of the verification (in seconds since epoch UTC).                                     |                                                                                                          |
| `expirationTs`                                                                                           | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The unix timestamp of the verification expiration if applicable (in seconds since epoch UTC).            |                                                                                                          |
| `document`                                                                                               | [components.Document](../../models/components/document.md)                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `reminders`                                                                                              | [components.Reminder](../../models/components/reminder.md)[]                                             | :heavy_minus_sign:                                                                                       | Info about all outstanding verification reminders for the document if exists.                            |                                                                                                          |
| `lastReminder`                                                                                           | [components.Reminder](../../models/components/reminder.md)                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `visitorCount`                                                                                           | [components.CountInfo](../../models/components/countinfo.md)[]                                           | :heavy_minus_sign:                                                                                       | Number of visitors to the document during included time periods.                                         |                                                                                                          |
| `candidateVerifiers`                                                                                     | [components.Person](../../models/components/person.md)[]                                                 | :heavy_minus_sign:                                                                                       | List of potential verifiers for the document e.g. old verifiers and/or users with view/edit permissions. |                                                                                                          |