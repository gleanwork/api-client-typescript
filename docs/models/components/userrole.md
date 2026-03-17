# UserRole

A user's role with respect to a specific document.

## Example Usage

```typescript
import { UserRole } from "@gleanwork/api-client/models/components";

let value: UserRole = "OWNER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OWNER" | "VIEWER" | "ANSWER_MODERATOR" | "EDITOR" | "VERIFIER" | Unrecognized<string>
```