# PlatformFilterOperator

Supported filter operator.

## Example Usage

```typescript
import { PlatformFilterOperator } from "@gleanwork/api-client/models/components";

let value: PlatformFilterOperator = "LT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EQUALS" | "NOT_EQUALS" | "GT" | "GTE" | "LT" | "LTE" | Unrecognized<string>
```