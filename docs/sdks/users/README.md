# Users

## Overview

### Available Operations

* [list](#list) - List users

## list

List the users in the Glean directory, ordered by display_name and then by user_id. The list includes the same people as the Glean People directory. Inactive users, such as former employees, are left out unless an is_active filter includes the value "false". Use the returned user_id values with other Platform APIs, for example as usage limit targets.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-users-list" method="get" path="/api/users" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.users.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { usersList } from "@gleanwork/api-client/funcs/usersList.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await usersList(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usersList failed:", res.error);
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
  useUsersList,
  useUsersListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchUsersList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateUsersList,
  invalidateAllUsersList,
} from "@gleanwork/api-client/react-query/usersList.js";
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                                                                                                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Maximum number of users to return. Defaults to 50. Maximum is 100.                                                                                                                                                                                                                                                                                                                          |
| `cursor`                                                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Opaque pagination cursor from a previous response. Send the same filters that the previous request used.<br/>                                                                                                                                                                                                                                                                               |
| `filters`                                                                                                                                                                                                                                                                                                                                                                                   | [components.PlatformUserFilter](../../models/components/platformuserfilter.md)[]                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | JSON-encoded filters that choose which users are returned. The only supported field is is_active, with the values "true" and "false" and the operator EQUALS. Multiple values OR within a filter. Multiple filters AND together. Without an is_active filter, only active users are returned. To return active and inactive users, send [{"field":"is_active","values":["true","false"]}].<br/> |
| `include`                                                                                                                                                                                                                                                                                                                                                                                   | [components.PlatformUserInclude](../../models/components/platformuserinclude.md)[]                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Optional fields to add to each user. Each value only adds fields; it does not change which users are returned.<br/>                                                                                                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                              |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                            |

### Response

**Promise\<[components.PlatformListUsersResponse](../../models/components/platformlistusersresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |