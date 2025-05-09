# FeedEntry

## Example Usage

```typescript
import { FeedEntry } from "@gleanwork/api-client/models/components";

let value: FeedEntry = {
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
    url: "https://frightened-anticodon.net",
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
    description: "gadzooks excepting phew gosh",
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
    id: 288099,
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
    collectionId: 223810,
    shortcut: {
      inputAlias: "<value>",
      destinationDocument: {},
    },
    itemType: "COLLECTION",
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
      lastUpdatedBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
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
    {
      actor: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `entryId`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | optional ID associated with a single feed entry (displayable_list_id)                                                       |                                                                                                                             |
| `title`                                                                                                                     | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Title for the result. Can be document title, event title and so on.                                                         |                                                                                                                             |
| `thumbnail`                                                                                                                 | [components.Thumbnail](../../models/components/thumbnail.md)                                                                | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `createdBy`                                                                                                                 | [components.Person](../../models/components/person.md)                                                                      | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                          |
| `uiConfig`                                                                                                                  | [components.UiConfig](../../models/components/uiconfig.md)                                                                  | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `justificationType`                                                                                                         | [components.JustificationType](../../models/components/justificationtype.md)                                                | :heavy_minus_sign:                                                                                                          | Type of the justification.                                                                                                  |                                                                                                                             |
| `justification`                                                                                                             | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Server side generated justification string if server provides one.                                                          |                                                                                                                             |
| `trackingToken`                                                                                                             | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | An opaque token that represents this particular feed entry in this particular response. To be used for /feedback reporting. |                                                                                                                             |
| `viewUrl`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | View URL for the entry if based on links that are not documents in Glean.                                                   |                                                                                                                             |
| `document`                                                                                                                  | [components.Document](../../models/components/document.md)                                                                  | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `event`                                                                                                                     | [components.CalendarEvent](../../models/components/calendarevent.md)                                                        | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `announcement`                                                                                                              | [components.Announcement](../../models/components/announcement.md)                                                          | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         | {<br/>"draftId": 342<br/>}                                                                                                  |
| `collection`                                                                                                                | [components.Collection](../../models/components/collection.md)                                                              | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `collectionItem`                                                                                                            | [components.CollectionItem](../../models/components/collectionitem.md)                                                      | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `person`                                                                                                                    | [components.Person](../../models/components/person.md)                                                                      | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                          |
| `app`                                                                                                                       | [components.AppResult](../../models/components/appresult.md)                                                                | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `promptTemplate`                                                                                                            | [components.PromptTemplateResult](../../models/components/prompttemplateresult.md)                                          | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `workflow`                                                                                                                  | [components.WorkflowResult](../../models/components/workflowresult.md)                                                      | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |
| `activities`                                                                                                                | [components.UserActivity](../../models/components/useractivity.md)[]                                                        | :heavy_minus_sign:                                                                                                          | List of activity where each activity has user, action, timestamp.                                                           |                                                                                                                             |
| `documentVisitorCount`                                                                                                      | [components.CountInfo](../../models/components/countinfo.md)                                                                | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |                                                                                                                             |