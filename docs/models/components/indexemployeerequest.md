# IndexEmployeeRequest

Info about an employee and optional version for that info

## Example Usage

```typescript
import { IndexEmployeeRequest } from "@gleanwork/api-client/models/components";

let value: IndexEmployeeRequest = {
  employee: {
    email: "Colton_Bednar47@hotmail.com",
    department: "<value>",
    datasourceProfiles: [
      {
        datasource: "github",
        handle: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `employee`                                                                             | [components.EmployeeInfoDefinition](../../models/components/employeeinfodefinition.md) | :heavy_check_mark:                                                                     | Describes employee info                                                                |
| `version`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | Version number for the employee object. If absent or 0 then no version checks are done |