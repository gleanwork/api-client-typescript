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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `addCollectionItemsRequest`                                                                                              | [components.AddCollectionItemsRequest](../../models/components/addcollectionitemsrequest.md)                             | :heavy_check_mark:                                                                                                       | Data describing the add operation.                                                                                       |