# AuthToken

## Example Usage

```typescript
import { AuthToken } from "@gleanwork/api-client/models/components";

let value: AuthToken = {
  accessToken: "123abc",
  datasource: "gmail",
  scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
  tokenType: "Bearer",
  authUser: "1",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `datasource`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `scope`                                                                                                               | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `tokenType`                                                                                                           | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `authUser`                                                                                                            | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Used by Google to indicate the index of the logged in user. Useful for generating hyperlinks that support multilogin. |
| `expiration`                                                                                                          | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | Unix timestamp when this token expires (in seconds since epoch UTC).                                                  |