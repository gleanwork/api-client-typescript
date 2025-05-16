# IndexingAuthentication
(*indexing.authentication*)

## Overview

### Available Operations

* [rotateToken](#rotatetoken) - Rotate token

## rotateToken

Rotates the secret value inside the Indexing API token and returns the new raw secret. All other properties of the token are unchanged. In order to rotate the secret value, include the token as the bearer token in the `/rotatetoken` request. Please refer to [Token rotation](https://developers.glean.com/docs/indexing_api_token_rotation/) documentation for more information.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.indexing.authentication.rotateToken();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { indexingAuthenticationRotateToken } from "@gleanwork/api-client/funcs/indexingAuthenticationRotateToken.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await indexingAuthenticationRotateToken(glean);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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
  useIndexingAuthenticationRotateTokenMutation
} from "@gleanwork/api-client/react-query/indexingAuthenticationRotateToken.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RotateTokenResponse](../../models/components/rotatetokenresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |