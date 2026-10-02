# Usage

## Overview

### Available Operations

* [createLimitIncreaseRequest](#createlimitincreaserequest) - Submit a personal limit-increase request
* [listLimitIncreaseRequests](#listlimitincreaserequests) - List personal limit-increase requests
* [getLimitIncreaseRequest](#getlimitincreaserequest) - Get a personal limit-increase request

## createLimitIncreaseRequest

Requires usage.limit_increase_requests:write. The target is the authenticated canonical user, and requester identity comes from authentication. The caller supplies the client and optional business justification. The server assigns the request identifier and current UTC month. Billing grants do not widen this route. This internal scaffold returns 503 without creating a request.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-usage-requests-create" method="post" path="/api/usage/limit-increase-requests" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.usage.createLimitIncreaseRequest({
    client_id: "glean",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { usageCreateLimitIncreaseRequest } from "@gleanwork/api-client/funcs/usageCreateLimitIncreaseRequest.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await usageCreateLimitIncreaseRequest(glean, {
    client_id: "glean",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usageCreateLimitIncreaseRequest failed:", res.error);
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
  useUsageCreateLimitIncreaseRequestMutation
} from "@gleanwork/api-client/react-query/usageCreateLimitIncreaseRequest.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PlatformPersonalRequestCreate](../../models/components/platformpersonalrequestcreate.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformRequestResponse](../../models/components/platformrequestresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PlatformProblemDetailError      | 400, 401, 403, 404, 408, 409, 413, 429 | application/problem+json               |
| errors.PlatformProblemDetailError      | 500, 503                               | application/problem+json               |
| errors.GleanError                      | 4XX, 5XX                               | \*/\*                                  |

## listLimitIncreaseRequests

Requires usage.limit_increase_requests:read. The collection is limited to the authenticated canonical user's requests, including resolved requests. Cursors bind the filters and current authorization context; a billing grant cannot widen results. This internal scaffold returns 503 without reading requests.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-usage-requests-list" method="get" path="/api/usage/limit-increase-requests" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.usage.listLimitIncreaseRequests();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { usageListLimitIncreaseRequests } from "@gleanwork/api-client/funcs/usageListLimitIncreaseRequests.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await usageListLimitIncreaseRequests(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usageListLimitIncreaseRequests failed:", res.error);
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
  useUsageListLimitIncreaseRequests,
  useUsageListLimitIncreaseRequestsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchUsageListLimitIncreaseRequests,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateUsageListLimitIncreaseRequests,
  invalidateAllUsageListLimitIncreaseRequests,
} from "@gleanwork/api-client/react-query/usageListLimitIncreaseRequests.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pageSize`                                                                                                                                                                     | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum page size; defaults to 20 and cannot exceed 100.                                                                                                                       |
| `cursor`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Opaque continuation bound to filters and current authorization.                                                                                                                |
| `filters`                                                                                                                                                                      | [components.PlatformRequestFilter](../../models/components/platformrequestfilter.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                                                             | Optional structured filters on request status.                                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformRequestListResponseUnion](../../models/components/platformrequestlistresponseunion.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## getLimitIncreaseRequest

Requires usage.limit_increase_requests:read and the current user's request. Authorization precedes resource disclosure. This internal scaffold returns 503 without reading the request.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-usage-requests-get" method="get" path="/api/usage/limit-increase-requests/{request_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.usage.getLimitIncreaseRequest("{request_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { usageGetLimitIncreaseRequest } from "@gleanwork/api-client/funcs/usageGetLimitIncreaseRequest.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await usageGetLimitIncreaseRequest(glean, "{request_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usageGetLimitIncreaseRequest failed:", res.error);
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
  useUsageGetLimitIncreaseRequest,
  useUsageGetLimitIncreaseRequestSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchUsageGetLimitIncreaseRequest,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateUsageGetLimitIncreaseRequest,
  invalidateAllUsageGetLimitIncreaseRequest,
} from "@gleanwork/api-client/react-query/usageGetLimitIncreaseRequest.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Opaque personal request identifier; not an authorization grant.                                                                                                                | {request_id}                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformRequestResponse](../../models/components/platformrequestresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |