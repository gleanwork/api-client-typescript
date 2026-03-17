# DlpReportStatus

The status of the policy/report. Only ACTIVE status will be picked for scans.

## Example Usage

```typescript
import { DlpReportStatus } from "@gleanwork/api-client/models/components";

let value: DlpReportStatus = "CANCELLED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ACTIVE" | "INACTIVE" | "CANCELLED" | "NONE" | Unrecognized<string>
```