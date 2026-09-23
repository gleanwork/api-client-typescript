# PlatformAgentsGetRunRequest

## Example Usage

```typescript
import { PlatformAgentsGetRunRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAgentsGetRunRequest = {
  agent_id: "{agent_id}",
  run_id: "{run_id}",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `agentId`                          | *string*                           | :heavy_check_mark:                 | ID of the agent that owns the run. | {agent_id}                         |
| `runId`                            | *string*                           | :heavy_check_mark:                 | ID of the durable run to retrieve. | {run_id}                           |