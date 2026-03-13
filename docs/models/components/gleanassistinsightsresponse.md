# GleanAssistInsightsResponse

## Example Usage

```typescript
import { GleanAssistInsightsResponse } from "@gleanwork/api-client/models/components";

let value: GleanAssistInsightsResponse = {
  activityInsights: [
    {
      user: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      activity: "ALL",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `lastLogTimestamp`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Unix timestamp of the last activity processed to make the response (in seconds since epoch UTC). |
| `activityInsights`                                                                               | [components.UserActivityInsight](../../models/components/useractivityinsight.md)[]               | :heavy_minus_sign:                                                                               | Insights for all active users with respect to set of actions.                                    |
| `totalActiveUsers`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of active users in the requested period.                                            |
| `datasourceInstances`                                                                            | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | List of datasource instances for which glean assist is enabled.                                  |
| `departments`                                                                                    | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | List of departments applicable for users tab.                                                    |