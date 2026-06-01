# McpToolBreakdown

## Example Usage

```typescript
import { McpToolBreakdown } from "@gleanwork/api-client/models/components";

let value: McpToolBreakdown = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `tool`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | MCP tool name.                                                           |
| `totalCalls`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | Total number of MCP calls for this tool in the specified time period.    |
| `activeUsers`                                                            | *number*                                                                 | :heavy_minus_sign:                                                       | Total number of active users for this tool in the specified time period. |
| `hostApplications`                                                       | *string*[]                                                               | :heavy_minus_sign:                                                       | Host applications using this tool in the specified time period.          |