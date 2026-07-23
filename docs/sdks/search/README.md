# Search

## Overview

### Available Operations

* [query](#query) - Search
* [listFilters](#listfilters) - List search filters

## query

Execute a search query and retrieve ranked results. This is the data retrieval variant of the search API and returns only results and pagination state. Structured filters accept the eleven exact lowercase public built-ins and free-form custom fields. Custom and unknown fields are forwarded without spelling, existence, type, ambiguity, or operator-compatibility validation, so behavior is backend-dependent.
Successful responses always include a non-nullable `warnings` array (`[]` when empty). When results are incomplete for the requested datasource scope, the response remains HTTP 200 with `results`, `has_more`, and `next_cursor` preserved and a `results_incomplete` warning. Query outcomes that cannot be honored return HTTP 422 `unprocessable_query` and suppress results and cursor; invalid inline operators may include a nested `/query` `invalid_filter` issue. Backend work and audit logging may already have occurred before such a 422 replaces a result-bearing response. Structural and representability failures remain HTTP 400. Rate limits return HTTP 429 with `Retry-After`. Temporary backend unavailability returns HTTP 503.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-search" method="post" path="/api/search" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.search.query({
    query: "quarterly planning 2026",
    datasources: [
      "confluence",
      "google_drive",
    ],
    filters: [
      {
        field: "type",
        values: [
          "spreadsheet",
          "presentation",
        ],
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { searchQuery } from "@gleanwork/api-client/funcs/searchQuery.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await searchQuery(glean, {
    query: "quarterly planning 2026",
    datasources: [
      "confluence",
      "google_drive",
    ],
    filters: [
      {
        field: "type",
        values: [
          "spreadsheet",
          "presentation",
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchQuery failed:", res.error);
  }
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
  useSearchQueryMutation
} from "@gleanwork/api-client/react-query/searchQuery.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PlatformSearchRequest](../../models/components/platformsearchrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformSearchResponse](../../models/components/platformsearchresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PlatformProblemDetailError      | 400, 401, 403, 404, 408, 413, 422, 429 | application/problem+json               |
| errors.PlatformProblemDetailError      | 500, 503                               | application/problem+json               |
| errors.GleanError                      | 4XX, 5XX                               | \*/\*                                  |

## listFilters

Discover caller-visible datasources and common built-in filter fields that can be used with Platform Search. This is a best-effort common catalog, not an authoritative inventory of every field search may accept.
Without `query`, the response returns datasource rows and field metadata without executing search. With a nonblank `query`, exactly one `datasources` value is required and the response may include bounded, non-exhaustive facet values for matching public fields.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-search-filters" method="get" path="/api/search/filters" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.search.listFilters();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { searchListFilters } from "@gleanwork/api-client/funcs/searchListFilters.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await searchListFilters(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchListFilters failed:", res.error);
  }
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
  // Query hooks for fetching data.
  useSearchListFilters,
  useSearchListFiltersSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchSearchListFilters,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateSearchListFilters,
  invalidateAllSearchListFilters,
} from "@gleanwork/api-client/react-query/searchListFilters.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasources`                                                                                                                                                                  | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | Restrict metadata to one or more canonical normalized datasource identifiers. With a nonblank `query`, exactly one datasource is required.<br/>                                |
| `query`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Optional search query used to request bounded facet values for the selected datasource. When present it must be nonblank.<br/>                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformSearchFiltersResponse](../../models/components/platformsearchfiltersresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |