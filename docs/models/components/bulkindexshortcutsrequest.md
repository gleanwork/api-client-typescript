# BulkIndexShortcutsRequest

Describes the request body of the /bulkindexshortcuts API call

## Example Usage

```typescript
import { BulkIndexShortcutsRequest } from "@gleanwork/api-client/models/components";

let value: BulkIndexShortcutsRequest = {
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
| `shortcuts`                                                                                              | [components.ExternalShortcut](../../models/components/externalshortcut.md)[]                             | :heavy_check_mark:                                                                                       | Batch of shortcuts information                                                                           |