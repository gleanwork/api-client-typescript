# ToolParameterType

Parameter type (string, number, boolean, object, array)

## Example Usage

```typescript
import { ToolParameterType } from "@gleanwork/api-client/models/components";

let value: ToolParameterType = "object";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"string" | "number" | "boolean" | "object" | "array" | Unrecognized<string>
```