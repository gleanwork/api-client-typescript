# State

The verification state for the document.

## Example Usage

```typescript
import { State } from "@gleanwork/api-client/models/components";

let value: State = "UNVERIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNVERIFIED" | "VERIFIED" | "DEPRECATED" | Unrecognized<string>
```