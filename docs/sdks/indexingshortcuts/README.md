# IndexingShortcuts
(*indexing.shortcuts*)

## Overview

### Available Operations

* [bulkIndex](#bulkindex) - Bulk index external shortcuts

## bulkIndex

Replaces all the currently indexed shortcuts using paginated batch API calls. Note that this endpoint is used for indexing shortcuts not hosted by Glean. If you want to upload shortcuts that would be hosted by Glean, please use the `/uploadshortcuts` endpoint. For information on what you can do with Golinks, which are Glean-hosted shortcuts, please refer to [this](https://help.glean.com/en/articles/5628838-how-go-links-work) page.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.indexing.shortcuts.bulkIndex({
    uploadId: "<id>",
    shortcuts: [
      {
        inputAlias: "<value>",
        destinationUrl: "https://only-juggernaut.com/",
        createdBy: "<value>",
        intermediateUrl: "https://descriptive-electronics.name",
      },
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { indexingShortcutsBulkIndex } from "@gleanwork/api-client/funcs/indexingShortcutsBulkIndex.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await indexingShortcutsBulkIndex(glean, {
    uploadId: "<id>",
    shortcuts: [
      {
        inputAlias: "<value>",
        destinationUrl: "https://only-juggernaut.com/",
        createdBy: "<value>",
        intermediateUrl: "https://descriptive-electronics.name",
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
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
  useIndexingShortcutsBulkIndexMutation
} from "@gleanwork/api-client/react-query/indexingShortcutsBulkIndex.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BulkIndexShortcutsRequest](../../models/components/bulkindexshortcutsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |