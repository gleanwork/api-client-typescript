# DeletechatfilesRequest

## Example Usage

```typescript
import { DeletechatfilesRequest } from "@gleanwork/api-client/models/operations";

let value: DeletechatfilesRequest = {
  deleteChatFilesRequest: {
    fileIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `deleteChatFilesRequest`                                                                                   | [components.DeleteChatFilesRequest](../../models/components/deletechatfilesrequest.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |