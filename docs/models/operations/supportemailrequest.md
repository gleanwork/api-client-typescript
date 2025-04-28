# SupportEmailRequest

## Example Usage

```typescript
import { SupportEmailRequest } from "@gleanwork/api-client/models/operations";

let value: SupportEmailRequest = {
  emailRequest: {
    emailTemplate: "TEAMMATE_INVITE",
    recipients: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    ],
    ccRecipients: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    ],
    recipientFilters: {
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
    },
    senders: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    ],
    documents: [
      {
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
    ],
    feedbackPayload: {
      customJson:
        "{\"comment\": \"glean is awesome!\", \"sender\": \"happycustomer@customer.com\"}",
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `emailRequest`                                                                                                           | [components.EmailRequest](../../models/components/emailrequest.md)                                                       | :heavy_check_mark:                                                                                                       | Support request                                                                                                          |