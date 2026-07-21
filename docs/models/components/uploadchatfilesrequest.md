# UploadChatFilesRequest

## Example Usage

```typescript
import { UploadChatFilesRequest } from "@gleanwork/api-client/models/components";
import { openAsBlob } from "node:fs";

let value: UploadChatFilesRequest = {
  files: [
    await openAsBlob("example.file"),
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `files`                                                                                          | [components.UploadChatFilesRequestFile](../../models/components/uploadchatfilesrequestfile.md)[] | :heavy_check_mark:                                                                               | Raw files to be uploaded for chat in binary format.                                              |