# McpUserBreakdown

## Example Usage

```typescript
import { McpUserBreakdown } from "@gleanwork/api-client/models/components";

let value: McpUserBreakdown = {
  person: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `person`                                                                  | [components.Person](../../models/components/person.md)                    | :heavy_minus_sign:                                                        | N/A                                                                       | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}        |
| `totalCalls`                                                              | *number*                                                                  | :heavy_minus_sign:                                                        | Total number of MCP calls made by this user in the specified time period. |                                                                           |
| `hostApplications`                                                        | *string*[]                                                                | :heavy_minus_sign:                                                        | Host applications used by this user in the specified time period.         |                                                                           |
| `tools`                                                                   | *string*[]                                                                | :heavy_minus_sign:                                                        | MCP tools used by this user in the specified time period.                 |                                                                           |
| `servers`                                                                 | *string*[]                                                                | :heavy_minus_sign:                                                        | MCP servers used by this user in the specified time period.               |                                                                           |