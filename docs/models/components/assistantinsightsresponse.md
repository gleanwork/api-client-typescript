# AssistantInsightsResponse

## Example Usage

```typescript
import { AssistantInsightsResponse } from "@gleanwork/api-client/models/components";

let value: AssistantInsightsResponse = {
  perUserInsights: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `monthlyActiveUsers`                                                                            | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of current Monthly Active Users.                                                         |
| `weeklyActiveUsers`                                                                             | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of current Weekly Active Users.                                                          |
| `lastUpdatedTs`                                                                                 | *number*                                                                                        | :heavy_minus_sign:                                                                              | Unix timestamp of the last update for the insights data in the response.                        |
| `monthlyActiveUserTimeseries`                                                                   | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `weeklyActiveUserTimeseries`                                                                    | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `dailyActiveUserTimeseries`                                                                     | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `totalSignups`                                                                                  | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of current signed up employees in the specified departments, according to the Org Chart. |
| `chatMessagesTimeseries`                                                                        | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `summarizationsTimeseries`                                                                      | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `aiAnswersTimeseries`                                                                           | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `gleanbotInteractionsTimeseries`                                                                | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `perUserInsights`                                                                               | [components.PerUserAssistantInsight](../../models/components/peruserassistantinsight.md)[]      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `upvotesTimeseries`                                                                             | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `downvotesTimeseries`                                                                           | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |