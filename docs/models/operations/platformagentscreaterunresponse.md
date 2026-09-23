# PlatformAgentsCreateRunResponse


## Supported Types

### `components.PlatformAgentRunWaitResponse`

```typescript
const value: components.PlatformAgentRunWaitResponse = {
  run: {
    agent_id: "<id>",
    messages: [
      {
        role: "USER",
        content: [],
      },
    ],
    status: "success",
  },
  messages: [
    {
      role: "USER",
      content: [],
    },
  ],
  request_id: "<id>",
};
```

### `string`

```typescript
const value: string = "<value>";
```

### `components.PlatformAgentRunResponse`

```typescript
const value: components.PlatformAgentRunResponse = {
  run: {
    run_id: "<id>",
    agent_id: "<id>",
    state: "RUNNING",
    created_at: new Date("2025-07-02T11:33:51.838Z"),
    updated_at: new Date("2024-12-21T16:46:41.143Z"),
    pending_interactions: [],
  },
  request_id: "<id>",
};
```

