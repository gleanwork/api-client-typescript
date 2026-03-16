# TeamEmail

Information about a team's email

## Example Usage

```typescript
import { TeamEmail } from "@gleanwork/api-client/models/components";

let value: TeamEmail = {
  email: "Reilly_Fadel@hotmail.com",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `email`                                              | *string*                                             | :heavy_check_mark:                                   | An email address                                     |
| `type`                                               | *string*                                             | :heavy_minus_sign:                                   | An enum of `PRIMARY`, `SECONDARY`, `ONCALL`, `OTHER` |