# DatasourceBulkMembershipDefinition

describes the membership row of a group in the bulk uploaded. Only one of memberUserId and memberGroupName can be specified.

## Example Usage

```typescript
import { DatasourceBulkMembershipDefinition } from "@gleanwork/api-client/models/components";

let value: DatasourceBulkMembershipDefinition = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `memberUserId`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | If the member is a user, then the email or datasource id for the user |
| `memberGroupName`                                                     | *string*                                                              | :heavy_minus_sign:                                                    | If the member is a group, then the name of the member group           |