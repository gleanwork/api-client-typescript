# PlatformSkillCreateResponse

## Example Usage

```typescript
import { PlatformSkillCreateResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillCreateResponse = {
  skill: {
    id: "<id>",
    display_name: "Kian.Klein18",
    description: "per whereas indeed than devise oh",
    latest_version: 33911,
    latest_minor_version: 977646,
    status: "ENABLED",
    origin: "CUSTOM",
    owner: {
      name: "<value>",
    },
    created_at: new Date("2025-10-31T03:35:54.354Z"),
    updated_at: new Date("2025-01-03T15:10:34.800Z"),
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `skill`                                                              | [components.PlatformSkill](../../models/components/platformskill.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `requestId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Platform-generated request ID for support correlation.               |