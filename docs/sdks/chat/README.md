# Chat

## Overview

### Available Operations

* [create](#create) - Create a chat response
* [update](#update) - Update a chat
* [createStream](#createstream) - Create a streaming chat response

## create

Run an assistant turn. The default response is JSON. HTTP clients request server-sent events by setting `stream` to true in the JSON body. An `Accept: text/event-stream` header does not replace `stream`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-chat-create" method="post" path="/api/chat" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.chat.create({
    input: "Summarize our parental leave policy as JSON.",
    text: {
      format: {
        type: "JSON_SCHEMA",
        name: "policy_summary",
        schema: {
          "type": "object",
          "properties": {
            "eligible_employees": {
              "type": "string",
            },
            "duration_weeks": {
              "type": "integer",
            },
          },
          "required": [
            "eligible_employees",
            "duration_weeks",
          ],
        },
        strict: true,
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { chatCreate } from "@gleanwork/api-client/funcs/chatCreate.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await chatCreate(glean, {
    input: "Summarize our parental leave policy as JSON.",
    text: {
      format: {
        type: "JSON_SCHEMA",
        name: "policy_summary",
        schema: {
          "type": "object",
          "properties": {
            "eligible_employees": {
              "type": "string",
            },
            "duration_weeks": {
              "type": "integer",
            },
          },
          "required": [
            "eligible_employees",
            "duration_weeks",
          ],
        },
        strict: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatCreate failed:", res.error);
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
  useChatCreateMutation
} from "@gleanwork/api-client/react-query/chatCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PlatformChatCreateRequest](../../models/operations/platformchatcreaterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformChatCompletedResponse](../../models/components/platformchatcompletedresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PlatformProblemDetailError      | 400, 401, 403, 404, 408, 413, 422, 429 | application/problem+json               |
| errors.PlatformProblemDetailError      | 500, 503                               | application/problem+json               |
| errors.GleanError                      | 4XX, 5XX                               | \*/\*                                  |

## update

Update the name of a chat. Only the chat owner can update it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-chat-update" method="patch" path="/api/chats/{chat_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.chat.update({
    name: "Quarterly planning notes",
  }, "{chat_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { chatUpdate } from "@gleanwork/api-client/funcs/chatUpdate.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await chatUpdate(glean, {
    name: "Quarterly planning notes",
  }, "{chat_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatUpdate failed:", res.error);
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
  useChatUpdateMutation
} from "@gleanwork/api-client/react-query/chatUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the chat to update.                                                                                                                                                  | {chat_id}                                                                                                                                                                      |
| `platformChatUpdateRequest`                                                                                                                                                    | [components.PlatformChatUpdateRequest](../../models/components/platformchatupdaterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformChatUpdateResponse](../../models/components/platformchatupdateresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 405, 413, 429 | application/problem+json          |
| errors.PlatformProblemDetailError | 500                               | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## createStream

SDK-only logical operation. HTTP clients must call the base path; the URL fragment is not sent. Run an assistant turn as server-sent events. HTTP clients request this mode by setting `stream` to true in the JSON body.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-chat-create-stream" method="post" path="/api/chat#stream" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.chat.createStream({
    input: "Summarize our parental leave policy as JSON.",
    text: {
      format: {
        type: "JSON_SCHEMA",
        name: "policy_summary",
        schema: {
          "type": "object",
          "properties": {
            "eligible_employees": {
              "type": "string",
            },
            "duration_weeks": {
              "type": "integer",
            },
          },
          "required": [
            "eligible_employees",
            "duration_weeks",
          ],
        },
        strict: true,
      },
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { chatCreateStream } from "@gleanwork/api-client/funcs/chatCreateStream.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await chatCreateStream(glean, {
    input: "Summarize our parental leave policy as JSON.",
    text: {
      format: {
        type: "JSON_SCHEMA",
        name: "policy_summary",
        schema: {
          "type": "object",
          "properties": {
            "eligible_employees": {
              "type": "string",
            },
            "duration_weeks": {
              "type": "integer",
            },
          },
          "required": [
            "eligible_employees",
            "duration_weeks",
          ],
        },
        strict: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    console.log(event);
  }
  } else {
    console.log("chatCreateStream failed:", res.error);
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
  useChatCreateStreamMutation
} from "@gleanwork/api-client/react-query/chatCreateStream.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PlatformChatCreateStreamRequest](../../models/operations/platformchatcreatestreamrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<components.PlatformChatStreamEventServerSentEvent>](../../models/.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PlatformProblemDetailError      | 400, 401, 403, 404, 408, 413, 422, 429 | application/problem+json               |
| errors.PlatformProblemDetailError      | 500, 503                               | application/problem+json               |
| errors.GleanError                      | 4XX, 5XX                               | \*/\*                                  |