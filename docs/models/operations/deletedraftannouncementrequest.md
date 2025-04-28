# DeletedraftannouncementRequest

## Example Usage

```typescript
import { DeletedraftannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: DeletedraftannouncementRequest = {
  deleteAnnouncementRequest: {
    id: 356888,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `deleteAnnouncementRequest`                                                                                              | [components.DeleteAnnouncementRequest](../../models/components/deleteannouncementrequest.md)                             | :heavy_check_mark:                                                                                                       | Delete draft announcement request                                                                                        |