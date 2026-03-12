# DeleteCollectionRequest

## Example Usage

```typescript
import { DeleteCollectionRequest } from "@gleanwork/api-client/models/components";

let value: DeleteCollectionRequest = {
  ids: [
    118588,
    912038,
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `ids`                                                   | *number*[]                                              | :heavy_check_mark:                                      | The IDs of the Collections to delete.                   |
| `allowedDatasource`                                     | *string*                                                | :heavy_minus_sign:                                      | The datasource allowed in the Collection to be deleted. |