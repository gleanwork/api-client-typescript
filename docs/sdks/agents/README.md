# Agents

## Overview

### Available Operations

* [editAgent](#editagent) - Edit an agent

## editAgent

Creates a draft or publishes an [agent](https://developers.glean.com/agents/agents-api). Use `isDraft=true` to save a draft, or `isDraft=false` (or omit) to publish immediately. Only draft and publish modes are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="editAgent" method="post" path="/rest/api/v1/agents/{agent_id}" -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  await glean.agents.editAgent({}, "<id>");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { agentsEditAgent } from "@gleanwork/api-client/funcs/agentsEditAgent.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  apiToken: process.env["GLEAN_API_TOKEN"] ?? "",
});

async function run() {
  const res = await agentsEditAgent(glean, {}, "<id>");
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("agentsEditAgent failed:", res.error);
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
  useAgentsEditAgentMutation
} from "@gleanwork/api-client/react-query/agentsEditAgent.js";
```

### Parameters

| Parameter                                                                                                                                                                                           | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                                                                                                           | *string*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                  | The ID of the agent.                                                                                                                                                                                |
| `editWorkflowRequest`                                                                                                                                                                               | [components.EditWorkflowRequest](../../models/components/editworkflowrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `timezoneOffset`                                                                                                                                                                                    | *number*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC.                                                                                          |
| `options`                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                      |
| `options.retries`                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                    |

### Response

**Promise\<void\>**

### Errors

| Error Type           | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404                  | application/json     |
| errors.GleanError    | 4XX, 5XX             | \*/\*                |