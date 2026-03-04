# BulkUploadHistoryEventStatus

The status of the upload, an enum of ACTIVE, SUCCESSFUL

## Example Usage

```typescript
import { BulkUploadHistoryEventStatus } from "@gleanwork/api-client/models/components";

let value: BulkUploadHistoryEventStatus = "SUCCESSFUL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTIVE" | "SUCCESSFUL" | Unrecognized<string>
```