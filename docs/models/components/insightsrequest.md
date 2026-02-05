# InsightsRequest

## Example Usage

```typescript
import { InsightsRequest } from "@gleanwork/api-client/models/components";

let value: InsightsRequest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `overviewRequest`                                                                          | [components.InsightsOverviewRequest](../../models/components/insightsoverviewrequest.md)   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `assistantRequest`                                                                         | [components.InsightsAssistantRequest](../../models/components/insightsassistantrequest.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `agentsRequest`                                                                            | [components.AgentsInsightsV2Request](../../models/components/agentsinsightsv2request.md)   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `disablePerUserInsights`                                                                   | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | If true, suppresses the generation of per-user Insights in the response. Default is false. |