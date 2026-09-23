# PlatformAgentRunToolApproval

Pending approval for a specific persisted tool invocation and its arguments.

## Example Usage

```typescript
import { PlatformAgentRunToolApproval } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunToolApproval = {
  interaction_id: "<id>",
  type: "TOOL_APPROVAL",
  display_name: "Kadin25",
  description: "fowl jovially publication in beneath duh openly until",
  arguments: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `interactionId`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Identifies this specific invocation approval, not the tool definition.                                     |
| `type`                                                                                                     | [components.PlatformAgentRunToolApprovalType](../../models/components/platformagentruntoolapprovaltype.md) | :heavy_check_mark:                                                                                         | Interaction type identifying a tool execution approval request.                                            |
| `toolId`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Platform tool identifier when recorded. Omitted for requests without one, such as some MCP tools.          |
| `displayName`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Display name of the tool requesting approval.                                                              |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Description of the tool associated with this approval request.                                             |
| `arguments`                                                                                                | Record<string, *any*>                                                                                      | :heavy_check_mark:                                                                                         | Arguments from the persisted approval request. Older platform tools use flattened parameters.              |
| `expiresAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | Approval deadline, when one is set. Omitted when the approval has no expiration.                           |