# DeletecollectionitemRequest

## Example Usage

```typescript
import { DeletecollectionitemRequest } from "@gleanwork/api-client/models/operations";

let value: DeletecollectionitemRequest = {
  deleteCollectionItemRequest: {
    collectionId: 4278.02,
    itemId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `deleteCollectionItemRequest`                                                                                                                                                                       | [components.DeleteCollectionItemRequest](../../models/components/deletecollectionitemrequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                                                  | Data describing the delete operation.                                                                                                                                                               |