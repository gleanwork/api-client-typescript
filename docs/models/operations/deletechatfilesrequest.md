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

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `timezoneOffset`                                                                                                                                                                                    | *number*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC.                                                                                          |
| `deleteChatFilesRequest`                                                                                                                                                                            | [components.DeleteChatFilesRequest](../../models/components/deletechatfilesrequest.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |