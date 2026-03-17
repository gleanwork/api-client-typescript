# ScopeType

Describes the scope for a ReadPermission, WritePermission, or GrantPermission object

## Example Usage

```typescript
import { ScopeType } from "@gleanwork/api-client/models/components";

let value: ScopeType = "GLOBAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"GLOBAL" | "OWN" | Unrecognized<string>
```