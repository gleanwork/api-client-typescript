# InsightsOverviewRequest

## Example Usage

```typescript
import { InsightsOverviewRequest } from "@gleanwork/api-client/models/components";

let value: InsightsOverviewRequest = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `departments`                                                                      | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Departments for which Insights are requested.                                      |
| `managerEmails`                                                                    | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Manager emails whose teams should be filtered for. Empty array means no filtering. |
| `dayRange`                                                                         | [components.Period](../../models/components/period.md)                             | :heavy_minus_sign:                                                                 | N/A                                                                                |