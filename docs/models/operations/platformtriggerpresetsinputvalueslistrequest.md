# PlatformTriggerPresetsInputValuesListRequest

## Example Usage

```typescript
import { PlatformTriggerPresetsInputValuesListRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformTriggerPresetsInputValuesListRequest = {
  preset_id: "{preset_id}",
  field: "{field}",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `presetId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ID of the preset the input belongs to.                                                                               | {preset_id}                                                                                                          |
| `field`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Field identifier of the input whose values to list.                                                                  | {field}                                                                                                              |
| `query`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Prefix filter over the input's option values, for typeahead. Matching is on the option value, not its display name.<br/> |                                                                                                                      |