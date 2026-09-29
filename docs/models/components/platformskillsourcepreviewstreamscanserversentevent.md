# PlatformSkillSourcePreviewStreamScanServerSentEvent

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamScanServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamScanServerSentEvent = {
  event: "SCAN",
  data: {
    type: "SCAN",
    total: 524276,
    skill_paths: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `event`                                                                                                            | *"SCAN"*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.PlatformSkillSourcePreviewStreamScan](../../models/components/platformskillsourcepreviewstreamscan.md) | :heavy_check_mark:                                                                                                 | Repository scan started; names every skill path found.                                                             |