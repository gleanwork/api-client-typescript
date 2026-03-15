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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `feedRequest`                                                                                                                                                                                       | [components.FeedRequest](../../models/components/feedrequest.md)                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                  | Includes request params, client data and more for making user's feed.                                                                                                                               |