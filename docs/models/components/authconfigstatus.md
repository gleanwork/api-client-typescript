# AuthConfigStatus

Auth status of the tool.

## Example Usage

```typescript
import { AuthConfigStatus } from "@gleanwork/api-client/models/components";

let value: AuthConfigStatus = "AUTH_DISABLED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AWAITING_AUTH" | "AUTHORIZED" | "AUTH_DISABLED" | Unrecognized<string>
```