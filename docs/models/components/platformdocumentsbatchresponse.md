# PlatformDocumentsBatchResponse

## Example Usage

```typescript
import { PlatformDocumentsBatchResponse } from "@gleanwork/api-client/models/components";

let value: PlatformDocumentsBatchResponse = {
  results: [
    {
      index: 870738,
      document: {
        document_id: "<id>",
        url: "https://untrue-ribbon.com/",
        title: "<value>",
        datasource: "<value>",
        document_type: "<value>",
        updated_at: new Date("2026-02-10T13:54:53.456Z"),
        created_at: new Date("2025-03-02T17:53:45.339Z"),
      },
    },
  ],
  warnings: [],
  request_id: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `results`                                                                                              | [components.PlatformDocumentsBatchResult](../../models/components/platformdocumentsbatchresult.md)[]   | :heavy_check_mark:                                                                                     | Found documents, correlated by index into document_specs.                                              |
| `warnings`                                                                                             | [components.PlatformDocumentsBatchWarning](../../models/components/platformdocumentsbatchwarning.md)[] | :heavy_check_mark:                                                                                     | Complete per-item failures. Empty when every spec was found.                                           |
| `requestId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Platform-generated request ID for support correlation.                                                 |