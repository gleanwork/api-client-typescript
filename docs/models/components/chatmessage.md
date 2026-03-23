# ChatMessage

A message that is rendered as one coherent unit with one given sender.

## Example Usage

```typescript
import { ChatMessage } from "@gleanwork/api-client/models/components";

let value: ChatMessage = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentConfig`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [components.AgentConfig](../../models/components/agentconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Describes the agent that executes the request.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `author`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [components.Author](../../models/components/author.md)                                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ~~`citations`~~                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [components.ChatMessageCitation](../../models/components/chatmessagecitation.md)[]                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | : warning: ** DEPRECATED **: Deprecated on 2026-02-06, removal scheduled for 2026-10-15: Use inline citations via ChatMessageFragment.citation and ChatMessageCitation.referenceRanges instead. This field is still populated for backward compatibility..<br/><br/>Deprecated: Use inline citations via ChatMessageFragment.citation instead. For detailed reference information, use ChatMessageCitation.referenceRanges. This field is still populated for backward compatibility. |
| `uploadedFileIds`                                                                                                                                                                                                                                                                                                                                                                                                                                                             | *string*[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | IDs of files uploaded in the message that are referenced to generate the answer.                                                                                                                                                                                                                                                                                                                                                                                              |
| `fragments`                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [components.ChatMessageFragment](../../models/components/chatmessagefragment.md)[]                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | A list of rich data used to represent the response or formulate a request. These are linearly stitched together to support richer data formats beyond simple text.                                                                                                                                                                                                                                                                                                            |
| `ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Response timestamp of the message.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `messageId`                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | A unique server-side generated ID used to identify a message, automatically populated for any USER authored messages.                                                                                                                                                                                                                                                                                                                                                         |
| `messageTrackingToken`                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Opaque tracking token generated server-side.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `messageType`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [components.MessageType](../../models/components/messagetype.md)                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Semantically groups content of a certain type. It can be used for purposes such as differential UI treatment. USER authored messages should be of type CONTENT and do not need `messageType` specified.                                                                                                                                                                                                                                                                       |
| ~~`hasMoreFragments`~~                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Signals there are additional response fragments incoming.                                                                                                                                                                                                                                                                                    |