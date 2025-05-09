# FeedResult

## Example Usage

```typescript
import { FeedResult } from "@gleanwork/api-client/models/components";

let value: FeedResult = {
  category: "ZERO_STATE_CHAT_SUGGESTION",
  primaryEntry: {
    title: "<value>",
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
    event: {
      id: "<id>",
      url: "https://kooky-jungle.biz",
      attendees: {
        people: [],
      },
      generatedAttachments: [
        {
          documents: [
            {},
          ],
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          customer: {
            id: "<id>",
            company: {
              name: "<value>",
              location: "New York City",
              industry: "Finances",
              about:
                "Financial, software, data, and media company headquartered in Midtown Manhattan, New York City",
            },
            poc: [
              {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            ],
            mergedCustomers: [],
            notes: "CIO is interested in trying out the product.",
          },
          externalLinks: [
            {
              iconConfig: {
                color: "#343CED",
                key: "person_icon",
                iconType: "GLYPH",
                name: "user",
              },
            },
          ],
          content: [
            {
              displayHeader: "Action Items",
            },
          ],
        },
      ],
    },
    announcement: {
      draftId: 342,
    },
    collection: {
      name: "<value>",
      description: "yellow past whether",
      addedRoles: [],
      removedRoles: [],
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
      id: 680425,
      creator: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      updatedBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      items: [],
      children: [],
      roles: [],
    },
    collectionItem: {
      collectionId: 679242,
      shortcut: {
        inputAlias: "<value>",
        destinationDocument: {},
      },
      itemType: "DOCUMENT",
    },
    promptTemplate: {
      promptTemplate: {
        template: "<value>",
        addedRoles: [
          {
            role: "VERIFIER",
          },
        ],
        removedRoles: [
          {
            role: "ANSWER_MODERATOR",
          },
        ],
        lastUpdatedBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        roles: [
          {
            role: "VIEWER",
          },
        ],
      },
    },
    workflow: {
      workflow: {},
    },
    activities: [
      {
        actor: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    ],
  },
  secondaryEntries: [
    {
      title: "<value>",
      event: {
        id: "<id>",
        url: "https://wrong-hammock.biz",
        generatedAttachments: [
          {
            documents: [
              {},
            ],
            externalLinks: [
              {
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
            content: [
              {
                displayHeader: "Action Items",
              },
            ],
          },
        ],
      },
      announcement: {
        draftId: 342,
      },
      promptTemplate: {
        promptTemplate: {
          template: "<value>",
          addedRoles: [
            {
              role: "ANSWER_MODERATOR",
            },
          ],
          removedRoles: [
            {
              role: "ANSWER_MODERATOR",
            },
          ],
          roles: [
            {
              role: "ANSWER_MODERATOR",
            },
          ],
        },
      },
      workflow: {
        workflow: {},
      },
      activities: [
        {},
      ],
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `category`                                                                       | [components.FeedResultCategory](../../models/components/feedresultcategory.md)   | :heavy_check_mark:                                                               | Category of the result, one of the requested categories in incoming request.     |
| `primaryEntry`                                                                   | [components.FeedEntry](../../models/components/feedentry.md)                     | :heavy_check_mark:                                                               | N/A                                                                              |
| `secondaryEntries`                                                               | [components.FeedEntry](../../models/components/feedentry.md)[]                   | :heavy_minus_sign:                                                               | Secondary entries for the result e.g. suggested docs for the calendar, carousel. |
| `rank`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | Rank of the result. Rank is suggested by server. Client side rank may differ.    |