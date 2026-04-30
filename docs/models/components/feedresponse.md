# FeedResponse

## Example Usage

```typescript
import { FeedResponse } from "@gleanwork/api-client/models/components";

let value: FeedResponse = {
  serverTimestamp: 603266,
  results: [
    {
      category: "EVENT",
      primaryEntry: {
        title: "<value>",
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
        event: {
          id: "<id>",
          url: "https://shadowy-typeface.name",
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
          generatedAttachments: [
            {
              documents: [
                {
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
              ],
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
              externalLinks: [
                {
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
              content: [
                {
                  displayHeader: "Action Items",
                },
              ],
            },
          ],
        },
        announcement: {
          draftId: 342,
        },
        digest: {
          digestDate: "2025-09-03",
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
        collectionItem: {
          collectionId: 403533,
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
          itemType: "URL",
        },
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        promptTemplate: {
          promptTemplate: {
            template: "<value>",
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
            author: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            lastUpdatedBy: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
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
        },
        workflow: {
          workflow: {
            author: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            lastUpdatedBy: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
          },
        },
        activities: [
          {
            actor: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
          },
        ],
      },
      secondaryEntries: [
        {
          title: "<value>",
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
          event: {
            id: "<id>",
            url: "https://shadowy-typeface.name",
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
            generatedAttachments: [
              {
                documents: [
                  {
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
                ],
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
                externalLinks: [
                  {
                    iconConfig: {
                      color: "#343CED",
                      key: "person_icon",
                      iconType: "GLYPH",
                      name: "user",
                    },
                  },
                ],
                content: [
                  {
                    displayHeader: "Action Items",
                  },
                ],
              },
            ],
          },
          announcement: {
            draftId: 342,
          },
          digest: {
            digestDate: "2025-09-03",
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
          collectionItem: {
            collectionId: 403533,
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
            itemType: "URL",
          },
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          promptTemplate: {
            promptTemplate: {
              template: "<value>",
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
              author: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              lastUpdatedBy: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
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
          },
          workflow: {
            workflow: {
              author: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              lastUpdatedBy: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            },
          },
          activities: [
            {
              actor: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
            },
          ],
        },
      ],
    },
  ],
  facetResults: {
    "key": [],
    "key1": [
      {
        sourceName: "container_name",
        operatorName: "SelectMultiple",
        buckets: [
          {
            count: 1,
            datasource: "jira",
            percentage: 5,
            value: {
              stringValue: "engineering",
              integerValue: 5,
              displayLabel: "engineering",
              iconConfig: {
                color: "#343CED",
                key: "person_icon",
                iconType: "GLYPH",
                name: "user",
              },
            },
          },
        ],
        hasMoreBuckets: false,
        groupName: "Service Cloud",
      },
    ],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `experimentIds`                                                                         | *number*[]                                                                              | :heavy_minus_sign:                                                                      | List of experiment ids for the corresponding request.                                   |
| `trackingToken`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | An opaque token that represents this particular feed response.                          |
| `serverTimestamp`                                                                       | *number*                                                                                | :heavy_check_mark:                                                                      | Server unix timestamp (in seconds since epoch UTC).                                     |
| `results`                                                                               | [components.FeedResult](../../models/components/feedresult.md)[]                        | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `facetResults`                                                                          | Record<string, [components.FacetResult](../../models/components/facetresult.md)[]>      | :heavy_minus_sign:                                                                      | Map from category to the list of facets that can be used to filter the entry's content. |
| `mentionsTimeWindowInHours`                                                             | *number*                                                                                | :heavy_minus_sign:                                                                      | The time window (in hours) used for generating user mentions.                           |