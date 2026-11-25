# PlatformAgentsCreateRunStreamRequest

## Example Usage

```typescript
import { PlatformAgentsCreateRunStreamRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformAgentsCreateRunStreamRequest = {
  agent_id: "{agent_id}",
  requestBody: {
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ID of the agent to run.                                                                                                    | {agent_id}                                                                                                                 |
| `requestBody`                                                                                                              | [operations.PlatformAgentsCreateRunStreamRequestBody](../../models/operations/platformagentscreaterunstreamrequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | {<br/>"messages": [<br/>{<br/>"role": "USER",<br/>"content": [<br/>{<br/>"text": "What is our parental leave policy?",<br/>"type": "text"<br/>}<br/>]<br/>}<br/>]<br/>} |