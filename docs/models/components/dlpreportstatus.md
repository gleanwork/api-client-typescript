# DlpReportStatus

The status of the policy/report. Only ACTIVE status will be picked for scans.

## Example Usage

```typescript
import { DlpReportStatus } from "@gleanwork/api-client/models/components";

let value: DlpReportStatus = "CANCELLED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTIVE" | "INACTIVE" | "CANCELLED" | "NONE" | Unrecognized<string>
```