# PlatformRequestListResponse1

A further page requires a usable continuation cursor.

## Example Usage

```typescript
import { PlatformRequestListResponse1 } from "@gleanwork/api-client/models/components";

let value: PlatformRequestListResponse1 = {
  has_more: true,
  next_cursor: "<value>",
  results: [],
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `hasMore`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether a further page is available through next_cursor.                                             |
| `nextCursor`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | Opaque nonempty continuation when has_more is true; null or omitted otherwise.                       |
| `results`                                                                                            | [components.PlatformLimitIncreaseRequest](../../models/components/platformlimitincreaserequest.md)[] | :heavy_check_mark:                                                                                   | Requests visible to the caller under the current filters and authorization.                          |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Trace identifier for this list response, not a request resource ID.                                  |