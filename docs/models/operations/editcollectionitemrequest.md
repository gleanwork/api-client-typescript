# EditcollectionitemRequest

## Example Usage

```typescript
import { EditcollectionitemRequest } from "@gleanwork/api-client/models/operations";

let value: EditcollectionitemRequest = {
  editCollectionItemRequest: {
    collectionId: 50795,
    itemId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `editCollectionItemRequest`                                                                                                                                                                         | [components.EditCollectionItemRequest](../../models/components/editcollectionitemrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                  | Edit Collection Items request                                                                                                                                                                       |