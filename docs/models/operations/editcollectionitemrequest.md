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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `editCollectionItemRequest`                                                                                              | [components.EditCollectionItemRequest](../../models/components/editcollectionitemrequest.md)                             | :heavy_check_mark:                                                                                                       | Edit Collection Items request                                                                                            |