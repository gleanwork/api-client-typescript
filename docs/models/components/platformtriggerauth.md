# PlatformTriggerAuth

Optional caller credential sent as an HTTP auth header on each delivery, in addition to the HMAC signature. Lets the receiving endpoint authenticate the request. On update, omit `auth` to preserve the existing credential; there is no in-place removal — recreate the trigger to remove auth.

## Example Usage

```typescript
import { PlatformTriggerAuth } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerAuth = {
  type: "BEARER",
  secret: "a8f5f167f44f4964e6c998dee827110c",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [components.PlatformTriggerAuthType](../../models/components/platformtriggerauthtype.md) | :heavy_check_mark:                                                                       | Credential scheme.                                                                       |                                                                                          |
| `secret`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | Secret credential value. Write-only; never returned on reads.                            | a8f5f167f44f4964e6c998dee827110c                                                         |