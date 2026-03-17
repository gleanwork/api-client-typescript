# DlpFrequency

Interval between scans. DAILY is deprecated.

## Example Usage

```typescript
import { DlpFrequency } from "@gleanwork/api-client/models/components";

let value: DlpFrequency = "DAILY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ONCE" | "DAILY" | "WEEKLY" | "CONTINUOUS" | "NONE" | Unrecognized<string>
```