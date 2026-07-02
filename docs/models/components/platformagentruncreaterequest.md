# PlatformAgentRunCreateRequest

Request to run an agent. A request MUST supply either `messages` (a non-empty conversation) or `input` (for input-form triggered agents).


## Example Usage

```typescript
import { PlatformAgentRunCreateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunCreateRequest = {
  messages: [
    {
      role: "USER",
      content: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                                                          | Record<string, *any*>                                                                                                                                            | :heavy_minus_sign:                                                                                                                                               | Input fields for an input-form triggered agent.                                                                                                                  |
| `messages`                                                                                                                                                       | [components.PlatformMessage](../../models/components/platformmessage.md)[]                                                                                       | :heavy_minus_sign:                                                                                                                                               | Messages to pass to the agent. When provided, the array MUST contain at least one message and each message MUST specify a valid `role` and non-empty `content`.<br/> |
| `metadata`                                                                                                                                                       | Record<string, *any*>                                                                                                                                            | :heavy_minus_sign:                                                                                                                                               | Metadata to pass to the agent.                                                                                                                                   |
| `stream`                                                                                                                                                         | *boolean*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Whether to stream the run response as server-sent events.                                                                                                        |