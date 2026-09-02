# PlatformChatStreamResponseCreatedServerSentEvent

## Example Usage

```typescript
import { PlatformChatStreamResponseCreatedServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamResponseCreatedServerSentEvent = {
  event: "RESPONSE_CREATED",
  data: {
    type: "RESPONSE_CREATED",
    response_id: "<id>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `event`                                                                                                      | *"RESPONSE_CREATED"*                                                                                         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PlatformChatStreamResponseCreated](../../models/components/platformchatstreamresponsecreated.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |