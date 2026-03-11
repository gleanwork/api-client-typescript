# InsightsSearchSummary

## Example Usage

```typescript
import { InsightsSearchSummary } from "@gleanwork/api-client/models/components";

let value: InsightsSearchSummary = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `monthlyActiveUsers`                                                        | *number*                                                                    | :heavy_minus_sign:                                                          | Number of current Monthly Active Users, in the specified departments.       |
| `weeklyActiveUsers`                                                         | *number*                                                                    | :heavy_minus_sign:                                                          | Number of current Weekly Active Users, in the specified departments.        |
| `numSearches`                                                               | *number*                                                                    | :heavy_minus_sign:                                                          | Total number of searches by users over the specified time period.           |
| `numSearchUsers`                                                            | *number*                                                                    | :heavy_minus_sign:                                                          | Total number of distinct users who searched over the specified time period. |