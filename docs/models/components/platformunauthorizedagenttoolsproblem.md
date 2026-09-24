# PlatformUnauthorizedAgentToolsProblem

Problem detail extended with `authentication_suggestions` naming each tool the caller must authorize.

## Example Usage

```typescript
import { PlatformUnauthorizedAgentToolsProblem } from "@gleanwork/api-client/models/components";

let value: PlatformUnauthorizedAgentToolsProblem = {
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | URI identifying the error type.                                                                              | https://developers.glean.com/errors/invalid-cursor                                                           |
| `title`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Short, human-readable summary of the error.                                                                  | Invalid Pagination Cursor                                                                                    |
| `status`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | HTTP status code mirrored from the response.                                                                 | 400                                                                                                          |
| `detail`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Human-readable explanation specific to this occurrence.                                                      | The provided cursor has expired. Start a new search to get a fresh cursor.<br/>                              |
| `code`                                                                                                       | [components.PlatformProblemDetailCode](../../models/components/platformproblemdetailcode.md)                 | :heavy_check_mark:                                                                                           | Stable machine-readable error code.                                                                          | invalid_cursor                                                                                               |
| `documentationUrl`                                                                                           | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Direct URL to documentation for this error code.                                                             | https://developers.glean.com/errors/invalid-cursor                                                           |
| `requestId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Platform-generated request ID for support correlation.                                                       | req_7f8a9b0c1d2e                                                                                             |
| `errors`                                                                                                     | [components.PlatformProblemDetailError](../../models/components/platformproblemdetailerror.md)[]             | :heavy_minus_sign:                                                                                           | Field-level validation problems, one entry per offending field.                                              |                                                                                                              |
| `authenticationSuggestions`                                                                                  | [components.PlatformAuthenticationSuggestion](../../models/components/platformauthenticationsuggestion.md)[] | :heavy_check_mark:                                                                                           | One entry per tool the caller must authorize.                                                                |                                                                                                              |