# Agents

## Overview

### Available Operations

* [search](#search) - Search agents
* [get](#get) - Get agent
* [getSchemas](#getschemas) - Get agent schemas
* [createRun](#createrun) - Create agent run
* [getRun](#getrun) - Get agent run
* [cancelRun](#cancelrun) - Cancel an agent run
* [respondToRun](#respondtorun) - Respond to agent run approvals

## search

Search agents available to the authenticated user by agent name.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-agents-search" method="post" path="/api/agents/search" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.agents.search({
    name: "HR Policy Agent",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { agentsSearch } from "@gleanwork/api-client/funcs/agentsSearch.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await agentsSearch(glean, {
    name: "HR Policy Agent",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsSearch failed:", res.error);
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
  useAgentsSearchMutation
} from "@gleanwork/api-client/react-query/agentsSearch.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PlatformAgentsSearchRequest](../../models/components/platformagentssearchrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PlatformAgentsSearchResponse](../../models/components/platformagentssearchresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 413, 429 | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## get

Retrieve details for an agent available to the authenticated user.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-agents-get" method="get" path="/api/agents/{agent_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.agents.get("{agent_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { agentsGet } from "@gleanwork/api-client/funcs/agentsGet.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await agentsGet(glean, "{agent_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsGet failed:", res.error);
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
  useAgentsGet,
  useAgentsGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAgentsGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAgentsGet,
  invalidateAllAgentsGet,
} from "@gleanwork/api-client/react-query/agentsGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the agent to retrieve.                                                                                                                                                   | {agent_id}                                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformAgentGetResponse](../../models/components/platformagentgetresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## getSchemas

Retrieve an agent's input and output JSON schemas.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-agents-get-schemas" method="get" path="/api/agents/{agent_id}/schemas" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.agents.getSchemas("{agent_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { agentsGetSchemas } from "@gleanwork/api-client/funcs/agentsGetSchemas.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await agentsGetSchemas(glean, "{agent_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsGetSchemas failed:", res.error);
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
  useAgentsGetSchemas,
  useAgentsGetSchemasSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAgentsGetSchemas,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAgentsGetSchemas,
  invalidateAllAgentsGetSchemas,
} from "@gleanwork/api-client/react-query/agentsGetSchemas.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the agent whose schemas should be retrieved.                                                                                                                             | {agent_id}                                                                                                                                                                     |
| `includeTools`                                                                                                                                                                 | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include tool metadata in the response.                                                                                                                              |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformAgentSchemasResponse](../../models/components/platformagentschemasresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## createRun

Execute an agent run. By default, set `stream` to true to receive server-sent events; otherwise the response contains the final agent messages. Set `execution_mode` to `DURABLE` to persist a new run and return its initial snapshot with HTTP 201 without waiting for execution. Poll the agent-scoped GET run endpoint for progress. Durable execution continues after an HTTP disconnect, but is not automatically resumed after a QE restart or crash. An active turn becomes overdue more than 40 minutes after acceptance (a 30-minute execution timeout plus 10 minutes of grace). The next GET of the run marks the overdue turn FAILED without replay; there is no periodic sweep. Without a GET, the stored run can remain RUNNING. Failure does not prove that external tool work has stopped. Paused runs are not expired; an accepted approval continuation starts a fresh deadline. Each POST creates a new run; retrying a POST can create another execution. Submit pending approval decisions through the run responses endpoint, and cancellation can be requested through the run cancellations endpoint. A run tracks one workflow execution; automatic background-subagent wake turns are separate executions, not continuations tracked by this run ID.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-agents-create-run" method="post" path="/api/agents/{agent_id}/runs" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.agents.createRun({
    messages: [
      {
        role: "USER",
        content: [
          {
            text: "What is our parental leave policy?",
            type: "text",
          },
        ],
      },
    ],
  }, "{agent_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { agentsCreateRun } from "@gleanwork/api-client/funcs/agentsCreateRun.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await agentsCreateRun(glean, {
    messages: [
      {
        role: "USER",
        content: [
          {
            text: "What is our parental leave policy?",
            type: "text",
          },
        ],
      },
    ],
  }, "{agent_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsCreateRun failed:", res.error);
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
  useAgentsCreateRunMutation
} from "@gleanwork/api-client/react-query/agentsCreateRun.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the agent to run.                                                                                                                                                        | {agent_id}                                                                                                                                                                     |
| `platformAgentRunCreateRequest`                                                                                                                                                | [components.PlatformAgentRunCreateRequest](../../models/components/platformagentruncreaterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | {<br/>"messages": [<br/>{<br/>"role": "USER",<br/>"content": [<br/>{<br/>"text": "What is our parental leave policy?",<br/>"type": "text"<br/>}<br/>]<br/>}<br/>]<br/>}        |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.PlatformAgentsCreateRunResponse](../../models/operations/platformagentscreaterunresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.PlatformUnauthorizedAgentToolsProblemError | 422                                               | application/problem+json                          |
| errors.PlatformProblemDetailError                 | 400, 401, 403, 404, 408, 409, 413, 429            | application/problem+json                          |
| errors.PlatformProblemDetailError                 | 500, 503                                          | application/problem+json                          |
| errors.GleanError                                 | 4XX, 5XX                                          | \*/\*                                             |

## getRun

Retrieve a persisted workflow execution owned by the authenticated user. The run must belong to the specified agent, and the user must still have access to that agent. Unknown runs, runs owned by another user, and mismatched agent/run identifiers return 404. Requires the agents.run scope. Executions without a persisted workflow record are not available through this endpoint.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-agents-get-run" method="get" path="/api/agents/{agent_id}/runs/{run_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.agents.getRun("{agent_id}", "{run_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { agentsGetRun } from "@gleanwork/api-client/funcs/agentsGetRun.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await agentsGetRun(glean, "{agent_id}", "{run_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsGetRun failed:", res.error);
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
  useAgentsGetRun,
  useAgentsGetRunSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAgentsGetRun,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAgentsGetRun,
  invalidateAllAgentsGetRun,
} from "@gleanwork/api-client/react-query/agentsGetRun.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the agent that owns the run.                                                                                                                                             | {agent_id}                                                                                                                                                                     |
| `runId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the durable run to retrieve.                                                                                                                                             | {run_id}                                                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformAgentRunResponse](../../models/components/platformagentrunresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PlatformProblemDetailError | 400, 401, 403, 404, 408, 429      | application/problem+json          |
| errors.PlatformProblemDetailError | 500, 503                          | application/problem+json          |
| errors.GleanError                 | 4XX, 5XX                          | \*/\*                             |

## cancelRun

Request cooperative cancellation of the durable agent run identified by `run_id` in the JSON body. Requires ownership, current agent access, and the agents.run scope. Sending a cancellation signal does not itself change an active run from RUNNING; poll GET run for the final state. Paused runs become CANCELLED without resuming execution. Repeated requests and requests for terminal runs return the current snapshot. Completion may win a race with cancellation. Completed tool side effects cannot be undone, and external work may continue if a tool does not support cancellation. Cancellation targets this run, not separate background-subagent executions. An active run without a cancellation registration returns 409. Cancellation signaling requires Redis. An interrupted active run can instead become FAILED through deadline cleanup; this does not verify that external tool work has stopped.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-agents-cancel-run" method="post" path="/api/agents/{agent_id}/cancellations" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.agents.cancelRun({
    run_id: "{run_id}",
  }, "{agent_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { agentsCancelRun } from "@gleanwork/api-client/funcs/agentsCancelRun.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await agentsCancelRun(glean, {
    run_id: "{run_id}",
  }, "{agent_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsCancelRun failed:", res.error);
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
  useAgentsCancelRunMutation
} from "@gleanwork/api-client/react-query/agentsCancelRun.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the agent that owns the run.                                                                                                                                             | {agent_id}                                                                                                                                                                     |
| `platformAgentRunCancellationRequest`                                                                                                                                          | [components.PlatformAgentRunCancellationRequest](../../models/components/platformagentruncancellationrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | {<br/>"run_id": "{run_id}"<br/>}                                                                                                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformAgentRunResponse](../../models/components/platformagentrunresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PlatformProblemDetailError      | 400, 401, 403, 404, 408, 409, 413, 429 | application/problem+json               |
| errors.PlatformProblemDetailError      | 500, 503                               | application/problem+json               |
| errors.GleanError                      | 4XX, 5XX                               | \*/\*                                  |

## respondToRun

Submit decisions for every pending tool approval in the paused run's current batch. The run is identified by `run_id` in the JSON body. Decisions apply only to the stored invocations and arguments; argument edits, authentication responses, and session-wide grants are not supported. The caller must own the run, still have agent access, and have the agents.run scope. Acceptance persists the decisions before resuming the same run and chat session. Identical accepted decisions return the current snapshot without another continuation. Conflicting, stale, incomplete, or non-pending decisions return 409. Cancellation registration failure returns 503 without accepting the decisions; retry the same approval batch. This retry guarantee does not cover an indeterminate database commit outcome. Go workflow approval resumes currently support one tool invocation and one approval response. Unsupported multi-tool or multi-decision Go resumes fail without executing tools. The resumed action must resolve to the tool identified by the stored approval request and paused checkpoint. Missing or inconsistent identity fails without executing tools. Execution continues after HTTP disconnects, but is not automatically resumed after a QE crash. Each accepted continuation starts a fresh 30-minute execution timeout and 40-minute cleanup deadline. Identical retries do not extend that deadline. Waiting for approval does not expire a run. The next GET marks an overdue active turn FAILED without replaying execution.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="platform-agents-create-run-responses" method="post" path="/api/agents/{agent_id}/responses" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const result = await glean.agents.respondToRun({
    run_id: "{run_id}",
    responses: [
      {
        interaction_id: "{interaction_id}",
        decision: "APPROVE",
      },
    ],
  }, "{agent_id}");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { agentsRespondToRun } from "@gleanwork/api-client/funcs/agentsRespondToRun.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await agentsRespondToRun(glean, {
    run_id: "{run_id}",
    responses: [
      {
        interaction_id: "{interaction_id}",
        decision: "APPROVE",
      },
    ],
  }, "{agent_id}");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsRespondToRun failed:", res.error);
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
  useAgentsRespondToRunMutation
} from "@gleanwork/api-client/react-query/agentsRespondToRun.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | ID of the agent that owns the run.                                                                                                                                             | {agent_id}                                                                                                                                                                     |
| `platformAgentRunResponsesRequest`                                                                                                                                             | [components.PlatformAgentRunResponsesRequest](../../models/components/platformagentrunresponsesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | {<br/>"run_id": "{run_id}",<br/>"responses": [<br/>{<br/>"interaction_id": "{interaction_id}",<br/>"decision": "APPROVE"<br/>}<br/>]<br/>}                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PlatformAgentRunResponse](../../models/components/platformagentrunresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PlatformProblemDetailError      | 400, 401, 403, 404, 408, 409, 413, 429 | application/problem+json               |
| errors.PlatformProblemDetailError      | 500, 503                               | application/problem+json               |
| errors.GleanError                      | 4XX, 5XX                               | \*/\*                                  |