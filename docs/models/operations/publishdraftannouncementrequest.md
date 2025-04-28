# PublishdraftannouncementRequest

## Example Usage

```typescript
import { PublishdraftannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: PublishdraftannouncementRequest = {
  publishDraftAnnouncementRequest: {
    id: 69695,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `publishDraftAnnouncementRequest`                                                                                        | [components.PublishDraftAnnouncementRequest](../../models/components/publishdraftannouncementrequest.md)                 | :heavy_check_mark:                                                                                                       | Publish draft announcement content.                                                                                      |