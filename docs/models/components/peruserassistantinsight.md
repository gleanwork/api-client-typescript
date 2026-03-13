# PerUserAssistantInsight

## Example Usage

```typescript
import { PerUserAssistantInsight } from "@gleanwork/api-client/models/components";

let value: PerUserAssistantInsight = {
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `person`                                                                                      | [components.Person](../../models/components/person.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                            |
| `numChatMessages`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of chat messages sent by this user over the specified time period.               |                                                                                               |
| `numSummarizations`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of summarized items by this user over the specified time period.                 |                                                                                               |
| `numAiAnswers`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of AI Answers interacted with by this user over the specified time period.       |                                                                                               |
| `numGleanbotInteractions`                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of Gleanbot responses marked useful by this user over the specified time period. |                                                                                               |
| `numDaysActive`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total number of days this user was active on the Assistant over the specified time period.    |                                                                                               |