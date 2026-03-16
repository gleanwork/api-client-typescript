# DeletecollectionRequest

## Example Usage

```typescript
import { DeletecollectionRequest } from "@gleanwork/api-client/models/operations";

let value: DeletecollectionRequest = {
  deleteCollectionRequest: {
    ids: [
      654348,
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `deleteCollectionRequest`                                                                                                                                                                           | [components.DeleteCollectionRequest](../../models/components/deletecollectionrequest.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                                                  | DeleteCollection request                                                                                                                                                                            |