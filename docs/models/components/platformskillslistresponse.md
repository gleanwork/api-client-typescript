# PlatformSkillsListResponse

## Example Usage

```typescript
import { PlatformSkillsListResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillsListResponse = {
  results: [
    {
      skill_id: "<id>",
      display_name: "Kameron36",
      description:
        "sedately scowl other yearningly aggravating anti heavily extract",
      latest_version: 33039,
      latest_minor_version: 380295,
      status: "DRAFT",
      origin: "CUSTOM",
      owner: {
        name: "<value>",
      },
      created_at: new Date("2024-07-06T04:25:41.450Z"),
      updated_at: new Date("2024-07-09T16:24:50.507Z"),
    },
  ],
  has_more: false,
  next_cursor: "<value>",
  request_id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `results`                                                              | [components.PlatformSkill](../../models/components/platformskill.md)[] | :heavy_check_mark:                                                     | Skills available to the user.                                          |
| `hasMore`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | Whether additional results are available.                              |
| `nextCursor`                                                           | *string*                                                               | :heavy_check_mark:                                                     | Cursor for the next page, or null when no more results are available.  |
| `requestId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Platform-generated request ID for support correlation.                 |