# PlatformSkillUpdateStatus

Activation to apply for the authenticated caller. For the owner, this updates the skill's stored status. For any other caller, it updates only that caller's setting.


## Example Usage

```typescript
import { PlatformSkillUpdateStatus } from "@gleanwork/api-client/models/components";

let value: PlatformSkillUpdateStatus = "ENABLED";
```

## Values

```typescript
"ENABLED" | "DISABLED"
```