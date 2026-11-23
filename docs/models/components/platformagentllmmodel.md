# PlatformAgentLlmModel

Agentic model the agent runs on and its reasoning effort.

## Example Usage

```typescript
import { PlatformAgentLlmModel } from "@gleanwork/api-client/models/components";

let value: PlatformAgentLlmModel = {};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelSetId`                                                                                                                                          | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | Agentic model set ID. When omitted, the tenant default is used.                                                                                       |
| `mode`                                                                                                                                                | [components.PlatformAgentLlmModelMode](../../models/components/platformagentllmmodelmode.md)                                                          | :heavy_minus_sign:                                                                                                                                    | Reasoning effort per turn. Defaults to ADVANCED.                                                                                                      |
| `autoUpgrade`                                                                                                                                         | *boolean*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                    | Whether the agent follows model upgrades. When omitted, a model with a `model_set_id` is pinned, and a model without one follows the tenant default.<br/> |