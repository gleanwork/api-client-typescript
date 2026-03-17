# DeleteGroupRequest

Describes the request body of the /deletegroup API call

## Example Usage

```typescript
import { DeleteGroupRequest } from "@gleanwork/api-client/models/components";

let value: DeleteGroupRequest = {
  datasource: "<value>",
  groupName: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                       | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done. |
| `datasource`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The datasource for which the group is removed                                                                   |
| `groupName`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | the name of the group to be deleted                                                                             |