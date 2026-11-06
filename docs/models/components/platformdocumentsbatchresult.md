# PlatformDocumentsBatchResult

## Example Usage

```typescript
import { PlatformDocumentsBatchResult } from "@gleanwork/api-client/models/components";

let value: PlatformDocumentsBatchResult = {
  index: 785584,
  document: {
    document_id: "<id>",
    url: "https://untrue-ribbon.com/",
    title: "<value>",
    datasource: "<value>",
    document_type: "<value>",
    updated_at: new Date("2026-02-10T13:54:53.456Z"),
    created_at: new Date("2025-03-02T17:53:45.339Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `index`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | Zero-based index into document_specs.                                      |
| `document`                                                                 | [components.PlatformDocument](../../models/components/platformdocument.md) | :heavy_check_mark:                                                         | N/A                                                                        |