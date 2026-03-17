# GetCollectionRequest

## Example Usage

```typescript
import { GetCollectionRequest } from "@gleanwork/api-client/models/components";

let value: GetCollectionRequest = {
  id: 745314,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                          | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the Collection to be retrieved.                                                                                     |
| `withItems`                                                                                                                   | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether or not to include the Collection Items in this Collection. Only request if absolutely required, as this is expensive. |
| `withHierarchy`                                                                                                               | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether or not to include the top level Collection in this Collection's hierarchy.                                            |
| `allowedDatasource`                                                                                                           | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The datasource allowed in the Collection returned.                                                                            |