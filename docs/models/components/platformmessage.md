# PlatformMessage

## Example Usage

```typescript
import { PlatformMessage } from "@gleanwork/api-client/models/components";

let value: PlatformMessage = {
  role: "USER",
  content: [
    {
      text: "<value>",
      type: "text",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `role`                                                                                       | [components.PlatformMessageRole](../../models/components/platformmessagerole.md)             | :heavy_check_mark:                                                                           | Role of the message author.                                                                  | USER                                                                                         |
| `content`                                                                                    | [components.PlatformMessageTextBlock](../../models/components/platformmessagetextblock.md)[] | :heavy_check_mark:                                                                           | Content blocks in the message.                                                               |                                                                                              |