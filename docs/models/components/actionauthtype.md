# ActionAuthType

Authentication mechanism used by an action pack.
  - `AUTH_USER_OAUTH`: Requires per-user OAuth consent to the third-party tool.
  - `AUTH_ADMIN`: Uses a service-account / admin-owned credential. End users do not authorize individually.
  - `AUTH_NONE`: Action pack requires no authentication.


## Example Usage

```typescript
import { ActionAuthType } from "@gleanwork/api-client/models/components";

let value: ActionAuthType = "AUTH_NONE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTH_USER_OAUTH" | "AUTH_ADMIN" | "AUTH_NONE" | Unrecognized<string>
```