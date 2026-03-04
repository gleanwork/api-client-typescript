# DlpSeverity

Severity levels for DLP findings and analyses.

## Example Usage

```typescript
import { DlpSeverity } from "@gleanwork/api-client/models/components";

let value: DlpSeverity = "MEDIUM";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNSPECIFIED" | "LOW" | "MEDIUM" | "HIGH" | Unrecognized<string>
```