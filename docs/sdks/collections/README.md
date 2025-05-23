# Collections
(*client.collections*)

## Overview

### Available Operations

* [addItems](#additems) - Add Collection item
* [create](#create) - Create Collection
* [delete](#delete) - Delete Collection
* [deleteItem](#deleteitem) - Delete Collection item
* [update](#update) - Update Collection
* [updateItem](#updateitem) - Update Collection item
* [retrieve](#retrieve) - Read Collection
* [list](#list) - List Collections

## addItems

Add items to a Collection.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.collections.addItems({
    collectionId: 7742.68,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientCollectionsAddItems } from "@gleanwork/api-client/funcs/clientCollectionsAddItems.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientCollectionsAddItems(glean, {
    collectionId: 7742.68,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientCollectionsAddItemsMutation
} from "@gleanwork/api-client/react-query/clientCollectionsAddItems.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AddCollectionItemsRequest](../../models/components/addcollectionitemsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AddCollectionItemsResponse](../../models/components/addcollectionitemsresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## create

Create a publicly visible (empty) Collection of documents.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.collections.create({
    name: "<value>",
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 977077,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 86650,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "meaty dial elegantly while react",
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
                            id: 854591,
                            items: [
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 365776,
                            },
                            {
                              numDaysAgo: 365776,
                            },
                            {
                              numDaysAgo: 365776,
                            },
                          ],
                        },
                        verification: {
                          state: "DEPRECATED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 268615,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 423482,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      snippet: "snippet",
                      mimeType: "mimeType",
                    },
                  ],
                },
              ],
            },
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 977077,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 86650,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "meaty dial elegantly while react",
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
                            id: 854591,
                            items: [
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 365776,
                            },
                            {
                              numDaysAgo: 365776,
                            },
                            {
                              numDaysAgo: 365776,
                            },
                          ],
                        },
                        verification: {
                          state: "DEPRECATED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 268615,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 423482,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
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
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
              ],
            },
            customFields: [
              {
                label: "<value>",
                values: [
                  {},
                  {},
                  {},
                ],
              },
              {
                label: "<value>",
                values: [
                  {},
                  {},
                  {},
                ],
              },
            ],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "VERIFIER",
      },
    ],
    removedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
              ],
            },
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "VIEWER",
      },
    ],
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientCollectionsCreate } from "@gleanwork/api-client/funcs/clientCollectionsCreate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientCollectionsCreate(glean, {
    name: "<value>",
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 977077,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 86650,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "meaty dial elegantly while react",
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
                            id: 854591,
                            items: [
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 365776,
                            },
                            {
                              numDaysAgo: 365776,
                            },
                            {
                              numDaysAgo: 365776,
                            },
                          ],
                        },
                        verification: {
                          state: "DEPRECATED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 268615,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 423482,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      snippet: "snippet",
                      mimeType: "mimeType",
                    },
                  ],
                },
              ],
            },
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 977077,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 86650,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "meaty dial elegantly while react",
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
                            id: 854591,
                            items: [
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 697663,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 365776,
                            },
                            {
                              numDaysAgo: 365776,
                            },
                            {
                              numDaysAgo: 365776,
                            },
                          ],
                        },
                        verification: {
                          state: "DEPRECATED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 268615,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 423482,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
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
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
              ],
            },
            customFields: [
              {
                label: "<value>",
                values: [
                  {},
                  {},
                  {},
                ],
              },
              {
                label: "<value>",
                values: [
                  {},
                  {},
                  {},
                ],
              },
            ],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "VERIFIER",
      },
    ],
    removedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
              ],
            },
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "VIEWER",
      },
    ],
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientCollectionsCreateMutation
} from "@gleanwork/api-client/react-query/clientCollectionsCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateCollectionRequest](../../models/components/createcollectionrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateCollectionResponse](../../models/components/createcollectionresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.CollectionError | 422                    | application/json       |
| errors.GleanError      | 4XX, 5XX               | \*/\*                  |

