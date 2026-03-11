# DebugDocumentResponse

Describes the response body of the /debug/{datasource}/document API call

## Example Usage

```typescript
import { DebugDocumentResponse } from "@gleanwork/api-client/models/components";

let value: DebugDocumentResponse = {
  status: {
    uploadStatus: "UPLOADED",
    lastUploadedAt: "2021-08-06T17:58:01.000Z",
    indexingStatus: "INDEXED",
    lastIndexedAt: "2021-08-06T17:58:01.000Z",
    permissionIdentityStatus: "UPLOADED",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `status`                                                                                             | [components.DocumentStatusResponse](../../models/components/documentstatusresponse.md)               | :heavy_minus_sign:                                                                                   | Describes the document status response body                                                          |
| `uploadedPermissions`                                                                                | [components.DocumentPermissionsDefinition](../../models/components/documentpermissionsdefinition.md) | :heavy_minus_sign:                                                                                   | describes the access control details of the document                                                 |