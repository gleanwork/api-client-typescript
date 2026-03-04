# WriteActionParameterType

The type of the value (e.g., integer, string, boolean, etc.)

## Example Usage

```typescript
import { WriteActionParameterType } from "@gleanwork/api-client/models/components";

let value: WriteActionParameterType = "STRING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNKNOWN" | "INTEGER" | "STRING" | "BOOLEAN" | Unrecognized<string>
```