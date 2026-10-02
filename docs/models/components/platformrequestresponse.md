# PlatformRequestResponse

Single authorized request with the enclosing response's trace identifier.

## Example Usage

```typescript
import { PlatformRequestResponse } from "@gleanwork/api-client/models/components";

let value: PlatformRequestResponse = {
  request: {
    request_id: "<id>",
    entity_type: "AGENT",
    entity_id: "<id>",
    client_id: "<id>",
    requester_user_id: "<id>",
    period: "<value>",
    status: "DENIED",
    created_at: new Date("2026-02-20T22:36:21.195Z"),
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [components.PlatformLimitIncreaseRequest](../../models/components/platformlimitincreaserequest.md) | :heavy_check_mark:                                                                                 | Stored user or agent request, with optional resolution fields when available.                      |
| `requestId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | Trace identifier, distinct from the resource ID.                                                   |