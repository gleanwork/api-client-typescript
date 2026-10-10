# ExportInfoExportType

The type of export to perform. FINDINGS, DOCUMENTS and ISSUES produce JSONL; FINDINGS_CSV produces one CSV row per finding.

## Example Usage

```typescript
import { ExportInfoExportType } from "@gleanwork/api-client/models/components";

let value: ExportInfoExportType = "ISSUES";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FINDINGS" | "DOCUMENTS" | "ISSUES" | "FINDINGS_CSV" | Unrecognized<string>
```