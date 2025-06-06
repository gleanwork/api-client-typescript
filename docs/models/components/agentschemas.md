# AgentSchemas

Defines the structure and properties of an agent.

## Example Usage

```typescript
import { AgentSchemas } from "@gleanwork/api-client/models/components";

let value: AgentSchemas = {
  agentId: "mho4lwzylcozgoc2",
  inputSchema: {},
  outputSchema: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `agentId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | The ID of the agent.                                               | mho4lwzylcozgoc2                                                   |
| `inputSchema`                                                      | [components.InputSchema](../../models/components/inputschema.md)   | :heavy_check_mark:                                                 | The schema for the agent input. In JSON Schema format.             |                                                                    |
| `outputSchema`                                                     | [components.OutputSchema](../../models/components/outputschema.md) | :heavy_check_mark:                                                 | The schema for the agent output. In JSON Schema format.            |                                                                    |