# Prominence

The level of visual distinction that should be given to a result.

## Example Usage

```typescript
import { Prominence } from "@gleanwork/api-client/models/components";

let value: Prominence = "PROMOTED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"HERO" | "PROMOTED" | "STANDARD" | Unrecognized<string>
```