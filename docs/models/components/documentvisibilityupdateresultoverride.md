# DocumentVisibilityUpdateResultOverride

The visibility-override state of the document.

## Example Usage

```typescript
import { DocumentVisibilityUpdateResultOverride } from "@gleanwork/api-client/models/components";

let value: DocumentVisibilityUpdateResultOverride =
  "HIDE_FROM_ALL_EXCEPT_OWNER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NONE" | "HIDE_FROM_ALL" | "HIDE_FROM_GROUPS" | "HIDE_FROM_ALL_EXCEPT_OWNER" | Unrecognized<string>
```