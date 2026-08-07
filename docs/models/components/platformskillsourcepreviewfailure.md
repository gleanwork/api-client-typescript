# PlatformSkillSourcePreviewFailure

## Example Usage

```typescript
import { PlatformSkillSourcePreviewFailure } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewFailure = {
  source_url: "https://massive-plumber.net/",
  code: "INVALID_SKILL",
  detail: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `sourceUrl`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Resolved URL for the entry that could not be previewed.                                                              |
| `code`                                                                                                               | [components.PlatformSkillSourcePreviewFailureCode](../../models/components/platformskillsourcepreviewfailurecode.md) | :heavy_check_mark:                                                                                                   | Stable machine-readable reason a discovered entry was excluded.                                                      |
| `detail`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Safe explanation of why the entry was excluded.                                                                      |