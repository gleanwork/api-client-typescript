# UserStatusResponse

Describes the user status response body

## Example Usage

```typescript
import { UserStatusResponse } from "@gleanwork/api-client/models/components";

let value: UserStatusResponse = {
  isActiveUser: true,
  uploadStatus: "UPLOADED",
  lastUploadedAt: "2021-08-06T17:58:01.000Z",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `isActiveUser`                                                             | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the user is active or not                                          | true                                                                       |
| `uploadStatus`                                                             | [components.UploadStatusEnum](../../models/components/uploadstatusenum.md) | :heavy_minus_sign:                                                         | Upload status, enum of NOT_UPLOADED, UPLOADED, STATUS_UNKNOWN              | UPLOADED                                                                   |
| `lastUploadedAt`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | Time of last successful upload for the user, in ISO 8601 format            | 2021-08-06T17:58:01.000Z                                                   |