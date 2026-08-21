# PlatformTriggerPresetListResponse

## Example Usage

```typescript
import { PlatformTriggerPresetListResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetListResponse = {
  results: [
    {
      preset_id: "GITHUB_1",
      datasource: "github",
      display_name: "Review requested from me",
      description:
        "A review is requested from the trigger creator on a pull request",
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