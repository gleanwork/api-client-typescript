# EditCollectionItemRequest

## Example Usage

```typescript
import { EditCollectionItemRequest } from "@gleanwork/api-client/models/components";

let value: EditCollectionItemRequest = {
  collectionId: 925425,
  itemId: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `name`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | The optional name of the Collection item.                                           |
| `description`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | A helpful description of why this CollectionItem is in the Collection that it's in. |
| `icon`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | The emoji icon for this CollectionItem. Only used for Text type items.              |
| `collectionId`                                                                      | *number*                                                                            | :heavy_check_mark:                                                                  | The ID of the Collection to edit CollectionItems in.                                |
| `itemId`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | The ID of the CollectionItem to edit.                                               |