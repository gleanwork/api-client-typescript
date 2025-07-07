# AgentRunWaitResponse

## Example Usage

```typescript
import { AgentRunWaitResponse } from "@gleanwork/api-client/models/components";

let value: AgentRunWaitResponse = {
  run: {
    agentId: "<id>",
    messages: [
      {
        role: "USER",
      },
    ],
  },
  messages: [
    {
      role: "USER",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `run`                                                      | [components.AgentRun](../../models/components/agentrun.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `messages`                                                 | [components.Message](../../models/components/message.md)[] | :heavy_minus_sign:                                         | The messages returned by the run.                          |