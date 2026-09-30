# PlatformSkillSyncResponse

## Example Usage

```typescript
import { PlatformSkillSyncResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSyncResponse = {
  commit_sha: "<value>",
  is_updated: false,
  request_id: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `commitSha`                                            | *string*                                               | :heavy_check_mark:                                     | Git commit SHA now associated with the skill.          |
| `isUpdated`                                            | *boolean*                                              | :heavy_check_mark:                                     | Whether this request created a new skill version.      |
| `requestId`                                            | *string*                                               | :heavy_check_mark:                                     | Platform-generated request ID for support correlation. |