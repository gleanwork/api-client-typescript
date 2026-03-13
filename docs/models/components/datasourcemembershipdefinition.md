# DatasourceMembershipDefinition

describes the membership row of a group. Only one of memberUserId and memberGroupName can be specified.

## Example Usage

```typescript
import { DatasourceMembershipDefinition } from "@gleanwork/api-client/models/components";

let value: DatasourceMembershipDefinition = {
  groupName: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `groupName`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The group for which the membership is specified                       |
| `memberUserId`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | If the member is a user, then the email or datasource id for the user |
| `memberGroupName`                                                     | *string*                                                              | :heavy_minus_sign:                                                    | If the member is a group, then the name of the member group           |