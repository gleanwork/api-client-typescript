# PlatformAgentsCreateRunRequest

## Example Usage

```typescript
import { PlatformAgentsCreateRunRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAgentsCreateRunRequest = {
  agent_id: "<id>",
  platformAgentRunCreateRequest: {
    messages: [
      {
        role: "USER",
        content: [],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the agent to run.                                                                              |
| `platformAgentRunCreateRequest`                                                                      | [components.PlatformAgentRunCreateRequest](../../models/components/platformagentruncreaterequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |