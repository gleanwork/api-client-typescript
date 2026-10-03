# PlatformSkillSourcePreviewStreamSkill

One skill previewed; carries the previewed skill.

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamSkill } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamSkill = {
  type: "SKILL",
  skill: {
    display_name: "Grady_Hagenes25",
    description:
      "superb ultimately throbbing holster atop nauseate violent minus till perp",
    source_url: "https://disloyal-fun.biz",
    commit_sha: "<value>",
    main_content: "<value>",
    files: [],
    file_tree: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [components.PlatformSkillSourcePreviewStreamSkillType](../../models/components/platformskillsourcepreviewstreamskilltype.md) | :heavy_check_mark:                                                                                                           | Event type, also sent as the SSE `event` name.                                                                               |
| `skill`                                                                                                                      | [components.PlatformSkillSourcePreview](../../models/components/platformskillsourcepreview.md)                               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |