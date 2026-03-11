# GetDocumentCountRequest

Describes the request body of the /getdocumentcount API call

## Example Usage

```typescript
import { GetDocumentCountRequest } from "@gleanwork/api-client/models/components";

let value: GetDocumentCountRequest = {
  datasource: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `datasource`                                        | *string*                                            | :heavy_check_mark:                                  | Datasource name for which document count is needed. |