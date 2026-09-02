# PlatformChatStreamOutputTextDone

## Example Usage

```typescript
import { PlatformChatStreamOutputTextDone } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamOutputTextDone = {
  type: "RESPONSE_OUTPUT_TEXT_DONE",
  response_id: "<id>",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [components.PlatformChatStreamOutputTextDoneType](../../models/components/platformchatstreamoutputtextdonetype.md)                                       | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `responseId`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same identifier is used for every event in one streamed response.<br/> |
| `text`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |