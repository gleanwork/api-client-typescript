# PlatformChatUpdateResponse

The updated chat and request metadata.

## Example Usage

```typescript
import { PlatformChatUpdateResponse } from "@gleanwork/api-client/models/components";

let value: PlatformChatUpdateResponse = {
  chat: {
    chat_id: "<id>",
    name: "<value>",
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `chat`                                                             | [components.PlatformChat](../../models/components/platformchat.md) | :heavy_check_mark:                                                 | A chat resource.                                                   |
| `requestId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | An identifier for this request.                                    |