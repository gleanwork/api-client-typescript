# PlatformChat

A chat resource.

## Example Usage

```typescript
import { PlatformChat } from "@gleanwork/api-client/models/components";

let value: PlatformChat = {
  chat_id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `chatId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the chat.                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The stored name of the chat. Names longer than 80 Unicode code points are truncated to 80 before storage.<br/> |