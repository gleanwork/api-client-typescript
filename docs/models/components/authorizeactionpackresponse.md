# AuthorizeActionPackResponse

## Example Usage

```typescript
import { AuthorizeActionPackResponse } from "@gleanwork/api-client/models/components";

let value: AuthorizeActionPackResponse = {
  redirectUrl: "https://splendid-pacemaker.com/",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `redirectUrl`                                                                                                                                                                     | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | URL that the customer UI should navigate the end user to in order to begin the third-party OAuth flow.<br/>After the user consents, control returns to `returnUrl` from the request.<br/> |