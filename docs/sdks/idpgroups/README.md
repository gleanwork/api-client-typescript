# Admin.Idpgroups

## Overview

### Available Operations

* [list](#list) - List IdP groups
* [get](#get) - Get an IdP group

## list

List the identity provider (IdP) groups that Glean loads from the directory, ordered by display_name and then by idp_group_id. Use idp_group_id to name a group in other Platform APIs, such as the usage limit evaluation and limit increase request APIs. Usage limits apply only to IdP groups from the datasource instance in usage_settings.user_grouping.idp_group_provider_instance of the get usage settings response, and this API always lists that instance's groups. To list only those groups, pass that value in a provider_instance filter of the filters parameter, for example `filters=[{"field":"provider_instance","operator":"EQUALS","values":["okta"]}]`, URL-encoded as `filters=%5B%7B%22field%22%3A%22provider_instance%22%2C%22operator%22%3A%22EQUALS%22%2C%22values%22%3A%5B%22okta%22%5D%7D%5D`. Internal O365 ownership groups and SharePoint groups are left out. The caller must be able to read the workspace configuration or the workspace billing.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-admin-idp-groups-list" method="get" path="/api/admin/idp-groups" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.admin.idpgroups.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { adminIdpgroupsList } from "@gleanwork/api-client/funcs/adminIdpgroupsList.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await adminIdpgroupsList(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminIdpgroupsList failed:", res.error);
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
  useAdminIdpgroupsList,
  useAdminIdpgroupsListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAdminIdpgroupsList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAdminIdpgroupsList,
  invalidateAllAdminIdpgroupsList,
} from "@gleanwork/api-client/react-query/adminIdpgroupsList.js";
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                    | Maximum number of IdP groups to return. Defaults to 50. Maximum is 100.                                                                                                                                                                                                                                               |
| `cursor`                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                    | Opaque pagination cursor from a previous response. Send the same filters that the previous request used.<br/>                                                                                                                                                                                                         |
| `filters`                                                                                                                                                                                                                                                                                                             | [components.PlatformIdpGroupFilter](../../models/components/platformidpgroupfilter.md)[]                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                    | JSON-encoded filters that choose which IdP groups are returned. The only supported field is provider_instance, with datasource instance names such as "okta". provider_instance values match without case. The only supported operator is EQUALS. Multiple values OR within a filter. Multiple filters AND together.<br/> |
| `options`                                                                                                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                        |
| `options.retries`                                                                                                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                      |

### Response

**Promise\<[components.PlatformListIdpGroupsResponse](../../models/components/platformlistidpgroupsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## get

Get one identity provider (IdP) group by its idp_group_id. An idp_group_id that is not valid, or that names no group that the list returns, returns 404 resource_not_found. A group that was removed from the identity provider returns 404 after Glean reloads the directory. The caller must be able to read the workspace configuration or the workspace billing.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-admin-idp-groups-get" method="get" path="/api/admin/idp-groups/{idp_group_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.admin.idpgroups.get("{idp_group_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { adminIdpgroupsGet } from "@gleanwork/api-client/funcs/adminIdpgroupsGet.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await adminIdpgroupsGet(glean, "{idp_group_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("adminIdpgroupsGet failed:", res.error);
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
  useAdminIdpgroupsGet,
  useAdminIdpgroupsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAdminIdpgroupsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAdminIdpgroupsGet,
  invalidateAllAdminIdpgroupsGet,
} from "@gleanwork/api-client/react-query/adminIdpgroupsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `idpGroupId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The idp_group_id from a list IdP groups response or a usage API response. IDs are opaque. Do not parse or build them.<br/>                                                     | {idp_group_id}                                                                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformGetIdpGroupResponse](../../models/components/platformgetidpgroupresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |