# UploadChatFilesResponse

## Example Usage

```typescript
import { UploadChatFilesResponse } from "@gleanwork/api-client/models/components";

let value: UploadChatFilesResponse = {
  files: [
    {
      id: "FILE_1234",
      url: "www.google.com",
      name: "sample.pdf",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `files`                                                      | [components.ChatFile](../../models/components/chatfile.md)[] | :heavy_minus_sign:                                           | Files uploaded for chat.                                     |