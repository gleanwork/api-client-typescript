# Tools

## Overview

### Available Operations

* [getActionPackAuthStatus](#getactionpackauthstatus) - Get end-user authentication status for an action pack.
* [authorizeActionPack](#authorizeactionpack) - Start the OAuth authorization flow for an action pack.

## getActionPackAuthStatus

Reports whether the calling user is already authenticated against the third-party
tool backing the specified action pack. Intended for headless / server-driven clients
that render an "Authorize" prompt when the user has not yet consented to the tool.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getActionPackAuthStatus" method="get" path="/rest/api/v1/actions/actionpack/{actionPackId}/auth" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.tools.getActionPackAuthStatus("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { toolsGetActionPackAuthStatus } from "@gleanwork/api-client/funcs/toolsGetActionPackAuthStatus.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await toolsGetActionPackAuthStatus(glean, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("toolsGetActionPackAuthStatus failed:", res.error);
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
  useToolsGetActionPackAuthStatus,
  useToolsGetActionPackAuthStatusSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchToolsGetActionPackAuthStatus,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateToolsGetActionPackAuthStatus,
  invalidateAllToolsGetActionPackAuthStatus,
} from "@gleanwork/api-client/react-query/toolsGetActionPackAuthStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionPackId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the action pack to query or authorize.                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ActionPackAuthStatusResponse](../../models/components/actionpackauthstatusresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## authorizeActionPack

Starts the third-party OAuth flow for the specified action pack and returns the
redirect URL that the client should navigate the end user to. After the OAuth
callback completes, the user's browser is redirected back to `returnUrl` with a
status query parameter (`?glean_action_auth=success|error&actionPackId=...`).

`returnUrl` must match the tenant's configured return URL allowlist; otherwise the
request is rejected with 400.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="authorizeActionPack" method="post" path="/rest/api/v1/actions/actionpack/{actionPackId}/auth" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.tools.authorizeActionPack({
    returnUrl: "https://merry-allocation.org/",
  }, "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { toolsAuthorizeActionPack } from "@gleanwork/api-client/funcs/toolsAuthorizeActionPack.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await toolsAuthorizeActionPack(glean, {
    returnUrl: "https://merry-allocation.org/",
  }, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("toolsAuthorizeActionPack failed:", res.error);
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
  useToolsAuthorizeActionPackMutation
} from "@gleanwork/api-client/react-query/toolsAuthorizeActionPack.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `actionPackId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the action pack to query or authorize.                                                                                                                                   |
| `authorizeActionPackRequest`                                                                                                                                                   | [components.AuthorizeActionPackRequest](../../models/components/authorizeactionpackrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AuthorizeActionPackResponse](../../models/components/authorizeactionpackresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |