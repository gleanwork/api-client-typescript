# PlatformMessageInput

## Example Usage

```typescript
import { PlatformMessageInput } from "@gleanwork/api-client/models/components";

let value: PlatformMessageInput = {
  role: "USER",
  content: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                 | [components.PlatformMessageRole](../../models/components/platformmessagerole.md)                       | :heavy_check_mark:                                                                                     | Role of the message author.                                                                            | USER                                                                                                   |
| `content`                                                                                              | [components.PlatformMessageTextBlockInput](../../models/components/platformmessagetextblockinput.md)[] | :heavy_check_mark:                                                                                     | Content blocks in the message.                                                                         |                                                                                                        |