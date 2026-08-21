# PlatformTriggerPresetGetResponse

## Example Usage

```typescript
import { PlatformTriggerPresetGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetGetResponse = {
  trigger_preset: {
    preset_id: "GITHUB_1",
    datasource: "github",
    display_name: "Review requested from me",
    description:
      "A review is requested from the trigger creator on a pull request",
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