# DebugDocumentsRequest

Describes the request body of the /debug/{datasource}/documents API call.

## Example Usage

```typescript
import { DebugDocumentsRequest } from "@gleanwork/api-client/models/components";

let value: DebugDocumentsRequest = {
  debugDocuments: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `debugDocuments`                                                                     | [components.DebugDocumentRequest](../../models/components/debugdocumentrequest.md)[] | :heavy_check_mark:                                                                   | Documents to fetch debug information for                                             |