# ChatRequest

## Example Usage

```typescript
import { ChatRequest } from "@gleanwork/api-client/models/operations";

let value: ChatRequest = {
  chatRequest: {
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
                  startIndex: 483991,
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
                    numLikes: 333200,
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
                        remindAt: 939918,
                      },
                      candidateVerifiers: [],
                    },
                  },
                  board: {
                    name: "<value>",
                    description: "decongestant beyond yuck till obvious",
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
                    id: 148141,
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
                  description: "beneath meatloaf sticky creature",
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
                  id: 224949,
                  items: [],
                  children: [],
                },
                answerBoard: {
                  name: "<value>",
                  description: "besides yearly unfortunately institute",
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
                  id: 882696,
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
                displayName: "Garret_Pagac-Armstrong28",
                displayDescription: "<value>",
                objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
              },
            },
          },
        ],
      },
    ],
    timeoutMillis: 30000,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens). |
| `xGleanAuthType`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                |
| `timezoneOffset`                                                                                                         | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC.               |
| `chatRequest`                                                                                                            | [components.ChatRequest](../../models/components/chatrequest.md)                                                         | :heavy_check_mark:                                                                                                       | Includes chat history for Glean AI to respond to.                                                                        |