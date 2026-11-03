# Departments

## Overview

### Available Operations

* [list](#list) - List departments
* [get](#get) - Get a department

## list

List the departments in the Glean directory, ordered by display_name and then by department_id. The list includes every department that at least one user belongs to or that a usage limit names, so a caller can show the name of a department that a usage limit still names after its users leave it. Department names are exact, so names that differ only by case are different departments. Send a name filter to return only the departments whose display_name contains a value.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-departments-list" method="get" path="/api/departments" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.departments.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { departmentsList } from "@gleanwork/api-client/funcs/departmentsList.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await departmentsList(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("departmentsList failed:", res.error);
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
  useDepartmentsList,
  useDepartmentsListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchDepartmentsList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateDepartmentsList,
  invalidateAllDepartmentsList,
} from "@gleanwork/api-client/react-query/departmentsList.js";
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pageSize`                                                                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Maximum number of departments to return. Defaults to 50. Maximum is 100.                                                                                                                                                                                                                   |
| `cursor`                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Opaque pagination cursor from a previous response. Send the same filters that the previous request used.<br/>                                                                                                                                                                              |
| `filters`                                                                                                                                                                                                                                                                                  | [components.PlatformDepartmentFilter](../../models/components/platformdepartmentfilter.md)[]                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | JSON-encoded filters that choose which departments are returned. The only supported field is name, with the operator EQUALS. Multiple values OR within a filter. The field may appear in only one filter. A value that matches no department returns no departments rather than an error.<br/> |
| `options`                                                                                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                             |
| `options.retries`                                                                                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                           |

### Response

**Promise\<[components.PlatformListDepartmentsResponse](../../models/components/platformlistdepartmentsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## get

Get one department by its department_id. The department can be any department that the list returns, including one that only a usage limit names. A department_id that is not valid, or that no user and no usage limit uses, returns 404 resource_not_found. A department_id comes from the exact department name, so a renamed department gets a new ID, and a name that is used again gets its old ID back.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-departments-get" method="get" path="/api/departments/{department_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.departments.get("{department_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { departmentsGet } from "@gleanwork/api-client/funcs/departmentsGet.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await departmentsGet(glean, "{department_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("departmentsGet failed:", res.error);
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
  useDepartmentsGet,
  useDepartmentsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchDepartmentsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateDepartmentsGet,
  invalidateAllDepartmentsGet,
} from "@gleanwork/api-client/react-query/departmentsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `departmentId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The department_id from a list departments response or from a user's department. IDs are opaque. Do not parse or build them.<br/>                                               | {department_id}                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformGetDepartmentResponse](../../models/components/platformgetdepartmentresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |