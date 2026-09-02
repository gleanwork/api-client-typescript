# PlatformChatStreamOutputTextDoneServerSentEvent

## Example Usage

```typescript
import { PlatformChatStreamOutputTextDoneServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamOutputTextDoneServerSentEvent = {
  event: "RESPONSE_OUTPUT_TEXT_DONE",
  data: {
    type: "RESPONSE_OUTPUT_TEXT_DONE",
    response_id: "<id>",
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `event`                                                                                                    | *"RESPONSE_OUTPUT_TEXT_DONE"*                                                                              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.PlatformChatStreamOutputTextDone](../../models/components/platformchatstreamoutputtextdone.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |