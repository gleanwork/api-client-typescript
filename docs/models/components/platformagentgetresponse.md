# PlatformAgentGetResponse

## Example Usage

```typescript
import { PlatformAgentGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformAgentGetResponse = {
  agent: {
    agent_id: "mho4lwzylcozgoc2",
    name: "HR Policy Agent",
    capabilities: {},
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `agent`                                                              | [components.PlatformAgent](../../models/components/platformagent.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `requestId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Platform-generated request ID for support correlation.               |