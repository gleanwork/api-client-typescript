# StructuredResult

A single object that can support any object in the work graph. Only a single object will be populated.

## Example Usage

```typescript
import { StructuredResult } from "@gleanwork/api-client/models/components";

let value: StructuredResult = {
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
          link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
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
  },
  relatedQuestion: {},
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                                                                                                                                                                                                                                                                           | [components.Document](../../models/components/document.md)                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `person`                                                                                                                                                                                                                                                                                                                                                             | [components.Person](../../models/components/person.md)                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                                                                                                                                                                                                                                                   |
| `customer`                                                                                                                                                                                                                                                                                                                                                           | [components.Customer](../../models/components/customer.md)                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `team`                                                                                                                                                                                                                                                                                                                                                               | [components.Team](../../models/components/team.md)                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `customEntity`                                                                                                                                                                                                                                                                                                                                                       | [components.CustomEntity](../../models/components/customentity.md)                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `answer`                                                                                                                                                                                                                                                                                                                                                             | [components.Answer](../../models/components/answer.md)                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `generatedQna`                                                                                                                                                                                                                                                                                                                                                       | [components.GeneratedQna](../../models/components/generatedqna.md)                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `extractedQnA`                                                                                                                                                                                                                                                                                                                                                       | [components.ExtractedQnA](../../models/components/extractedqna.md)                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `meeting`                                                                                                                                                                                                                                                                                                                                                            | [components.Meeting](../../models/components/meeting.md)                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `app`                                                                                                                                                                                                                                                                                                                                                                | [components.AppResult](../../models/components/appresult.md)                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `collection`                                                                                                                                                                                                                                                                                                                                                         | [components.Collection](../../models/components/collection.md)                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `answerBoard`                                                                                                                                                                                                                                                                                                                                                        | [components.AnswerBoard](../../models/components/answerboard.md)                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `code`                                                                                                                                                                                                                                                                                                                                                               | [components.Code](../../models/components/code.md)                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  | {<br/>"repoName": "scio",<br/>"fileName": "README.md",<br/>"matches": [<br/>{<br/>"lineNumber": 1,<br/>"content": "Welcome to the beginning",<br/>"ranges": []<br/>},<br/>{<br/>"lineNumber": 2,<br/>"content": "Second line of the file",<br/>"ranges": []<br/>},<br/>{<br/>"lineNumber": 3,<br/>"content": "hello world hello world",<br/>"ranges": [<br/>{<br/>"startindex": 0,<br/>"endIndex": 5<br/>},<br/>{<br/>"startIndex": 12,<br/>"endIndex": 17<br/>}<br/>]<br/>}<br/>]<br/>} |
| `shortcut`                                                                                                                                                                                                                                                                                                                                                           | [components.Shortcut](../../models/components/shortcut.md)                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `querySuggestions`                                                                                                                                                                                                                                                                                                                                                   | [components.QuerySuggestionList](../../models/components/querysuggestionlist.md)                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `chat`                                                                                                                                                                                                                                                                                                                                                               | [components.ChatMetadata](../../models/components/chatmetadata.md)                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | Metadata of a Chat a user had with Glean Assistant. This contains no actual conversational content.                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `relatedDocuments`                                                                                                                                                                                                                                                                                                                                                   | [components.RelatedDocuments](../../models/components/relateddocuments.md)[]                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | A list of documents related to this structured result.                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                      |
| `relatedQuestion`                                                                                                                                                                                                                                                                                                                                                    | [components.RelatedQuestion](../../models/components/relatedquestion.md)                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                      |
| `disambiguation`                                                                                                                                                                                                                                                                                                                                                     | [components.Disambiguation](../../models/components/disambiguation.md)                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | A disambiguation between multiple entities with the same name                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                      |
| `snippets`                                                                                                                                                                                                                                                                                                                                                           | [components.SearchResultSnippet](../../models/components/searchresultsnippet.md)[]                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | Any snippets associated to the populated object.                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                      |
| `trackingToken`                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | An opaque token that represents this particular result in this particular query. To be used for /feedback reporting.                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                      |
| `prominence`                                                                                                                                                                                                                                                                                                                                                         | [components.Prominence](../../models/components/prominence.md)                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | The level of visual distinction that should be given to a result.                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                      |
| `source`                                                                                                                                                                                                                                                                                                                                                             | [components.StructuredResultSource](../../models/components/structuredresultsource.md)                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                   | Source context for this result. Possible values depend on the result type.                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                      |