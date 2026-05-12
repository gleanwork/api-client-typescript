# Entities

## Overview

### Available Operations

* [getPersonPhoto](#getpersonphoto) - Get person photo

## getPersonPhoto

Returns the profile photo bytes for a person whose photo is stored in Glean (crawled from an identity source or user-uploaded via admin console). Photos hosted externally (e.g. Slack CDN) are not served by this endpoint; callers should follow the photoUrl from /people or /listentities directly. Responses include a Cache-Control header (max-age=3600) to reduce redundant fetches.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPersonPhoto" method="get" path="/rest/api/v1/people/{person_id}/photo" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.entities.getPersonPhoto("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { entitiesGetPersonPhoto } from "@gleanwork/api-client/funcs/entitiesGetPersonPhoto.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await entitiesGetPersonPhoto(glean, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("entitiesGetPersonPhoto failed:", res.error);
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
  useEntitiesGetPersonPhoto,
  useEntitiesGetPersonPhotoSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEntitiesGetPersonPhoto,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEntitiesGetPersonPhoto,
  invalidateAllEntitiesGetPersonPhoto,
} from "@gleanwork/api-client/react-query/entitiesGetPersonPhoto.js";
```

### Parameters

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `personId`                                                                                                                                                                                             | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The obfuscated ID of the person whose photo to retrieve.                                                                                                                                               |
| `ds`                                                                                                                                                                                                   | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | Optional datasource override for crawled photos (e.g. AZURE, GDRIVE, OKTA). When omitted, the datasource is derived from the person's stored photo URL or the deployment's primary person datasource.<br/> |
| `options`                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                         |
| `options.retries`                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                       |

### Response

**Promise\<[operations.GetPersonPhotoResponse](../../models/operations/getpersonphotoresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |