# PlatformSkillStatus

The caller's effective activation. The owner sees the skill's stored status. Another caller sees their personal setting, or DISABLED when they have none. DRAFT is the stored draft state and is not set by update. Effective activation may also reflect workspace governance policy.


## Example Usage

```typescript
import { PlatformSkillStatus } from "@gleanwork/api-client/models/components";

let value: PlatformSkillStatus = "DISABLED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DRAFT" | "ENABLED" | "DISABLED" | Unrecognized<string>
```