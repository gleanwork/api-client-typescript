# McpInsightsRequest

## Example Usage

```typescript
import { McpInsightsRequest } from "@gleanwork/api-client/models/components";

let value: McpInsightsRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `departments`                                                                        | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Departments for which Insights are requested.                                        |
| `managerIds`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Manager user IDs whose teams should be filtered for. Empty array means no filtering. |
| `managerEmails`                                                                      | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Manager emails whose teams should be filtered for. Empty array means no filtering.   |
| `dayRange`                                                                           | [components.Period](../../models/components/period.md)                               | :heavy_minus_sign:                                                                   | N/A                                                                                  |