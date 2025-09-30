# CollectionItem

## Example Usage

```typescript
import { CollectionItem } from "@gleanwork/api-client/models/components";

let value: CollectionItem = {
  collectionId: 449866,
  createdBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  document: {
    containerDocument: {
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
  shortcut: {
    inputAlias: "<value>",
    createdBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    updatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    destinationDocument: {
      containerDocument: {
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
  collection: {
    name: "<value>",
    description:
      "feline charming fast vibraphone immediately viciously creator",
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
    id: 278414,
    creator: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    updatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    children: [
      {
        name: "<value>",
        description: "design cappelletti kettledrum",
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
        id: 635422,
        creator: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        updatedBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    ],
  },
  itemType: "TEXT",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The optional name of the Collection item.                                                     |                                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | A helpful description of why this CollectionItem is in the Collection that it's in.           |                                                                                               |
| `icon`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The emoji icon for this CollectionItem. Only used for Text type items.                        |                                                                                               |
| `collectionId`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The Collection ID of the Collection that this CollectionItem belongs in.                      |                                                                                               |
| `documentId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | If this CollectionItem is indexed, the Glean Document ID of that document.                    |                                                                                               |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL of this CollectionItem.                                                               |                                                                                               |
| `itemId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the item within the Collection it belongs to.                           |                                                                                               |
| `createdBy`                                                                                   | [components.Person](../../models/components/person.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Unix timestamp for when the item was first added (in seconds since epoch UTC).                |                                                                                               |
| `document`                                                                                    | [components.Document](../../models/components/document.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `shortcut`                                                                                    | [components.Shortcut](../../models/components/shortcut.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `collection`                                                                                  | [components.Collection](../../models/components/collection.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `itemType`                                                                                    | [components.CollectionItemItemType](../../models/components/collectionitemitemtype.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |