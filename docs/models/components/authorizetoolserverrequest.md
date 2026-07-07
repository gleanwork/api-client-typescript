# AuthorizeToolServerRequest

## Example Usage

```typescript
import { AuthorizeToolServerRequest } from "@gleanwork/api-client/models/components";

let value: AuthorizeToolServerRequest = {
  returnUrl: "https://timely-jazz.biz",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `returnUrl`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | URL to redirect the end user's browser back to after the OAuth flow completes.<br/>Must be present in the tenant's configured return URL allowlist.<br/> |