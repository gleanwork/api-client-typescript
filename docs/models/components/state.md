# State

The verification state for the document.

## Example Usage

```typescript
import { State } from "@gleanwork/api-client/models/components";

let value: State = "UNVERIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNVERIFIED" | "VERIFIED" | "DEPRECATED" | Unrecognized<string>
```