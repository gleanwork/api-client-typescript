# DlpFrequency

Interval between scans. DAILY is deprecated.

## Example Usage

```typescript
import { DlpFrequency } from "@gleanwork/api-client/models/components";

let value: DlpFrequency = "DAILY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ONCE" | "DAILY" | "WEEKLY" | "CONTINUOUS" | "NONE" | Unrecognized<string>
```