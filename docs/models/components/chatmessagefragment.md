# ChatMessageFragment

Represents a part of a ChatMessage that originates from a single action/tool. It is designed to support rich data formats beyond simple text, allowing for a more dynamic and interactive chat experience. Each fragment can include various types of content, such as text, search queries, action information, and more. Also, each ChatMessageFragment should only have one of structuredResults, querySuggestion, writeAction, followupAction, or file.

## Example Usage

```typescript
import { ChatMessageFragment } from "@gleanwork/api-client/models/components";

let value: ChatMessageFragment = {
  structuredResults: [
    {
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
        poc: [],
        mergedCustomers: [],
        notes: "CIO is interested in trying out the product.",
      },
      team: {
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
      customEntity: {
        roles: [],
      },
      answer: {
        id: 3,
        docId: "ANSWERS_answer_3",
        question: "Why is the sky blue?",
        bodyText:
          "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
        addedRoles: [],
        removedRoles: [],
        combinedAnswerText: {
          text:
            "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
          structuredList: [],
        },
        likes: {
          likedBy: [],
          likedByUser: false,
          numLikes: 717696,
        },
        updatedBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        verification: {
          state: "DEPRECATED",
          metadata: {
            lastVerifier: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            reminders: [],
            lastReminder: {
              assignee: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              requestor: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              remindAt: 14390,
            },
            candidateVerifiers: [],
          },
        },
        board: {
          name: "<value>",
          description: "provided psst hence till propound",
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
          id: 295878,
          creator: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        },
        collections: [],
        sourceDocument: {},
      },
      extractedQnA: {
        questionResult: {
          title: "title",
          url: "https://example.com/foo/bar",
          nativeAppUrl: "slack://foo/bar",
          snippets: [],
          mustIncludeSuggestions: {},
        },
      },
      meeting: {
        attendees: {
          people: [],
        },
      },
      collection: {
        name: "<value>",
        description: "surprisingly down plagiarise",
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
        id: 150173,
        items: [],
        children: [],
      },
      answerBoard: {
        name: "<value>",
        description: "down arrogantly scale",
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
        id: 758958,
      },
      code: {
        repoName: "scio",
        fileName: "README.md",
      },
      querySuggestions: {
        suggestions: [],
      },
      relatedDocuments: [],
      relatedQuestion: {
        ranges: [],
      },
    },
  ],
  querySuggestion: {
    query: "app:github type:pull author:mortimer",
    label: "Mortimer's PRs",
    datasource: "github",
  },
  file: {
    id: "FILE_1234",
    url: "www.google.com",
    name: "sample.pdf",
  },
  action: {
    metadata: {
      type: "ACTION",
      name: "<value>",
      displayName: "Hallie68",
      displayDescription: "<value>",
      objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `structuredResults`                                                                                                  | [components.StructuredResult](../../models/components/structuredresult.md)[]                                         | :heavy_minus_sign:                                                                                                   | An array of entities in the work graph retrieved via a data request.                                                 |                                                                                                                      |
| `trackingToken`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | An opaque token that represents this particular result in this particular query. To be used for /feedback reporting. |                                                                                                                      |
| `text`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `querySuggestion`                                                                                                    | [components.QuerySuggestion](../../models/components/querysuggestion.md)                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | {<br/>"query": "app:github type:pull author:mortimer",<br/>"label": "Mortimer's PRs",<br/>"datasource": "github"<br/>} |
| `file`                                                                                                               | [components.ChatFile](../../models/components/chatfile.md)                                                           | :heavy_minus_sign:                                                                                                   | Structure for file uploaded by a user for Chat.                                                                      |                                                                                                                      |
| `action`                                                                                                             | [components.ToolInfo](../../models/components/toolinfo.md)                                                           | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |