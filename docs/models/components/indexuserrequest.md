# IndexUserRequest

Describes the request body of the /indexuser API call

## Example Usage

```typescript
import { IndexUserRequest } from "@gleanwork/api-client/models/components";

let value: IndexUserRequest = {
  datasource: "<value>",
  user: {
    email: "Phoebe24@gmail.com",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                       | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done. |
| `datasource`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The datasource for which the user is added                                                                      |
| `user`                                                                                                          | [components.DatasourceUserDefinition](../../models/components/datasourceuserdefinition.md)                      | :heavy_check_mark:                                                                                              | describes a user in the datasource                                                                              |