# AuthorizeActionPackRequest

## Example Usage

```typescript
import { AuthorizeActionPackRequest } from "@gleanwork/api-client/models/components";

let value: AuthorizeActionPackRequest = {
  returnUrl: "https://well-worn-planula.com/",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `returnUrl`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | URL on the customer's domain to redirect the end user's browser back to after the third-party OAuth<br/>callback completes. Must be present in the tenant's return URL allowlist.<br/> |