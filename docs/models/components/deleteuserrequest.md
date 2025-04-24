# DeleteUserRequest

Describes the request body of the /deleteuser API call

## Example Usage

```typescript
import { DeleteUserRequest } from "@gleanwork/api-client/models/components";

let value: DeleteUserRequest = {
  datasource: "<value>",
  email: "Herminio.Wisozk@hotmail.com",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                       | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done. |
| `datasource`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The datasource for which the user is removed                                                                    |
| `email`                                                                                                         | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The email of the user to be deleted                                                                             |