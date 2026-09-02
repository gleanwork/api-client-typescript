# PlatformChatStreamOutputTextDeltaServerSentEvent

## Example Usage

```typescript
import { PlatformChatStreamOutputTextDeltaServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamOutputTextDeltaServerSentEvent = {
  event: "RESPONSE_OUTPUT_TEXT_DELTA",
  data: {
    type: "RESPONSE_OUTPUT_TEXT_DELTA",
    response_id: "<id>",
    delta: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `event`                                                                                                      | *"RESPONSE_OUTPUT_TEXT_DELTA"*                                                                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PlatformChatStreamOutputTextDelta](../../models/components/platformchatstreamoutputtextdelta.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |