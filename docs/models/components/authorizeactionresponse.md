# AuthorizeActionResponse

## Example Usage

```typescript
import { AuthorizeActionResponse } from "@gleanwork/api-client/models/components";

let value: AuthorizeActionResponse = {
  redirectUrl: "https://shoddy-cafe.biz/",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `redirectUrl`                                                                                                                                                                     | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | URL that the customer UI should navigate the end user to in order to begin the third-party OAuth flow.<br/>After the user consents, control returns to `returnUrl` from the request.<br/> |