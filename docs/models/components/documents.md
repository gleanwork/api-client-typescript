# Documents

## Example Usage

```typescript
import { Documents } from "@gleanwork/api-client/models/components";

let value: Documents = {
  bulkUploadHistory: [
    {
      uploadId: "upload-id-content-1707403081",
      startTime: "2021-08-06T17:58:01.000Z",
      endTime: "2021-08-06T18:58:01.000Z",
      status: "SUCCESSFUL",
      processingState: "UPLOAD COMPLETED",
    },
  ],
  counts: {
    uploaded: [
      {
        objectType: "Article",
        count: 15,
      },
    ],
    indexed: [
      {
        objectType: "Article",
        count: 15,
      },
    ],
  },
  processingHistory: [
    {
      startTime: "2021-08-06T17:58:01.000Z",
      endTime: "2021-08-06T18:58:01.000Z",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `bulkUploadHistory`                                                                                              | [components.BulkUploadHistoryEvent](../../models/components/bulkuploadhistoryevent.md)[]                         | :heavy_minus_sign:                                                                                               | Information about active and recent successful uploads for the datasource                                        |
| `counts`                                                                                                         | [components.DebugDatasourceStatusResponseCounts](../../models/components/debugdatasourcestatusresponsecounts.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `processingHistory`                                                                                              | [components.ProcessingHistoryEvent](../../models/components/processinghistoryevent.md)[]                         | :heavy_minus_sign:                                                                                               | Information about processing history for the datasource                                                          |