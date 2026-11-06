# PlatformDocumentsGetRequest

## Example Usage

```typescript
import { PlatformDocumentsGetRequest } from "@gleanwork/api-client/models/operations";

let value: PlatformDocumentsGetRequest = {
  document_id: "{document_id}",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                                                        | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Indexed Glean store ID. For a Gmail or Outlook citation with a caller-specific ID, try get document by URL instead.<br/>            | {document_id}                                                                                                                       |
| `include`                                                                                                                           | [components.PlatformDocumentInclude](../../models/components/platformdocumentinclude.md)[]                                          | :heavy_minus_sign:                                                                                                                  | Optional field groups to add to each found document. Each value only adds fields; it does not change which documents are returned.<br/> |                                                                                                                                     |