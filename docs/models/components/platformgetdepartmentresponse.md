# PlatformGetDepartmentResponse

One department.

## Example Usage

```typescript
import { PlatformGetDepartmentResponse } from "@gleanwork/api-client/models/components";

let value: PlatformGetDepartmentResponse = {
  department: {
    department_id: "<id>",
    display_name: "Jasmin.Yost39",
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `department`                                                                                     | [components.PlatformDepartmentReference](../../models/components/platformdepartmentreference.md) | :heavy_check_mark:                                                                               | A department in the Glean directory.                                                             |
| `requestId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Request identifier for correlating this response.                                                |