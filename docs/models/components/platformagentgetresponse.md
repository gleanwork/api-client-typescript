# PlatformAgentGetResponse

## Example Usage

```typescript
import { PlatformAgentGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformAgentGetResponse = {
  agent: {
    name: "HR Policy Agent",
    agent_id: "ef33aecf52c142a6873adf76037b642e",
    capabilities: {},
    subagents: [
      {
        name: "HR Policy Agent",
      },
    ],
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `agent`                                                              | [components.PlatformAgent](../../models/components/platformagent.md) | :heavy_check_mark:                                                   | An agent available to the authenticated user.                        |
| `requestId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Platform-generated request ID for support correlation.               |