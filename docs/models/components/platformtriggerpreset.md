# PlatformTriggerPreset

## Example Usage

```typescript
import { PlatformTriggerPreset } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPreset = {
  preset_id: "jira_high_priority_bug",
  datasource: "jira",
  display_name: "High-priority Jira bugs",
  description: "Fires when a high-priority bug is created.",
  inputs: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `presetId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | ID of the preset. Pass this when creating a trigger.                                             | jira_high_priority_bug                                                                           |
| `datasource`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | Datasource the preset fires on.                                                                  | jira                                                                                             |
| `displayName`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | Human-readable preset name.                                                                      | High-priority Jira bugs                                                                          |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | Human-readable description of when the preset fires.                                             | Fires when a high-priority bug is created.                                                       |
| `inputs`                                                                                         | [components.PlatformTriggerPresetInput](../../models/components/platformtriggerpresetinput.md)[] | :heavy_check_mark:                                                                               | Inputs the caller may supply when creating a trigger from this preset.                           |                                                                                                  |