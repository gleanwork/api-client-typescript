# PlatformChatUpdateRequest

The fields to update on a chat.

## Example Usage

```typescript
import { PlatformChatUpdateRequest } from "@gleanwork/api-client/models/components";

let value: PlatformChatUpdateRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The new name for the chat. Names longer than 80 Unicode code points are truncated to 80 before storage.<br/> |