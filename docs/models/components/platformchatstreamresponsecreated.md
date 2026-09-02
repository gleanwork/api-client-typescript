# PlatformChatStreamResponseCreated

## Example Usage

```typescript
import { PlatformChatStreamResponseCreated } from "@gleanwork/api-client/models/components";

let value: PlatformChatStreamResponseCreated = {
  type: "RESPONSE_CREATED",
  response_id: "<id>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | [components.PlatformChatStreamResponseCreatedType](../../models/components/platformchatstreamresponsecreatedtype.md)                                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `responseId`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same identifier is used for every event in one streamed response.<br/> |