# McpBreakdownInsightsRequest

## Example Usage

```typescript
import { McpBreakdownInsightsRequest } from "@gleanwork/api-client/models/components";

let value: McpBreakdownInsightsRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `departments`                                                                        | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Departments for which Insights are requested.                                        |
| `managerIds`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Manager user IDs whose teams should be filtered for. Empty array means no filtering. |
| `managerEmails`                                                                      | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Manager emails whose teams should be filtered for. Empty array means no filtering.   |
| `dayRange`                                                                           | [components.Period](../../models/components/period.md)                               | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `breakdownType`                                                                      | [components.BreakdownType](../../models/components/breakdowntype.md)                 | :heavy_minus_sign:                                                                   | Type of breakdown to return.                                                         |
| `hostApplications`                                                                   | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Host applications to filter by. Empty array means all host applications.             |
| `tools`                                                                              | *string*[]                                                                           | :heavy_minus_sign:                                                                   | MCP tools to filter by. Empty array means all tools.                                 |
| `servers`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | MCP servers to filter by. Empty array means all servers.                             |