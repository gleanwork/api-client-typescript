# PlatformAgentRunWaitResponse

## Example Usage

```typescript
import { PlatformAgentRunWaitResponse } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunWaitResponse = {
  run: {
    agent_id: "<id>",
    messages: [
      {
        role: "USER",
        content: [],
      },
    ],
    status: "success",
  },
  messages: [
    {
      role: "USER",
      content: [],
    },
  ],
  request_id: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `run`                                                                      | [components.PlatformAgentRun](../../models/components/platformagentrun.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `messages`                                                                 | [components.PlatformMessage](../../models/components/platformmessage.md)[] | :heavy_minus_sign:                                                         | Messages returned by the completed run.                                    |
| `requestId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Platform-generated request ID for support correlation.                     |