# CreateshortcutRequest

## Example Usage

```typescript
import { CreateshortcutRequest } from "@gleanwork/api-client/models/operations";

let value: CreateshortcutRequest = {
  createShortcutRequest: {
    data: {
      addedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          role: "ANSWER_MODERATOR",
        },
      ],
      removedRoles: [
        {
          role: "OWNER",
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
| `createShortcutRequest`                                                                                                  | [components.CreateShortcutRequest](../../models/components/createshortcutrequest.md)                                     | :heavy_check_mark:                                                                                                       | CreateShortcut request                                                                                                   |