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
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `createShortcutRequest`                                                                                                                                                                             | [components.CreateShortcutRequest](../../models/components/createshortcutrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                  | CreateShortcut request                                                                                                                                                                              |