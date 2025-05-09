# GetChatResponse

## Example Usage

```typescript
import { GetChatResponse } from "@gleanwork/api-client/models/components";

let value: GetChatResponse = {
  chatResult: {
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
                    startIndex: 196113,
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
                    poc: [
                      {
                        name: "George Clooney",
                        obfuscatedId: "abc123",
                      },
                    ],
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
                      numLikes: 600760,
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
                          remindAt: 940638,
                        },
                        candidateVerifiers: [
                          {
                            name: "George Clooney",
                            obfuscatedId: "abc123",
                          },
                        ],
                      },
                    },
                    board: {
                      name: "<value>",
                      description: "during ick flustered incidentally",
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
                      id: 263742,
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
                      snippets: [
                        {
                          snippet: "snippet",
                          mimeType: "mimeType",
                        },
                      ],
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
                    description:
                      "derby once absent stump pish seldom loaf depute far",
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
                    id: 475860,
                    items: [],
                    children: [],
                  },
                  answerBoard: {
                    name: "<value>",
                    description:
                      "what expert poppy conservative yahoo syringe unrealistic",
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
                    id: 751898,
                  },
                  code: {
                    repoName: "scio",
                    fileName: "README.md",
                  },
                  shortcut: {
                    inputAlias: "<value>",
                    destinationDocument: {},
                  },
                  querySuggestions: {
                    suggestions: [
                      {
                        query: "app:github type:pull author:mortimer",
                        label: "Mortimer's PRs",
                        datasource: "github",
                      },
                    ],
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
                  displayName: "Pierce58",
                  displayDescription: "<value>",
                  objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
                },
              },
            },
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `chatResult`                                                   | [components.ChatResult](../../models/components/chatresult.md) | :heavy_minus_sign:                                             | N/A                                                            |