## delete

Delete a Collection given the Collection's ID.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  await glean.client.collections.delete({
    ids: [
      930352,
      156719,
      25102,
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientCollectionsDelete } from "@gleanwork/api-client/funcs/clientCollectionsDelete.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientCollectionsDelete(glean, {
    ids: [
      930352,
      156719,
      25102,
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientCollectionsDeleteMutation
} from "@gleanwork/api-client/react-query/clientCollectionsDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DeleteCollectionRequest](../../models/components/deletecollectionrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.CollectionError | 422                    | application/json       |
| errors.GleanError      | 4XX, 5XX               | \*/\*                  |

## deleteItem

Delete a single item from a Collection.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.collections.deleteItem({
    collectionId: 6980.49,
    itemId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientCollectionsDeleteItem } from "@gleanwork/api-client/funcs/clientCollectionsDeleteItem.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientCollectionsDeleteItem(glean, {
    collectionId: 6980.49,
    itemId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientCollectionsDeleteItemMutation
} from "@gleanwork/api-client/react-query/clientCollectionsDeleteItem.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DeleteCollectionItemRequest](../../models/components/deletecollectionitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DeleteCollectionItemResponse](../../models/components/deletecollectionitemresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## update

Update the properties of an existing Collection.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.collections.update({
    name: "<value>",
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 797260,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 932928,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                          ],
                        },
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 314497,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      snippet: "snippet",
                      mimeType: "mimeType",
                    },
                  ],
                },
              ],
            },
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 797260,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 932928,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                          ],
                        },
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 314497,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      snippet: "snippet",
                      mimeType: "mimeType",
                    },
                  ],
                },
              ],
            },
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 797260,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 932928,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                          ],
                        },
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 314497,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
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
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
                {},
              ],
            },
            customFields: [
              {
                label: "<value>",
                values: [
                  {},
                  {},
                  {},
                ],
              },
            ],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "OWNER",
      },
    ],
    removedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
                {},
              ],
            },
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "ANSWER_MODERATOR",
      },
    ],
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
    id: 671264,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientCollectionsUpdate } from "@gleanwork/api-client/funcs/clientCollectionsUpdate.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientCollectionsUpdate(glean, {
    name: "<value>",
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 797260,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 932928,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                          ],
                        },
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 314497,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      snippet: "snippet",
                      mimeType: "mimeType",
                    },
                  ],
                },
              ],
            },
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 797260,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 932928,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                          ],
                        },
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 314497,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      snippet: "snippet",
                      mimeType: "mimeType",
                    },
                  ],
                },
              ],
            },
            {
              querySuggestion: {
                query: "app:github type:pull author:mortimer",
                searchProviderInfo: {
                  name: "Google",
                  searchLinkUrlTemplate: "https://www.google.com/search?q={query}&hl=en",
                },
                label: "Mortimer's PRs",
                datasource: "github",
                requestOptions: {
                  datasourceFilter: "JIRA",
                  datasourcesFilter: [
                    "JIRA",
                  ],
                  queryOverridesFacetFilters: true,
                  facetFilters: [
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
                  facetFilterSets: [
                    {
                      filters: [
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
                    },
                    {
                      filters: [
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
                    },
                  ],
                  facetBucketSize: 797260,
                  authTokens: [
                    {
                      accessToken: "123abc",
                      datasource: "gmail",
                      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
                      tokenType: "Bearer",
                      authUser: "1",
                    },
                  ],
                },
                ranges: [
                  {
                    startIndex: 932928,
                    document: {
                      metadata: {
                        datasource: "datasource",
                        objectType: "Feature Request",
                        container: "container",
                        parentId: "JIRA_EN-1337",
                        mimeType: "mimeType",
                        documentId: "documentId",
                        createTime: new Date("2000-01-23T04:56:07.000Z"),
                        updateTime: new Date("2000-01-23T04:56:07.000Z"),
                        components: [
                          "Backend",
                          "Networking",
                        ],
                        status: "[\"Done\"]",
                        pins: [
                          {
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
                            documentId: "<id>",
                          },
                          {
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
                            documentId: "<id>",
                          },
                        ],
                        collections: [
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                          {
                            name: "<value>",
                            description: "how by extroverted excess kissingly scruple yearningly",
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
                            id: 416110,
                            items: [
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                              {
                                collectionId: 959645,
                                shortcut: {
                                  inputAlias: "<value>",
                                },
                                itemType: "TEXT",
                              },
                            ],
                          },
                        ],
                        interactions: {
                          reacts: [
                            {},
                            {},
                            {},
                          ],
                          shares: [
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                            {
                              numDaysAgo: 927933,
                            },
                          ],
                        },
                        verification: {
                          state: "UNVERIFIED",
                          metadata: {
                            reminders: [
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                              {
                                assignee: {
                                  name: "George Clooney",
                                  obfuscatedId: "abc123",
                                },
                                remindAt: 353914,
                              },
                            ],
                            lastReminder: {
                              assignee: {
                                name: "George Clooney",
                                obfuscatedId: "abc123",
                              },
                              remindAt: 314497,
                            },
                          },
                        },
                        shortcuts: [
                          {
                            inputAlias: "<value>",
                          },
                          {
                            inputAlias: "<value>",
                          },
                        ],
                        customData: {
                          "someCustomField": {},
                        },
                      },
                    },
                  },
                ],
                inputDetails: {
                  hasCopyPaste: true,
                },
              },
              results: [
                {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
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
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
                {},
              ],
            },
            customFields: [
              {
                label: "<value>",
                values: [
                  {},
                  {},
                  {},
                ],
              },
            ],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "OWNER",
      },
    ],
    removedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [
                {
                  query: "app:github type:pull author:mortimer",
                  label: "Mortimer's PRs",
                  datasource: "github",
                },
              ],
            },
            inviteInfo: {
              invites: [
                {},
                {},
                {},
              ],
            },
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "ANSWER_MODERATOR",
      },
    ],
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
    id: 671264,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientCollectionsUpdateMutation
} from "@gleanwork/api-client/react-query/clientCollectionsUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.EditCollectionRequest](../../models/components/editcollectionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EditCollectionResponse](../../models/components/editcollectionresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.CollectionError | 422                    | application/json       |
| errors.GleanError      | 4XX, 5XX               | \*/\*                  |

