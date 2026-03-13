# CountInfo

## Example Usage

```typescript
import { CountInfo } from "@gleanwork/api-client/models/components";

let value: CountInfo = {
  count: 241019,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `count`                                                                                            | *number*                                                                                           | :heavy_check_mark:                                                                                 | The counter value                                                                                  |
| `period`                                                                                           | [components.Period](../../models/components/period.md)                                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `org`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The unit of organization over which we did the count aggregation, e.g. org (department) or company |