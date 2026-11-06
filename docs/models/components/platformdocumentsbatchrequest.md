# PlatformDocumentsBatchRequest

## Example Usage

```typescript
import { PlatformDocumentsBatchRequest } from "@gleanwork/api-client/models/components";

let value: PlatformDocumentsBatchRequest = {
  document_specs: [
    {
      document_id: "{document_id}",
    },
    {
      url: "https://company.atlassian.net/wiki/spaces/ENG/pages/12345",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentSpecs`                                                                                                                                                                          | *components.PlatformDocumentsBatchRequestDocumentSpec*[]                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | Selectors to retrieve. Each item is exactly one of document_id or url.                                                                                                                   |
| `include`                                                                                                                                                                                | [components.PlatformDocumentInclude](../../models/components/platformdocumentinclude.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                                                       | Optional field groups applied to every document in results. CONTENT adds content to every found document. Each value only adds fields; it does not change which documents are returned.<br/> |