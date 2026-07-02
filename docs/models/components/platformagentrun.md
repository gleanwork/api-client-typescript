# PlatformAgentRun

## Example Usage

```typescript
import { PlatformAgentRun } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRun = {
  agentId: "<id>",
  messages: [
    {
      role: "USER",
      content: [],
    },
  ],
  status: "success",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the agent being run.                                                                         |
| `input`                                                                                            | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | Input fields for an input-form triggered agent.                                                    |
| `messages`                                                                                         | [components.PlatformMessage](../../models/components/platformmessage.md)[]                         | :heavy_minus_sign:                                                                                 | Messages passed to the agent.                                                                      |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | Metadata passed to the agent.                                                                      |
| `status`                                                                                           | [components.PlatformAgentExecutionStatus](../../models/components/platformagentexecutionstatus.md) | :heavy_check_mark:                                                                                 | Status of the agent run.                                                                           |