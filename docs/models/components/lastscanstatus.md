# LastScanStatus

## Example Usage

```typescript
import { LastScanStatus } from "@gleanwork/api-client/models/components";

let value: LastScanStatus = "PENDING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PENDING" | "SUCCESS" | "FAILURE" | "CANCELLED" | "CANCELLING" | "ACTIVE" | Unrecognized<string>
```