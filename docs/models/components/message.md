# Message

## Example Usage

```typescript
import { Message } from "@gleanwork/api-client/models/components";

let value: Message = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `role`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The role of the message.                                                     |
| `content`                                                                    | [components.MessageTextBlock](../../models/components/messagetextblock.md)[] | :heavy_minus_sign:                                                           | The content of the message.                                                  |