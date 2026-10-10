# PlatformUserManager

The user that another user reports to.

## Example Usage

```typescript
import { PlatformUserManager } from "@gleanwork/api-client/models/components";

let value: PlatformUserManager = {
  user_id: "<id>",
  display_name: "Henri.Goldner4",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `userId`                                       | *string*                                       | :heavy_check_mark:                             | Opaque canonical Glean user ID of the manager. |
| `displayName`                                  | *string*                                       | :heavy_check_mark:                             | The name that Glean shows for the manager.     |