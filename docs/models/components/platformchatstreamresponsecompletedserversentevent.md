# PlatformChatStreamResponseCompletedServerSentEvent

## Example Usage

```typescript
import { PlatformChatStreamResponseCompletedServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamResponseCompletedServerSentEvent = {
  event: "RESPONSE_COMPLETED",
  data: {
    type: "RESPONSE_COMPLETED",
    response_id: "<id>",
    response: {
      id: "<id>",
      object: "RESPONSE",
      created_at: new Date("2025-07-01T11:34:16.989Z"),
      status: "COMPLETED",
      output: [],
      store: true,
      request_id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `event`                                                                                                          | *"RESPONSE_COMPLETED"*                                                                                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `data`                                                                                                           | [components.PlatformChatStreamResponseCompleted](../../models/components/platformchatstreamresponsecompleted.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |