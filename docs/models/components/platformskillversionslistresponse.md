# PlatformSkillVersionsListResponse

## Example Usage

```typescript
import { PlatformSkillVersionsListResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillVersionsListResponse = {
  versions: [
    {
      skill_id: "<id>",
      version: 684124,
      minor_version: 593377,
      is_latest: true,
      created_by: {
        name: "<value>",
      },
      created_at: new Date("2026-03-16T16:36:49.159Z"),
      updated_at: new Date("2024-02-19T02:56:33.273Z"),
    },
  ],
  has_more: false,
  next_cursor: "<value>",
  request_id: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `versions`                                                                           | [components.PlatformSkillVersion](../../models/components/platformskillversion.md)[] | :heavy_check_mark:                                                                   | Versions available for the skill.                                                    |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether additional results are available.                                            |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | Cursor for the next page, or null when no more results are available.                |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Platform-generated request ID for support correlation.                               |