# ScopeType

Describes the scope for a ReadPermission, WritePermission, or GrantPermission object

## Example Usage

```typescript
import { ScopeType } from "@gleanwork/api-client/models/components";

let value: ScopeType = "GLOBAL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"GLOBAL" | "OWN" | Unrecognized<string>
```