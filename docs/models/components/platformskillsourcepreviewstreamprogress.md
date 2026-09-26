# PlatformSkillSourcePreviewStreamProgress

One skill finished inspecting; names the skill in progress.

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamProgress } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamProgress = {
  type: "PROGRESS",
  completed: 377222,
  total: 419712,
  current_skill: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [components.PlatformSkillSourcePreviewStreamProgressType](../../models/components/platformskillsourcepreviewstreamprogresstype.md) | :heavy_check_mark:                                                                                                                 | Event type, also sent as the SSE `event` name.                                                                                     |
| `completed`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Number of skills inspected so far.                                                                                                 |
| `total`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Number of skills to inspect.                                                                                                       |
| `currentSkill`                                                                                                                     | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Path of the skill being inspected.                                                                                                 |