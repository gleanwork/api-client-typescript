# TeamMember

Information about a team's member

## Example Usage

```typescript
import { TeamMember } from "@gleanwork/api-client/models/components";

let value: TeamMember = {
  email: "Candice.Runte25@hotmail.com",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The member's email                                                                                         |
| `relationship`                                                                                             | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The member's relationship to the team, an enum of `MEMBER`, `MANAGER`, `LEAD`, `POINT_OF_CONTACT`, `OTHER` |
| `joinDate`                                                                                                 | [RFCDate](../../types/rfcdate.md)                                                                          | :heavy_minus_sign:                                                                                         | The member's start date                                                                                    |