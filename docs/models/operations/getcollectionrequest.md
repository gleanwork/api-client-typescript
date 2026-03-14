# GetcollectionRequest

## Example Usage

```typescript
import { GetcollectionRequest } from "@gleanwork/api-client/models/operations";

let value: GetcollectionRequest = {
  getCollectionRequest: {
    id: 928189,
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `getCollectionRequest`                                                                                                                                                                              | [components.GetCollectionRequest](../../models/components/getcollectionrequest.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                  | GetCollection request                                                                                                                                                                               |