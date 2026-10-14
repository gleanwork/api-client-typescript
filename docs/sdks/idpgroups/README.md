# Admin.Idpgroups

## Overview

### Available Operations

* [list](#list) - List IdP groups

## list

List the identity provider (IdP) groups that Glean loads from the directory, ordered by display_name and then by idp_group_id. Use idp_group_id to name a group in other Platform APIs. An IdP group is active when Glean loaded it from the directory. An IdP group is inactive when only a usage limit names it, for example after the group was removed from the identity provider. Inactive IdP groups are left out unless an is_active filter includes the value "false". Usage limits apply only to IdP groups from the datasource instance that the usage settings select, so use the provider_instance filter to list only those groups. Internal O365 ownership groups and SharePoint groups are left out. The caller must be able to read the workspace configuration or the workspace billing.


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

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Maximum number of IdP groups to return. Defaults to 50. Maximum is 100.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `cursor`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Opaque pagination cursor from a previous response. Send the same filters that the previous request used.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `filters`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [components.PlatformIdpGroupFilter](../../models/components/platformidpgroupfilter.md)[]                                                                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | JSON-encoded filters that choose which IdP groups are returned. The supported fields are is_active, with the values "true" and "false", and provider_instance, with datasource instance names such as "okta". provider_instance values match without case. The only supported operator is EQUALS. Multiple values OR within a filter. Multiple filters AND together. Without an is_active filter, only active IdP groups are returned. To return active and inactive IdP groups, send [{"field":"is_active","values":["true","false"]}].<br/> |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                                                                                                                                            |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Response

**Promise\<[components.PlatformListIdpGroupsResponse](../../models/components/platformlistidpgroupsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |