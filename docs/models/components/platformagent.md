# PlatformAgent

## Example Usage

```typescript
import { PlatformAgent } from "@gleanwork/api-client/models/components";

let value: PlatformAgent = {
  agent_id: "mho4lwzylcozgoc2",
  name: "HR Policy Agent",
  capabilities: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `agentId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the agent.                                                                             | mho4lwzylcozgoc2                                                                             |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Name of the agent.                                                                           | HR Policy Agent                                                                              |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Description of the agent.                                                                    |                                                                                              |
| `metadata`                                                                                   | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Agent metadata.                                                                              |                                                                                              |
| `capabilities`                                                                               | [components.PlatformAgentCapabilities](../../models/components/platformagentcapabilities.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |