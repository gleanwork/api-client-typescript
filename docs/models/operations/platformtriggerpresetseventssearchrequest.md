# PlatformTriggerPresetsEventsSearchRequest

## Example Usage

```typescript
import { PlatformTriggerPresetsEventsSearchRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformTriggerPresetsEventsSearchRequest = {
  preset_id: "{preset_id}",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `presetId`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ID of the preset to preview.                                                                                             | {preset_id}                                                                                                              |
| `platformTriggerPresetEventSearchRequest`                                                                                | [components.PlatformTriggerPresetEventSearchRequest](../../models/components/platformtriggerpreseteventsearchrequest.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"inputs": {<br/>"repository": "{repository}"<br/>},<br/>"page_size": 10<br/>}                                      |