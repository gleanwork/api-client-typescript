# Documents

## Overview

### Available Operations

* [getByUrl](#getbyurl) - Get document by URL
* [getById](#getbyid) - Get document by ID
* [batch](#batch) - Batch get documents

## getByUrl

Retrieve one permission-visible indexed document by URL. The url is the lookup key that Platform search returns. Many URLs can resolve to one document. The response is a single document, not a list. The returned url is the permalink and may differ from the submitted URL. Gmail and Outlook search results and chat citations carry caller-specific IDs that get document by ID cannot resolve, so retrieve them by URL here. A Gmail or Outlook URL that Platform search returned can still return 404, as it can with legacy getdocuments. Retrieving search results is best-effort parity with legacy getdocuments. Federated results and go-link shortcut documents are not retrievable in this release.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-documents-get-by-url" method="get" path="/api/documents" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.documents.getByUrl("{url}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { documentsGetByUrl } from "@gleanwork/api-client/funcs/documentsGetByUrl.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await documentsGetByUrl(glean, "{url}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsGetByUrl failed:", res.error);
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
  useDocumentsGetByUrl,
  useDocumentsGetByUrlSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchDocumentsGetByUrl,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateDocumentsGetByUrl,
  invalidateAllDocumentsGetByUrl,
} from "@gleanwork/api-client/react-query/documentsGetByUrl.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `url`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | URL of the document to retrieve.                                                                                                                                               | {url}                                                                                                                                                                          |
| `include`                                                                                                                                                                      | [components.PlatformDocumentInclude](../../models/components/platformdocumentinclude.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                                                             | Optional field groups to add to each found document. Each value only adds fields; it does not change which documents are returned.<br/>                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformDocumentGetResponse](../../models/components/platformdocumentgetresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## getById

Retrieve one permission-visible indexed document by its Glean store ID. Gmail and Outlook search results and chat citations can carry caller-specific IDs that this operation cannot resolve. Try get document by URL for those documents. URL lookup does not resolve every Gmail or Outlook result.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-documents-get" method="get" path="/api/documents/{document_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.documents.getById("{document_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { documentsGetById } from "@gleanwork/api-client/funcs/documentsGetById.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await documentsGetById(glean, "{document_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsGetById failed:", res.error);
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
  useDocumentsGetById,
  useDocumentsGetByIdSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchDocumentsGetById,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateDocumentsGetById,
  invalidateAllDocumentsGetById,
} from "@gleanwork/api-client/react-query/documentsGetById.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `documentId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Indexed Glean store ID. For a Gmail or Outlook citation with a caller-specific ID, try get document by URL instead.<br/>                                                       | {document_id}                                                                                                                                                                  |
| `include`                                                                                                                                                                      | [components.PlatformDocumentInclude](../../models/components/platformdocumentinclude.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                                                             | Optional field groups to add to each found document. Each value only adds fields; it does not change which documents are returned.<br/>                                        |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformDocumentGetResponse](../../models/components/platformdocumentgetresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## batch

Retrieve up to 100 permission-visible indexed documents by URL or document_id. Found items are in results. Complete misses are warnings correlated by index. Incomplete store work fails the whole request. Retrieving search results is best-effort parity with legacy getdocuments. Gmail and Outlook caller-specific citation IDs are not accepted as document_id selectors. Use URL selectors for them. A Gmail or Outlook URL can still return a resource_not_found warning. Federated results and go-link shortcut documents are not retrievable in this release.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-documents-batch" method="post" path="/api/documents/batch" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.documents.batch({
    document_specs: [
      {
        document_id: "{document_id}",
      },
      {
        url: "https://company.atlassian.net/wiki/spaces/ENG/pages/12345",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { documentsBatch } from "@gleanwork/api-client/funcs/documentsBatch.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await documentsBatch(glean, {
    document_specs: [
      {
        document_id: "{document_id}",
      },
      {
        url: "https://company.atlassian.net/wiki/spaces/ENG/pages/12345",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsBatch failed:", res.error);
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
  useDocumentsBatchMutation
} from "@gleanwork/api-client/react-query/documentsBatch.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PlatformDocumentsBatchRequest](../../models/components/platformdocumentsbatchrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformDocumentsBatchResponse](../../models/components/platformdocumentsbatchresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 413, 429 | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |