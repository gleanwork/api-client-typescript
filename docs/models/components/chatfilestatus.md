# ChatFileStatus

Current status of the file.

## Example Usage

```typescript
import { ChatFileStatus } from "@gleanwork/api-client/models/components";

let value: ChatFileStatus = "PARTIALLY_PROCESSED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PROCESSING" | "PROCESSED" | "PARTIALLY_PROCESSED" | "FAILED" | "DELETED" | Unrecognized<string>
```