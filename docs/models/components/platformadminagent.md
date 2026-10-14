# PlatformAdminAgent

An agent in the workspace.

## Example Usage

```typescript
import { PlatformAdminAgent } from "@gleanwork/api-client/models/components";

let value: PlatformAdminAgent = {
  agent_id: "<id>",
  display_name: "Lenny_Jones9",
  is_active: false,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `agentId`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | Opaque agent ID. Other Platform APIs, such as usage limits, accept and return this ID.<br/> |
| `displayName`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | The name that Glean shows for the agent.                                                |
| `isActive`                                                                              | *boolean*                                                                               | :heavy_check_mark:                                                                      | Whether the agent is active. A deleted agent is inactive.                               |