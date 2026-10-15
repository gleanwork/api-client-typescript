# PlatformDocumentsGetByUrlRequest

## Example Usage

```typescript
import { PlatformDocumentsGetByUrlRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformDocumentsGetByUrlRequest = {
  url: "{url}",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                               | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | URL of the document to retrieve.                                                                                                    | {url}                                                                                                                               |
| `include`                                                                                                                           | [components.PlatformDocumentInclude](../../models/components/platformdocumentinclude.md)[]                                          | :heavy_minus_sign:                                                                                                                  | Optional field groups to add to each found document. Each value only adds fields; it does not change which documents are returned.<br/> |                                                                                                                                     |