# AgentsInsightsV2Request

## Example Usage

```typescript
import { AgentsInsightsV2Request } from "@gleanwork/api-client/models/components";

let value: AgentsInsightsV2Request = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `agentIds`                                                                             | *string*[]                                                                             | :heavy_minus_sign:                                                                     | IDs of the Agents for which Insights should be returned. An empty array signifies all. |
| `departments`                                                                          | *string*[]                                                                             | :heavy_minus_sign:                                                                     | Departments for which Insights are requested.                                          |
| `managerEmails`                                                                        | *string*[]                                                                             | :heavy_minus_sign:                                                                     | Manager emails whose teams should be filtered for. Empty array means no filtering.     |
| `dayRange`                                                                             | [components.Period](../../models/components/period.md)                                 | :heavy_minus_sign:                                                                     | N/A                                                                                    |