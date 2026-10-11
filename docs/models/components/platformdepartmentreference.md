# PlatformDepartmentReference

A reference to a department in the Glean directory.

## Example Usage

```typescript
import { PlatformDepartmentReference } from "@gleanwork/api-client/models/components";

let value: PlatformDepartmentReference = {
  department_id: "<id>",
  display_name: "Arden_Klein73",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `departmentId`                                                                                                                        | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Opaque department ID. The users and departments APIs return the same ID for the same department. A renamed department gets a new ID.<br/> |
| `displayName`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Department name, exactly as the directory stores it.                                                                                  |