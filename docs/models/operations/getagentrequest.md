# GetAgentRequest

## Example Usage

```typescript
import { GetAgentRequest } from "@gleanwork/api-client/models/operations";

let value: GetAgentRequest = {
  agentId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `agentId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the agent.                                                                                       |