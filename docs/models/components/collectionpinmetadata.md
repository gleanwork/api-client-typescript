# CollectionPinMetadata

## Example Usage

```typescript
import { CollectionPinMetadata } from "@gleanwork/api-client/models/components";

let value: CollectionPinMetadata = {
  id: 880694,
  target: {
    category: "TEAM_RESOURCE",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *number*                                                                         | :heavy_check_mark:                                                               | The ID of the Collection.                                                        |
| `target`                                                                         | [components.CollectionPinTarget](../../models/components/collectionpintarget.md) | :heavy_check_mark:                                                               | N/A                                                                              |