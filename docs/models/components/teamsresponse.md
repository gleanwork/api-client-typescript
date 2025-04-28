# TeamsResponse

## Example Usage

```typescript
import { TeamsResponse } from "@gleanwork/api-client/models/components";

let value: TeamsResponse = {
  results: [
    {
      id: "<id>",
      name: "<value>",
      members: [],
      customFields: [],
      datasourceProfiles: [
        {
          datasource: "github",
          handle: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `results`                                                            | [components.Team](../../models/components/team.md)[]                 | :heavy_minus_sign:                                                   | A Team and a deep copy of all its members for each ID in the request |
| `errors`                                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | A list of IDs that could not be found.                               |