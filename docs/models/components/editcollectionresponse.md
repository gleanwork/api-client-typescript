# EditCollectionResponse

## Example Usage

```typescript
import { EditCollectionResponse } from "@gleanwork/api-client/models/components";

let value: EditCollectionResponse = {
  name: "<value>",
  description: "briefly mature strictly strident sonar blindly hope why even",
  addedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "ANSWER_MODERATOR",
    },
  ],
  removedRoles: [
    {
      role: "OWNER",
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
  id: 495145,
  creator: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  updatedBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  items: [
    {
      collectionId: 805464,
      createdBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      document: {
        containerDocument: {
          parentDocument: {
            metadata: {
              datasource: "datasource",
              objectType: "Feature Request",
              container: "container",
              parentId: "JIRA_EN-1337",
              mimeType: "mimeType",
              documentId: "documentId",
              createTime: new Date("2000-01-23T04:56:07.000Z"),
              updateTime: new Date("2000-01-23T04:56:07.000Z"),
              author: {
                name: "name",
                obfuscatedId: "<id>",
              },
              components: [
                "Backend",
                "Networking",
              ],
              status: "[\"Done\"]",
              customData: {
                "someCustomField": {},
              },
            },
          },
        },
      },
      shortcut: {
        inputAlias: "<value>",
        destinationDocument: {},
        roles: [],
      },
      collection: {
        name: "<value>",
        description:
          "greatly amend notwithstanding highly drowse ugh contrast oddly as",
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
        id: 65405,
        children: [],
      },
      itemType: "DOCUMENT",
    },
  ],
  children: [
    {
      name: "<value>",
      description: "abaft poorly furthermore wherever with",
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
      id: 40583,
    },
  ],
  roles: [
    {
      role: "OWNER",
    },
  ],
  errorCode: "HEIGHT_VIOLATION",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique name of the Collection.                                                                                       |                                                                                                                          |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | A brief summary of the Collection's contents.                                                                            |                                                                                                                          |
| `addedRoles`                                                                                                             | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                   | :heavy_minus_sign:                                                                                                       | A list of added user roles for the Collection.                                                                           |                                                                                                                          |
| `removedRoles`                                                                                                           | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                   | :heavy_minus_sign:                                                                                                       | A list of removed user roles for the Collection.                                                                         |                                                                                                                          |
| `audienceFilters`                                                                                                        | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                       | :heavy_minus_sign:                                                                                                       | Filters which restrict who should see this Collection. Values are taken from the corresponding filters in people search. |                                                                                                                          |
| `icon`                                                                                                                   | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The emoji icon of this Collection.                                                                                       |                                                                                                                          |
| `adminLocked`                                                                                                            | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Indicates whether edits are allowed for everyone or only admins.                                                         |                                                                                                                          |
| `parentId`                                                                                                               | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The parent of this Collection, or 0 if it's a top-level Collection.                                                      |                                                                                                                          |
| `thumbnail`                                                                                                              | [components.Thumbnail](../../models/components/thumbnail.md)                                                             | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `allowedDatasource`                                                                                                      | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The datasource type this Collection can hold.                                                                            |                                                                                                                          |
| `permissions`                                                                                                            | [components.ObjectPermissions](../../models/components/objectpermissions.md)                                             | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `id`                                                                                                                     | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique ID of the Collection.                                                                                         |                                                                                                                          |
| `createTime`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `updateTime`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `creator`                                                                                                                | [components.Person](../../models/components/person.md)                                                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                       |
| `updatedBy`                                                                                                              | [components.Person](../../models/components/person.md)                                                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                       |
| `itemCount`                                                                                                              | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The number of items currently in the Collection. Separated from the actual items so we can grab the count without items. |                                                                                                                          |
| `childCount`                                                                                                             | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The number of children Collections. Separated from the actual children so we can grab the count without children.        |                                                                                                                          |
| `items`                                                                                                                  | [components.CollectionItem](../../models/components/collectionitem.md)[]                                                 | :heavy_minus_sign:                                                                                                       | The items in this Collection.                                                                                            |                                                                                                                          |
| `pinMetadata`                                                                                                            | [components.CollectionPinnedMetadata](../../models/components/collectionpinnedmetadata.md)                               | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `shortcuts`                                                                                                              | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | The names of the shortcuts (Go Links) that point to this Collection.                                                     |                                                                                                                          |
| `children`                                                                                                               | [components.Collection](../../models/components/collection.md)[]                                                         | :heavy_minus_sign:                                                                                                       | The children Collections of this Collection.                                                                             |                                                                                                                          |
| `roles`                                                                                                                  | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                   | :heavy_minus_sign:                                                                                                       | A list of user roles for the Collection.                                                                                 |                                                                                                                          |
| `errorCode`                                                                                                              | [components.EditCollectionResponseErrorCode](../../models/components/editcollectionresponseerrorcode.md)                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `collection`                                                                                                             | [components.Collection](../../models/components/collection.md)                                                           | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `error`                                                                                                                  | [components.CollectionError](../../models/components/collectionerror.md)                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |