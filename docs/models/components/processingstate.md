# ProcessingState

The current state of the upload, an enum of UNAVAILABLE, UPLOAD STARTED, UPLOAD IN PROGRESS, UPLOAD COMPLETED, DELETION PAUSED, INDEXING COMPLETED

## Example Usage

```typescript
import { ProcessingState } from "@gleanwork/api-client/models/components";

let value: ProcessingState = "UPLOAD COMPLETED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNAVAILABLE" | "UPLOAD STARTED" | "UPLOAD IN PROGRESS" | "UPLOAD COMPLETED" | "DELETION PAUSED" | "INDEXING COMPLETED" | Unrecognized<string>
```