# UploadStatusEnum

Upload status, enum of NOT_UPLOADED, UPLOADED, STATUS_UNKNOWN

## Example Usage

```typescript
import { UploadStatusEnum } from "@gleanwork/api-client/models/components";

let value: UploadStatusEnum = "UPLOADED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UPLOADED" | "NOT_UPLOADED" | "STATUS_UNKNOWN" | Unrecognized<string>
```