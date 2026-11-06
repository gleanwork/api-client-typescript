# PlatformDocumentsBatchWarning

## Example Usage

```typescript
import { PlatformDocumentsBatchWarning } from "@gleanwork/api-client/models/components";

let value: PlatformDocumentsBatchWarning = {
  code: "<value>",
  message: "<value>",
  context: {
    index: 357280,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Warning code such as resource_not_found or invalid_parameter.                                                      |
| `message`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Human-readable warning.                                                                                            |
| `context`                                                                                                          | [components.PlatformDocumentsBatchWarningContext](../../models/components/platformdocumentsbatchwarningcontext.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |