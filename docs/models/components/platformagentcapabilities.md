# PlatformAgentCapabilities

## Example Usage

```typescript
import { PlatformAgentCapabilities } from "@gleanwork/api-client/models/components";

let value: PlatformAgentCapabilities = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `apIoMessages`                                | *boolean*                                     | :heavy_minus_sign:                            | Whether the agent supports messages as input. |
| `apIoStreaming`                               | *boolean*                                     | :heavy_minus_sign:                            | Whether the agent supports streaming output.  |
| `additionalProperties`                        | Record<string, *any*>                         | :heavy_minus_sign:                            | N/A                                           |