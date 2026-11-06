# PlatformDocumentsBatchWarningContext

## Example Usage

```typescript
import { PlatformDocumentsBatchWarningContext } from "@gleanwork/api-client/models/components";

let value: PlatformDocumentsBatchWarningContext = {
  index: 297798,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `index`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | Zero-based index into document_specs.                                            |
| `documentId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Submitted document_id when the spec was an ID.                                   |
| `url`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | Submitted URL when the spec was a URL. Empty when the caller sent an empty url.<br/> |