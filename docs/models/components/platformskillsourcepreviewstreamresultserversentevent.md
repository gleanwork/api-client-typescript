# PlatformSkillSourcePreviewStreamResultServerSentEvent

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamResultServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamResultServerSentEvent = {
  event: "RESULT",
  data: {
    type: "RESULT",
    response: {
      skills: [],
      failures: [],
      request_id: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `event`                                                                                                                | *"RESULT"*                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `data`                                                                                                                 | [components.PlatformSkillSourcePreviewStreamResult](../../models/components/platformskillsourcepreviewstreamresult.md) | :heavy_check_mark:                                                                                                     | Terminal success event carrying the fully assembled preview.                                                           |