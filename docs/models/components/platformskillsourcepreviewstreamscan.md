# PlatformSkillSourcePreviewStreamScan

Repository scan started; names every skill path found.

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamScan } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamScan = {
  type: "SCAN",
  total: 451142,
  skill_paths: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [components.PlatformSkillSourcePreviewStreamScanType](../../models/components/platformskillsourcepreviewstreamscantype.md) | :heavy_check_mark:                                                                                                         | Event type, also sent as the SSE `event` name.                                                                             |
| `total`                                                                                                                    | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | Number of skill paths found in the scan.                                                                                   |
| `skillPaths`                                                                                                               | *string*[]                                                                                                                 | :heavy_check_mark:                                                                                                         | Skill paths found in the scan.                                                                                             |