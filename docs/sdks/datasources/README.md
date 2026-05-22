# Datasources

## Overview

Manage datasources.

### Available Operations

* [getDatasourceInstanceConfiguration](#getdatasourceinstanceconfiguration) - Get datasource instance configuration
* [updateDatasourceInstanceConfiguration](#updatedatasourceinstanceconfiguration) - Update datasource instance configuration
* [getDatasourceCredentialStatus](#getdatasourcecredentialstatus) - Get datasource instance credential status
* [rotateDatasourceCredentials](#rotatedatasourcecredentials) - Rotate datasource instance credentials

## getDatasourceInstanceConfiguration

Gets the greenlisted configuration values for a datasource instance. Returns only configuration keys that are exposed via the public API greenlist.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDatasourceInstanceConfiguration" method="get" path="/rest/api/v1/configure/datasources/{datasourceId}/instances/{instanceId}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.datasources.getDatasourceInstanceConfiguration("o365sharepoint", "o365sharepoint_abc123");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { datasourcesGetDatasourceInstanceConfiguration } from "@gleanwork/api-client/funcs/datasourcesGetDatasourceInstanceConfiguration.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await datasourcesGetDatasourceInstanceConfiguration(glean, "o365sharepoint", "o365sharepoint_abc123");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasourcesGetDatasourceInstanceConfiguration failed:", res.error);
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
  useDatasourcesGetDatasourceInstanceConfiguration,
  useDatasourcesGetDatasourceInstanceConfigurationSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchDatasourcesGetDatasourceInstanceConfiguration,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateDatasourcesGetDatasourceInstanceConfiguration,
  invalidateAllDatasourcesGetDatasourceInstanceConfiguration,
} from "@gleanwork/api-client/react-query/datasourcesGetDatasourceInstanceConfiguration.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasourceId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The datasource type identifier (e.g. o365sharepoint)                                                                                                                           | o365sharepoint                                                                                                                                                                 |
| `instanceId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The datasource instance identifier                                                                                                                                             | o365sharepoint_abc123                                                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.DatasourceConfigurationResponse](../../models/components/datasourceconfigurationresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 403, 404        | application/json     |
| errors.GleanError    | 4XX, 5XX             | \*/\*                |

## updateDatasourceInstanceConfiguration

Updates the greenlisted configuration values for a datasource instance. Only configuration keys that are exposed via the public API greenlist may be set. Returns the full greenlisted configuration after the update is applied.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDatasourceInstanceConfiguration" method="patch" path="/rest/api/v1/configure/datasources/{datasourceId}/instances/{instanceId}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.datasources.updateDatasourceInstanceConfiguration({
    configuration: {
      values: {

      },
    },
  }, "o365sharepoint", "o365sharepoint_abc123");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { datasourcesUpdateDatasourceInstanceConfiguration } from "@gleanwork/api-client/funcs/datasourcesUpdateDatasourceInstanceConfiguration.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await datasourcesUpdateDatasourceInstanceConfiguration(glean, {
    configuration: {
      values: {
  
      },
    },
  }, "o365sharepoint", "o365sharepoint_abc123");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasourcesUpdateDatasourceInstanceConfiguration failed:", res.error);
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
  useDatasourcesUpdateDatasourceInstanceConfigurationMutation
} from "@gleanwork/api-client/react-query/datasourcesUpdateDatasourceInstanceConfiguration.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasourceId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The datasource type identifier (e.g. o365sharepoint)                                                                                                                           | o365sharepoint                                                                                                                                                                 |
| `instanceId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The datasource instance identifier                                                                                                                                             | o365sharepoint_abc123                                                                                                                                                          |
| `updateDatasourceConfigurationRequest`                                                                                                                                         | [components.UpdateDatasourceConfigurationRequest](../../models/components/updatedatasourceconfigurationrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.DatasourceConfigurationResponse](../../models/components/datasourceconfigurationresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 403, 404        | application/json     |
| errors.GleanError    | 4XX, 5XX             | \*/\*                |

## getDatasourceCredentialStatus

Returns the current credential status for a datasource instance. Access is limited to callers with the ADMIN scope; the handler enforces this check.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDatasourceCredentialStatus" method="get" path="/rest/api/v1/datasource/{datasourceInstanceId}/credentialstatus" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.datasources.getDatasourceCredentialStatus("o365sharepoint_abc123");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { datasourcesGetDatasourceCredentialStatus } from "@gleanwork/api-client/funcs/datasourcesGetDatasourceCredentialStatus.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await datasourcesGetDatasourceCredentialStatus(glean, "o365sharepoint_abc123");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasourcesGetDatasourceCredentialStatus failed:", res.error);
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
  useDatasourcesGetDatasourceCredentialStatus,
  useDatasourcesGetDatasourceCredentialStatusSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchDatasourcesGetDatasourceCredentialStatus,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateDatasourcesGetDatasourceCredentialStatus,
  invalidateAllDatasourcesGetDatasourceCredentialStatus,
} from "@gleanwork/api-client/react-query/datasourcesGetDatasourceCredentialStatus.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasourceInstanceId`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full datasource instance identifier (e.g. o365sharepoint_abc123)                                                                                                           | o365sharepoint_abc123                                                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.DatasourceCredentialStatusResponse](../../models/components/datasourcecredentialstatusresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 403, 404        | application/json     |
| errors.GleanError    | 4XX, 5XX             | \*/\*                |

## rotateDatasourceCredentials

Rotates the credentials that a datasource instance uses to connect to its upstream system. Replaces the active credential material with the supplied values and returns the credential status after rotation. Access is limited to callers with the ADMIN scope; the handler enforces this check.
Only keys recognized as credential material for the datasource type may be set in `credentials.values` (e.g. `clientSecret`, `apiToken`, `privateKey`, depending on the configured auth method). Unrecognized keys, or keys that correspond to non-credential configuration, cause a 400; other instance configuration must be updated via PATCH /configure/datasources/{datasourceId}/instances/{instanceId}.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="rotateDatasourceCredentials" method="post" path="/rest/api/v1/datasource/{datasourceInstanceId}/credentials" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.datasources.rotateDatasourceCredentials({
    credentials: {
      values: {
        "key": {},
      },
    },
  }, "o365sharepoint_abc123");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { datasourcesRotateDatasourceCredentials } from "@gleanwork/api-client/funcs/datasourcesRotateDatasourceCredentials.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await datasourcesRotateDatasourceCredentials(glean, {
    credentials: {
      values: {
        "key": {},
      },
    },
  }, "o365sharepoint_abc123");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasourcesRotateDatasourceCredentials failed:", res.error);
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
  useDatasourcesRotateDatasourceCredentialsMutation
} from "@gleanwork/api-client/react-query/datasourcesRotateDatasourceCredentials.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasourceInstanceId`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full datasource instance identifier (e.g. o365sharepoint_abc123)                                                                                                           | o365sharepoint_abc123                                                                                                                                                          |
| `rotateDatasourceCredentialsRequest`                                                                                                                                           | [components.RotateDatasourceCredentialsRequest](../../models/components/rotatedatasourcecredentialsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.DatasourceCredentialStatusResponse](../../models/components/datasourcecredentialstatusresponse.md)\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400, 403, 404        | application/json     |
| errors.GleanError    | 4XX, 5XX             | \*/\*                |