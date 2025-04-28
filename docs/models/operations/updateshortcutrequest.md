# UpdateshortcutRequest

## Example Usage

```typescript
import { UpdateshortcutRequest } from "@gleanwork/api-client/models/operations";

let value: UpdateshortcutRequest = {
  updateShortcutRequest: {
    id: 276298,
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        role: "VERIFIER",
      },
    ],
    removedRoles: [
      {
        role: "VIEWER",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `updateShortcutRequest`                                                                                                  | [components.UpdateShortcutRequest](../../models/components/updateshortcutrequest.md)                                     | :heavy_check_mark:                                                                                                       | Shortcut content. Id need to be specified for the shortcut.                                                              |