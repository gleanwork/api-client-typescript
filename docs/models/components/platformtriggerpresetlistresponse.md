# PlatformTriggerPresetListResponse

## Example Usage

```typescript
import { PlatformTriggerPresetListResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetListResponse = {
  results: [
    {
      preset_id: "jira_high_priority_bug",
      datasource: "jira",
      display_name: "High-priority Jira bugs",
      description: "Fires when a high-priority bug is created.",
    },
  ],
  has_more: true,
  next_cursor: "<value>",
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `results`                                                                                            | [components.PlatformTriggerPresetSummary](../../models/components/platformtriggerpresetsummary.md)[] | :heavy_check_mark:                                                                                   | Trigger presets available to the caller.                                                             |
| `hasMore`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether additional results are available.                                                            |
| `nextCursor`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | Cursor for the next page, or null when no more results are available.                                |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Platform-generated request ID for support correlation.                                               |