# PlatformSkillSyncStatus

Current external-source sync status.

## Example Usage

```typescript
import { PlatformSkillSyncStatus } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSyncStatus = "SYNC_FAILED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UP_TO_DATE" | "UPDATE_AVAILABLE" | "SYNC_FAILED" | Unrecognized<string>
```