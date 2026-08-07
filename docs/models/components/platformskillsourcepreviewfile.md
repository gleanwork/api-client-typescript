# PlatformSkillSourcePreviewFile

## Example Usage

```typescript
import { PlatformSkillSourcePreviewFile } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewFile = {
  path: "/private/var",
  content: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `path`                                 | *string*                               | :heavy_check_mark:                     | Relative path within the skill bundle. |
| `content`                              | *string*                               | :heavy_check_mark:                     | UTF-8 file content.                    |