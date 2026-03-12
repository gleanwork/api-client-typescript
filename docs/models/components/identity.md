# Identity

## Example Usage

```typescript
import { Identity } from "@gleanwork/api-client/models/components";

let value: Identity = {
  processingHistory: [
    {
      startTime: "2021-08-06T17:58:01.000Z",
      endTime: "2021-08-06T18:58:01.000Z",
    },
  ],
  users: {
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
  },
  groups: {
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
  },
  memberships: {
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
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `processingHistory`                                                                                                                    | [components.ProcessingHistoryEvent](../../models/components/processinghistoryevent.md)[]                                               | :heavy_minus_sign:                                                                                                                     | Information about processing history for the datasource                                                                                |
| `users`                                                                                                                                | [components.DebugDatasourceStatusIdentityResponseComponent](../../models/components/debugdatasourcestatusidentityresponsecomponent.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `groups`                                                                                                                               | [components.DebugDatasourceStatusIdentityResponseComponent](../../models/components/debugdatasourcestatusidentityresponsecomponent.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `memberships`                                                                                                                          | [components.DebugDatasourceStatusIdentityResponseComponent](../../models/components/debugdatasourcestatusidentityresponsecomponent.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |