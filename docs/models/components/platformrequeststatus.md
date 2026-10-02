# PlatformRequestStatus

Stored request state.

## Example Usage

```typescript
import { PlatformRequestStatus } from "@gleanwork/api-client/models/components";

let value: PlatformRequestStatus = "APPROVED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PENDING" | "APPROVED" | "DENIED" | Unrecognized<string>
```