# AgentSchemas

Defines the structure and properties of an agent.

## Example Usage

```typescript
import { AgentSchemas } from "@gleanwork/api-client/models/components";

let value: AgentSchemas = {
  agentId: "mho4lwzylcozgoc2",
  name: "HR Policy Agent",
  inputSchema: {},
  outputSchema: {},
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The ID of the agent.                                                                                      | mho4lwzylcozgoc2                                                                                          |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The name of the agent.                                                                                    | HR Policy Agent                                                                                           |
| `inputSchema`                                                                                             | [components.InputSchema](../../models/components/inputschema.md)                                          | :heavy_check_mark:                                                                                        | The schema for the agent input. In JSON Schema format.                                                    |                                                                                                           |
| `outputSchema`                                                                                            | [components.OutputSchema](../../models/components/outputschema.md)                                        | :heavy_check_mark:                                                                                        | The schema for the agent output. In JSON Schema format.                                                   |                                                                                                           |
| `tools`                                                                                                   | [components.ActionSummary](../../models/components/actionsummary.md)[]                                    | :heavy_minus_sign:                                                                                        | List of tools that the agent can invoke. Only included when include_tools query parameter is set to true. |                                                                                                           |