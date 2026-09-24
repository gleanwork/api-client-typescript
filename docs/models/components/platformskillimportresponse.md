# PlatformSkillImportResponse

## Example Usage

```typescript
import { PlatformSkillImportResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillImportResponse = {
  skills: [
    {
      skill_id: "<id>",
      display_name: "Noble.Gerlach39",
      description: "versus direct acidly teriyaki adrenalin ah eventually",
      latest_version: 179388,
      latest_minor_version: 651453,
      status: "DISABLED",
      origin: "CUSTOM",
      owner: {
        name: "<value>",
      },
      created_at: new Date("2024-09-21T21:06:52.696Z"),
      updated_at: new Date("2024-01-28T00:06:21.563Z"),
    },
  ],
  request_id: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `skills`                                                                                            | [components.PlatformSkill](../../models/components/platformskill.md)[]                              | :heavy_check_mark:                                                                                  | Imported skills in request order. The import is atomic: either every source persists or none does.<br/> |
| `requestId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | Platform-generated request ID for support correlation.                                              |