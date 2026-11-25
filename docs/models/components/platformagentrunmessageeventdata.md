# PlatformAgentRunMessageEventData

Payload for the Agents SSE event `message`.

## Example Usage

```typescript
import { PlatformAgentRunMessageEventData } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunMessageEventData = {
  messages: [
    {
      role: "USER",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `messages`                                                                                             | [components.PlatformAgentRunStreamMessage](../../models/components/platformagentrunstreammessage.md)[] | :heavy_check_mark:                                                                                     | Messages emitted by the running agent in this event.                                                   |