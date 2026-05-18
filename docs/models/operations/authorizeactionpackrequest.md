# AuthorizeActionPackRequest

## Example Usage

```typescript
import { AuthorizeActionPackRequest } from "@gleanwork/api-client/models/operations";

let value: AuthorizeActionPackRequest = {
  actionPackId: "<id>",
  authorizeActionPackRequest: {
    returnUrl: "https://well-worn-planula.com/",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `actionPackId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the action pack to query or authorize.                                                   |
| `authorizeActionPackRequest`                                                                   | [components.AuthorizeActionPackRequest](../../models/components/authorizeactionpackrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |