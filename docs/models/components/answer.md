# Answer

## Example Usage

```typescript
import { Answer } from "@gleanwork/api-client/models/components";

let value: Answer = {
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
  roles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "ANSWER_MODERATOR",
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                       | The opaque ID of the Answer.                                                                                                                                                                                                                             | 3                                                                                                                                                                                                                                                        |
| `docId`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | Glean Document ID of the Answer. The Glean Document ID is supported for cases where the Answer ID isn't available. If both are available, using the Answer ID is preferred.                                                                              | ANSWERS_answer_3                                                                                                                                                                                                                                         |
| `question`                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      | Why is the sky blue?                                                                                                                                                                                                                                     |
| `questionVariations`                                                                                                                                                                                                                                     | *string*[]                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                       | Additional ways of phrasing this question.                                                                                                                                                                                                               |                                                                                                                                                                                                                                                          |
| `bodyText`                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | The plain text answer to the question.                                                                                                                                                                                                                   | From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.                                                                                                    |
| ~~`boardId`~~                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | : warning: ** DEPRECATED **: Deprecated on 2026-02-05, removal scheduled for 2026-10-15: Answer Boards no longer supported.<br/><br/>The parent board ID of this Answer, or 0 if it's a floating Answer. Adding Answers to Answer Boards is no longer permitted. |                                                                                                                                                                                                                                                          |
| `audienceFilters`                                                                                                                                                                                                                                        | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                       | Filters which restrict who should see the answer. Values are taken from the corresponding filters in people search.                                                                                                                                      |                                                                                                                                                                                                                                                          |
| `addedRoles`                                                                                                                                                                                                                                             | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                       | A list of user roles for the answer added by the owner.                                                                                                                                                                                                  |                                                                                                                                                                                                                                                          |
| `removedRoles`                                                                                                                                                                                                                                           | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                       | A list of user roles for the answer removed by the owner.                                                                                                                                                                                                |                                                                                                                                                                                                                                                          |
| `roles`                                                                                                                                                                                                                                                  | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                       | A list of roles for this answer explicitly granted by an owner, editor, or admin.                                                                                                                                                                        |                                                                                                                                                                                                                                                          |
| `sourceDocumentSpec`                                                                                                                                                                                                                                     | *components.DocumentSpecUnion*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                          |
| `sourceType`                                                                                                                                                                                                                                             | [components.AnswerSourceType](../../models/components/answersourcetype.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                          |
| `permissions`                                                                                                                                                                                                                                            | [components.ObjectPermissions](../../models/components/objectpermissions.md)                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                          |
| `trackingToken`                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | An opaque token that represents this particular UGC. To be used for `/feedback` reporting.                                                                                                                                                               |                                                                                                                                                                                                                                                          |
| `combinedAnswerText`                                                                                                                                                                                                                                     | [components.StructuredText](../../models/components/structuredtext.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                          |
| `likes`                                                                                                                                                                                                                                                  | [components.AnswerLikes](../../models/components/answerlikes.md)                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                          |
| `author`                                                                                                                                                                                                                                                 | [components.Person](../../models/components/person.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                                                                                                                                       |
| `createTime`                                                                                                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                       | The time the answer was created in ISO format (ISO 8601).                                                                                                                                                                                                |                                                                                                                                                                                                                                                          |
| `updateTime`                                                                                                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                       | The time the answer was last updated in ISO format (ISO 8601).                                                                                                                                                                                           |                                                                                                                                                                                                                                                          |
| `updatedBy`                                                                                                                                                                                                                                              | [components.Person](../../models/components/person.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      | {<br/>"name": "George Clooney",<br/>"obfuscatedId": "abc123"<br/>}                                                                                                                                                                                       |
| `verification`                                                                                                                                                                                                                                           | [components.Verification](../../models/components/verification.md)                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                          |
| `collections`                                                                                                                                                                                                                                            | [components.Collection](../../models/components/collection.md)[]                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                       | The collections to which the answer belongs.                                                                                                                                                                                                             |                                                                                                                                                                                                                                                          |
| `documentCategory`                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | The document's document_category(.proto).                                                                                                                                                                                                                |                                                                                                                                                                                                                                                          |
| `sourceDocument`                                                                                                                                                                                                                                         | [components.Document](../../models/components/document.md)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                          |