# Client.Documents

## Overview

### Available Operations

* [retrievePermissions](#retrievepermissions) - Read document permissions
* [retrieve](#retrieve) - Read documents
* [retrieveByFacets](#retrievebyfacets) - Read documents by facets
* [summarize](#summarize) - Summarize documents

## retrievePermissions

Read the emails of all users who have access to the given document.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getdocpermissions" method="post" path="/rest/api/v1/getdocpermissions" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.documents.retrievePermissions({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientDocumentsRetrievePermissions } from "@gleanwork/api-client/funcs/clientDocumentsRetrievePermissions.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientDocumentsRetrievePermissions(glean, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientDocumentsRetrievePermissions failed:", res.error);
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
  useClientDocumentsRetrievePermissionsMutation
} from "@gleanwork/api-client/react-query/clientDocumentsRetrievePermissions.js";
```

### Parameters

| Parameter                                                                                                                                                                                           | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getDocPermissionsRequest`                                                                                                                                                                          | [components.GetDocPermissionsRequest](../../models/components/getdocpermissionsrequest.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | Document permissions request                                                                                                                                                                        |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `options`                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                      |
| `options.retries`                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                    |

### Response

**Promise\<[components.GetDocPermissionsResponse](../../models/components/getdocpermissionsresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## retrieve

Read the documents including metadata (does not include enhanced metadata via `/documentmetadata`) for the given list of Glean Document IDs or URLs specified in the request.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getdocuments" method="post" path="/rest/api/v1/getdocuments" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.documents.retrieve();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientDocumentsRetrieve } from "@gleanwork/api-client/funcs/clientDocumentsRetrieve.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientDocumentsRetrieve(glean);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientDocumentsRetrieve failed:", res.error);
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
  useClientDocumentsRetrieveMutation
} from "@gleanwork/api-client/react-query/clientDocumentsRetrieve.js";
```

### Parameters

| Parameter                                                                                                                                                                                           | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `getDocumentsRequest`                                                                                                                                                                               | [components.GetDocumentsRequest](../../models/components/getdocumentsrequest.md)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                  | Information about documents requested.                                                                                                                                                              |
| `options`                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                      |
| `options.retries`                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                    |

### Response

**Promise\<[components.GetDocumentsResponse](../../models/components/getdocumentsresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## retrieveByFacets

Read the documents including metadata (does not include enhanced metadata via `/documentmetadata`) macthing the given facet conditions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getdocumentsbyfacets" method="post" path="/rest/api/v1/getdocumentsbyfacets" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.documents.retrieveByFacets({
    filterSets: [
      {
        filters: [
          {
            fieldName: "type",
            values: [
              {
                value: "Spreadsheet",
                relationType: "EQUALS",
              },
              {
                value: "Presentation",
                relationType: "EQUALS",
              },
            ],
          },
        ],
      },
      {
        filters: [
          {
            fieldName: "type",
            values: [
              {
                value: "Spreadsheet",
                relationType: "EQUALS",
              },
              {
                value: "Presentation",
                relationType: "EQUALS",
              },
            ],
          },
        ],
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
import { clientDocumentsRetrieveByFacets } from "@gleanwork/api-client/funcs/clientDocumentsRetrieveByFacets.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientDocumentsRetrieveByFacets(glean, {
    filterSets: [
      {
        filters: [
          {
            fieldName: "type",
            values: [
              {
                value: "Spreadsheet",
                relationType: "EQUALS",
              },
              {
                value: "Presentation",
                relationType: "EQUALS",
              },
            ],
          },
        ],
      },
      {
        filters: [
          {
            fieldName: "type",
            values: [
              {
                value: "Spreadsheet",
                relationType: "EQUALS",
              },
              {
                value: "Presentation",
                relationType: "EQUALS",
              },
            ],
          },
        ],
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientDocumentsRetrieveByFacets failed:", res.error);
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
  useClientDocumentsRetrieveByFacetsMutation
} from "@gleanwork/api-client/react-query/clientDocumentsRetrieveByFacets.js";
```

### Parameters

| Parameter                                                                                                                                                                                           | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `getDocumentsByFacetsRequest`                                                                                                                                                                       | [components.GetDocumentsByFacetsRequest](../../models/components/getdocumentsbyfacetsrequest.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                  | Information about facet conditions for documents to be retrieved.                                                                                                                                   |
| `options`                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                      |
| `options.retries`                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                    |

### Response

**Promise\<[components.GetDocumentsByFacetsResponse](../../models/components/getdocumentsbyfacetsresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |

## summarize

Generate an AI summary of the requested documents.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="summarize" method="post" path="/rest/api/v1/summarize" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.client.documents.summarize({
    documentSpecs: [
      {
        ugcType: "CHATS",
        ugcId: "<id>",
      },
      {
        ugcType: "CHATS",
        ugcId: "<id>",
      },
      {
        id: "<id>",
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
import { clientDocumentsSummarize } from "@gleanwork/api-client/funcs/clientDocumentsSummarize.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await clientDocumentsSummarize(glean, {
    documentSpecs: [
      {
        ugcType: "CHATS",
        ugcId: "<id>",
      },
      {
        ugcType: "CHATS",
        ugcId: "<id>",
      },
      {
        id: "<id>",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientDocumentsSummarize failed:", res.error);
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
  useClientDocumentsSummarizeMutation
} from "@gleanwork/api-client/react-query/clientDocumentsSummarize.js";
```

### Parameters

| Parameter                                                                                                                                                                                           | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `summarizeRequest`                                                                                                                                                                                  | [components.SummarizeRequest](../../models/components/summarizerequest.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | Includes request params such as the query and specs of the documents to summarize.                                                                                                                  |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `options`                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                      |
| `options.retries`                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                    |

### Response

**Promise\<[components.SummarizeResponse](../../models/components/summarizeresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |