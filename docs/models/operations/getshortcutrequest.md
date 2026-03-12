# GetshortcutRequest

## Example Usage

```typescript
import { GetshortcutRequest } from "@gleanwork/api-client/models/operations";

let value: GetshortcutRequest = {
  getShortcutRequest: {
    alias: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `getShortcutRequest`                                                                                                                                                                                | *components.GetShortcutRequestUnion*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                  | GetShortcut request                                                                                                                                                                                 |