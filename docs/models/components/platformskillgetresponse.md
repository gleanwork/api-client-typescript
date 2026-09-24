# PlatformSkillGetResponse

## Example Usage

```typescript
import { PlatformSkillGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillGetResponse = {
  skill: {
    skill_id: "<id>",
    display_name: "Kian.Klein18",
    description: "per whereas indeed than devise oh",
    latest_version: 33911,
    latest_minor_version: 977646,
    status: "ENABLED",
    origin: "GITHUB",
    owner: {
      name: "<value>",
    },
    created_at: new Date("2025-01-03T15:10:34.800Z"),
    updated_at: new Date("2026-06-20T04:43:24.533Z"),
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `skill`                                                              | [components.PlatformSkill](../../models/components/platformskill.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `requestId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Platform-generated request ID for support correlation.               |