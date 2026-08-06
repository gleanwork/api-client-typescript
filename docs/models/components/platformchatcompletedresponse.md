# PlatformChatCompletedResponse

## Example Usage

```typescript
import { PlatformChatCompletedResponse } from "@gleanwork/api-client/models/components";

let value: PlatformChatCompletedResponse = {
  id: "<id>",
  object: "response",
  created_at: new Date("2024-01-21T06:04:05.713Z"),
  status: "completed",
  output: [
    {
      type: "message",
      role: "assistant",
      content: [],
    },
  ],
  store: true,
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same identifier is used for every event in one streamed response.<br/> |
| `object`                                                                                                                                                 | [components.ObjectT](../../models/components/objectt.md)                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `createdAt`                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                            | :heavy_check_mark:                                                                                                                                       | RFC 3339 UTC timestamp when the response was created.                                                                                                    |
| `status`                                                                                                                                                 | [components.PlatformChatCompletedResponseStatus](../../models/components/platformchatcompletedresponsestatus.md)                                         | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `output`                                                                                                                                                 | [components.PlatformChatOutputMessage](../../models/components/platformchatoutputmessage.md)[]                                                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `store`                                                                                                                                                  | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `conversationId`                                                                                                                                         | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | Present when the interaction was persisted.                                                                                                              |
| `requestId`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |