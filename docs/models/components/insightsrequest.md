# InsightsRequest

## Example Usage

```typescript
import { InsightsRequest } from "@gleanwork/api-client/models/components";

let value: InsightsRequest = {
  categories: [
    "CONTENT",
  ],
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `categories`                                                                                                              | [components.InsightsRequestCategory](../../models/components/insightsrequestcategory.md)[]                                | :heavy_check_mark:                                                                                                        | Categories of data requested. Request can include single or multiple types.                                               |
| `departments`                                                                                                             | *string*[]                                                                                                                | :heavy_minus_sign:                                                                                                        | Departments that the data is requested for. If this is empty, corresponds to whole company.                               |
| `dayRange`                                                                                                                | [components.Period](../../models/components/period.md)                                                                    | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `aiAppRequestOptions`                                                                                                     | [components.InsightsAiAppRequestOptions](../../models/components/insightsaiapprequestoptions.md)                          | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `agentsRequestOptions`                                                                                                    | [components.InsightsAgentsRequestOptions](../../models/components/insightsagentsrequestoptions.md)                        | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `assistantActivityTypes`                                                                                                  | [components.AssistantActivityType](../../models/components/assistantactivitytype.md)[]                                    | :heavy_minus_sign:                                                                                                        | Types of activity that should count in the definition of an Assistant Active User. Affects only insights for AI category. |
| `disablePerUserInsights`                                                                                                  | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | If true, suppresses the generation of per-user Insights in the response. Default is false.                                |