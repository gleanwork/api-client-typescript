# PlatformSkillVersion

## Example Usage

```typescript
import { PlatformSkillVersion } from "@gleanwork/api-client/models/components";

let value: PlatformSkillVersion = {
  skill_id: "<id>",
  version: 603352,
  minor_version: 26947,
  is_latest: true,
  created_by: {
    name: "<value>",
  },
  created_at: new Date("2025-07-26T18:03:02.232Z"),
  updated_at: new Date("2026-05-29T20:34:24.328Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `skillId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | Glean skill ID.                                                                                      |
| `version`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | Major version number.                                                                                |
| `minorVersion`                                                                                       | *number*                                                                                             | :heavy_check_mark:                                                                                   | Minor version number.                                                                                |
| `isLatest`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether this is the latest version of the skill.                                                     |
| `createdBy`                                                                                          | [components.PlatformPersonReference](../../models/components/platformpersonreference.md)             | :heavy_check_mark:                                                                                   | A lightweight reference to a person, used where a payload merely points at someone.                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time this version was created.                                                                       |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time this version was last updated.                                                                  |
| `sourceProvenance`                                                                                   | [components.PlatformSkillSourceProvenance](../../models/components/platformskillsourceprovenance.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |