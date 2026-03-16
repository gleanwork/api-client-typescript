# GetDocumentStatusResponse

Describes the response body of the /getdocumentstatus API call

## Example Usage

```typescript
import { GetDocumentStatusResponse } from "@gleanwork/api-client/models/components";

let value: GetDocumentStatusResponse = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `uploadStatus`                                                | *string*                                                      | :heavy_minus_sign:                                            | Upload status, enum of NOT_UPLOADED, UPLOADED, STATUS_UNKNOWN |
| `lastUploadedAt`                                              | *number*                                                      | :heavy_minus_sign:                                            | Time of last successful upload, in epoch seconds              |
| `indexingStatus`                                              | *string*                                                      | :heavy_minus_sign:                                            | Indexing status, enum of NOT_INDEXED, INDEXED, STATUS_UNKNOWN |
| `lastIndexedAt`                                               | *number*                                                      | :heavy_minus_sign:                                            | Time of last successful indexing, in epoch seconds            |