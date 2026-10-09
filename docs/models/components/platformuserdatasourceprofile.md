# PlatformUserDatasourceProfile

A user's account in a connected app.

## Example Usage

```typescript
import { PlatformUserDatasourceProfile } from "@gleanwork/api-client/models/components";

let value: PlatformUserDatasourceProfile = {
  datasource: "<value>",
  handle: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `datasource`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | Datasource of the account, for example slack or github.                                             |
| `handle`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | The account's handle or display name in the app.                                                    |
| `accountId`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The app's own ID for the account. Present only when Glean knows it, for example the Slack user ID.<br/> |
| `profileUrl`                                                                                        | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Web URL of the account's profile.                                                                   |