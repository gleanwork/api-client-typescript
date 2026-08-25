# PlatformSkillImportRequest

## Example Usage

```typescript
import { PlatformSkillImportRequest } from "@gleanwork/api-client/models/components";

let value: PlatformSkillImportRequest = {
  source_urls: [
    "https://github.com/anthropics/skills/tree/main/skills/skill-creator",
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `sourceUrls`                                               | *string*[]                                                 | :heavy_check_mark:                                         | Resolved GitHub skill URLs selected from a source preview. |