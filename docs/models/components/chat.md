# Chat

A historical representation of a series of chat messages a user had with Glean Assistant.

## Example Usage

```typescript
import { Chat } from "@gleanwork/api-client/models/components";

let value: Chat = {
  createdBy: {
    name: "George Clooney",
    obfuscatedId: "abc123",
  },
  icon: {
    color: "#343CED",
    key: "person_icon",
    iconType: "GLYPH",
    name: "user",
  },
  messages: [
    {
      citations: [
        {
          sourceDocument: {
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
          sourceFile: {
            id: "FILE_1234",
            url: "www.google.com",
            name: "sample.pdf",
          },
          sourcePerson: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          referenceRanges: [
            {
              textRange: {
                startIndex: 212740,
                document: {},
              },
              snippets: [
                {
                  snippet: "snippet",
                  mimeType: "mimeType",
                },
              ],
            },
          ],
        },
      ],
      fragments: [
        {
          structuredResults: [
            {
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
                  numLikes: 814527,
                },
                updatedBy: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
                verification: {
                  state: "VERIFIED",
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
                      remindAt: 374358,
                    },
                    candidateVerifiers: [],
                  },
                },
                board: {
                  name: "<value>",
                  description: "unfinished although fog vice stock",
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
                  id: 213107,
                  creator: {
                    name: "George Clooney",
                    obfuscatedId: "abc123",
                  },
                },
                collections: [],
              },
              extractedQnA: {
                questionResult: {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
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
                description: "round blah amid progress usefully chase once",
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
                id: 154816,
                items: [],
                children: [],
              },
              answerBoard: {
                name: "<value>",
                description: "for specific although attribute",
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
                id: 31640,
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
              type: "RETRIEVAL",
              name: "<value>",
              displayName: "Jerald15",
              displayDescription: "<value>",
              objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
            },
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | The opaque id of the Chat.                                                        |                                                                                   |
| `createTime`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | Server Unix timestamp of the creation time (in seconds since epoch UTC).          |                                                                                   |
| `createdBy`                                                                       | [components.Person](../../models/components/person.md)                            | :heavy_minus_sign:                                                                | N/A                                                                               | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                |
| `updateTime`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | Server Unix timestamp of the update time (in seconds since epoch UTC).            |                                                                                   |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | The name of the Chat.                                                             |                                                                                   |
| `applicationId`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | The ID of the AI App that this Chat is associated to.                             |                                                                                   |
| `applicationName`                                                                 | *string*                                                                          | :heavy_minus_sign:                                                                | The display name of the AI App that this Chat is associated to.                   |                                                                                   |
| `icon`                                                                            | [components.IconConfig](../../models/components/iconconfig.md)                    | :heavy_minus_sign:                                                                | Defines how to render an icon                                                     | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |
| `messages`                                                                        | [components.ChatMessage](../../models/components/chatmessage.md)[]                | :heavy_minus_sign:                                                                | The chat messages within a Chat.                                                  |                                                                                   |