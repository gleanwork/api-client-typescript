# PlatformSkillSourcePreviewStreamError

Terminal failure event carrying the failure as a problem detail. Most GitHub authorization failures return HTTP 422 before the stream opens. If authorization fails after the stream opens, `error.code` is `tools_unauthorized` and `authentication_suggestions` is present.

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
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [components.PlatformSkillSourcePreviewStreamErrorType](../../models/components/platformskillsourcepreviewstreamerrortype.md)                       | :heavy_check_mark:                                                                                                                                 | Event type, also sent as the SSE `event` name.                                                                                                     |
| `error`                                                                                                                                            | [components.PlatformProblemDetail](../../models/components/platformproblemdetail.md)                                                               | :heavy_check_mark:                                                                                                                                 | Error response following RFC 9457, extended with `code` and `documentation_url` for machine-readable classification and self-service remediation.<br/> |
| `authenticationSuggestions`                                                                                                                        | [components.PlatformAuthenticationSuggestion](../../models/components/platformauthenticationsuggestion.md)[]                                       | :heavy_minus_sign:                                                                                                                                 | Present only when `error.code` is `tools_unauthorized`. Names the GitHub action pack to authorize, with the same retry flow as the 422 response.   |