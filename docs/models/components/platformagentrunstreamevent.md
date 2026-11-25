# PlatformAgentRunStreamEvent

One server-sent event from a streaming agent run. The SSE `event` field selects the payload. Successful runs emit `message` events. A terminal failure after the stream has started emits exactly one `run.failed` event, then the stream closes. This schema describes a parsed event, not the raw HTTP body. A typical stream is:
id: 1
event: message
data: {"messages":[{"role":"GLEAN_AI","content":[{"text":"Hello","type":"text"}]}]}

id: 2
event: run.failed
data: {"error":{"type":"https://developers.glean.com/errors/spend-limit-exceeded","title":"Spend Limit Exceeded","status":403,"detail":"You've reached the monthly limit set by your admin.","code":"spend_limit_exceeded","request_id":"req_123","documentation_url":"https://developers.glean.com/errors/spend-limit-exceeded"}}



## Supported Types

### `components.PlatformAgentRunMessageEvent`

```typescript
const value: components.PlatformAgentRunMessageEvent = {
  id: "1",
  event: "message",
  data: {
    messages: [
      {
        role: "GLEAN_AI",
        content: [
          {
            text: "Hello",
            type: "text",
          },
        ],
      },
    ],
  },
};
```

### `components.PlatformAgentRunFailedEvent`

```typescript
const value: components.PlatformAgentRunFailedEvent = {
  id: "1",
  event: "run.failed",
  data: {
    error: {
      type: "https://developers.glean.com/errors/invalid-cursor",
      title: "Invalid Pagination Cursor",
      status: 400,
      detail:
        "The provided cursor has expired. Start a new search to get a fresh cursor.\n",
      code: "invalid_cursor",
      documentation_url: "https://developers.glean.com/errors/invalid-cursor",
      request_id: "req_7f8a9b0c1d2e",
      errors: [
        {
          pointer: "/messages/0/role",
          detail: "Must be one of: USER, GLEAN_AI.",
          code: "invalid_cursor",
        },
      ],
    },
  },
};
```

