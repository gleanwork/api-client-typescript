# FeedRequest

## Example Usage

```typescript
import { FeedRequest } from "@gleanwork/api-client/models/operations";

let value: FeedRequest = {
  feedRequest: {
    timeoutMillis: 5000,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `feedRequest`                                                                                                            | [components.FeedRequest](../../models/components/feedrequest.md)                                                         | :heavy_check_mark:                                                                                                       | Includes request params, client data and more for making user's feed.                                                    |