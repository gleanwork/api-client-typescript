# DeletecollectionRequest

## Example Usage

```typescript
import { DeletecollectionRequest } from "@gleanwork/api-client/models/operations";

let value: DeletecollectionRequest = {
  deleteCollectionRequest: {
    ids: [
      354490,
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `deleteCollectionRequest`                                                                                                | [components.DeleteCollectionRequest](../../models/components/deletecollectionrequest.md)                                 | :heavy_check_mark:                                                                                                       | DeleteCollection request                                                                                                 |