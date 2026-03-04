# DocumentVisibilityOverrideOverride

The visibility-override state of the document.

## Example Usage

```typescript
import { DocumentVisibilityOverrideOverride } from "@gleanwork/api-client/models/components";

let value: DocumentVisibilityOverrideOverride = "HIDE_FROM_ALL_EXCEPT_OWNER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"NONE" | "HIDE_FROM_ALL" | "HIDE_FROM_GROUPS" | "HIDE_FROM_ALL_EXCEPT_OWNER" | Unrecognized<string>
```