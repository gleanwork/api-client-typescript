# DlpExportFindingsRequestExportType

The type of export to perform. FINDINGS, DOCUMENTS and ISSUES produce JSONL; FINDINGS_CSV produces one CSV row per finding.

## Example Usage

```typescript
import { DlpExportFindingsRequestExportType } from "@gleanwork/api-client/models/components";

let value: DlpExportFindingsRequestExportType = "FINDINGS";
```

## Values

```typescript
"FINDINGS" | "DOCUMENTS" | "ISSUES" | "FINDINGS_CSV"
```