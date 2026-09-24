# PlatformSkillSourcePreviewStreamError

Terminal failure event carrying the failure as a problem detail.

## Example Usage

```typescript
import { PlatformSkillSourcePreviewStreamError } from "@gleanwork/api-client/models/components";

let value: PlatformSkillSourcePreviewStreamError = {
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
    authentication_suggestions: [],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [components.PlatformSkillSourcePreviewStreamErrorType](../../models/components/platformskillsourcepreviewstreamerrortype.md) | :heavy_check_mark:                                                                                                           | Event type, also sent as the SSE `event` name.                                                                               |
| `error`                                                                                                                      | [components.PlatformUnauthorizedAgentToolsProblem](../../models/components/platformunauthorizedagenttoolsproblem.md)         | :heavy_check_mark:                                                                                                           | Problem detail extended with `authentication_suggestions` naming each tool the caller must authorize.                        |