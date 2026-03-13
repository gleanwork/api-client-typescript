# AddCollectionItemsRequest

## Example Usage

```typescript
import { AddCollectionItemsRequest } from "@gleanwork/api-client/models/components";

let value: AddCollectionItemsRequest = {
  collectionId: 7056.86,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `collectionId`                                                                               | *number*                                                                                     | :heavy_check_mark:                                                                           | The ID of the Collection to add items to.                                                    |
| `addedCollectionItemDescriptors`                                                             | [components.CollectionItemDescriptor](../../models/components/collectionitemdescriptor.md)[] | :heavy_minus_sign:                                                                           | The CollectionItemDescriptors of the items being added.                                      |