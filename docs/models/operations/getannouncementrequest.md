# GetannouncementRequest

## Example Usage

```typescript
import { GetannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: GetannouncementRequest = {
  getAnnouncementRequest: {
    id: 888591,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `getAnnouncementRequest`                                                                                                 | [components.GetAnnouncementRequest](../../models/components/getannouncementrequest.md)                                   | :heavy_check_mark:                                                                                                       | GetAnnouncement request                                                                                                  |