# PlatformChatStreamResponseCompleted

## Example Usage

```typescript
import { PlatformChatStreamResponseCompleted } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamResponseCompleted = {
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
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [components.PlatformChatStreamResponseCompletedType](../../models/components/platformchatstreamresponsecompletedtype.md)                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `responseId`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same identifier is used for every event in one streamed response.<br/> |
| `response`                                                                                                                                               | [components.PlatformChatCompletedResponse](../../models/components/platformchatcompletedresponse.md)                                                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |