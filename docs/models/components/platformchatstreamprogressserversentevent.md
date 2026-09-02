# PlatformChatStreamProgressServerSentEvent

## Example Usage

```typescript
import { PlatformChatStreamProgressServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamProgressServerSentEvent = {
  event: "RESPONSE_PROGRESS",
  data: {
    type: "RESPONSE_PROGRESS",
    response_id: "<id>",
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `event`                                                                                        | *"RESPONSE_PROGRESS"*                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [components.PlatformChatStreamProgress](../../models/components/platformchatstreamprogress.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |