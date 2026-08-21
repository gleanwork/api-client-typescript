# PlatformTriggerStatus

Current trigger lifecycle state.

## Example Usage

```typescript
import { PlatformTriggerStatus } from "@gleanwork/api-client/models/components";

let value: PlatformTriggerStatus = "ENABLED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ENABLED" | "DISABLED" | Unrecognized<string>
```