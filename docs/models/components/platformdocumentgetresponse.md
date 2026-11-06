# PlatformDocumentGetResponse

## Example Usage

```typescript
import { PlatformDocumentGetResponse } from "@gleanwork/api-client/models/components";

let value: PlatformDocumentGetResponse = {
  document: {
    document_id: "<id>",
    url: "https://untrue-ribbon.com/",
    title: "<value>",
    datasource: "<value>",
    document_type: "<value>",
    updated_at: new Date("2026-02-10T13:54:53.456Z"),
    created_at: new Date("2025-03-02T17:53:45.339Z"),
  },
  request_id: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `document`                                                                 | [components.PlatformDocument](../../models/components/platformdocument.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `requestId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Platform-generated request ID for support correlation.                     |