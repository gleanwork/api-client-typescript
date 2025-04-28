# DeleteannouncementRequest

## Example Usage

```typescript
import { DeleteannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: DeleteannouncementRequest = {
  deleteAnnouncementRequest: {
    id: 440796,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `deleteAnnouncementRequest`                                                                                              | [components.DeleteAnnouncementRequest](../../models/components/deleteannouncementrequest.md)                             | :heavy_check_mark:                                                                                                       | Delete announcement request                                                                                              |