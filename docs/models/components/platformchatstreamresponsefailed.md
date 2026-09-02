# PlatformChatStreamResponseFailed

## Example Usage

```typescript
import { PlatformChatStreamResponseFailed } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamResponseFailed = {
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
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [components.PlatformChatStreamResponseFailedType](../../models/components/platformchatstreamresponsefailedtype.md)                                       | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `responseId`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same identifier is used for every event in one streamed response.<br/> |
| `response`                                                                                                                                               | [components.PlatformChatFailedResponse](../../models/components/platformchatfailedresponse.md)                                                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |