# GetCollectionResponse

## Example Usage

```typescript
import { GetCollectionResponse } from "@gleanwork/api-client/models/components";

let value: GetCollectionResponse = {
  collection: {
    name: "<value>",
    description:
      "impanel importance pale parody towards wildly elementary unbearably",
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
    id: 390864,
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
        description: "viciously creator incidentally hole pecan",
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
        id: 581341,
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
  rootCollection: {
    name: "<value>",
    description: "fully weakly our",
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
    id: 145440,
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
        collectionId: 30842,
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
            "impanel importance pale parody towards wildly elementary unbearably",
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
          id: 390864,
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
              description: "viciously creator incidentally hole pecan",
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
              id: 581341,
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
      },
    ],
    children: [
      {
        name: "<value>",
        description: "viciously creator incidentally hole pecan",
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
        id: 581341,
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
    roles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        role: "ANSWER_MODERATOR",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collection`                                                                                                                                                               | [components.Collection](../../models/components/collection.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `rootCollection`                                                                                                                                                           | [components.Collection](../../models/components/collection.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `error`                                                                                                                                                                    | [components.CollectionError](../../models/components/collectionerror.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |
| ~~`trackingToken`~~                                                                                                                                                        | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | : warning: ** DEPRECATED **: Deprecated on 2026-05-07, removal scheduled for 2027-01-15: Use `collection.trackingToken` instead..<br/><br/>Use `collection.trackingToken` instead. |