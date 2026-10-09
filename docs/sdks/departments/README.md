# Departments

## Overview

### Available Operations

* [list](#list) - List departments

## list

List the departments in the Glean directory, ordered by display_name and then by department_id. A department is active when at least one active user belongs to it. A department is inactive when only inactive users, such as former employees, belong to it, or when only a usage limit names it. Inactive departments are left out unless an is_active filter includes the value "false". Department names are exact, so names that differ only by case are different departments.


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

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                                                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                            | Maximum number of departments to return. Defaults to 50. Maximum is 100.                                                                                                                                                                                                                                                                                                                                      |
| `cursor`                                                                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                            | Opaque pagination cursor from a previous response. Send the same filters that the previous request used.<br/>                                                                                                                                                                                                                                                                                                 |
| `filters`                                                                                                                                                                                                                                                                                                                                                                                                     | [components.PlatformDepartmentFilter](../../models/components/platformdepartmentfilter.md)[]                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                            | JSON-encoded filters that choose which departments are returned. The only supported field is is_active, with the values "true" and "false" and the operator EQUALS. Multiple values OR within a filter. Multiple filters AND together. Without an is_active filter, only active departments are returned. To return active and inactive departments, send [{"field":"is_active","values":["true","false"]}].<br/> |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                              |

### Response

**Promise\<[components.PlatformListDepartmentsResponse](../../models/components/platformlistdepartmentsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |