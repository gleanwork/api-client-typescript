# AgentCapabilities

Describes features that the agent supports. example: {
  "ap.io.messages": true,
  "ap.io.streaming": true
}

## Example Usage

```typescript
import { AgentCapabilities } from "@gleanwork/api-client/models/components";

let value: AgentCapabilities = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `apIoMessages`                                                                                                                | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether the agent supports messages as an input. If true, you'll pass `messages` as an input when running the agent.          |
| `apIoStreaming`                                                                                                               | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether the agent supports streaming output. If true, you you can stream agent ouput. All agents currently support streaming. |
| `additionalProperties`                                                                                                        | Record<string, *any*>                                                                                                         | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |