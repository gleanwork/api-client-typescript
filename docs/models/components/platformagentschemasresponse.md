# PlatformAgentSchemasResponse

## Example Usage

```typescript
import { PlatformAgentSchemasResponse } from "@gleanwork/api-client/models/components";

let value: PlatformAgentSchemasResponse = {
  agentId: "<id>",
  inputSchema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  outputSchema: {
    "key": "<value>",
    "key1": "<value>",
  },
  requestId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `agentId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | ID of the agent.                                                                       |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the agent.                                                                     |
| `inputSchema`                                                                          | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | Agent input schema in JSON Schema format.                                              |
| `outputSchema`                                                                         | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | Agent output schema in JSON Schema format.                                             |
| `tools`                                                                                | [components.PlatformActionSummary](../../models/components/platformactionsummary.md)[] | :heavy_minus_sign:                                                                     | Tools that the agent can invoke, when requested.                                       |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Platform-generated request ID for support correlation.                                 |