# WriteActionParameterType

The type of the value (e.g., integer, string, boolean, etc.)

## Example Usage

```typescript
import { WriteActionParameterType } from "@gleanwork/api-client/models/components";

let value: WriteActionParameterType = "STRING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNKNOWN" | "INTEGER" | "STRING" | "BOOLEAN" | Unrecognized<string>
```