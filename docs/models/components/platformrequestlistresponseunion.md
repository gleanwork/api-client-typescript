# PlatformRequestListResponseUnion

Bounded page of authorized requests with opaque continuation state.


## Supported Types

### `components.PlatformRequestListResponse1`

```typescript
const value: components.PlatformRequestListResponse1 = {
  has_more: true,
  next_cursor: "<value>",
  results: [],
  request_id: "<id>",
};
```

### `components.PlatformRequestListResponse2`

```typescript
const value: components.PlatformRequestListResponse2 = {
  has_more: false,
  results: [
    {
      request_id: "<id>",
      entity_type: "USER",
      entity_id: "<id>",
      client_id: "<id>",
      requester_user_id: "<id>",
      period: "<value>",
      status: "PENDING",
      created_at: new Date("2024-04-28T13:32:00.825Z"),
    },
  ],
  request_id: "<id>",
};
```

