# DeleteCollectionItemRequest

## Example Usage

```typescript
import { DeleteCollectionItemRequest } from "@gleanwork/api-client/models/components";

let value: DeleteCollectionItemRequest = {
  collectionId: 8666.83,
  itemId: "<id>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `collectionId`                                                                                                        | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | The ID of the Collection to remove an item in.                                                                        |
| `itemId`                                                                                                              | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The item ID of the CollectionItem to remove from this Collection.                                                     |
| `documentId`                                                                                                          | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The (optional) Glean Document ID of the CollectionItem to remove from this Collection if this is an indexed document. |