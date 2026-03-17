# DeleteEmployeeRequest

Describes the request body of the /deleteemployee API call

## Example Usage

```typescript
import { DeleteEmployeeRequest } from "@gleanwork/api-client/models/components";

let value: DeleteEmployeeRequest = {
  employeeEmail: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                       | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done. |
| `employeeEmail`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The deleted employee's email                                                                                    |