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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `monthlyActiveUsers`                                                                                     | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Number of current Monthly Active Users, in the specified departments.                                    |
| `weeklyActiveUsers`                                                                                      | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Number of current Weekly Active Users, in the specified departments.                                     |
| `monthlyActiveUserTimeseries`                                                                            | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `weeklyActiveUserTimeseries`                                                                             | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `dailyActiveUserTimeseries`                                                                              | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `sharedAgentsCount`                                                                                      | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Total number of shared agents.                                                                           |
| `topAgentsInsights`                                                                                      | [components.PerAgentInsight](../../models/components/peragentinsight.md)[]                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `agentsUsageByDepartmentInsights`                                                                        | [components.AgentsUsageByDepartmentInsight](../../models/components/agentsusagebydepartmentinsight.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `agentUsersInsights`                                                                                     | [components.AgentUsersInsight](../../models/components/agentusersinsight.md)[]                           | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `dailyAgentRunsTimeseries`                                                                               | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `upvotesTimeseries`                                                                                      | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `downvotesTimeseries`                                                                                    | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |