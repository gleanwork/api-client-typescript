# GetChatFilesResponse

## Example Usage

```typescript
import { GetChatFilesResponse } from "@gleanwork/api-client/models/components";

let value: GetChatFilesResponse = {
  files: {
    "key": {
      id: "FILE_1234",
      url: "www.google.com",
      name: "sample.pdf",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `files`                                                                    | Record<string, [components.ChatFile](../../models/components/chatfile.md)> | :heavy_minus_sign:                                                         | A map of file IDs to ChatFile structs.                                     |