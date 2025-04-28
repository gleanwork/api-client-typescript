# GeteventsRequest

## Example Usage

```typescript
import { GeteventsRequest } from "@gleanwork/api-client/models/operations";

let value: GeteventsRequest = {
  getEventsRequest: {
    ids: [
      "<value>",
    ],
    authTokens: [
      {
        accessToken: "123abc",
        datasource: "gmail",
        scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
        tokenType: "Bearer",
        authUser: "1",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `getEventsRequest`                                                                                                       | [components.GetEventsRequest](../../models/components/geteventsrequest.md)                                               | :heavy_check_mark:                                                                                                       | GetEvents request                                                                                                        |