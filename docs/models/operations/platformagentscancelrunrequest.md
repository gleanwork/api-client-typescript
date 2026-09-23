# PlatformAgentsCancelRunRequest

## Example Usage

```typescript
import { PlatformAgentsCancelRunRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAgentsCancelRunRequest = {
  agent_id: "{agent_id}",
  platformAgentRunCancellationRequest: {
    run_id: "{run_id}",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | ID of the agent that owns the run.                                                                               | {agent_id}                                                                                                       |
| `platformAgentRunCancellationRequest`                                                                            | [components.PlatformAgentRunCancellationRequest](../../models/components/platformagentruncancellationrequest.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              | {<br/>"run_id": "{run_id}"<br/>}                                                                                 |