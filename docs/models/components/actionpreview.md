# ActionPreview

Preview information for an action being executed.

## Example Usage

```typescript
import { ActionPreview } from "@gleanwork/api-client/models/components";

let value: ActionPreview = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `markdown`                                                   | *string*                                                     | :heavy_minus_sign:                                           | Markdown preview describing what the action will do.         |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | Short summary of what this specific tool invocation will do. |