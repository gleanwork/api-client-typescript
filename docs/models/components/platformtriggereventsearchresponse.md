# PlatformTriggerEventSearchResponse

## Example Usage

```typescript
import { PlatformTriggerEventSearchResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerEventSearchResponse = {
  results: [
    {
      event_type: "DOCUMENT_CHANGE",
      datasource: "GITHUB",
      reason: "CREATED",
      doc_type: "Ticket",
      doc_id: "<id>",
      view_url: "https://dreary-tomatillo.org",
      title: "<value>",
      event_time: new Date("2024-10-08T00:01:41.999Z"),
    },
  ],
  has_more: true,
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                               | [components.PlatformTriggerEvent](../../models/components/platformtriggerevent.md)[]                                    | :heavy_check_mark:                                                                                                      | Matching events, most recent first.                                                                                     |
| `hasMore`                                                                                                               | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether more events matched than were returned. Raise `page_size` to see more; cursor-based paging is not offered yet.<br/> |
| `requestId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Unique identifier for this request, for support and debugging.                                                          |