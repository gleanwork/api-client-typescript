# UploadShortcutsRequest

Describes the request body of the /uploadshortcuts API call

## Example Usage

```typescript
import { UploadShortcutsRequest } from "@gleanwork/api-client/models/components";

let value: UploadShortcutsRequest = {
  uploadId: "<id>",
  shortcuts: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `uploadId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Unique id that must be used for this bulk upload instance                                                |
| `isFirstPage`                                                                                            | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | true if this is the first page of the upload. Defaults to false                                          |
| `isLastPage`                                                                                             | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | true if this is the last page of the upload. Defaults to false                                           |
| `forceRestartUpload`                                                                                     | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Flag to discard previous upload attempts and start from scratch. Must be specified with isFirstPage=true |
| `shortcuts`                                                                                              | [components.IndexingShortcut](../../models/components/indexingshortcut.md)[]                             | :heavy_check_mark:                                                                                       | Batch of shortcuts information                                                                           |