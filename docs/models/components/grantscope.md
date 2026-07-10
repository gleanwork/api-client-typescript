# GrantScope

Scope of the approval grant. Only applicable when isGranted is true and requestType is EXECUTION.


## Example Usage

```typescript
import { GrantScope } from "@gleanwork/api-client/models/components";

let value: GrantScope = "CURRENT_REQUEST";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CURRENT_REQUEST" | "CURRENT_SESSION" | "ALWAYS" | Unrecognized<string>
```