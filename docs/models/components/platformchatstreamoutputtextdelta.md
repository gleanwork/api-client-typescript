# PlatformChatStreamOutputTextDelta

## Example Usage

```typescript
import { PlatformChatStreamOutputTextDelta } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamOutputTextDelta = {
  type: "RESPONSE_OUTPUT_TEXT_DELTA",
  response_id: "<id>",
  delta: "<value>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [components.PlatformChatStreamOutputTextDeltaType](../../models/components/platformchatstreamoutputtextdeltatype.md)                                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `responseId`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same identifier is used for every event in one streamed response.<br/> |
| `delta`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |