# EditCollectionRequest

## Example Usage

```typescript
import { EditCollectionRequest } from "@gleanwork/api-client/models/components";

let value: EditCollectionRequest = {
  name: "<value>",
  addedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "VERIFIER",
    },
  ],
  removedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "EDITOR",
    },
  ],
  audienceFilters: [
    {
      fieldName: "type",
      values: [
        {
          value: "Spreadsheet",
          relationType: "EQUALS",
        },
        {
          value: "Presentation",
          relationType: "EQUALS",
        },
      ],
    },
  ],
  id: 239006,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique name of the Collection.                                                                                       |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A brief summary of the Collection's contents.                                                                            |
| `addedRoles`                                                                                                             | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                   | :heavy_minus_sign:                                                                                                       | A list of added user roles for the Collection.                                                                           |
| `removedRoles`                                                                                                           | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                   | :heavy_minus_sign:                                                                                                       | A list of removed user roles for the Collection.                                                                         |
| `audienceFilters`                                                                                                        | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                       | :heavy_minus_sign:                                                                                                       | Filters which restrict who should see this Collection. Values are taken from the corresponding filters in people search. |
| `icon`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The emoji icon of this Collection.                                                                                       |
| `adminLocked`                                                                                                            | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Indicates whether edits are allowed for everyone or only admins.                                                         |
| `parentId`                                                                                                               | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The parent of this Collection, or 0 if it's a top-level Collection.                                                      |
| `thumbnail`                                                                                                              | [components.Thumbnail](../../models/components/thumbnail.md)                                                             | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `allowedDatasource`                                                                                                      | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The datasource type this Collection can hold.                                                                            |
| `id`                                                                                                                     | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The ID of the Collection to modify.                                                                                      |