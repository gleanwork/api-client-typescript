# AuthStatus

The per-user authorization status for a datasource.

## Example Usage

```typescript
import { AuthStatus } from "@gleanwork/api-client/models/components";

let value: AuthStatus = "DISABLED";
```

## Values

```typescript
"DISABLED" | "AWAITING_AUTH" | "AUTHORIZED" | "STALE_OAUTH" | "SEG_MIGRATION"
```