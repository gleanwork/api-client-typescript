# PlatformDocumentContent

## Example Usage

```typescript
import { PlatformDocumentContent } from "@gleanwork/api-client/models/components";

let value: PlatformDocumentContent = {
  full_text_list: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `fullTextList`                                                                                                         | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | Extracted plain-text segments. Empty when Glean has no extracted text for the document after a complete content read.<br/> |