# GetChatFileRequest

## Example Usage

```typescript
import { GetChatFileRequest } from "@gleanwork/api-client/models/operations";

let value: GetChatFileRequest = {
  fileId: "<id>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `fileId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Identifier of the chat file to download.                                                                                   |
| `preview`                                                                                                                  | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | When true and the file is a PDF, the response is served inline (Content-Disposition: inline) instead of as an attachment.<br/> |