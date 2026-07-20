# PlatformSkill

## Example Usage

```typescript
import { PlatformSkill } from "@gleanwork/api-client/models/components";

let value: PlatformSkill = {
  id: "<id>",
  display_name: "Jerome_Kutch",
  description: "afore joyously insidious daily bog coop haze meh pointless",
  latest_version: 325433,
  latest_minor_version: 984891,
  status: "DRAFT",
  origin: "CUSTOM",
  owner: {
    name: "<value>",
  },
  created_at: new Date("2024-01-07T19:53:38.172Z"),
  updated_at: new Date("2026-08-25T04:34:11.776Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | Glean skill ID.                                                                                      |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | Human-readable skill name.                                                                           |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | Human-readable skill description.                                                                    |
| `latestVersion`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | Latest major version number for the skill.                                                           |
| `latestMinorVersion`                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | Latest minor version number for the skill.                                                           |
| `status`                                                                                             | [components.PlatformSkillStatus](../../models/components/platformskillstatus.md)                     | :heavy_check_mark:                                                                                   | Current skill status.                                                                                |
| `origin`                                                                                             | [components.PlatformSkillOrigin](../../models/components/platformskillorigin.md)                     | :heavy_check_mark:                                                                                   | Source category for the skill.                                                                       |
| `sourceProvenance`                                                                                   | [components.PlatformSkillSourceProvenance](../../models/components/platformskillsourceprovenance.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `owner`                                                                                              | [components.PlatformPersonReference](../../models/components/platformpersonreference.md)             | :heavy_check_mark:                                                                                   | A lightweight reference to a person, used where a payload merely points at someone.                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time the skill was created.                                                                          |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time the skill was last updated.                                                                     |