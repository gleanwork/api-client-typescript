# McpInsightsResponse

## Example Usage

```typescript
import { McpInsightsResponse } from "@gleanwork/api-client/models/components";

let value: McpInsightsResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `monthlyActiveUsers`                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | Number of current Monthly Active Users.                                      |
| `weeklyActiveUsers`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | Number of current Weekly Active Users.                                       |
| `dailyActiveUsers`                                                           | *number*                                                                     | :heavy_minus_sign:                                                           | Number of current Daily Active Users.                                        |
| `monthlyActiveUserTimeseries`                                                | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `weeklyActiveUserTimeseries`                                                 | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `dailyActiveUserTimeseries`                                                  | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `overallDailyActiveUserTimeseries`                                           | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `topHostApplicationsActiveUserTimeseries`                                    | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |