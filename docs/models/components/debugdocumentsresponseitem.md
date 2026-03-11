# DebugDocumentsResponseItem

Describes the response body of a single document in the /debug/{datasource}/documents API call

## Example Usage

```typescript
import { DebugDocumentsResponseItem } from "@gleanwork/api-client/models/components";

let value: DebugDocumentsResponseItem = {
  debugInfo: {
    status: {
      uploadStatus: "UPLOADED",
      lastUploadedAt: "2021-08-06T17:58:01.000Z",
      indexingStatus: "INDEXED",
      lastIndexedAt: "2021-08-06T17:58:01.000Z",
      permissionIdentityStatus: "UPLOADED",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `docId`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Id of the document                                                                   |
| `objectType`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | objectType of the document                                                           |
| `debugInfo`                                                                          | [components.DebugDocumentResponse](../../models/components/debugdocumentresponse.md) | :heavy_minus_sign:                                                                   | Describes the response body of the /debug/{datasource}/document API call             |