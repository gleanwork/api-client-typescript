# PlatformSkillSourcePreviewStreamSkillServerSentEvent

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamSkillServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamSkillServerSentEvent = {
  event: "SKILL",
  data: {
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
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `event`                                                                                                              | *"SKILL"*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.PlatformSkillSourcePreviewStreamSkill](../../models/components/platformskillsourcepreviewstreamskill.md) | :heavy_check_mark:                                                                                                   | One skill previewed; carries the previewed skill.                                                                    |