# Admin.Usage

## Overview

### Available Operations

* [getSettings](#getsettings) - Get usage settings
* [updateSettings](#updatesettings) - Update usage settings
* [createLimitIncreaseRequest](#createlimitincreaserequest) - Submit an editable-agent limit-increase request
* [listLimitIncreaseRequests](#listlimitincreaserequests) - List the billing limit-increase request queue
* [getLimitIncreaseRequest](#getlimitincreaserequest) - Get a billing limit-increase request

## getSettings

Retrieve workspace-wide usage settings. Requires admin.usage.settings:read and permission to read workspace billing; a global administrator role is not required.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-admin-usage-settings-get" method="get" path="/api/admin/usage/settings" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.admin.usage.getSettings();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { adminUsageGetSettings } from "@gleanwork/api-client/funcs/adminUsageGetSettings.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await adminUsageGetSettings(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminUsageGetSettings failed:", res.error);
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
  useAdminUsageGetSettings,
  useAdminUsageGetSettingsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAdminUsageGetSettings,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllAdminUsageGetSettings,
} from "@gleanwork/api-client/react-query/adminUsageGetSettings.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformUsageSettingsResponse](../../models/components/platformusagesettingsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## updateSettings

Partially update workspace-wide usage settings. Requires admin.usage.settings:write and permission to edit workspace billing; a global administrator role is not required.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-admin-usage-settings-update" method="patch" path="/api/admin/usage/settings" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.admin.usage.updateSettings({
    multiple_membership_resolution: {
      per_member: {
        idp_groups: "HIGHEST",
      },
    },
    limit_increase_requests: {
      business_justification: "REQUIRED",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { adminUsageUpdateSettings } from "@gleanwork/api-client/funcs/adminUsageUpdateSettings.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await adminUsageUpdateSettings(glean, {
    multiple_membership_resolution: {
      per_member: {
        idp_groups: "HIGHEST",
      },
    },
    limit_increase_requests: {
      business_justification: "REQUIRED",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminUsageUpdateSettings failed:", res.error);
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
  useAdminUsageUpdateSettingsMutation
} from "@gleanwork/api-client/react-query/adminUsageUpdateSettings.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PlatformUsageSettingsUpdateRequestUnion](../../models/components/platformusagesettingsupdaterequestunion.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformUsageSettingsResponse](../../models/components/platformusagesettingsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 413, 429 | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## createLimitIncreaseRequest

Requires usage.limit_increase_requests:write, the same scope as personal creation, and current edit permission on the agent, not billing permissions. The caller supplies the agent, client, and optional business justification. Requester identity comes from authentication; the server assigns the request identifier and current UTC month. This internal scaffold returns 503 without creating a request.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-admin-usage-requests-create" method="post" path="/api/admin/usage/limit-increase-requests" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.admin.usage.createLimitIncreaseRequest({
    agent_id: "{agent_id}",
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
import { adminUsageCreateLimitIncreaseRequest } from "@gleanwork/api-client/funcs/adminUsageCreateLimitIncreaseRequest.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await adminUsageCreateLimitIncreaseRequest(glean, {
    agent_id: "{agent_id}",
    client_id: "glean",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminUsageCreateLimitIncreaseRequest failed:", res.error);
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
  useAdminUsageCreateLimitIncreaseRequestMutation
} from "@gleanwork/api-client/react-query/adminUsageCreateLimitIncreaseRequest.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PlatformAgentRequestCreate](../../models/components/platformagentrequestcreate.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Requires admin.usage.limit_increase_requests:read and current workspace billing read permission. Agent ownership is not queue access. Cursors bind filters and current authorization context. This internal scaffold returns 503, not a successful empty page.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-admin-usage-requests-list" method="get" path="/api/admin/usage/limit-increase-requests" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.admin.usage.listLimitIncreaseRequests();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { adminUsageListLimitIncreaseRequests } from "@gleanwork/api-client/funcs/adminUsageListLimitIncreaseRequests.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await adminUsageListLimitIncreaseRequests(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminUsageListLimitIncreaseRequests failed:", res.error);
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
  useAdminUsageListLimitIncreaseRequests,
  useAdminUsageListLimitIncreaseRequestsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAdminUsageListLimitIncreaseRequests,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAdminUsageListLimitIncreaseRequests,
  invalidateAllAdminUsageListLimitIncreaseRequests,
} from "@gleanwork/api-client/react-query/adminUsageListLimitIncreaseRequests.js";
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

Requires admin.usage.limit_increase_requests:read. Authorization precedes resource disclosure. This internal scaffold returns 503 without reading the request.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-admin-usage-requests-get" method="get" path="/api/admin/usage/limit-increase-requests/{request_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.admin.usage.getLimitIncreaseRequest("{request_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { adminUsageGetLimitIncreaseRequest } from "@gleanwork/api-client/funcs/adminUsageGetLimitIncreaseRequest.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await adminUsageGetLimitIncreaseRequest(glean, "{request_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminUsageGetLimitIncreaseRequest failed:", res.error);
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
  useAdminUsageGetLimitIncreaseRequest,
  useAdminUsageGetLimitIncreaseRequestSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAdminUsageGetLimitIncreaseRequest,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAdminUsageGetLimitIncreaseRequest,
  invalidateAllAdminUsageGetLimitIncreaseRequest,
} from "@gleanwork/api-client/react-query/adminUsageGetLimitIncreaseRequest.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Opaque request identifier; not an authorization grant.                                                                                                                         | {request_id}                                                                                                                                                                   |
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