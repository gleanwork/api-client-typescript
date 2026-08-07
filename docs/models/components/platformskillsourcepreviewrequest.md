# PlatformSkillSourcePreviewRequest

## Example Usage

```typescript
import { PlatformSkillSourcePreviewRequest } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewRequest = {
  source_url: "https://clean-shoulder.net/",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `sourceUrl`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | GitHub URL for a skill directory, SKILL.md file, or repository to inspect. |
| `stream`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether to stream repository scan progress using server-sent events.       |