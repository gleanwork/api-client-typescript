# DebugDocumentRequest

Describes the request body of the /debug/{datasource}/document API call.

## Example Usage

```typescript
import { DebugDocumentRequest } from "@gleanwork/api-client/models/components";

let value: DebugDocumentRequest = {
  objectType: "Article",
  docId: "art123",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `objectType`                                                   | *string*                                                       | :heavy_check_mark:                                             | Object type of the document to get the status for.             | Article                                                        |
| `docId`                                                        | *string*                                                       | :heavy_check_mark:                                             | Glean Document ID within the datasource to get the status for. | art123                                                         |