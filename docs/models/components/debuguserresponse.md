# DebugUserResponse

Describes the response body of the /debug/{datasource}/user API call

## Example Usage

```typescript
import { DebugUserResponse } from "@gleanwork/api-client/models/components";

let value: DebugUserResponse = {
  status: {
    isActiveUser: true,
    uploadStatus: "UPLOADED",
    lastUploadedAt: "2021-08-06T17:58:01.000Z",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `status`                                                                                       | [components.UserStatusResponse](../../models/components/userstatusresponse.md)                 | :heavy_minus_sign:                                                                             | Describes the user status response body                                                        |
| `uploadedGroups`                                                                               | [components.DatasourceGroupDefinition](../../models/components/datasourcegroupdefinition.md)[] | :heavy_minus_sign:                                                                             | List of groups the user is a member of, as uploaded via permissions API.                       |