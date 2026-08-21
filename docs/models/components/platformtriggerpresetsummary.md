# PlatformTriggerPresetSummary

## Example Usage

```typescript
import { PlatformTriggerPresetSummary } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetSummary = {
  preset_id: "GITHUB_1",
  datasource: "github",
  display_name: "Review requested from me",
  description:
    "A review is requested from the trigger creator on a pull request",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `presetId`                                                       | *string*                                                         | :heavy_check_mark:                                               | ID of the preset. Pass this when creating a trigger.             | GITHUB_1                                                         |
| `datasource`                                                     | *string*                                                         | :heavy_check_mark:                                               | Datasource the preset fires on.                                  | github                                                           |
| `displayName`                                                    | *string*                                                         | :heavy_check_mark:                                               | Human-readable preset name.                                      | Review requested from me                                         |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | Human-readable description of when the preset fires.             | A review is requested from the trigger creator on a pull request |