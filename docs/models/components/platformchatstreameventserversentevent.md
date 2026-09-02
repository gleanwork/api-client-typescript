# PlatformChatStreamEventServerSentEvent

A typed server-sent event.


## Supported Types

### `components.PlatformChatStreamResponseCreatedServerSentEvent`

```typescript
const value: components.PlatformChatStreamResponseCreatedServerSentEvent = {
  event: "RESPONSE_CREATED",
  data: {
    type: "RESPONSE_CREATED",
    response_id: "<id>",
  },
};
```

### `components.PlatformChatStreamProgressServerSentEvent`

```typescript
const value: components.PlatformChatStreamProgressServerSentEvent = {
  event: "RESPONSE_PROGRESS",
  data: {
    type: "RESPONSE_PROGRESS",
    response_id: "<id>",
    text: "<value>",
  },
};
```

### `components.PlatformChatStreamOutputTextDeltaServerSentEvent`

```typescript
const value: components.PlatformChatStreamOutputTextDeltaServerSentEvent = {
  event: "RESPONSE_OUTPUT_TEXT_DELTA",
  data: {
    type: "RESPONSE_OUTPUT_TEXT_DELTA",
    response_id: "<id>",
    delta: "<value>",
  },
};
```

### `components.PlatformChatStreamOutputTextDoneServerSentEvent`

```typescript
const value: components.PlatformChatStreamOutputTextDoneServerSentEvent = {
  event: "RESPONSE_OUTPUT_TEXT_DONE",
  data: {
    type: "RESPONSE_OUTPUT_TEXT_DONE",
    response_id: "<id>",
    text: "<value>",
  },
};
```

### `components.PlatformChatStreamResponseCompletedServerSentEvent`

```typescript
const value: components.PlatformChatStreamResponseCompletedServerSentEvent = {
  event: "RESPONSE_COMPLETED",
  data: {
    type: "RESPONSE_COMPLETED",
    response_id: "<id>",
    response: {
      id: "<id>",
      object: "RESPONSE",
      created_at: new Date("2025-07-01T11:34:16.989Z"),
      status: "COMPLETED",
      output: [],
      store: true,
      request_id: "<id>",
    },
  },
};
```

### `components.PlatformChatStreamResponseFailedServerSentEvent`

```typescript
const value: components.PlatformChatStreamResponseFailedServerSentEvent = {
  event: "RESPONSE_FAILED",
  data: {
    type: "RESPONSE_FAILED",
    response_id: "<id>",
    response: {
      id: "<id>",
      object: "RESPONSE",
      created_at: new Date("2026-04-24T20:42:24.861Z"),
      status: "FAILED",
      output: [
        {
          type: "MESSAGE",
          role: "ASSISTANT",
          content: [],
        },
      ],
      store: true,
      request_id: "<id>",
      error: {
        code: "spend_limit_exceeded",
        message: "<value>",
      },
    },
  },
};
```

