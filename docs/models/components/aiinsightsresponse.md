# AiInsightsResponse

## Example Usage

```typescript
import { AiInsightsResponse } from "@gleanwork/api-client/models/components";

let value: AiInsightsResponse = {
  assistantInsights: [
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
| `assistantInsights`                                                                              | [components.UserActivityInsight](../../models/components/useractivityinsight.md)[]               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `totalActiveAssistantUsers`                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of Active Assistant users (chat, summary, AIA) in requested period.                 |
| `totalChatMessages`                                                                              | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of Chat messages sent in requested period.                                          |
| `totalAiSummarizations`                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of AI Document Summarizations invoked in the requested period.                      |
| `totalAiAnswers`                                                                                 | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of AI Answers generated in the requested period.                                    |
| `totalUpvotes`                                                                                   | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of Chat messages which received upvotes by the user.                                |
| `totalDownvotes`                                                                                 | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of Chat messages which received downvotes by the user.                              |
| `totalGleanbotResponses`                                                                         | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of Gleanbot responses, both proactive and reactive.                                 |
| `totalGleanbotResponsesShared`                                                                   | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of Gleanbot responses shared publicly (upvoted).                                    |
| `totalGleanbotResponsesNotHelpful`                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of Glean responses rejected as not helpful (downvoted).                             |
| `departments`                                                                                    | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | list of departments applicable for users tab.                                                    |