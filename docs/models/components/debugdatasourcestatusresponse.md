# DebugDatasourceStatusResponse

Describes the response body of the /debug/{datasource}/status API call

## Example Usage

```typescript
import { DebugDatasourceStatusResponse } from "@gleanwork/api-client/models/components";

let value: DebugDatasourceStatusResponse = {
  documents: {
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
  },
  identity: {
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
  },
  datasourceVisibility: "ENABLED_FOR_ALL",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `documents`                                                                                     | [components.Documents](../../models/components/documents.md)                                    | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `identity`                                                                                      | [components.Identity](../../models/components/identity.md)                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `datasourceVisibility`                                                                          | [components.DatasourceVisibility](../../models/components/datasourcevisibility.md)              | :heavy_minus_sign:                                                                              | The visibility of the datasource, an enum of VISIBLE_TO_ALL, VISIBLE_TO_TEST_GROUP, NOT_VISIBLE | ENABLED_FOR_ALL                                                                                 |