# PlatformGetUserResponse

One user.

## Example Usage

```typescript
import { PlatformGetUserResponse } from "@gleanwork/api-client/models/components";

let value: PlatformGetUserResponse = {
  user: {
    user_id: "<id>",
    display_name: "Cade.Dicki70",
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `user`                                                             | [components.PlatformUser](../../models/components/platformuser.md) | :heavy_check_mark:                                                 | A user in the Glean directory.                                     |
| `requestId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Request identifier for correlating this response.                  |