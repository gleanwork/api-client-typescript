# DlpSeverity

Severity levels for DLP findings and analyses.

## Example Usage

```typescript
import { DlpSeverity } from "@gleanwork/api-client/models/components";

let value: DlpSeverity = "MEDIUM";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNSPECIFIED" | "LOW" | "MEDIUM" | "HIGH" | Unrecognized<string>
```