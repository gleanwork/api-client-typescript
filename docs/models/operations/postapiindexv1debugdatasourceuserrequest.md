# PostApiIndexV1DebugDatasourceUserRequest

## Example Usage

```typescript
import { PostApiIndexV1DebugDatasourceUserRequest } from "@gleanwork/api-client/models/operations";

let value: PostApiIndexV1DebugDatasourceUserRequest = {
  datasource: "<value>",
  debugUserRequest: {
    email: "u1@foo.com",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `datasource`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | The datasource to which the user belongs                                   |
| `debugUserRequest`                                                         | [components.DebugUserRequest](../../models/components/debuguserrequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |