# AgentUsersInsight

## Example Usage

```typescript
import { AgentUsersInsight } from "@gleanwork/api-client/models/components";

let value: AgentUsersInsight = {
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `person`                                                                     | [components.Person](../../models/components/person.md)                       | :heavy_minus_sign:                                                           | N/A                                                                          | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}           |
| `departmentName`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | Department name                                                              |                                                                              |
| `agentsUsedCount`                                                            | *number*                                                                     | :heavy_minus_sign:                                                           | Total number of agents used by this user over the specified time period.     |                                                                              |
| `averageRunsPerDayCount`                                                     | *number*                                                                     | :heavy_minus_sign:                                                           | Average number of runs per day for this user over the specified time period. |                                                                              |
| `agentsCreatedCount`                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | Total number of agents created by this user over the specified time period.  |                                                                              |
| `runCount`                                                                   | *number*                                                                     | :heavy_minus_sign:                                                           | Total number of agent runs for this user over the specified time period.     |                                                                              |