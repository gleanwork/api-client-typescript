# GetChatFilesRequest

## Example Usage

```typescript
import { GetChatFilesRequest } from "@gleanwork/api-client/models/components";

let value: GetChatFilesRequest = {
  fileIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `fileIds`                                       | *string*[]                                      | :heavy_check_mark:                              | IDs of files to fetch.                          |
| `chatId`                                        | *string*                                        | :heavy_minus_sign:                              | The ID of the chat that contains the chat file. |