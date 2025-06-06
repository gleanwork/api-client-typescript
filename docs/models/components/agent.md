# Agent

## Example Usage

```typescript
import { Agent } from "@gleanwork/api-client/models/components";

let value: Agent = {
  agentId: "mho4lwzylcozgoc2",
  name: "HR Policy Agent",
  description:
    "This agent answers questions about the current company HR policies.",
  capabilities: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the agent.                                                                                         | mho4lwzylcozgoc2                                                                                             |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the agent                                                                                        | HR Policy Agent                                                                                              |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The description of the agent.                                                                                | This agent answers questions about the current company HR policies.                                          |
| `metadata`                                                                                                   | [components.AgentMetadata](../../models/components/agentmetadata.md)                                         | :heavy_minus_sign:                                                                                           | The agent metadata. Currently not implemented.                                                               |                                                                                                              |
| `capabilities`                                                                                               | [components.AgentCapabilities](../../models/components/agentcapabilities.md)                                 | :heavy_check_mark:                                                                                           | Describes features that the agent supports. example: {<br/>  "ap.io.messages": true,<br/>  "ap.io.streaming": true<br/>} |                                                                                                              |