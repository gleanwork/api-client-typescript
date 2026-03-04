# UpdateType

Optional type classification for the update.

## Example Usage

```typescript
import { UpdateType } from "@gleanwork/api-client/models/components";

let value: UpdateType = "ACTIONABLE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTIONABLE" | "INFORMATIVE" | Unrecognized<string>
```