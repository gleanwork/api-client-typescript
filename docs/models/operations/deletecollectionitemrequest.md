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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `deleteCollectionItemRequest`                                                                                            | [components.DeleteCollectionItemRequest](../../models/components/deletecollectionitemrequest.md)                         | :heavy_check_mark:                                                                                                       | Data describing the delete operation.                                                                                    |