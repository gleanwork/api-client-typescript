# ChatResult

## Example Usage

```typescript
import { ChatResult } from "@gleanwork/api-client/models/components";

let value: ChatResult = {
  chat: {
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
                  startIndex: 486484,
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
                    numLikes: 732013,
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
                        remindAt: 616939,
                      },
                      candidateVerifiers: [],
                    },
                  },
                  board: {
                    name: "<value>",
                    description: "pretty immense whoa mechanically",
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
                    id: 209767,
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
                  description: "rudely gah cumbersome wherever salty unbalance",
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
                  id: 196194,
                  items: [],
                  children: [],
                },
                answerBoard: {
                  name: "<value>",
                  description: "inasmuch via saloon but scholarship",
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
                  id: 787759,
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
                displayName: "Antonio.White64",
                displayDescription: "<value>",
                objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `chat`                                                                                      | [components.Chat](../../models/components/chat.md)                                          | :heavy_minus_sign:                                                                          | A historical representation of a series of chat messages a user had with Glean Assistant.   |
| `trackingToken`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | An opaque token that represents this particular Chat. To be used for `/feedback` reporting. |