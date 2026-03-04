# ExportInfoStatus

The status of the export

## Example Usage

```typescript
import { ExportInfoStatus } from "@gleanwork/api-client/models/components";

let value: ExportInfoStatus = "FAILED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PENDING" | "COMPLETED" | "FAILED" | Unrecognized<string>
```