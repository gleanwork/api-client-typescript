# IndexTeamRequest

Info about a team and optional version for that info

## Example Usage

```typescript
import { IndexTeamRequest } from "@gleanwork/api-client/models/components";

let value: IndexTeamRequest = {
  team: {
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
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `team`                                                                             | [components.TeamInfoDefinition](../../models/components/teaminfodefinition.md)     | :heavy_check_mark:                                                                 | Information about an employee's team                                               |
| `version`                                                                          | *number*                                                                           | :heavy_minus_sign:                                                                 | Version number for the team object. If absent or 0 then no version checks are done |