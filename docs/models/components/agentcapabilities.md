# AgentCapabilities

Describes which protocol features the agent supports. In addition to the standard capabilities (prefixed with ap.), implementations can declare custom capabilities, named in reverse domain notation (eg. com.example.some.capability).

## Example Usage

```typescript
import { AgentCapabilities } from "@gleanwork/api-client/models/components";

let value: AgentCapabilities = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `apIoMessages`                                                                                                                   | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Whether the agent supports Messages as input/output/state. If true, the agent uses the `messages` key in threads/runs endpoints. |
| `apIoStreaming`                                                                                                                  | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Whether the agent supports streaming output.                                                                                     |
| `additionalProperties`                                                                                                           | Record<string, *any*>                                                                                                            | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |