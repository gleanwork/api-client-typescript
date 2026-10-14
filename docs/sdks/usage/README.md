# Admin.Usage

## Overview

### Available Operations

* [getSettings](#getsettings) - Get usage settings
* [updateSettings](#updatesettings) - Update usage settings

## getSettings

Retrieve workspace-wide policy from the same configuration used by Billing. Group resolution uses the configured policy and its backend defaults; business justification is currently optional. No per-user settings are read, and updated_at is omitted because no policy-update timestamp is available. Requires admin.usage.settings:read and permission to read workspace billing; a global administrator role is not required.


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

Assign workspace-wide usage policy. Assignment is currently unavailable until a writer to authoritative Billing configuration is integrated. The backend config platform.usageSettingsWritesEnabled is disabled by default; enabling it alone does not implement assignment, and an authorized request still returns 503 without changing configuration or persisting a second copy of policy. Requires admin.usage.settings:write and permission to edit workspace billing; a global administrator role is not required.


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