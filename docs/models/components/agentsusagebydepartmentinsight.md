# AgentsUsageByDepartmentInsight

## Example Usage

```typescript
import { AgentsUsageByDepartmentInsight } from "@gleanwork/api-client/models/components";

let value: AgentsUsageByDepartmentInsight = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `department`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Name of the department                                                                                       |
| `agentAdoptionRate`                                                                                          | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Percentage of employees in the department who have used agents at least once over the specified time period. |
| `userCount`                                                                                                  | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Total number of users in this department who have used any agent over the specified time period.             |
| `runCount`                                                                                                   | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Total number of runs in this department over the specified time period.                                      |
| `agentId`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | ID of the agent to be shown in the agent column in this department over the specified time period.           |
| `agentName`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Name of the agent to be shown in the agent column in this department over the specified time period.         |