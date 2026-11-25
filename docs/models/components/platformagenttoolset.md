# PlatformAgentToolset

A tool provider and the subset of its tools available to the agent.

## Example Usage

```typescript
import { PlatformAgentToolset } from "@gleanwork/api-client/models/components";

let value: PlatformAgentToolset = {
  tool_provider_id: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `toolProviderId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the tool provider, or `native` for built-in Glean tools.                                 |
| `selectedTools`                                                                                | [components.PlatformAgentSelectedTool](../../models/components/platformagentselectedtool.md)[] | :heavy_minus_sign:                                                                             | Tools from the provider that are exposed to the agent.                                         |
| `customisationData`                                                                            | [components.CustomisationData](../../models/components/customisationdata.md)                   | :heavy_minus_sign:                                                                             | Settings applied to every tool in this provider entry.                                         |