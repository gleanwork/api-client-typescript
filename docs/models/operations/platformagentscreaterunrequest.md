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
        content: [
          {
            text: "What is our parental leave policy?",
            type: "text",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | ID of the agent to run.                                                                                                 |                                                                                                                         |
| `platformAgentRunCreateRequest`                                                                                         | [components.PlatformAgentRunCreateRequest](../../models/components/platformagentruncreaterequest.md)                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | {<br/>"messages": [<br/>{<br/>"role": "USER",<br/>"content": [<br/>{<br/>"text": "What is our parental leave policy?",<br/>"type": "text"<br/>}<br/>]<br/>}<br/>]<br/>} |