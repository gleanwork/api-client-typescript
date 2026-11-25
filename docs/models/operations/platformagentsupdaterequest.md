# PlatformAgentsUpdateRequest

## Example Usage

```typescript
import { PlatformAgentsUpdateRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAgentsUpdateRequest = {
  agent_id: "{agent_id}",
  platformAgentUpdateRequest: {
    instructions: "Answer questions using the latest HR policies.",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `agentId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the agent to update.                                                                 | {agent_id}                                                                                     |
| `platformAgentUpdateRequest`                                                                   | [components.PlatformAgentUpdateRequest](../../models/components/platformagentupdaterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            | {<br/>"instructions": "Answer questions using the latest HR policies."<br/>}                   |