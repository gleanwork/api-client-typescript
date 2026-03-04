# UserRole

A user's role with respect to a specific document.

## Example Usage

```typescript
import { UserRole } from "@gleanwork/api-client/models/components";

let value: UserRole = "OWNER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OWNER" | "VIEWER" | "ANSWER_MODERATOR" | "EDITOR" | "VERIFIER" | Unrecognized<string>
```