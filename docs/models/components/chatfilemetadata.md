# ChatFileMetadata

Metadata of a file uploaded by a user for Chat.

## Example Usage

```typescript
import { ChatFileMetadata } from "@gleanwork/api-client/models/components";

let value: ChatFileMetadata = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `status`                                                                             | [components.ChatFileStatus](../../models/components/chatfilestatus.md)               | :heavy_minus_sign:                                                                   | Current status of the file.                                                          |
| `uploadTime`                                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | Upload time, in epoch seconds.                                                       |
| `processedSize`                                                                      | *number*                                                                             | :heavy_minus_sign:                                                                   | Size of the processed file in bytes.                                                 |
| `failureReason`                                                                      | [components.ChatFileFailureReason](../../models/components/chatfilefailurereason.md) | :heavy_minus_sign:                                                                   | Reason for failed status.                                                            |
| `mimeType`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | MIME type of the file.                                                               |