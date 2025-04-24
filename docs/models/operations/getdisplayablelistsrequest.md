# GetdisplayablelistsRequest

## Example Usage

```typescript
import { GetdisplayablelistsRequest } from "@gleanwork/api-client/models/operations";

let value: GetdisplayablelistsRequest = {
  getDisplayableListsRequest: {
    ids: [
      298831,
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xScioActas`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `getDisplayableListsRequest`                                                                                             | [components.GetDisplayableListsRequest](../../models/components/getdisplayablelistsrequest.md)                           | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |