# InviteRequest

## Example Usage

```typescript
import { InviteRequest } from "@gleanwork/api-client/models/operations";

let value: InviteRequest = {
  inviteRequest: {
    recipients: [
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
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `inviteRequest`                                                                                                          | [components.InviteRequest](../../models/components/inviterequest.md)                                                     | :heavy_check_mark:                                                                                                       | Invite request                                                                                                           |