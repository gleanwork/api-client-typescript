# PlatformTriggerPresetInputValueListResponse

## Example Usage

```typescript
import { PlatformTriggerPresetInputValueListResponse } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerPresetInputValueListResponse = {
  results: [
    {
      value: "test.user@glean.com",
      display_name: "Test User",
    },
  ],
  is_truncated: false,
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                  | [components.PlatformTriggerPresetInputValue](../../models/components/platformtriggerpresetinputvalue.md)[] | :heavy_check_mark:                                                                                         | The bounded set of selectable values matching the query.                                                   |
| `isTruncated`                                                                                              | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Whether additional matches were omitted. When true, refine `query` to narrow the result set.<br/>          |
| `requestId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Platform-generated request ID for support correlation.                                                     |