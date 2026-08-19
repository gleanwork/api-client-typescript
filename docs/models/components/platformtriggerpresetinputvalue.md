# PlatformTriggerPresetInputValue

## Example Usage

```typescript
import { PlatformTriggerPresetInputValue } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetInputValue = {
  value: "person@example.com",
  display_name: "Test User",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The exact value to send in the trigger's `inputs` for this choice (e.g. a channel name, a user's email, etc).<br/> | person@example.com                                                                                             |
| `displayName`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Human-readable name for this value.                                                                            | Test User                                                                                                      |