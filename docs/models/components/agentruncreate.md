# AgentRunCreate

Payload for creating a run.

## Example Usage

```typescript
import { AgentRunCreate } from "@gleanwork/api-client/models/components";

let value: AgentRunCreate = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `agentId`                                                  | *string*                                                   | :heavy_minus_sign:                                         | The ID of the agent to run.                                |
| `input`                                                    | Record<string, *any*>                                      | :heavy_minus_sign:                                         | The input to the agent.                                    |
| `messages`                                                 | [components.Message](../../models/components/message.md)[] | :heavy_minus_sign:                                         | The messages to pass an input to the agent.                |