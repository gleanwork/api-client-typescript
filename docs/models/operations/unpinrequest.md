# UnpinRequest

## Example Usage

```typescript
import { UnpinRequest } from "@gleanwork/api-client/models/operations";

let value: UnpinRequest = {
  unpin: {},
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `unpin`                                                                                                                                                                                             | [components.Unpin](../../models/components/unpin.md)                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                  | Details about the pin being unpinned.                                                                                                                                                               |