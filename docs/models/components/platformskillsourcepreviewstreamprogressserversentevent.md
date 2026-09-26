# PlatformSkillSourcePreviewStreamProgressServerSentEvent

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamProgressServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamProgressServerSentEvent = {
  event: "PROGRESS",
  data: {
    type: "PROGRESS",
    completed: 84574,
    total: 663604,
    current_skill: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `event`                                                                                                                    | *"PROGRESS"*                                                                                                               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `data`                                                                                                                     | [components.PlatformSkillSourcePreviewStreamProgress](../../models/components/platformskillsourcepreviewstreamprogress.md) | :heavy_check_mark:                                                                                                         | One skill finished inspecting; names the skill in progress.                                                                |