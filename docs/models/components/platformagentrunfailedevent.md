# PlatformAgentRunFailedEvent

The terminal `run.failed` event, sent when a run fails after the stream starts.

## Example Usage

```typescript
import { PlatformAgentRunFailedEvent } from "@gleanwork/api-client/models/components";

let value: PlatformAgentRunFailedEvent = {
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

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                       | Event ID. IDs increase by one across the stream.                                                                                                                                                                         |
| `event`                                                                                                                                                                                                                  | *"run.failed"*                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                       | SSE event name. Always `run.failed` for this event.                                                                                                                                                                      |
| `data`                                                                                                                                                                                                                   | [components.PlatformAgentRunFailedEventData](../../models/components/platformagentrunfailedeventdata.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                       | Payload for the terminal Agents SSE event `run.failed`. Emitted after HTTP 200 when a run fails mid-stream. The event name is `run.failed` (not `error`) to avoid colliding with the browser EventSource `error` event.<br/> |