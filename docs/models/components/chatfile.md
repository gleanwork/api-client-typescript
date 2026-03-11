# ChatFile

Structure for file uploaded by a user for Chat.

## Example Usage

```typescript
import { ChatFile } from "@gleanwork/api-client/models/components";

let value: ChatFile = {
  id: "FILE_1234",
  url: "www.google.com",
  name: "sample.pdf",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier of the file.                                             | FILE_1234                                                                  |
| `url`                                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | Url of the file.                                                           | www.google.com                                                             |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Name of the uploaded file.                                                 | sample.pdf                                                                 |
| `metadata`                                                                 | [components.ChatFileMetadata](../../models/components/chatfilemetadata.md) | :heavy_minus_sign:                                                         | Metadata of a file uploaded by a user for Chat.                            |                                                                            |