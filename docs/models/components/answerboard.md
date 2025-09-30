# AnswerBoard

## Example Usage

```typescript
import { AnswerBoard } from "@gleanwork/api-client/models/components";

let value: AnswerBoard = {
  name: "<value>",
  description: "dead nephew oh whereas vice astride",
  addedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "VIEWER",
    },
  ],
  removedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "VERIFIER",
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
  id: 747924,
  creator: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  updatedBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  roles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "ANSWER_MODERATOR",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The unique name of the Collection.                                                                                         |                                                                                                                            |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | A brief summary of the Collection's contents.                                                                              |                                                                                                                            |
| `addedRoles`                                                                                                               | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                     | :heavy_minus_sign:                                                                                                         | A list of added user roles for the Collection.                                                                             |                                                                                                                            |
| `removedRoles`                                                                                                             | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                     | :heavy_minus_sign:                                                                                                         | A list of removed user roles for the Collection.                                                                           |                                                                                                                            |
| `audienceFilters`                                                                                                          | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                         | :heavy_minus_sign:                                                                                                         | Filters which restrict who should see this Collection. Values are taken from the corresponding filters in people search.   |                                                                                                                            |
| `permissions`                                                                                                              | [components.ObjectPermissions](../../models/components/objectpermissions.md)                                               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `id`                                                                                                                       | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The unique ID of the Answer Board.                                                                                         |                                                                                                                            |
| `createTime`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `updateTime`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `creator`                                                                                                                  | [components.Person](../../models/components/person.md)                                                                     | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                         |
| `updatedBy`                                                                                                                | [components.Person](../../models/components/person.md)                                                                     | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                         |
| `itemCount`                                                                                                                | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The number of items currently in the Answer Board. Separated from the actual items so we can grab the count without items. |                                                                                                                            |
| `roles`                                                                                                                    | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                     | :heavy_minus_sign:                                                                                                         | A list of user roles for the Answer Board.                                                                                 |                                                                                                                            |