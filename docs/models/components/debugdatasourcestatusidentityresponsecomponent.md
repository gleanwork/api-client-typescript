# DebugDatasourceStatusIdentityResponseComponent

## Example Usage

```typescript
import { DebugDatasourceStatusIdentityResponseComponent } from "@gleanwork/api-client/models/components";

let value: DebugDatasourceStatusIdentityResponseComponent = {
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
    uploaded: 15,
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bulkUploadHistory`                                                                                                                                | [components.BulkUploadHistoryEvent](../../models/components/bulkuploadhistoryevent.md)[]                                                           | :heavy_minus_sign:                                                                                                                                 | Information about active and recent successful uploads for the datasource                                                                          |
| `counts`                                                                                                                                           | [components.DebugDatasourceStatusIdentityResponseComponentCounts](../../models/components/debugdatasourcestatusidentityresponsecomponentcounts.md) | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |