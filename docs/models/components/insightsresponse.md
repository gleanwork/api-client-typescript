# InsightsResponse

## Example Usage

```typescript
import { InsightsResponse } from "@gleanwork/api-client/models/components";

let value: InsightsResponse = {
  gleanAssist: {
    activityInsights: [
      {
        user: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        activity: "ALL",
      },
    ],
  },
  overviewResponse: {
    perUserInsights: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    ],
  },
  assistantResponse: {
    perUserInsights: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    ],
  },
  agentsResponse: {
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
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `gleanAssist`                                                                                    | [components.GleanAssistInsightsResponse](../../models/components/gleanassistinsightsresponse.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `overviewResponse`                                                                               | [components.InsightsOverviewResponse](../../models/components/insightsoverviewresponse.md)       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `assistantResponse`                                                                              | [components.AssistantInsightsResponse](../../models/components/assistantinsightsresponse.md)     | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `agentsResponse`                                                                                 | [components.AgentsInsightsV2Response](../../models/components/agentsinsightsv2response.md)       | :heavy_minus_sign:                                                                               | N/A                                                                                              |