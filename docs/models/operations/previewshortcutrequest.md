# PreviewshortcutRequest

## Example Usage

```typescript
import { PreviewshortcutRequest } from "@gleanwork/api-client/models/operations";

let value: PreviewshortcutRequest = {
  shortcutMutableProperties: {
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        role: "EDITOR",
      },
    ],
    removedRoles: [
      {
        role: "ANSWER_MODERATOR",
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
| `shortcutMutableProperties`                                                                                              | [components.ShortcutMutableProperties](../../models/components/shortcutmutableproperties.md)                             | :heavy_check_mark:                                                                                                       | CreateShortcut request                                                                                                   |