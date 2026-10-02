# PlatformRequestListResponse2

The last page has no continuation cursor.

## Example Usage

```typescript
import { PlatformRequestListResponse2 } from "@gleanwork/api-client/models/components";

let value: PlatformRequestListResponse2 = {
  has_more: false,
  results: [
    {
      request_id: "<id>",
      entity_type: "USER",
      entity_id: "<id>",
      client_id: "<id>",
      requester_user_id: "<id>",
      period: "<value>",
      status: "PENDING",
      created_at: new Date("2024-04-28T13:32:00.825Z"),
    },
  ],
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `hasMore`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether a further page is available through next_cursor.                                             |
| `nextCursor`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Opaque nonempty continuation when has_more is true; null or omitted otherwise.                       |
| `results`                                                                                            | [components.PlatformLimitIncreaseRequest](../../models/components/platformlimitincreaserequest.md)[] | :heavy_check_mark:                                                                                   | Requests visible to the caller under the current filters and authorization.                          |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Trace identifier for this list response, not a request resource ID.                                  |