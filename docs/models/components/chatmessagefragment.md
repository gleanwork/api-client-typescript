# ChatMessageFragment

A typed fragment within a chat message that carries text or structured content such as citations, actions, and tool output.

## Example Usage

```typescript
import { ChatMessageFragment } from "@gleanwork/api-client/models/components";

let value: ChatMessageFragment = {
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
            status: "Done",
            customData: {
              "someCustomField": {
                stringValue: "someCustomValue",
              },
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
            status: "Done",
            customData: {
              "someCustomField": {
                stringValue: "someCustomValue",
              },
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
          status: "Done",
          customData: {
            "someCustomField": {
              stringValue: "someCustomValue",
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
                    status: "Done",
                    customData: {
                      "someCustomField": {
                        stringValue: "someCustomValue",
                      },
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
                    status: "Done",
                    customData: {
                      "someCustomField": {
                        stringValue: "someCustomValue",
                      },
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
                  status: "Done",
                  customData: {
                    "someCustomField": {
                      stringValue: "someCustomValue",
                    },
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
                      status: "Done",
                      customData: {
                        "someCustomField": {
                          stringValue: "someCustomValue",
                        },
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
                      status: "Done",
                      customData: {
                        "someCustomField": {
                          stringValue: "someCustomValue",
                        },
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
                    status: "Done",
                    customData: {
                      "someCustomField": {
                        stringValue: "someCustomValue",
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
                            status: "Done",
                            customData: {
                              "someCustomField": {
                                stringValue: "someCustomValue",
                              },
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
                            status: "Done",
                            customData: {
                              "someCustomField": {
                                stringValue: "someCustomValue",
                              },
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
                          status: "Done",
                          customData: {
                            "someCustomField": {
                              stringValue: "someCustomValue",
                            },
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
                  collections: [
                    {
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
                      items: [
                        {
                          collectionId: 30842,
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
                                status: "Done",
                                customData: {
                                  "someCustomField": {
                                    stringValue: "someCustomValue",
                                  },
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
                                status: "Done",
                                customData: {
                                  "someCustomField": {
                                    stringValue: "someCustomValue",
                                  },
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
                              status: "Done",
                              customData: {
                                "someCustomField": {
                                  stringValue: "someCustomValue",
                                },
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
                                  status: "Done",
                                  customData: {
                                    "someCustomField": {
                                      stringValue: "someCustomValue",
                                    },
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
                                  status: "Done",
                                  customData: {
                                    "someCustomField": {
                                      stringValue: "someCustomValue",
                                    },
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
                                status: "Done",
                                customData: {
                                  "someCustomField": {
                                    stringValue: "someCustomValue",
                                  },
                                },
                              },
                            },
                          },
                          collection: {
                            name: "<value>",
                            description:
                              "impanel importance pale parody towards wildly elementary unbearably",
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
                            id: 390864,
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
                                  "viciously creator incidentally hole pecan",
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
                                id: 581341,
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
                          itemType: "TEXT",
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
                        status: "Done",
                        customData: {
                          "someCustomField": {
                            stringValue: "someCustomValue",
                          },
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
                        status: "Done",
                        customData: {
                          "someCustomField": {
                            stringValue: "someCustomValue",
                          },
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
                      status: "Done",
                      customData: {
                        "someCustomField": {
                          stringValue: "someCustomValue",
                        },
                      },
                    },
                  },
                },
                generatedQna: {
                  ranges: [
                    {
                      startIndex: 635422,
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
                            status: "Done",
                            customData: {
                              "someCustomField": {
                                stringValue: "someCustomValue",
                              },
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
                            status: "Done",
                            customData: {
                              "someCustomField": {
                                stringValue: "someCustomValue",
                              },
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
                          status: "Done",
                          customData: {
                            "someCustomField": {
                              stringValue: "someCustomValue",
                            },
                          },
                        },
                      },
                    },
                  ],
                  cursor: "",
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
                          missingTerm: "container",
                          query: "container",
                        },
                      ],
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
                    "impanel importance pale parody towards wildly elementary unbearably",
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
                  id: 390864,
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
                      description: "viciously creator incidentally hole pecan",
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
                      id: 581341,
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
                        status: "Done",
                        customData: {
                          "someCustomField": {
                            stringValue: "someCustomValue",
                          },
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
                        status: "Done",
                        customData: {
                          "someCustomField": {
                            stringValue: "someCustomValue",
                          },
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
                      status: "Done",
                      customData: {
                        "someCustomField": {
                          stringValue: "someCustomValue",
                        },
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
                          suggestions: [
                            {
                              missingTerm: "container",
                              query: "container",
                            },
                          ],
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
                  status: "Done",
                  customData: {
                    "someCustomField": {
                      stringValue: "someCustomValue",
                    },
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
                  status: "Done",
                  customData: {
                    "someCustomField": {
                      stringValue: "someCustomValue",
                    },
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
                status: "Done",
                customData: {
                  "someCustomField": {
                    stringValue: "someCustomValue",
                  },
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
              status: "Done",
              customData: {
                "someCustomField": {
                  stringValue: "someCustomValue",
                },
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
              status: "Done",
              customData: {
                "someCustomField": {
                  stringValue: "someCustomValue",
                },
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
            status: "Done",
            customData: {
              "someCustomField": {
                stringValue: "someCustomValue",
              },
            },
          },
        },
      },
      generatedQna: {
        ranges: [
          {
            startIndex: 635422,
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
                  status: "Done",
                  customData: {
                    "someCustomField": {
                      stringValue: "someCustomValue",
                    },
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
                  status: "Done",
                  customData: {
                    "someCustomField": {
                      stringValue: "someCustomValue",
                    },
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
                status: "Done",
                customData: {
                  "someCustomField": {
                    stringValue: "someCustomValue",
                  },
                },
              },
            },
          },
        ],
        cursor: "",
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
                missingTerm: "container",
                query: "container",
              },
            ],
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
          "impanel importance pale parody towards wildly elementary unbearably",
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
        id: 390864,
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
            description: "viciously creator incidentally hole pecan",
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
            id: 581341,
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
              status: "Done",
              customData: {
                "someCustomField": {
                  stringValue: "someCustomValue",
                },
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
              status: "Done",
              customData: {
                "someCustomField": {
                  stringValue: "someCustomValue",
                },
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
            status: "Done",
            customData: {
              "someCustomField": {
                stringValue: "someCustomValue",
              },
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
                suggestions: [
                  {
                    missingTerm: "container",
                    query: "container",
                  },
                ],
              },
            },
          ],
        },
      ],
      relatedQuestion: {},
      snippets: [
        {
          mimeType: "mimeType",
          snippet: "snippet",
        },
      ],
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
      displayName: "Wava17",
      displayDescription: "<value>",
      objectName: "HR ticket",
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
          status: "Done",
          customData: {
            "someCustomField": {
              stringValue: "someCustomValue",
            },
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
          status: "Done",
          customData: {
            "someCustomField": {
              stringValue: "someCustomValue",
            },
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
        status: "Done",
        customData: {
          "someCustomField": {
            stringValue: "someCustomValue",
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
    sourceCustomEntity: {
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
    referenceRanges: [
      {
        textRange: {
          startIndex: 27290,
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
                status: "Done",
                customData: {
                  "someCustomField": {
                    stringValue: "someCustomValue",
                  },
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
                status: "Done",
                customData: {
                  "someCustomField": {
                    stringValue: "someCustomValue",
                  },
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
              status: "Done",
              customData: {
                "someCustomField": {
                  stringValue: "someCustomValue",
                },
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `structuredResults`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [components.StructuredResult](../../models/components/structuredresult.md)[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | An array of entities in the work graph retrieved via a data request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `trackingToken`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | An opaque token that represents this particular result in this particular query. To be used for /feedback reporting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `text`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `querySuggestion`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [components.QuerySuggestion](../../models/components/querysuggestion.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | {<br/>"query": "app:github type:pull author:mortimer",<br/>"label": "Mortimer's PRs",<br/>"datasource": "github"<br/>}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `file`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [components.ChatFile](../../models/components/chatfile.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Structure for file uploaded by a user for Chat.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `action`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [components.ToolInfo](../../models/components/toolinfo.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `citation`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [components.ChatMessageCitation](../../models/components/chatmessagecitation.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Information about the source for a ChatMessage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `serverToolRequest`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [components.ServerToolRequest](../../models/components/servertoolrequest.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `serverToolResponse`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | [components.ServerToolResponse](../../models/components/servertoolresponse.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Response to a server tool request. The applicable fields depend on requestType:<br/><br/>For EXECUTION requests:<br/>- isGranted: whether tool execution is approved<br/>- reason: optional explanation<br/><br/>For AUTHENTICATION_SUGGESTION requests:<br/>- isGranted: whether auth completed successfully (true=connected, false=skipped)<br/>- authContext: contains serverId or actionPackId for identifying the authenticated entity<br/>- reason: optional explanation for skip<br/><br/>For VOTE_SUGGESTION requests:<br/>- voted: whether the user voted for this tool<br/><br/>For SANDBOX_EGRESS requests:<br/>- isGranted: whether the sandbox egress call is approved<br/> |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |