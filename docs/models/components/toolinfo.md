# ToolInfo

## Example Usage

```typescript
import { ToolInfo } from "@gleanwork/api-client/models/components";

let value: ToolInfo = {
  metadata: {
    type: "RETRIEVAL",
    name: "<value>",
    displayName: "Wava17",
    displayDescription: "<value>",
    objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                         | [components.ToolMetadata](../../models/components/toolmetadata.md)                                 | :heavy_minus_sign:                                                                                 | The manifest for a tool that can be used to augment Glean Assistant.                               |
| `parameters`                                                                                       | Record<string, [components.WriteActionParameter](../../models/components/writeactionparameter.md)> | :heavy_minus_sign:                                                                                 | Parameters supported by the tool.                                                                  |