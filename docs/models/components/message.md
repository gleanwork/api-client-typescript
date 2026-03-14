# Message

## Example Usage

```typescript
import { Message } from "@gleanwork/api-client/models/components";

let value: Message = {
  role: "USER",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `role`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The role of the message.                                                     | USER                                                                         |
| `content`                                                                    | [components.MessageTextBlock](../../models/components/messagetextblock.md)[] | :heavy_minus_sign:                                                           | The content of the message.                                                  |                                                                              |