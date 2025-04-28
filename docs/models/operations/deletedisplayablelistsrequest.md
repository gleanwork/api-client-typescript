# DeletedisplayablelistsRequest

## Example Usage

```typescript
import { DeletedisplayablelistsRequest } from "@gleanwork/api-client/models/operations";

let value: DeletedisplayablelistsRequest = {
  deleteDisplayableListsRequest: {
    ids: [
      947460,
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `deleteDisplayableListsRequest`                                                                                          | [components.DeleteDisplayableListsRequest](../../models/components/deletedisplayablelistsrequest.md)                     | :heavy_check_mark:                                                                                                       | Updated version of the displayable list configs.                                                                         |