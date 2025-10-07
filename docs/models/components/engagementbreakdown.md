# EngagementBreakdown

## Example Usage

```typescript
import { EngagementBreakdown } from "@gleanwork/api-client/models/components";

let value: EngagementBreakdown = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `nonUsers`                                                      | *number*                                                        | :heavy_minus_sign:                                              | Number of non-user employees in the specified departments.      |
| `dormantUsers`                                                  | *number*                                                        | :heavy_minus_sign:                                              | Number of currently dormant users in the specified departments. |
| `regularUsers`                                                  | *number*                                                        | :heavy_minus_sign:                                              | Number of currently regular users in the specified departments. |
| `powerUsers`                                                    | *number*                                                        | :heavy_minus_sign:                                              | Number of currently power users in the specified departments.   |