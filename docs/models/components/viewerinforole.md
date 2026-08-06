# ~~ViewerInfoRole~~

DEPRECATED - use permissions instead. Viewer's role on the specific document.

> :warning: **DEPRECATED**: Deprecated on 2026-02-05, removal scheduled for 2026-10-15: Use permissions instead.

## Example Usage

```typescript
import { ViewerInfoRole } from "@gleanwork/api-client/models/components";

let value: ViewerInfoRole = "VIEWER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ANSWER_MODERATOR" | "OWNER" | "VIEWER" | Unrecognized<string>
```