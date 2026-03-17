# AddcollectionitemsRequest

## Example Usage

```typescript
import { AddcollectionitemsRequest } from "@gleanwork/api-client/models/operations";

let value: AddcollectionitemsRequest = {
  addCollectionItemsRequest: {
    collectionId: 2067.97,
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `addCollectionItemsRequest`                                                                                                                                                                         | [components.AddCollectionItemsRequest](../../models/components/addcollectionitemsrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                  | Data describing the add operation.                                                                                                                                                                  |