# PlatformSkillSourcePreviewStreamResult

Terminal success event carrying the fully assembled preview.

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamResult } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamResult = {
  type: "RESULT",
  response: {
    skills: [],
    failures: [],
    request_id: "<id>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.PlatformSkillSourcePreviewStreamResultType](../../models/components/platformskillsourcepreviewstreamresulttype.md) | :heavy_check_mark:                                                                                                             | Event type, also sent as the SSE `event` name.                                                                                 |
| `response`                                                                                                                     | [components.PlatformSkillSourcePreviewResponse](../../models/components/platformskillsourcepreviewresponse.md)                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |