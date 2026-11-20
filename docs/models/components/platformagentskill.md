# PlatformAgentSkill

A skill defined inline in the agent. Reference a published skill through `dependencies` instead.


## Example Usage

```typescript
import { PlatformAgentSkill } from "@gleanwork/api-client/models/components";

let value: PlatformAgentSkill = {
  display_name: "Mazie.Berge35",
  main_content: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Human-readable skill name.                                                                               |
| `mainContent`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Main skill content, inlined from `SKILL.md`.                                                             |
| `files`                                                                                                  | [components.PlatformSkillSourcePreviewFile](../../models/components/platformskillsourcepreviewfile.md)[] | :heavy_minus_sign:                                                                                       | Additional files bundled in the skill folder.                                                            |