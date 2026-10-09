# PlatformUserDepartment

The department that a user belongs to.

## Example Usage

```typescript
import { PlatformUserDepartment } from "@gleanwork/api-client/models/components";

let value: PlatformUserDepartment = {
  department_id: "<id>",
  display_name: "Broderick87",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `departmentId`                                            | *string*                                                  | :heavy_check_mark:                                        | Opaque department ID. A renamed department gets a new ID. |
| `displayName`                                             | *string*                                                  | :heavy_check_mark:                                        | Department name.                                          |