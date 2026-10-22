# PlatformChatUpdateRequest

## Example Usage

```typescript
import { PlatformChatUpdateRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformChatUpdateRequest = {
  chat_id: "{chat_id}",
  platformChatUpdateRequest: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `chatId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the chat to update.                                                                | {chat_id}                                                                                    |
| `platformChatUpdateRequest`                                                                  | [components.PlatformChatUpdateRequest](../../models/components/platformchatupdaterequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |