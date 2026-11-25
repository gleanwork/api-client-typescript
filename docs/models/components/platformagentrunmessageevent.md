# PlatformAgentRunMessageEvent

A `message` event that carries agent output.

## Example Usage

```typescript
import { PlatformAgentRunMessageEvent } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunMessageEvent = {
  id: "1",
  event: "message",
  data: {
    messages: [
      {
        role: "GLEAN_AI",
        content: [
          {
            text: "Hello",
            type: "text",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Event ID. IDs increase by one across the stream.                                                           |
| `event`                                                                                                    | *"message"*                                                                                                | :heavy_check_mark:                                                                                         | SSE event name. Always `message` for this event.                                                           |
| `data`                                                                                                     | [components.PlatformAgentRunMessageEventData](../../models/components/platformagentrunmessageeventdata.md) | :heavy_check_mark:                                                                                         | Payload for the Agents SSE event `message`.                                                                |