# PlatformChatTextFormat

Unconstrained plain-text assistant output.

## Example Usage

```typescript
import { PlatformChatTextFormat } from "@gleanwork/api-client/models/components";

let value: PlatformChatTextFormat = {
  type: "TEXT",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *"TEXT"*                     | :heavy_check_mark:           | Discriminator. Must be TEXT. |