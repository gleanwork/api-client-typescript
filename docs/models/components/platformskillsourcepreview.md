# PlatformSkillSourcePreview

## Example Usage

```typescript
import { PlatformSkillSourcePreview } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreview = {
  display_name: "Desiree25",
  description: "unlike aw meanwhile phooey",
  source_url: "https://doting-teammate.name/",
  commit_sha: "<value>",
  main_content: "<value>",
  files: [
    {
      path: "/opt/sbin",
      content: "<value>",
    },
  ],
  file_tree: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Skill name parsed from SKILL.md frontmatter.                                                             |
| `description`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Skill description parsed from SKILL.md frontmatter.                                                      |
| `sourceUrl`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Resolved URL for this skill within the source.                                                           |
| `commitSha`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Commit SHA used to produce the preview.                                                                  |
| `mainContent`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | SKILL.md content fetched as part of the preview.                                                         |
| `files`                                                                                                  | [components.PlatformSkillSourcePreviewFile](../../models/components/platformskillsourcepreviewfile.md)[] | :heavy_check_mark:                                                                                       | Supporting files fetched with the skill.                                                                 |
| `fileTree`                                                                                               | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | Relative paths discovered for the skill.                                                                 |