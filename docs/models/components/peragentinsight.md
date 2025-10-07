# PerAgentInsight

## Example Usage

```typescript
import { PerAgentInsight } from "@gleanwork/api-client/models/components";

let value: PerAgentInsight = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `agentId`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | Agent ID                                                             |
| `agentName`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | Agent name                                                           |
| `userCount`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Total number of users for this agent over the specified time period. |
| `runCount`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | Total number of runs for this agent over the specified time period.  |