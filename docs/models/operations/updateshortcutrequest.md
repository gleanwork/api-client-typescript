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
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        role: "EDITOR",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `updateShortcutRequest`                                                                                                                                                                             | [components.UpdateShortcutRequest](../../models/components/updateshortcutrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                  | Shortcut content. Id need to be specified for the shortcut.                                                                                                                                         |