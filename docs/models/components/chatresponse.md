# ChatResponse

A single response from the /chat backend.

## Example Usage

```typescript
import { ChatResponse } from "@gleanwork/api-client/models/components";

let value: ChatResponse = {
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
                startIndex: 441442,
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
                  numLikes: 973316,
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
                      remindAt: 399728,
                    },
                    candidateVerifiers: [],
                  },
                },
                board: {
                  name: "<value>",
                  description:
                    "phew terribly burly nutritious mysteriously who",
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
                  id: 135035,
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
                description: "tightly at submissive successfully annually um",
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
                id: 19074,
                items: [],
                children: [],
              },
              answerBoard: {
                name: "<value>",
                description: "or around hence potentially till",
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
                id: 27404,
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
              displayName: "Henderson76",
              displayDescription: "<value>",
              objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
            },
          },
        },
      ],
    },
  ],
  backendTimeMillis: 1100,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `messages`                                                           | [components.ChatMessage](../../models/components/chatmessage.md)[]   | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `chatId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | The id of the associated Chat the messages belong to, if one exists. |                                                                      |
| `followUpPrompts`                                                    | *string*[]                                                           | :heavy_minus_sign:                                                   | Follow-up prompts for the user to potentially use                    |                                                                      |
| `backendTimeMillis`                                                  | *number*                                                             | :heavy_minus_sign:                                                   | Time in milliseconds the backend took to respond to the request.     | 1100                                                                 |
| `chatSessionTrackingToken`                                           | *string*                                                             | :heavy_minus_sign:                                                   | A token that is used to track the session.                           |                                                                      |