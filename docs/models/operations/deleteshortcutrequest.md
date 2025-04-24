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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xScioActas`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `deleteShortcutRequest`                                                                                                  | [components.DeleteShortcutRequest](../../models/components/deleteshortcutrequest.md)                                     | :heavy_check_mark:                                                                                                       | DeleteShortcut request                                                                                                   |