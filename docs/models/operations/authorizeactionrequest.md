# AuthorizeActionRequest

## Example Usage

```typescript
import { AuthorizeActionRequest } from "@gleanwork/api-client/models/operations";

let value: AuthorizeActionRequest = {
  actionPackId: "<id>",
  authorizeActionRequest: {
    returnUrl: "https://tender-suv.org",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `actionPackId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | ID of the action pack to query or authorize.                                           |
| `authorizeActionRequest`                                                               | [components.AuthorizeActionRequest](../../models/components/authorizeactionrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |