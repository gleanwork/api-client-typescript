# DebugDocumentsResponse

Describes the response body of a single document in the /debug/{datasource}/documents API call

## Example Usage

```typescript
import { DebugDocumentsResponse } from "@gleanwork/api-client/models/components";

let value: DebugDocumentsResponse = {
  documentStatuses: [
    {
      debugInfo: {
        status: {
          uploadStatus: "UPLOADED",
          lastUploadedAt: "2021-08-06T17:58:01.000Z",
          indexingStatus: "INDEXED",
          lastIndexedAt: "2021-08-06T17:58:01.000Z",
          permissionIdentityStatus: "UPLOADED",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `documentStatuses`                                                                               | [components.DebugDocumentsResponseItem](../../models/components/debugdocumentsresponseitem.md)[] | :heavy_minus_sign:                                                                               | List of document ids/urls and their debug information                                            |