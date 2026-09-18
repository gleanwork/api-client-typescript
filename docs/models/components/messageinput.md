# MessageInput

## Example Usage

```typescript
import { MessageInput } from "@gleanwork/api-client/models/components";

let value: MessageInput = {
  role: "USER",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `role`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | The role of the message.                                                               | USER                                                                                   |
| `content`                                                                              | [components.MessageTextBlockInput](../../models/components/messagetextblockinput.md)[] | :heavy_minus_sign:                                                                     | The content of the message.                                                            |                                                                                        |