# TeamInfoDefinition

Information about an employee's team

## Example Usage

```typescript
import { TeamInfoDefinition } from "@gleanwork/api-client/models/components";

let value: TeamInfoDefinition = {
  id: "<id>",
  name: "<value>",
  datasourceProfiles: [
    {
      datasource: "github",
      handle: "<value>",
    },
  ],
  members: [
    {
      email: "Burdette_Fisher46@yahoo.com",
    },
  ],
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                      | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The unique ID of the team                                                                                                 |
| `name`                                                                                                                    | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Human-readable team name                                                                                                  |
| `description`                                                                                                             | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The description of this team                                                                                              |
| `businessUnit`                                                                                                            | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Typically the highest level organizational unit; generally applies to bigger companies with multiple distinct businesses. |
| `department`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | An organizational unit where everyone has a similar task, e.g. `Engineering`.                                             |
| `photoUrl`                                                                                                                | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | A link to the team's photo                                                                                                |
| `externalLink`                                                                                                            | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | A link to an external team page. If set, team results will link to it.<br/>                                               |
| `emails`                                                                                                                  | [components.TeamEmail](../../models/components/teamemail.md)[]                                                            | :heavy_minus_sign:                                                                                                        | The emails of the team                                                                                                    |
| `datasourceProfiles`                                                                                                      | [components.DatasourceProfile](../../models/components/datasourceprofile.md)[]                                            | :heavy_minus_sign:                                                                                                        | The datasource profiles of the team, e.g. `Slack`,`Github`.                                                               |
| `members`                                                                                                                 | [components.TeamMember](../../models/components/teammember.md)[]                                                          | :heavy_check_mark:                                                                                                        | The members of the team                                                                                                   |
| `additionalFields`                                                                                                        | [components.AdditionalFieldDefinition](../../models/components/additionalfielddefinition.md)[]                            | :heavy_minus_sign:                                                                                                        | List of additional fields with more information about the team.                                                           |