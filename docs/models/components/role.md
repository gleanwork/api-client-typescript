# ~~Role~~

DEPRECATED - use permissions instead. Viewer's role on the specific document.

> :warning: **DEPRECATED**: Deprecated on 2026-02-05, removal scheduled for 2026-10-15: Use permissions instead.

## Example Usage

```typescript
import { Role } from "@gleanwork/api-client/models/components";

let value: Role = "ANSWER_MODERATOR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ANSWER_MODERATOR" | "OWNER" | "VIEWER" | Unrecognized<string>
```