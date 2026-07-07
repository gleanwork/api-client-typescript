# ToolServerAuthStatus

Authentication status for the calling user.

## Example Usage

```typescript
import { ToolServerAuthStatus } from "@gleanwork/api-client/models/components";

let value: ToolServerAuthStatus = "AUTHORIZED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AWAITING_AUTH" | "AUTHORIZED" | Unrecognized<string>
```