# PlatformAgentDependency

A published artifact the agent references by platform ID.

## Example Usage

```typescript
import { PlatformAgentDependency } from "@gleanwork/api-client/models/components";

let value: PlatformAgentDependency = {
  id: "<id>",
  type: "AGENT",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | ID of the referenced artifact: the `skill_id` of a published skill when `type` is SKILL, or the `agent_id` of a published agent when `type` is AGENT.<br/> |
| `type`                                                                                                                                                 | [components.PlatformAgentDependencyType](../../models/components/platformagentdependencytype.md)                                                       | :heavy_check_mark:                                                                                                                                     | Type of a published artifact referenced as a dependency.                                                                                               |