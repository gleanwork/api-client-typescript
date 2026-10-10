# PlatformDepartment

A department in the Glean directory.

## Example Usage

```typescript
import { PlatformDepartment } from "@gleanwork/api-client/models/components";

let value: PlatformDepartment = {
  department_id: "<id>",
  display_name: "Meredith.Daugherty95",
  is_active: false,
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `departmentId`                                                                                                                                                | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | Opaque department ID. The users and departments APIs return the same ID for the same department. A renamed department gets a new ID.<br/>                     |
| `displayName`                                                                                                                                                 | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | Department name, exactly as the directory stores it.                                                                                                          |
| `isActive`                                                                                                                                                    | *boolean*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                            | Whether at least one active user belongs to the department. A department that belongs only to inactive users, or that only a usage limit names, is inactive.<br/> |