# ToolType

Type of tool (READ, WRITE)

## Example Usage

```typescript
import { ToolType } from "@gleanwork/api-client/models/components";

let value: ToolType = "READ";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"READ" | "WRITE" | Unrecognized<string>
```