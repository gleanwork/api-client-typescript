# PlatformChatFailedResponse

## Example Usage

```typescript
import { PlatformChatFailedResponse } from "@gleanwork/api-client/models/components";

let value: PlatformChatFailedResponse = {
  id: "<id>",
  object: "RESPONSE",
  created_at: new Date("2025-07-06T16:09:39.184Z"),
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
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same identifier is used for every event in one streamed response.<br/> |
| `object`                                                                                                                                                 | [components.PlatformChatFailedResponseObject](../../models/components/platformchatfailedresponseobject.md)                                               | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `createdAt`                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                            | :heavy_check_mark:                                                                                                                                       | RFC 3339 UTC timestamp when the response was created.                                                                                                    |
| `status`                                                                                                                                                 | [components.PlatformChatFailedResponseStatus](../../models/components/platformchatfailedresponsestatus.md)                                               | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `output`                                                                                                                                                 | [components.PlatformChatOutputMessage](../../models/components/platformchatoutputmessage.md)[]                                                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `store`                                                                                                                                                  | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `conversationId`                                                                                                                                         | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Present when the interaction was persisted.                                                                                                              |
| `requestId`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `error`                                                                                                                                                  | [components.PlatformChatResponseError](../../models/components/platformchatresponseerror.md)                                                             | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |