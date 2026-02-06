# AgentRunCreate

Payload for creating a run. **Important**: If the agent uses an input form trigger, the `input` field is required and must include all fields defined in the form schema. Even fields marked as optional in the UI must be included in the request—use an empty string (`""`) for optional fields without values. Omitting required form fields will result in a 500 error.

## Example Usage

```typescript
import { AgentRunCreate } from "@gleanwork/api-client/models/components";

let value: AgentRunCreate = {
  agentId: "<id>",
  messages: [
    {
      role: "USER",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `agentId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | The ID of the agent to run.                                                 |
| `input`                                                                     | Record<string, *any*>                                                       | :heavy_minus_sign:                                                          | The input to the agent. Required when the agent uses an input form trigger. |
| `messages`                                                                  | [components.Message](../../models/components/message.md)[]                  | :heavy_minus_sign:                                                          | The messages to pass an input to the agent.                                 |
| `metadata`                                                                  | Record<string, *any*>                                                       | :heavy_minus_sign:                                                          | The metadata to pass to the agent.                                          |