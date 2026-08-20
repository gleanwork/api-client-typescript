# PlatformTriggerPresetsInputValuesListRequest

## Example Usage

```typescript
import { PlatformTriggerPresetsInputValuesListRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformTriggerPresetsInputValuesListRequest = {
  preset_id: "<id>",
  field: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `presetId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | ID of the preset the input belongs to.                                                                               |
| `field`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Field identifier of the input whose values to list.                                                                  |
| `query`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Prefix filter over the input's option values, for typeahead. Matching is on the option value, not its display name.<br/> |