# AgentRun

Payload for creating a run.

## Example Usage

```typescript
import { AgentRun } from "@gleanwork/api-client/models/components";

let value: AgentRun = {
  agentId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `agentId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the agent to run.                                                        |
| `input`                                                                            | Record<string, *any*>                                                              | :heavy_minus_sign:                                                                 | The input to the agent.                                                            |
| `messages`                                                                         | [components.Message](../../models/components/message.md)[]                         | :heavy_minus_sign:                                                                 | The messages to pass an input to the agent.                                        |
| `metadata`                                                                         | Record<string, *any*>                                                              | :heavy_minus_sign:                                                                 | The metadata to pass to the agent.                                                 |
| `status`                                                                           | [components.AgentExecutionStatus](../../models/components/agentexecutionstatus.md) | :heavy_minus_sign:                                                                 | The status of the run. One of 'error', 'success'.                                  |