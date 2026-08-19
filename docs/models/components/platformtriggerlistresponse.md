# PlatformTriggerListResponse

## Example Usage

```typescript
import { PlatformTriggerListResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerListResponse = {
  results: [
    {
      trigger_id: "2f8a9b0c1d2e4f5a6b7c8d9e0f1a2b3c",
      preset_id: "jira_high_priority_bug",
      description: "High-priority Jira bugs in the Engineering project",
      status: "ENABLED",
      inputs: {
        "project": "ENG",
      },
      delivery: {
        webhook_url: "https://customer.app/webhook",
      },
      created_at: new Date("2026-04-29T00:04:28.593Z"),
      updated_at: new Date("2025-06-11T17:14:57.708Z"),
    },
  ],
  has_more: true,
  next_cursor: null,
  request_id: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `results`                                                                  | [components.PlatformTrigger](../../models/components/platformtrigger.md)[] | :heavy_check_mark:                                                         | Triggers owned by the caller.                                              |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Whether additional results are available.                                  |
| `nextCursor`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Cursor for the next page, or null when no more results are available.      |
| `requestId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Platform-generated request ID for support correlation.                     |