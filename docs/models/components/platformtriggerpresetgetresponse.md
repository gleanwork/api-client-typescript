# PlatformTriggerPresetGetResponse

## Example Usage

```typescript
import { PlatformTriggerPresetGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetGetResponse = {
  trigger_preset: {
    preset_id: "jira_high_priority_bug",
    datasource: "jira",
    display_name: "High-priority Jira bugs",
    description: "Fires when a high-priority bug is created.",
    inputs: [],
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `triggerPreset`                                                                      | [components.PlatformTriggerPreset](../../models/components/platformtriggerpreset.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Platform-generated request ID for support correlation.                               |