# Authentication

## Overview

Manage indexing API tokens.

### Available Operations

* [checkdatasourceauth](#checkdatasourceauth) - Check datasource authorization

## checkdatasourceauth

Returns all datasource instances that require per-user OAuth authorization
for the authenticated user, along with a transient auth token that can be
appended to auth URLs to complete OAuth flows.

Clients construct the full OAuth URL by combining the backend base URL,
the `authUrlRelativePath` from each instance, and the transient auth token:
`<backend>/<authUrlRelativePath>?transient_auth_token=<token>`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="checkdatasourceauth" method="post" path="/rest/api/v1/checkdatasourceauth" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.authentication.checkdatasourceauth();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { authenticationCheckdatasourceauth } from "@gleanwork/api-client/funcs/authenticationCheckdatasourceauth.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await authenticationCheckdatasourceauth(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationCheckdatasourceauth failed:", res.error);
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
  useAuthenticationCheckdatasourceauthMutation
} from "@gleanwork/api-client/react-query/authenticationCheckdatasourceauth.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CheckDatasourceAuthResponse](../../models/components/checkdatasourceauthresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |