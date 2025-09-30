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
              },
              snippets: [
                {
                  mimeType: "mimeType",
                  snippet: "snippet",
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
                mergedCustomers: [
                  {
                    id: "<id>",
                    company: {
                      name: "<value>",
                      location: "New York City",
                      industry: "Finances",
                      about:
                        "Financial, software, data, and media company headquartered in Midtown Manhattan, New York City",
                    },
                    notes: "CIO is interested in trying out the product.",
                  },
                ],
                notes: "CIO is interested in trying out the product.",
              },
              team: {
                id: "<id>",
                name: "<value>",
                members: [
                  {
                    person: {
                      name: "George Clooney",
                      obfuscatedId: "abc123",
                    },
                  },
                ],
                customFields: [
                  {
                    label: "<value>",
                    values: [],
                  },
                ],
                datasourceProfiles: [
                  {
                    datasource: "github",
                    handle: "<value>",
                  },
                ],
              },
              customEntity: {
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
                combinedAnswerText: {
                  text:
                    "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
                  structuredList: [
                    {
                      link:
                        "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
                      text:
                        "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
                      structuredResult: {
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
                          mergedCustomers: [
                            {
                              id: "<id>",
                              company: {
                                name: "<value>",
                                location: "New York City",
                                industry: "Finances",
                                about:
                                  "Financial, software, data, and media company headquartered in Midtown Manhattan, New York City",
                              },
                              notes:
                                "CIO is interested in trying out the product.",
                            },
                          ],
                          notes: "CIO is interested in trying out the product.",
                        },
                        team: {
                          id: "<id>",
                          name: "<value>",
                          members: [
                            {
                              person: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                            },
                          ],
                          customFields: [
                            {
                              label: "<value>",
                              values: [],
                            },
                          ],
                          datasourceProfiles: [
                            {
                              datasource: "github",
                              handle: "<value>",
                            },
                          ],
                        },
                        customEntity: {
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
                          combinedAnswerText: {
                            text:
                              "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
                          },
                          likes: {
                            likedBy: [],
                            likedByUser: true,
                            numLikes: 32410,
                          },
                          author: {
                            name: "George Clooney",
                            obfuscatedId: "abc123",
                          },
                          updatedBy: {
                            name: "George Clooney",
                            obfuscatedId: "abc123",
                          },
                          verification: {
                            state: "UNVERIFIED",
                            metadata: {
                              lastVerifier: {
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
                                    createTime: new Date(
                                      "2000-01-23T04:56:07.000Z",
                                    ),
                                    updateTime: new Date(
                                      "2000-01-23T04:56:07.000Z",
                                    ),
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
                                    createTime: new Date(
                                      "2000-01-23T04:56:07.000Z",
                                    ),
                                    updateTime: new Date(
                                      "2000-01-23T04:56:07.000Z",
                                    ),
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
                                  createTime: new Date(
                                    "2000-01-23T04:56:07.000Z",
                                  ),
                                  updateTime: new Date(
                                    "2000-01-23T04:56:07.000Z",
                                  ),
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
                              reminders: [
                                {
                                  assignee: {
                                    name: "George Clooney",
                                    obfuscatedId: "abc123",
                                  },
                                  requestor: {
                                    name: "George Clooney",
                                    obfuscatedId: "abc123",
                                  },
                                  remindAt: 337545,
                                },
                              ],
                              lastReminder: {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                requestor: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 349760,
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
                            description:
                              "huzzah ick warp desk tedious tightly supposing bandwidth aboard pish",
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
                            id: 782149,
                            creator: {
                              name: "George Clooney",
                              obfuscatedId: "abc123",
                            },
                            updatedBy: {
                              name: "George Clooney",
                              obfuscatedId: "abc123",
                            },
                          },
                          collections: [
                            {
                              name: "<value>",
                              description: "because times times",
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
                              id: 592299,
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
                                  collectionId: 795342,
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
                                        createTime: new Date(
                                          "2000-01-23T04:56:07.000Z",
                                        ),
                                        updateTime: new Date(
                                          "2000-01-23T04:56:07.000Z",
                                        ),
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
                                        createTime: new Date(
                                          "2000-01-23T04:56:07.000Z",
                                        ),
                                        updateTime: new Date(
                                          "2000-01-23T04:56:07.000Z",
                                        ),
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
                                      createTime: new Date(
                                        "2000-01-23T04:56:07.000Z",
                                      ),
                                      updateTime: new Date(
                                        "2000-01-23T04:56:07.000Z",
                                      ),
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
                                          createTime: new Date(
                                            "2000-01-23T04:56:07.000Z",
                                          ),
                                          updateTime: new Date(
                                            "2000-01-23T04:56:07.000Z",
                                          ),
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
                                          createTime: new Date(
                                            "2000-01-23T04:56:07.000Z",
                                          ),
                                          updateTime: new Date(
                                            "2000-01-23T04:56:07.000Z",
                                          ),
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
                                        createTime: new Date(
                                          "2000-01-23T04:56:07.000Z",
                                        ),
                                        updateTime: new Date(
                                          "2000-01-23T04:56:07.000Z",
                                        ),
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
                                        description:
                                          "design cappelletti kettledrum",
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
                                  itemType: "URL",
                                },
                              ],
                            },
                          ],
                          sourceDocument: {
                            containerDocument: {
                              metadata: {
                                datasource: "datasource",
                                objectType: "Feature Request",
                                container: "container",
                                parentId: "JIRA_EN-1337",
                                mimeType: "mimeType",
                                documentId: "documentId",
                                createTime: new Date(
                                  "2000-01-23T04:56:07.000Z",
                                ),
                                updateTime: new Date(
                                  "2000-01-23T04:56:07.000Z",
                                ),
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
                                createTime: new Date(
                                  "2000-01-23T04:56:07.000Z",
                                ),
                                updateTime: new Date(
                                  "2000-01-23T04:56:07.000Z",
                                ),
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
                        generatedQna: {
                          ranges: [
                            {
                              startIndex: 851363,
                              document: {
                                containerDocument: {
                                  metadata: {
                                    datasource: "datasource",
                                    objectType: "Feature Request",
                                    container: "container",
                                    parentId: "JIRA_EN-1337",
                                    mimeType: "mimeType",
                                    documentId: "documentId",
                                    createTime: new Date(
                                      "2000-01-23T04:56:07.000Z",
                                    ),
                                    updateTime: new Date(
                                      "2000-01-23T04:56:07.000Z",
                                    ),
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
                                    createTime: new Date(
                                      "2000-01-23T04:56:07.000Z",
                                    ),
                                    updateTime: new Date(
                                      "2000-01-23T04:56:07.000Z",
                                    ),
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
                                  createTime: new Date(
                                    "2000-01-23T04:56:07.000Z",
                                  ),
                                  updateTime: new Date(
                                    "2000-01-23T04:56:07.000Z",
                                  ),
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
                          ],
                        },
                        extractedQnA: {
                          questionResult: {
                            title: "title",
                            url: "https://example.com/foo/bar",
                            nativeAppUrl: "slack://foo/bar",
                            snippets: [
                              {
                                mimeType: "mimeType",
                                snippet: "snippet",
                              },
                            ],
                            mustIncludeSuggestions: {
                              suggestions: [
                                {
                                  query: "app:github type:pull author:mortimer",
                                  label: "Mortimer's PRs",
                                  datasource: "github",
                                },
                              ],
                              person: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                            },
                          },
                        },
                        meeting: {
                          attendees: {
                            people: [
                              {
                                person: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                groupAttendees: [
                                  {
                                    person: {
                                      name: "George Clooney",
                                      obfuscatedId: "abc123",
                                    },
                                  },
                                ],
                              },
                            ],
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
                        answerBoard: {
                          name: "<value>",
                          description:
                            "um verbally till like provided recklessly yowza plus boohoo weary",
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
                          id: 70559,
                          creator: {
                            name: "George Clooney",
                            obfuscatedId: "abc123",
                          },
                          updatedBy: {
                            name: "George Clooney",
                            obfuscatedId: "abc123",
                          },
                        },
                        code: {
                          repoName: "scio",
                          fileName: "README.md",
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
                                createTime: new Date(
                                  "2000-01-23T04:56:07.000Z",
                                ),
                                updateTime: new Date(
                                  "2000-01-23T04:56:07.000Z",
                                ),
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
                                createTime: new Date(
                                  "2000-01-23T04:56:07.000Z",
                                ),
                                updateTime: new Date(
                                  "2000-01-23T04:56:07.000Z",
                                ),
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
                        querySuggestions: {
                          person: {
                            name: "George Clooney",
                            obfuscatedId: "abc123",
                          },
                        },
                        relatedDocuments: [
                          {
                            querySuggestion: {
                              query: "app:github type:pull author:mortimer",
                              label: "Mortimer's PRs",
                              datasource: "github",
                            },
                            results: [
                              {
                                title: "title",
                                url: "https://example.com/foo/bar",
                                nativeAppUrl: "slack://foo/bar",
                                snippets: [
                                  {
                                    mimeType: "mimeType",
                                    snippet: "snippet",
                                  },
                                ],
                                mustIncludeSuggestions: {
                                  person: {
                                    name: "George Clooney",
                                    obfuscatedId: "abc123",
                                  },
                                },
                              },
                            ],
                          },
                        ],
                        relatedQuestion: {},
                      },
                    },
                  ],
                },
                likes: {
                  likedBy: [],
                  likedByUser: true,
                  numLikes: 32410,
                },
                author: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
                updatedBy: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
                verification: {
                  state: "UNVERIFIED",
                  metadata: {
                    lastVerifier: {
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
                    reminders: [
                      {
                        assignee: {
                          name: "George Clooney",
                          obfuscatedId: "abc123",
                        },
                        requestor: {
                          name: "George Clooney",
                          obfuscatedId: "abc123",
                        },
                        remindAt: 337545,
                      },
                    ],
                    lastReminder: {
                      assignee: {
                        name: "George Clooney",
                        obfuscatedId: "abc123",
                      },
                      requestor: {
                        name: "George Clooney",
                        obfuscatedId: "abc123",
                      },
                      remindAt: 349760,
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
                  description:
                    "huzzah ick warp desk tedious tightly supposing bandwidth aboard pish",
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
                  id: 782149,
                  creator: {
                    name: "George Clooney",
                    obfuscatedId: "abc123",
                  },
                  updatedBy: {
                    name: "George Clooney",
                    obfuscatedId: "abc123",
                  },
                },
                sourceDocument: {
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
              generatedQna: {
                ranges: [
                  {
                    startIndex: 851363,
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
                  },
                ],
              },
              extractedQnA: {
                questionResult: {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      mimeType: "mimeType",
                      snippet: "snippet",
                    },
                  ],
                  mustIncludeSuggestions: {
                    suggestions: [
                      {
                        query: "app:github type:pull author:mortimer",
                        label: "Mortimer's PRs",
                        datasource: "github",
                      },
                    ],
                    person: {
                      name: "George Clooney",
                      obfuscatedId: "abc123",
                    },
                  },
                },
              },
              meeting: {
                attendees: {
                  people: [
                    {
                      person: {
                        name: "George Clooney",
                        obfuscatedId: "abc123",
                      },
                      groupAttendees: [
                        {
                          person: {
                            name: "George Clooney",
                            obfuscatedId: "abc123",
                          },
                        },
                      ],
                    },
                  ],
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
              answerBoard: {
                name: "<value>",
                description:
                  "um verbally till like provided recklessly yowza plus boohoo weary",
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
                id: 70559,
                creator: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
                updatedBy: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
              },
              code: {
                repoName: "scio",
                fileName: "README.md",
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
              querySuggestions: {
                person: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
              },
              relatedDocuments: [
                {
                  querySuggestion: {
                    query: "app:github type:pull author:mortimer",
                    label: "Mortimer's PRs",
                    datasource: "github",
                  },
                  results: [
                    {
                      title: "title",
                      url: "https://example.com/foo/bar",
                      nativeAppUrl: "slack://foo/bar",
                      snippets: [
                        {
                          mimeType: "mimeType",
                          snippet: "snippet",
                        },
                      ],
                      mustIncludeSuggestions: {
                        person: {
                          name: "George Clooney",
                          obfuscatedId: "abc123",
                        },
                      },
                    },
                  ],
                },
              ],
              relatedQuestion: {},
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
              displayName: "Kody.Kihn88",
              displayDescription: "<value>",
              objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
            },
          },
          citation: {
            sourceDocument: {
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
                },
                snippets: [
                  {
                    mimeType: "mimeType",
                    snippet: "snippet",
                  },
                ],
              },
            ],
          },
        },
      ],
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The opaque id of the Chat.                                                             |                                                                                        |
| `createTime`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | Server Unix timestamp of the creation time (in seconds since epoch UTC).               |                                                                                        |
| `createdBy`                                                                            | [components.Person](../../models/components/person.md)                                 | :heavy_minus_sign:                                                                     | N/A                                                                                    | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                     |
| `updateTime`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | Server Unix timestamp of the update time (in seconds since epoch UTC).                 |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The name of the Chat.                                                                  |                                                                                        |
| `applicationId`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the AI App that this Chat is associated to.                                  |                                                                                        |
| `applicationName`                                                                      | *string*                                                                               | :heavy_minus_sign:                                                                     | The display name of the AI App that this Chat is associated to.                        |                                                                                        |
| `icon`                                                                                 | [components.IconConfig](../../models/components/iconconfig.md)                         | :heavy_minus_sign:                                                                     | Defines how to render an icon                                                          | {<br/>"color": "#343CED",<br/>"key": "person_icon",<br/>"iconType": "GLYPH",<br/>"name": "user"<br/>} |
| `permissions`                                                                          | [components.ObjectPermissions](../../models/components/objectpermissions.md)           | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `messages`                                                                             | [components.ChatMessage](../../models/components/chatmessage.md)[]                     | :heavy_minus_sign:                                                                     | The chat messages within a Chat.                                                       |                                                                                        |
| `roles`                                                                                | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[] | :heavy_minus_sign:                                                                     | A list of roles for this Chat.                                                         |                                                                                        |