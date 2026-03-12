# FeedRequest

## Example Usage

```typescript
import { FeedRequest } from "@gleanwork/api-client/models/components";

let value: FeedRequest = {
  timeoutMillis: 5000,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `categories`                                                                                                  | [components.FeedRequestCategory](../../models/components/feedrequestcategory.md)[]                            | :heavy_minus_sign:                                                                                            | Categories of content requested. An allowlist gives flexibility to request content separately or together.    |                                                                                                               |
| `requestOptions`                                                                                              | [components.FeedRequestOptions](../../models/components/feedrequestoptions.md)                                | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `timeoutMillis`                                                                                               | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Timeout in milliseconds for the request. A `408` error will be returned if handling the request takes longer. | 5000                                                                                                          |
| `sessionInfo`                                                                                                 | [components.SessionInfo](../../models/components/sessioninfo.md)                                              | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |                                                                                                               |