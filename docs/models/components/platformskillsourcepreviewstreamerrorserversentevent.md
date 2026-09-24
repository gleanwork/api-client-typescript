# PlatformSkillSourcePreviewStreamErrorServerSentEvent

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamErrorServerSentEvent } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamErrorServerSentEvent = {
  event: "ERROR",
  data: {
    type: "ERROR",
    error: {
      type: "https://developers.glean.com/errors/invalid-cursor",
      title: "Invalid Pagination Cursor",
      status: 400,
      detail:
        "The provided cursor has expired. Start a new search to get a fresh cursor.\n",
      code: "invalid_cursor",
      documentation_url: "https://developers.glean.com/errors/invalid-cursor",
      request_id: "req_7f8a9b0c1d2e",
      errors: [
        {
          pointer: "/messages/0/role",
          detail: "Must be one of: USER, GLEAN_AI.",
          code: "invalid_cursor",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `event`                                                                                                              | *"ERROR"*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.PlatformSkillSourcePreviewStreamError](../../models/components/platformskillsourcepreviewstreamerror.md) | :heavy_check_mark:                                                                                                   | Terminal failure event carrying the failure as a problem detail.                                                     |