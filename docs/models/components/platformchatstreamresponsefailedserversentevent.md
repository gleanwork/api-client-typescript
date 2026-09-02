# PlatformChatStreamResponseFailedServerSentEvent

## Example Usage

```typescript
import { PlatformChatStreamResponseFailedServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamResponseFailedServerSentEvent = {
  event: "RESPONSE_FAILED",
  data: {
    type: "RESPONSE_FAILED",
    response_id: "<id>",
    response: {
      id: "<id>",
      object: "RESPONSE",
      created_at: new Date("2026-04-24T20:42:24.861Z"),
      status: "FAILED",
      output: [
        {
          type: "MESSAGE",
          role: "ASSISTANT",
          content: [],
        },
      ],
      store: true,
      request_id: "<id>",
      error: {
        code: "spend_limit_exceeded",
        message: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `event`                                                                                                    | *"RESPONSE_FAILED"*                                                                                        | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.PlatformChatStreamResponseFailed](../../models/components/platformchatstreamresponsefailed.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |