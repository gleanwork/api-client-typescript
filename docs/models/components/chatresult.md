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
                      role: "OWNER",
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
                      role: "VERIFIER",
                    },
                  ],
                  removedRoles: [
                    {
                      person: {
                        name: "George Clooney",
                        obfuscatedId: "abc123",
                      },
                      role: "EDITOR",
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
                            notes:
                              "CIO is interested in trying out the product.",
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
                                role: "OWNER",
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
                              numLikes: 887765,
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
                                    remindAt: 16612,
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
                                  remindAt: 116212,
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
                                description: "atop bestride glass tectonics",
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
                                id: 100990,
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
                                    collectionId: 547283,
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
                                      roles: [
                                        {
                                          person: {
                                            name: "George Clooney",
                                            obfuscatedId: "abc123",
                                          },
                                          role: "OWNER",
                                        },
                                      ],
                                    },
                                    collection: {
                                      name: "<value>",
                                      description:
                                        "chiffonier shore even once colossal even instead",
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
                                      id: 769160,
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
                                          description: "vice queasy mushy",
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
                                          id: 105739,
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
                                children: [
                                  {
                                    name: "<value>",
                                    description: "vice queasy mushy",
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
                                    id: 105739,
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
                          generatedQna: {
                            ranges: [
                              {
                                startIndex: 998220,
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
                                    query:
                                      "app:github type:pull author:mortimer",
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
                              "chiffonier shore even once colossal even instead",
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
                            id: 769160,
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
                                description: "vice queasy mushy",
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
                                id: 105739,
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
                            roles: [
                              {
                                person: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                role: "OWNER",
                              },
                            ],
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
                    numLikes: 887765,
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
                          remindAt: 16612,
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
                        remindAt: 116212,
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
                      startIndex: 998220,
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
                    "chiffonier shore even once colossal even instead",
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
                  id: 769160,
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
                      description: "vice queasy mushy",
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
                      id: 105739,
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
                  roles: [
                    {
                      person: {
                        name: "George Clooney",
                        obfuscatedId: "abc123",
                      },
                      role: "OWNER",
                    },
                  ],
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
                    role: "OWNER",
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
      },
    ],
    roles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        role: "OWNER",
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