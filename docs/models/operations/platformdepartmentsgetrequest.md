# PlatformDepartmentsGetRequest

## Example Usage

```typescript
import { PlatformDepartmentsGetRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformDepartmentsGetRequest = {
  department_id: "{department_id}",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `departmentId`                                                                                                               | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The department_id from a list departments response or from a user's department. IDs are opaque. Do not parse or build them.<br/> | {department_id}                                                                                                              |