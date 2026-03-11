# DeleteMembershipRequest

Describes the request body of the /deletemembership API call

## Example Usage

```typescript
import { DeleteMembershipRequest } from "@gleanwork/api-client/models/components";

let value: DeleteMembershipRequest = {
  datasource: "<value>",
  membership: {
    groupName: "<value>",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                       | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done. |
| `datasource`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The datasource for which the membership is removed                                                              |
| `membership`                                                                                                    | [components.DatasourceMembershipDefinition](../../models/components/datasourcemembershipdefinition.md)          | :heavy_check_mark:                                                                                              | describes the membership row of a group. Only one of memberUserId and memberGroupName can be specified.         |