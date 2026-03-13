# DebugUserRequest

Describes the request body of the /debug/{datasource}/user API call

## Example Usage

```typescript
import { DebugUserRequest } from "@gleanwork/api-client/models/components";

let value: DebugUserRequest = {
  email: "u1@foo.com",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `email`                                    | *string*                                   | :heavy_check_mark:                         | Email ID of the user to get the status for | u1@foo.com                                 |