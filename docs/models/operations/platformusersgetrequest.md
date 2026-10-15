# PlatformUsersGetRequest

## Example Usage

```typescript
import { PlatformUsersGetRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformUsersGetRequest = {
  user_id: "{user_id}",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `userId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | Canonical Glean user ID, as the list returns it.                                   | {user_id}                                                                          |
| `include`                                                                          | [components.PlatformUserInclude](../../models/components/platformuserinclude.md)[] | :heavy_minus_sign:                                                                 | Optional fields to add to the user. Each value only adds fields.<br/>              |                                                                                    |