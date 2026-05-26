# McpServerBreakdown

## Example Usage

```typescript
import { McpServerBreakdown } from "@gleanwork/api-client/models/components";

let value: McpServerBreakdown = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `server`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | MCP server name.                                                           |
| `totalCalls`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Total number of MCP calls for this server in the specified time period.    |
| `activeUsers`                                                              | *number*                                                                   | :heavy_minus_sign:                                                         | Total number of active users for this server in the specified time period. |
| `hostApplications`                                                         | *string*[]                                                                 | :heavy_minus_sign:                                                         | Host applications using this server in the specified time period.          |