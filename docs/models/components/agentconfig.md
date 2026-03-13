# AgentConfig

Describes the agent that executes the request.

## Example Usage

```typescript
import { AgentConfig } from "@gleanwork/api-client/models/components";

let value: AgentConfig = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `agent`                                                                                               | [components.AgentEnum](../../models/components/agentenum.md)                                          | :heavy_minus_sign:                                                                                    | Name of the agent.                                                                                    |
| `toolSets`                                                                                            | [components.ToolSets](../../models/components/toolsets.md)                                            | :heavy_minus_sign:                                                                                    | The types of tools that the agent is allowed to use. Only works with FAST and ADVANCED `agent` values |
| `mode`                                                                                                | [components.Mode](../../models/components/mode.md)                                                    | :heavy_minus_sign:                                                                                    | Top level modes to run GleanChat in.                                                                  |
| `useImageGeneration`                                                                                  | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Whether the agent should create an image.                                                             |