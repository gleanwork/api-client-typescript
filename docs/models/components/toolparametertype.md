# ToolParameterType

Parameter type (string, number, boolean, object, array)

## Example Usage

```typescript
import { ToolParameterType } from "@gleanwork/api-client/models/components";

let value: ToolParameterType = "object";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"string" | "number" | "boolean" | "object" | "array" | Unrecognized<string>
```