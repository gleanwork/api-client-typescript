# PlatformAgentsCreateRunResponsesRequest

## Example Usage

```typescript
import { PlatformAgentsCreateRunResponsesRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAgentsCreateRunResponsesRequest = {
  agent_id: "{agent_id}",
  platformAgentRunResponsesRequest: {
    run_id: "{run_id}",
    responses: [
      {
        interaction_id: "{interaction_id}",
        decision: "APPROVE",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | ID of the agent that owns the run.                                                                         | {agent_id}                                                                                                 |
| `platformAgentRunResponsesRequest`                                                                         | [components.PlatformAgentRunResponsesRequest](../../models/components/platformagentrunresponsesrequest.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        | {<br/>"run_id": "{run_id}",<br/>"responses": [<br/>{<br/>"interaction_id": "{interaction_id}",<br/>"decision": "APPROVE"<br/>}<br/>]<br/>} |