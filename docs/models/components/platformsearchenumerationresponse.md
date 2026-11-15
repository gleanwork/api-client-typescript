# PlatformSearchEnumerationResponse

## Example Usage

```typescript
import { PlatformSearchEnumerationResponse } from "@gleanwork/api-client/models/components";

let value: PlatformSearchEnumerationResponse = {
  results: [
    {
      document_id: "doc_123",
      url: "https://docs.google.com/spreadsheets/d/abc",
      title: "Amoxicillin inventory",
      datasource: "gdrive",
      document_type: "spreadsheet",
      snippets: [
        "Amoxicillin 500mg inventory was last counted on...",
      ],
    },
  ],
  has_more: false,
  next_cursor: "<value>",
  request_id: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `results`                                                                                      | [components.PlatformDocumentReference](../../models/components/platformdocumentreference.md)[] | :heavy_check_mark:                                                                             | Document references at this cursor position.                                                   |
| `hasMore`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | Indicates whether additional pages of results are available.                                   |
| `nextCursor`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | Opaque token to pass as `cursor` in the next request. Null exactly when `has_more` is false.<br/> |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | Platform-generated request ID for support correlation.                                         |