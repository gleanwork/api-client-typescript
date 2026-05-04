# DatasourceCredentialStatus

Lifecycle state of the credentials installed for a datasource instance. Mirrors the internal admin Status enum so the handler can surface the same health signals already tracked today. EXPIRING_SOON is represented as VALID_WITH_WARNINGS (with detail in `message`); EXPIRED is surfaced as INVALID plus a non-null `expiresAt` in the past.


## Example Usage

```typescript
import { DatasourceCredentialStatus } from "@gleanwork/api-client/models/components";

let value: DatasourceCredentialStatus = "MISSING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"VALID" | "VALID_WITH_WARNINGS" | "VALIDATING" | "INVALID" | "MISSING" | Unrecognized<string>
```