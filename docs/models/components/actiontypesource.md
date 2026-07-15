# ActionTypeSource

Analytics-only signal (product snapshot) describing WHERE the action's
read/write determination came from. Complementary to the effective
read/write value (the tool's ToolType, which drives HITL): the value says
read-or-write, this says how confident that is. MCP_ANNOTATION = from the
tool's read-only/destructive hints; ADMIN_OVERRIDE = an admin set it;
NONE = no usable hint (the effective value then defaults to write);
NATIVE_TOOL_DEFINITION = from a curated native tool (snapshot-derived).
Does not affect runtime behavior.


## Example Usage

```typescript
import { ActionTypeSource } from "@gleanwork/api-client/models/components";

let value: ActionTypeSource = "NONE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MCP_ANNOTATION" | "ADMIN_OVERRIDE" | "NONE" | "NATIVE_TOOL_DEFINITION" | Unrecognized<string>
```