# Troubleshooting

## Overview

### Available Operations

* [postApiIndexV1DebugDatasourceDocumentEvents](#postapiindexv1debugdatasourcedocumentevents) - Beta: Get document lifecycle events


## postApiIndexV1DebugDatasourceDocumentEvents

Retrieves lifecycle events for a specific document including upload time, index times and deletions. Rate limited to 1 request per minute per datasource. Currently in beta, might undergo breaking changes without prior notice.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/api/index/v1/debug/{datasource}/document/events" method="post" path="/api/index/v1/debug/{datasource}/document/events" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.troubleshooting.postApiIndexV1DebugDatasourceDocumentEvents({
    objectType: "Article",
    docId: "art123",
    startDate: "2025-05-01",
    maxEvents: 50,
  }, "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { troubleshootingPostApiIndexV1DebugDatasourceDocumentEvents } from "@gleanwork/api-client/funcs/troubleshootingPostApiIndexV1DebugDatasourceDocumentEvents.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await troubleshootingPostApiIndexV1DebugDatasourceDocumentEvents(glean, {
    objectType: "Article",
    docId: "art123",
    startDate: "2025-05-01",
    maxEvents: 50,
  }, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("troubleshootingPostApiIndexV1DebugDatasourceDocumentEvents failed:", res.error);
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
  useTroubleshootingPostApiIndexV1DebugDatasourceDocumentEventsMutation
} from "@gleanwork/api-client/react-query/troubleshootingPostApiIndexV1DebugDatasourceDocumentEvents.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasource`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The datasource to which the document belongs                                                                                                                                   |
| `debugDocumentLifecycleRequest`                                                                                                                                                | [components.DebugDocumentLifecycleRequest](../../models/components/debugdocumentlifecyclerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DebugDocumentLifecycleResponse](../../models/components/debugdocumentlifecycleresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |