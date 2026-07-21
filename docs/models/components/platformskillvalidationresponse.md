# PlatformSkillValidationResponse

## Example Usage

```typescript
import { PlatformSkillValidationResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillValidationResponse = {
  metadata: {
    display_name: "Jimmie39",
    description: "consequently of ordinary finding eek parody tedious",
  },
  files: [
    {
      path: "/Applications",
      size_bytes: 187237,
      is_manifest: false,
    },
  ],
  warnings: [],
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                               | [components.PlatformSkillValidationMetadata](../../models/components/platformskillvalidationmetadata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `files`                                                                                                  | [components.PlatformSkillValidationFile](../../models/components/platformskillvalidationfile.md)[]       | :heavy_check_mark:                                                                                       | Normalized files in the bundle after stripping an optional single root folder.                           |
| `warnings`                                                                                               | [components.PlatformSkillValidationWarning](../../models/components/platformskillvalidationwarning.md)[] | :heavy_check_mark:                                                                                       | Non-blocking validation warnings.                                                                        |
| `requestId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Platform-generated request ID for support correlation.                                                   |