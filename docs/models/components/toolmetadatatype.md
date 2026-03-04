# ToolMetadataType

The type of tool.

## Example Usage

```typescript
import { ToolMetadataType } from "@gleanwork/api-client/models/components";

let value: ToolMetadataType = "ACTION";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"RETRIEVAL" | "ACTION" | Unrecognized<string>
```