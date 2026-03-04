# UserActivityAction

The action for the activity

## Example Usage

```typescript
import { UserActivityAction } from "@gleanwork/api-client/models/components";

let value: UserActivityAction = "EDIT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ADD" | "ADD_REMINDER" | "CLICK" | "COMMENT" | "DELETE" | "DISMISS" | "EDIT" | "MENTION" | "MOVE" | "OTHER" | "RESTORE" | "UNKNOWN" | "VERIFY" | "VIEW" | Unrecognized<string>
```