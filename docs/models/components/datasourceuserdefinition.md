# DatasourceUserDefinition

describes a user in the datasource

## Example Usage

```typescript
import { DatasourceUserDefinition } from "@gleanwork/api-client/models/components";

let value: DatasourceUserDefinition = {
  email: "Shany.Kutch@yahoo.com",
  name: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `email`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `userId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | To be supplied if the user id in the datasource is not the email |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `isActive`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | set to false if the user is a former employee or a bot           |