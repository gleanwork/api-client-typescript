# PlatformChatOutputMessage

## Example Usage

```typescript
import { PlatformChatOutputMessage } from "@gleanwork/api-client/models/components";

let value: PlatformChatOutputMessage = {
  type: "message",
  role: "assistant",
  content: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.PlatformChatOutputMessageType](../../models/components/platformchatoutputmessagetype.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `role`                                                                                                 | [components.PlatformChatOutputMessageRole](../../models/components/platformchatoutputmessagerole.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `content`                                                                                              | [components.PlatformChatOutputTextContent](../../models/components/platformchatoutputtextcontent.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |