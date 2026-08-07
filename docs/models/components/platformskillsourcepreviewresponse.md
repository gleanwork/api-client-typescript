# PlatformSkillSourcePreviewResponse

## Example Usage

```typescript
import { PlatformSkillSourcePreviewResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewResponse = {
  skills: [
    {
      display_name: "Bianka.Tremblay",
      description: "premier yowza lock",
      source_url: "https://splendid-godparent.name/",
      commit_sha: "<value>",
      main_content: "<value>",
      files: [],
      file_tree: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
  failures: [],
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `skills`                                                                                                       | [components.PlatformSkillSourcePreview](../../models/components/platformskillsourcepreview.md)[]               | :heavy_check_mark:                                                                                             | Valid skills discovered at the source URL.                                                                     |
| `failures`                                                                                                     | [components.PlatformSkillSourcePreviewFailure](../../models/components/platformskillsourcepreviewfailure.md)[] | :heavy_check_mark:                                                                                             | Discovered entries that could not be included in the preview.                                                  |
| `requestId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Platform-generated request ID for support correlation.                                                         |