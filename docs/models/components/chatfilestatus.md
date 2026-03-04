# ChatFileStatus

Current status of the file.

## Example Usage

```typescript
import { ChatFileStatus } from "@gleanwork/api-client/models/components";

let value: ChatFileStatus = "FAILED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PROCESSING" | "PROCESSED" | "FAILED" | "DELETED" | Unrecognized<string>
```