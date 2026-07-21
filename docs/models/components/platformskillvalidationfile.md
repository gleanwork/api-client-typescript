# PlatformSkillValidationFile

## Example Usage

```typescript
import { PlatformSkillValidationFile } from "@gleanwork/api-client/models/components";

let value: PlatformSkillValidationFile = {
  path: "/usr/X11R6",
  size_bytes: 562050,
  is_manifest: false,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `path`                                        | *string*                                      | :heavy_check_mark:                            | Normalized relative path in the skill bundle. |
| `sizeBytes`                                   | *number*                                      | :heavy_check_mark:                            | File size in bytes.                           |
| `isManifest`                                  | *boolean*                                     | :heavy_check_mark:                            | Whether this file is the skill manifest.      |