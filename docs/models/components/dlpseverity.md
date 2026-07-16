# DlpSeverity

Severity levels for DLP findings and analyses. FALSE_POSITIVE ranks below LOW and marks analyses that concluded every flagged entity is a detector false positive.

## Example Usage

```typescript
import { DlpSeverity } from "@gleanwork/api-client/models/components";

let value: DlpSeverity = "MEDIUM";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNSPECIFIED" | "LOW" | "MEDIUM" | "HIGH" | "FALSE_POSITIVE" | Unrecognized<string>
```