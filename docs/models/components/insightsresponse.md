# InsightsResponse

## Example Usage

```typescript
import { InsightsResponse } from "@gleanwork/api-client/models/components";

let value: InsightsResponse = {
  users: {
    activityInsights: [
      {
        user: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        activity: "ALL",
      },
    ],
    inactiveInsights: [
      {
        user: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        activity: "ALL",
      },
    ],
  },
  content: {
    documentInsights: [
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
      },
    ],
  },
  collections: {
    documentInsights: [
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
      },
    ],
  },
  collectionsV2: {
    documentInsights: [
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
      },
    ],
  },
  shortcuts: {
    shortcutInsights: [
      {
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
      },
    ],
  },
  announcements: {
    documentInsights: [
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
      },
    ],
  },
  answers: {
    documentInsights: [
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
      },
    ],
  },
  ai: {
    assistantInsights: [
      {
        user: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        activity: "ALL",
      },
    ],
  },
  aiApps: {
    aiAppInsights: [
      {
        user: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        activity: "SEARCH",
      },
    ],
  },
  gleanAssist: {
    activityInsights: [
      {
        user: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        activity: "ALL",
      },
    ],
  },
  overviewResponse: {
    perUserInsights: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    ],
  },
  assistantResponse: {
    perUserInsights: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    ],
  },
  agentsResponse: {
    topAgentsInsights: [
      {
        icon: {
          color: "#343CED",
          key: "person_icon",
          iconType: "GLYPH",
          name: "user",
        },
      },
    ],
    agentUsersInsights: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`timeseries`~~                                                                                                                                                            | [components.LabeledCountInfo](../../models/components/labeledcountinfo.md)[]                                                                                                | :heavy_minus_sign:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>List of timeseries to make charts (if applicable). |
| `users`                                                                                                                                                                     | [components.UserInsightsResponse](../../models/components/userinsightsresponse.md)                                                                                          | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `content`                                                                                                                                                                   | [components.ContentInsightsResponse](../../models/components/contentinsightsresponse.md)                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `queries`                                                                                                                                                                   | [components.QueryInsightsResponse](../../models/components/queryinsightsresponse.md)                                                                                        | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `collections`                                                                                                                                                               | [components.ContentInsightsResponse](../../models/components/contentinsightsresponse.md)                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `collectionsV2`                                                                                                                                                             | [components.ContentInsightsResponse](../../models/components/contentinsightsresponse.md)                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `shortcuts`                                                                                                                                                                 | [components.ShortcutInsightsResponse](../../models/components/shortcutinsightsresponse.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `announcements`                                                                                                                                                             | [components.ContentInsightsResponse](../../models/components/contentinsightsresponse.md)                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `answers`                                                                                                                                                                   | [components.ContentInsightsResponse](../../models/components/contentinsightsresponse.md)                                                                                    | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `ai`                                                                                                                                                                        | [components.AiInsightsResponse](../../models/components/aiinsightsresponse.md)                                                                                              | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `aiApps`                                                                                                                                                                    | [components.AiAppsInsightsResponse](../../models/components/aiappsinsightsresponse.md)                                                                                      | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `gleanAssist`                                                                                                                                                               | [components.GleanAssistInsightsResponse](../../models/components/gleanassistinsightsresponse.md)                                                                            | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| ~~`departments`~~                                                                                                                                                           | *string*[]                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>list of all departments.                   |
| `overviewResponse`                                                                                                                                                          | [components.InsightsOverviewResponse](../../models/components/insightsoverviewresponse.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `assistantResponse`                                                                                                                                                         | [components.AssistantInsightsResponse](../../models/components/assistantinsightsresponse.md)                                                                                | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `agentsResponse`                                                                                                                                                            | [components.AgentsInsightsV2Response](../../models/components/agentsinsightsv2response.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                          | N/A                                                                                                                                                                         |