# OperatorType

## Example Usage

```typescript
import { OperatorType } from "@gleanwork/api-client/models/components";

let value: OperatorType = "TEXT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TEXT" | "DOUBLE" | "DATE" | "USER" | Unrecognized<string>
```