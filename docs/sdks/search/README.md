# Search
(*client.search*)

## Overview

### Available Operations

* [admin](#admin) - Search the index (admin)
* [autocomplete](#autocomplete) - Autocomplete
* [getFeed](#getfeed) - Feed of documents and events
* [recommendations](#recommendations) - Recommend documents
* [execute](#execute) - Search

## admin

Retrieves results for search query without respect for permissions. This is available only to privileged users.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.search.admin({
    searchRequest: {
      trackingToken: "trackingToken",
      pageSize: 10,
      query: "vacation policy",
      requestOptions: {
        facetFilters: [
          {
            fieldName: "type",
            values: [
              {
                value: "article",
                relationType: "EQUALS",
              },
              {
                value: "document",
                relationType: "EQUALS",
              },
            ],
          },
          {
            fieldName: "department",
            values: [
              {
                value: "engineering",
                relationType: "EQUALS",
              },
            ],
          },
        ],
        facetBucketSize: 254944,
      },
    },
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
import { clientSearchAdmin } from "@gleanwork/api-client/funcs/clientSearchAdmin.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientSearchAdmin(glean, {
    searchRequest: {
      trackingToken: "trackingToken",
      pageSize: 10,
      query: "vacation policy",
      requestOptions: {
        facetFilters: [
          {
            fieldName: "type",
            values: [
              {
                value: "article",
                relationType: "EQUALS",
              },
              {
                value: "document",
                relationType: "EQUALS",
              },
            ],
          },
          {
            fieldName: "department",
            values: [
              {
                value: "engineering",
                relationType: "EQUALS",
              },
            ],
          },
        ],
        facetBucketSize: 254944,
      },
    },
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
  useClientSearchAdminMutation
} from "@gleanwork/api-client/react-query/clientSearchAdmin.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AdminsearchRequest](../../models/operations/adminsearchrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SearchResponse](../../models/components/searchresponse.md)\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.GleanDataError | 403, 422              | application/json      |
| errors.GleanError     | 4XX, 5XX              | \*/\*                 |

## autocomplete

Retrieve query suggestions, operators and documents for the given partially typed query.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.search.autocomplete({
    autocompleteRequest: {
      trackingToken: "trackingToken",
      query: "San Fra",
      datasource: "GDRIVE",
      resultSize: 10,
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
import { clientSearchAutocomplete } from "@gleanwork/api-client/funcs/clientSearchAutocomplete.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientSearchAutocomplete(glean, {
    autocompleteRequest: {
      trackingToken: "trackingToken",
      query: "San Fra",
      datasource: "GDRIVE",
      resultSize: 10,
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
  useClientSearchAutocompleteMutation
} from "@gleanwork/api-client/react-query/clientSearchAutocomplete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AutocompleteRequest](../../models/operations/autocompleterequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AutocompleteResponse](../../models/components/autocompleteresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## getFeed

The personalized feed/home includes different types of contents including suggestions, recents, calendar events and many more.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.search.getFeed({
    feedRequest: {},
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
import { clientSearchGetFeed } from "@gleanwork/api-client/funcs/clientSearchGetFeed.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientSearchGetFeed(glean, {
    feedRequest: {},
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
  useClientSearchGetFeedMutation
} from "@gleanwork/api-client/react-query/clientSearchGetFeed.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FeedRequest](../../models/operations/feedrequest.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FeedResponse](../../models/components/feedresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## recommendations

Retrieve recommended documents for the given URL or Glean Document ID.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.search.recommendations({
    recommendationsRequest: {
      sourceDocument: {
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
            name: "George Clooney",
            obfuscatedId: "abc123",
            relatedDocuments: [],
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
                suggestions: [],
              },
              inviteInfo: {
                invites: [],
              },
              customFields: [],
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
          owner: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          mentionedPeople: [],
          components: [
            "Backend",
            "Networking",
          ],
          status: "[\"Done\"]",
          pins: [],
          assignedTo: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          updatedBy: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          collections: [],
          interactions: {
            reacts: [],
            shares: [],
          },
          verification: {
            state: "VERIFIED",
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
                remindAt: 986764,
              },
              candidateVerifiers: [],
            },
          },
          customData: {
            "someCustomField": {},
          },
          contactPerson: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        },
      },
      pageSize: 100,
      maxSnippetSize: 400,
      requestOptions: {
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
        ],
        context: {},
      },
    },
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
import { clientSearchRecommendations } from "@gleanwork/api-client/funcs/clientSearchRecommendations.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientSearchRecommendations(glean, {
    recommendationsRequest: {
      sourceDocument: {
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
            name: "George Clooney",
            obfuscatedId: "abc123",
            relatedDocuments: [],
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
                suggestions: [],
              },
              inviteInfo: {
                invites: [],
              },
              customFields: [],
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
          owner: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          mentionedPeople: [],
          components: [
            "Backend",
            "Networking",
          ],
          status: "[\"Done\"]",
          pins: [],
          assignedTo: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          updatedBy: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          collections: [],
          interactions: {
            reacts: [],
            shares: [],
          },
          verification: {
            state: "VERIFIED",
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
                remindAt: 986764,
              },
              candidateVerifiers: [],
            },
          },
          customData: {
            "someCustomField": {},
          },
          contactPerson: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
        },
      },
      pageSize: 100,
      maxSnippetSize: 400,
      requestOptions: {
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
        ],
        context: {},
      },
    },
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
  useClientSearchRecommendationsMutation
} from "@gleanwork/api-client/react-query/clientSearchRecommendations.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RecommendationsRequest](../../models/operations/recommendationsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ResultsResponse](../../models/components/resultsresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## execute

Retrieve results from the index for the given query and filters.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.search.execute({
    searchRequest: {
      trackingToken: "trackingToken",
      pageSize: 10,
      query: "vacation policy",
      requestOptions: {
        facetFilters: [
          {
            fieldName: "type",
            values: [
              {
                value: "article",
                relationType: "EQUALS",
              },
              {
                value: "document",
                relationType: "EQUALS",
              },
            ],
          },
          {
            fieldName: "department",
            values: [
              {
                value: "engineering",
                relationType: "EQUALS",
              },
            ],
          },
        ],
        facetBucketSize: 246815,
      },
    },
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
import { clientSearchExecute } from "@gleanwork/api-client/funcs/clientSearchExecute.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientSearchExecute(glean, {
    searchRequest: {
      trackingToken: "trackingToken",
      pageSize: 10,
      query: "vacation policy",
      requestOptions: {
        facetFilters: [
          {
            fieldName: "type",
            values: [
              {
                value: "article",
                relationType: "EQUALS",
              },
              {
                value: "document",
                relationType: "EQUALS",
              },
            ],
          },
          {
            fieldName: "department",
            values: [
              {
                value: "engineering",
                relationType: "EQUALS",
              },
            ],
          },
        ],
        facetBucketSize: 246815,
      },
    },
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
  useClientSearchExecuteMutation
} from "@gleanwork/api-client/react-query/clientSearchExecute.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchRequest](../../models/operations/searchrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SearchResponse](../../models/components/searchresponse.md)\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.GleanDataError | 403, 422              | application/json      |
| errors.GleanError     | 4XX, 5XX              | \*/\*                 |