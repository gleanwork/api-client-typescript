# Visibilityoverrides
(*client.governance.documents.visibilityoverrides*)

## Overview

### Available Operations

* [list](#list) - Fetches documents visibility.
* [create](#create) - Hide/Un-hide docs.

## list

Fetches the visibility override status of the documents passed.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.client.governance.documents.visibilityoverrides.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientGovernanceDocumentsVisibilityoverridesList } from "@gleanwork/api-client/funcs/clientGovernanceDocumentsVisibilityoverridesList.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await clientGovernanceDocumentsVisibilityoverridesList(glean);

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
  // Query hooks for fetching data.
  useClientGovernanceDocumentsVisibilityoverridesList,
  useClientGovernanceDocumentsVisibilityoverridesListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchClientGovernanceDocumentsVisibilityoverridesList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateClientGovernanceDocumentsVisibilityoverridesList,
  invalidateAllClientGovernanceDocumentsVisibilityoverridesList,
} from "@gleanwork/api-client/react-query/clientGovernanceDocumentsVisibilityoverridesList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `docIds`                                                                                                                                                                       | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | List of doc-ids which will have their hide status fetched.                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetDocumentVisibilityOverridesResponse](../../models/components/getdocumentvisibilityoverridesresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## create

Sets the visibility-override state of the documents specified, effectively hiding or un-hiding documents.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await glean.client.governance.documents.visibilityoverrides.create({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientGovernanceDocumentsVisibilityoverridesCreate } from "@gleanwork/api-client/funcs/clientGovernanceDocumentsVisibilityoverridesCreate.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await clientGovernanceDocumentsVisibilityoverridesCreate(glean, {});

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
  useClientGovernanceDocumentsVisibilityoverridesCreateMutation
} from "@gleanwork/api-client/react-query/clientGovernanceDocumentsVisibilityoverridesCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UpdateDocumentVisibilityOverridesRequest](../../models/components/updatedocumentvisibilityoverridesrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UpdateDocumentVisibilityOverridesResponse](../../models/components/updatedocumentvisibilityoverridesresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |