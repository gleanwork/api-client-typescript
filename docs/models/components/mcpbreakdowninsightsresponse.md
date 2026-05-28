# McpBreakdownInsightsResponse

## Example Usage

```typescript
import { McpBreakdownInsightsResponse } from "@gleanwork/api-client/models/components";

let value: McpBreakdownInsightsResponse = {
  usersBreakdown: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `usersBreakdown`                                                                                   | [components.McpUserBreakdown](../../models/components/mcpuserbreakdown.md)[]                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `hostApplicationsBreakdown`                                                                        | [components.McpHostApplicationBreakdown](../../models/components/mcphostapplicationbreakdown.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `toolsBreakdown`                                                                                   | [components.McpToolBreakdown](../../models/components/mcptoolbreakdown.md)[]                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `serversBreakdown`                                                                                 | [components.McpServerBreakdown](../../models/components/mcpserverbreakdown.md)[]                   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |