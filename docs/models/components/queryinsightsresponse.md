# QueryInsightsResponse

## Example Usage

```typescript
import { QueryInsightsResponse } from "@gleanwork/api-client/models/components";

let value: QueryInsightsResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `lastLogTimestamp`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Unix timestamp of the last activity processed to make the response (in seconds since epoch UTC). |
| `queryInsights`                                                                                  | [components.QueryInsight](../../models/components/queryinsight.md)[]                             | :heavy_minus_sign:                                                                               | Insights for queries.                                                                            |
| `lowPerformingQueryInsights`                                                                     | [components.QueryInsight](../../models/components/queryinsight.md)[]                             | :heavy_minus_sign:                                                                               | Insights for low performing queries without good results.                                        |
| `departments`                                                                                    | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | list of departments applicable for queries tab.                                                  |
| `minVisitorThreshold`                                                                            | *number*                                                                                         | :heavy_minus_sign:                                                                               | Min threshold in number of visitors while populating results, otherwise 0.                       |