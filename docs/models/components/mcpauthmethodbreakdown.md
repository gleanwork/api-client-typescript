# McpAuthMethodBreakdown

## Example Usage

```typescript
import { McpAuthMethodBreakdown } from "@gleanwork/api-client/models/components";

let value: McpAuthMethodBreakdown = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `authMethod`                                                                                                         | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Authentication method the MCP client presented, for example OAUTH_GLEAN, OAUTH_XAA (Cross App Access), or API_TOKEN. |
| `totalCalls`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Total number of MCP calls for this authentication method in the specified time period.                               |
| `activeUsers`                                                                                                        | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Total number of active users for this authentication method in the specified time period.                            |
| `hostApplications`                                                                                                   | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | Host applications using this authentication method in the specified time period.                                     |