# PlatformSkillVersionGetResponse

## Example Usage

```typescript
import { PlatformSkillVersionGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillVersionGetResponse = {
  version: {
    skill_id: "<id>",
    version: 909044,
    minor_version: 500533,
    is_latest: false,
    created_by: {
      name: "<value>",
    },
    created_at: new Date("2025-03-06T09:11:17.220Z"),
    updated_at: new Date("2024-08-21T00:22:01.723Z"),
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `version`                                                                          | [components.PlatformSkillVersion](../../models/components/platformskillversion.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `requestId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Platform-generated request ID for support correlation.                             |