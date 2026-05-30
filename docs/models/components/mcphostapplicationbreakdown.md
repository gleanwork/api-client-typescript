# McpHostApplicationBreakdown

## Example Usage

```typescript
import { McpHostApplicationBreakdown } from "@gleanwork/api-client/models/components";

let value: McpHostApplicationBreakdown = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `hostApplication`                                                                       | *string*                                                                                | :heavy_minus_sign:                                                                      | Host application name.                                                                  |
| `totalCalls`                                                                            | *number*                                                                                | :heavy_minus_sign:                                                                      | Total number of MCP calls made from this host application in the specified time period. |
| `activeUsers`                                                                           | *number*                                                                                | :heavy_minus_sign:                                                                      | Total number of active users from this host application in the specified time period.   |