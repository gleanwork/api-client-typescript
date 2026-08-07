# PlatformSkillSyncResponse

## Example Usage

```typescript
import { PlatformSkillSyncResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSyncResponse = {
  sync_status: "UP_TO_DATE",
  commit_sha: "<value>",
  updated: false,
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `syncStatus`                                                                                         | [components.PlatformSkillSyncResultStatus](../../models/components/platformskillsyncresultstatus.md) | :heavy_check_mark:                                                                                   | Synchronization status after a successful refresh.                                                   |
| `commitSha`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Git commit SHA now associated with the skill.                                                        |
| `updated`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether this request created a new skill version.                                                    |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Platform-generated request ID for support correlation.                                               |