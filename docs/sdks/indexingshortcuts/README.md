# IndexingShortcuts
(*indexing.shortcuts*)

## Overview

### Available Operations

* [bulkIndex](#bulkindex) - Bulk index external shortcuts
* [upload](#upload) - Upload shortcuts

## bulkIndex

Replaces all the currently indexed shortcuts using paginated batch API calls. Note that this endpoint is used for indexing shortcuts not hosted by Glean. If you want to upload shortcuts that would be hosted by Glean, please use the `/uploadshortcuts` endpoint. For information on what you can do with Golinks, which are Glean-hosted shortcuts, please refer to [this](https://help.glean.com/en/articles/5628838-how-go-links-work) page.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  await glean.indexing.shortcuts.bulkIndex({
    uploadId: "<id>",
    shortcuts: [
      {
        inputAlias: "<value>",
        destinationUrl: "https://plump-tune-up.biz/",
        createdBy: "<value>",
        intermediateUrl: "https://lean-sightseeing.net",
      },
      {
        inputAlias: "<value>",
        destinationUrl: "https://plump-tune-up.biz/",
        createdBy: "<value>",
        intermediateUrl: "https://lean-sightseeing.net",
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
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await indexingShortcutsBulkIndex(glean, {
    uploadId: "<id>",
    shortcuts: [
      {
        inputAlias: "<value>",
        destinationUrl: "https://plump-tune-up.biz/",
        createdBy: "<value>",
        intermediateUrl: "https://lean-sightseeing.net",
      },
      {
        inputAlias: "<value>",
        destinationUrl: "https://plump-tune-up.biz/",
        createdBy: "<value>",
        intermediateUrl: "https://lean-sightseeing.net",
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

## upload

Creates glean shortcuts for uploaded shortcuts info. Glean would host the shortcuts, and they can be managed in the knowledge tab once uploaded.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  await glean.indexing.shortcuts.upload({
    uploadId: "<id>",
    shortcuts: [
      {
        inputAlias: "<value>",
        destinationUrl: "https://majestic-pharmacopoeia.info/",
        createdBy: "<value>",
      },
      {
        inputAlias: "<value>",
        destinationUrl: "https://majestic-pharmacopoeia.info/",
        createdBy: "<value>",
      },
      {
        inputAlias: "<value>",
        destinationUrl: "https://majestic-pharmacopoeia.info/",
        createdBy: "<value>",
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
import { indexingShortcutsUpload } from "@gleanwork/api-client/funcs/indexingShortcutsUpload.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  security: {
    actAsBearerToken: process.env["GLEAN_ACT_AS_BEARER_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await indexingShortcutsUpload(glean, {
    uploadId: "<id>",
    shortcuts: [
      {
        inputAlias: "<value>",
        destinationUrl: "https://majestic-pharmacopoeia.info/",
        createdBy: "<value>",
      },
      {
        inputAlias: "<value>",
        destinationUrl: "https://majestic-pharmacopoeia.info/",
        createdBy: "<value>",
      },
      {
        inputAlias: "<value>",
        destinationUrl: "https://majestic-pharmacopoeia.info/",
        createdBy: "<value>",
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
  useIndexingShortcutsUploadMutation
} from "@gleanwork/api-client/react-query/indexingShortcutsUpload.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UploadShortcutsRequest](../../models/components/uploadshortcutsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |