# ListEntitiesResponse

## Example Usage

```typescript
import { ListEntitiesResponse } from "@gleanwork/api-client/models/components";

let value: ListEntitiesResponse = {
  results: [
    {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  ],
  teamResults: [
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
  customEntityResults: [
    {
      roles: [],
    },
  ],
  facetResults: [
    {
      sourceName: "container_name",
      operatorName: "SelectMultiple",
      buckets: [
        {
          count: 1,
          datasource: "jira",
          percentage: 5,
          value: {
            stringValue: "engineering",
            integerValue: 5,
            displayLabel: "engineering",
            iconConfig: {
              color: "#343CED",
              key: "person_icon",
              iconType: "GLYPH",
              name: "user",
            },
          },
        },
      ],
      hasMoreBuckets: false,
      groupName: "Service Cloud",
    },
  ],
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                 | [components.Person](../../models/components/person.md)[]                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `teamResults`                                                                                                             | [components.Team](../../models/components/team.md)[]                                                                      | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `customEntityResults`                                                                                                     | [components.CustomEntity](../../models/components/customentity.md)[]                                                      | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `facetResults`                                                                                                            | [components.FacetResult](../../models/components/facetresult.md)[]                                                        | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `cursor`                                                                                                                  | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Pagination cursor. A previously received opaque token representing the position in the overall results at which to start. |
| `totalCount`                                                                                                              | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The total number of entities available                                                                                    |
| `hasMoreResults`                                                                                                          | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Whether or not more entities can be fetched.                                                                              |
| `sortOptions`                                                                                                             | [components.EntitiesSortOrder](../../models/components/entitiessortorder.md)[]                                            | :heavy_minus_sign:                                                                                                        | Sort options from EntitiesSortOrder supported for this response. Default is empty list.                                   |
| `customFacetNames`                                                                                                        | *string*[]                                                                                                                | :heavy_minus_sign:                                                                                                        | list of Person attributes that are custom setup by deployment                                                             |