## updateItem

Update the URL, Glean Document ID, description of an item within a Collection given its ID.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.collections.updateItem({
    collectionId: 142375,
    itemId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientCollectionsUpdateItem } from "@gleanwork/api-client/funcs/clientCollectionsUpdateItem.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientCollectionsUpdateItem(glean, {
    collectionId: 142375,
    itemId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientCollectionsUpdateItemMutation
} from "@gleanwork/api-client/react-query/clientCollectionsUpdateItem.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.EditCollectionItemRequest](../../models/components/editcollectionitemrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EditCollectionItemResponse](../../models/components/editcollectionitemresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## retrieve

Read the details of a Collection given its ID. Does not fetch items in this Collection.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.collections.retrieve({
    id: 425335,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientCollectionsRetrieve } from "@gleanwork/api-client/funcs/clientCollectionsRetrieve.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientCollectionsRetrieve(glean, {
    id: 425335,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientCollectionsRetrieveMutation
} from "@gleanwork/api-client/react-query/clientCollectionsRetrieve.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.GetCollectionRequest](../../models/components/getcollectionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetCollectionResponse](../../models/components/getcollectionresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## list

List all existing Collections.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.collections.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientCollectionsList } from "@gleanwork/api-client/funcs/clientCollectionsList.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientCollectionsList(glean, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientCollectionsListMutation
} from "@gleanwork/api-client/react-query/clientCollectionsList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ListCollectionsRequest](../../models/components/listcollectionsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListCollectionsResponse](../../models/components/listcollectionsresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |