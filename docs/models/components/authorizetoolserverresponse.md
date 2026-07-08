# AuthorizeToolServerResponse

## Example Usage

```typescript
import { AuthorizeToolServerResponse } from "@gleanwork/api-client/models/components";

let value: AuthorizeToolServerResponse = {
  authorizationUrl: "https://talkative-folklore.info/",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorizationUrl`                                                                                                                                               | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | URL that the client should navigate the end user to in order to begin the OAuth flow.<br/>After the user consents, control returns to `returnUrl` from the request.<br/> |