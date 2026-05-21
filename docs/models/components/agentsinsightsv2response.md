# AgentsInsightsV2Response

## Example Usage

```typescript
import { AgentsInsightsV2Response } from "@gleanwork/api-client/models/components";

let value: AgentsInsightsV2Response = {
  topAgentsInsights: [
    {
      icon: {
        color: "#343CED",
        key: "person_icon",
        iconType: "GLYPH",
        name: "user",
      },
      owner: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
  ],
  topUseCasesInsights: [
    {
      topAgentIcon: {
        color: "#343CED",
        key: "person_icon",
        iconType: "GLYPH",
        name: "user",
      },
    },
  ],
  agentsUsageByDepartmentInsights: [
    {
      icon: {
        color: "#343CED",
        key: "person_icon",
        iconType: "GLYPH",
        name: "user",
      },
    },
  ],
  agentUsersInsights: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
  ],
  agentsTimeSavedInsights: [
    {
      icon: {
        color: "#343CED",
        key: "person_icon",
        iconType: "GLYPH",
        name: "user",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `monthlyActiveUsers`                                                                                     | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Number of current Monthly Active Users.                                                                  |
| `weeklyActiveUsers`                                                                                      | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Number of current Weekly Active Users.                                                                   |
| `monthlyActiveUserTimeseries`                                                                            | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `weeklyActiveUserTimeseries`                                                                             | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `dailyActiveUserTimeseries`                                                                              | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `sharedAgentsCount`                                                                                      | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Total number of shared agents.                                                                           |
| `topAgentsInsights`                                                                                      | [components.PerAgentInsight](../../models/components/peragentinsight.md)[]                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `topUseCasesInsights`                                                                                    | [components.AgentUseCaseInsight](../../models/components/agentusecaseinsight.md)[]                       | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `agentsUsageByDepartmentInsights`                                                                        | [components.AgentsUsageByDepartmentInsight](../../models/components/agentsusagebydepartmentinsight.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `agentUsersInsights`                                                                                     | [components.AgentUsersInsight](../../models/components/agentusersinsight.md)[]                           | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `agentsTimeSavedInsights`                                                                                | [components.AgentsTimeSavedInsight](../../models/components/agentstimesavedinsight.md)[]                 | :heavy_minus_sign:                                                                                       | Insights for agents time saved over the specified time period.                                           |
| `dailyAgentRunsTimeseries`                                                                               | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `successfulRunsTimeseries`                                                                               | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `failedRunsTimeseries`                                                                                   | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `pausedRunsTimeseries`                                                                                   | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `upvotesTimeseries`                                                                                      | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `downvotesTimeseries`                                                                                    | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |