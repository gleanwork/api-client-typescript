# PlatformSkillsPreviewSourceStreamRequest

## Example Usage

```typescript
import { PlatformSkillsPreviewSourceStreamRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformSkillsPreviewSourceStreamRequest = {
  source_url: "https://github.com/anthropics/skills",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `sourceUrl`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | GitHub URL for a skill directory, SKILL.md file, or repository to inspect. |
| `stream`                                                                   | *true*                                                                     | :heavy_minus_sign:                                                         | N/A                                                                        |