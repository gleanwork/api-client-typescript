# PlatformSkillGetResponse

## Example Usage

```typescript
import { PlatformSkillGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillGetResponse = {
  skill: {
    id: "<id>",
    display_name: "Eulah.Leffler",
    description: "enhance toward flustered about",
    latest_version: 281887,
    latest_minor_version: 994194,
    status: "ENABLED",
    origin: "CUSTOM",
    owner: {
      name: "<value>",
    },
    created_at: new Date("2024-03-25T20:06:30.258Z"),
    updated_at: new Date("2026-12-28T01:22:47.168Z"),
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `skill`                                                              | [components.PlatformSkill](../../models/components/platformskill.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `requestId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Platform-generated request ID for support correlation.               |