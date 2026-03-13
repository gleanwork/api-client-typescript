# DeleteshortcutRequest

## Example Usage

```typescript
import { DeleteshortcutRequest } from "@gleanwork/api-client/models/operations";

let value: DeleteshortcutRequest = {
  deleteShortcutRequest: {
    id: 102037,
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `deleteShortcutRequest`                                                                                                                                                                             | [components.DeleteShortcutRequest](../../models/components/deleteshortcutrequest.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                  | DeleteShortcut request                                                                                                                                                                              |